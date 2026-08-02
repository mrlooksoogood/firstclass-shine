import { motion } from "framer-motion";
import BookCard from "./BookCard";
import grouchosMottosCover from "@/assets/grouchos-mottos-cover-v2.jpg";
import cryptoGameCover from "@/assets/crypto-game-cover-v2.jpg";
import mostPeopleCover from "@/assets/most-people-cover.jpg";
import blackSuperheroesSeries from "@/assets/black-superheroes-series.jpg";
import hhdSeriesCover from "@/assets/hhd-series.jpg";
import heckaCover from "@/assets/hecka-to-hyphy-cover.jpg";

const books = [
  {
    title: "From Hecka to Hyphy",
    subtitle: "Bay Area Slang Dictionary (Family Edition)",
    image: heckaCover,
    amazonUrl: "https://www.amazon.com/dp/B0GMY94LZ4",
  },
  {
    title: "Black Superheroes Coloring Series",
    subtitle: "Multi-Volume Coloring Series",
    image: blackSuperheroesSeries,
    amazonUrl: "https://www.amazon.com/dp/B0C9J1HMJ8?binding=paperback",
  },
  {
    title: "Hip-Hop Dinosaurs",
    subtitle: "Multi-Volume Coloring Series",
    image: hhdSeriesCover,
    amazonUrl: "https://www.amazon.com/dp/B0H9NGMQP7?binding=paperback",
  },
  {
    title: "Most People",
    subtitle: "A Fun Little Book About What Not to Do",
    image: mostPeopleCover,
    comingSoon: true,
  },
  {
    title: "Groucho's Mottos",
    subtitle: "by Eryc Fields",
    image: grouchosMottosCover,
    comingSoon: true,
  },
  {
    title: "Crypto G.A.M.E.",
    subtitle: "Digital Wealth Revolution",
    image: cryptoGameCover,
    comingSoon: true,
  },
];

const BooksSection = () => {
  return (
    <section id="books" className="py-24 bg-muted relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            Our Catalog
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Titles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of books celebrating culture, knowledge, and creativity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {books.map((book, index) => (
            <BookCard
              key={`${book.title}-${index}`}
              {...book}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default BooksSection;
