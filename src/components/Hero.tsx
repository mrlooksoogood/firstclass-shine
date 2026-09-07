import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { YOUTUBE_URL } from "@/config/links";

const HERO_BOOKS = [
  {
    key: "hella",
    kicker: "New Release",
    title: "From Hella to Hyphy",
    subtitle: "Bay Area Slang Dictionary",
    blurb:
      "Your comprehensive guide to authentic Bay Area language and culture — the slang that defines the Bay.",
    amazonUrl: "https://www.amazon.com/dp/B0GG54919P",
    secondary: { label: "Explore the book →", href: "/hella-to-hyphy/" },
  },
  {
    key: "origins",
    kicker: "New Release",
    title: "Origins of Oakland",
    subtitle: "Volume One",
    blurb:
      "The stories that built The Town, told with the reverence they deserve. A premium hardcover from Firstclass Media.",
    amazonUrl: "https://www.amazon.com/dp/B0HHYYYRJZ",
    secondary: { label: "Watch the series on YouTube →", href: YOUTUBE_URL },
  },
] as const;

/* Video timeline (built by _hero-video/build_hero.py; HOLD=6.4 CLOSE=1.8 XF=1.6):
   loop T = 9.6s. The video uses a soft LEFT->RIGHT WIPE (smoothright): the book is wiped,
   not dissolved. Each transition sweeps a single edge across the frame over XF seconds; the
   new book fills LEFT of the edge, the old book stays RIGHT of it. The copy below is wiped
   with the SAME moving edge (driven off video.currentTime), so book and text are one motion. */
const LOOP_T = 9.6;
const TR = [
  { start: 3.0, end: 4.6, from: 0, to: 1 }, // FHTH -> Origins
  { start: 7.8, end: 9.4, from: 1, to: 0 }, // Origins -> FHTH
];

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);

/** Per-book copy state at video time t, matching the video's wipe edge.
 *  edge P in [0,1] = fraction of the frame the wipe has crossed (linear, like the video).
 *  New book: visible LEFT of edge. Old book: visible RIGHT of edge. */
function layerState(bookIndex: number, t: number) {
  // steady active book: origins between the two transitions, else hella
  const active = t >= TR[0].end && t < TR[1].end ? 1 : 0;
  let show = bookIndex === active; // steady visibility
  let clip = show ? "inset(0 0 0 0)" : "inset(0 100% 0 0)";
  let opacity = show ? 1 : 0;

  for (const tr of TR) {
    if (t >= tr.start && t < tr.end) {
      const P = clamp01((t - tr.start) / (tr.end - tr.start));
      if (bookIndex === tr.to) {
        opacity = 1;
        clip = `inset(0 ${((1 - P) * 100).toFixed(2)}% 0 0)`; // reveal from the left
      } else if (bookIndex === tr.from) {
        opacity = 1;
        clip = `inset(0 0 0 ${(P * 100).toFixed(2)}%)`; // erase from the left
      } else {
        opacity = 0;
      }
    }
  }
  return { opacity, clip };
}

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const layerRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const t = (videoRef.current?.currentTime ?? 0) % LOOP_T;
      for (let i = 0; i < HERO_BOOKS.length; i++) {
        const layer = layerRefs[i].current;
        if (!layer) continue;
        const { opacity, clip } = layerState(i, t);
        layer.style.opacity = String(opacity);
        layer.style.clipPath = clip;
        layer.style.pointerEvents = opacity > 0.9 && clip === "inset(0 0 0 0)" ? "auto" : "none";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Full-bleed hero video */}
      <video
        ref={videoRef}
        src="/fcm-hero.mp4?v=9"
        poster="/fcm-hero-poster.jpg?v=9"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Firstclass Media flagship titles — From Hella to Hyphy and Origins of Oakland"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Scrims — lighter now (no kicker to protect), so more of the books' bottoms show. */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/65" />
      <div className="absolute bottom-0 left-0 right-0 h-3/5 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

      {/* Copy anchored low. Each book's copy is a FULL-FRAME-WIDTH layer so its clip-path
          wipe edge sits at the same screen-x as the video's book wipe edge. The inner
          .container keeps the text centered; the clip is applied to the full-width layer. */}
      <div className="relative mt-auto min-h-[46vh]">
        {/* soft dark focus behind the copy for legibility */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 top-0 [background:radial-gradient(110%_60%_at_50%_100%,rgba(0,0,0,0.55),rgba(0,0,0,0)_68%)]"
        />
        {HERO_BOOKS.map((book, i) => (
          <div
            key={book.key}
            ref={layerRefs[i]}
            aria-hidden={i === 1}
            style={{ opacity: i === 0 ? 1 : 0 }}
            className={`${i === 0 ? "relative" : "absolute inset-0"} flex items-end`}
          >
            <div className="container mx-auto px-6 pb-16 md:pb-24 text-center">
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 leading-tight [text-shadow:0_2px_24px_rgb(0_0_0/0.8)]">
                {book.title}
              </h2>

              <p className="text-gradient-gold text-xl md:text-2xl font-display font-semibold mb-6">
                {book.subtitle}
              </p>

              <p className="text-white/75 text-lg leading-relaxed mb-9 max-w-xl mx-auto">
                {book.blurb}
              </p>

              <div className="flex flex-wrap items-center gap-5 justify-center">
                <Button variant="gold" size="lg" className="group" asChild>
                  <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer">
                    Buy on Amazon
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                {book.secondary && (
                  <a
                    href={book.secondary.href}
                    target={book.secondary.href.startsWith("http") ? "_blank" : undefined}
                    rel={book.secondary.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-white/80 hover:text-primary font-semibold transition-colors underline-offset-4 hover:underline"
                  >
                    {book.secondary.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default Hero;
