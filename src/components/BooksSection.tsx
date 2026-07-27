import { motion } from "framer-motion";
import BookCard from "./BookCard";
import grouchosMottosCover from "@/assets/grouchos-mottos-cover.jpg";
import cryptoGameCover from "@/assets/crypto-game-cover-v2.jpg";
import mostPeopleCover from "@/assets/most-people-cover.jpg";
import superheroesVol1Cover from "@/assets/superheroes-vol1-cover.jpg";
import superheroesVol2Cover from "@/assets/superheroes-vol2-cover.jpg";
import hhdSeriesCover from "@/assets/hhd-series.jpg";
import blackSuperheroesNeighborhood from "@/assets/black-superheroes-neighborhood.jpg";

const books = [
  {
    title: "Black Superheroes Coloring Book",
    subtitle: "Vol. 1",
    image: superheroesVol1Cover,
    amazonUrl: "https://www.amazon.com/dp/B0C9G7RP4K",
  },
  {
    title: "Black Superheroes Coloring Book",
    subtitle: "Vol. 2",
    image: superheroesVol2Cover,
    amazonUrl: "https://www.amazon.com/dp/B0C9SL9Q5R",
  },
  {
    title: "Black Superheroes Coloring Book",
    subtitle: "Neighborhood Heroes Edition",
    image: blackSuperheroesNeighborhood,
    comingSoon: true,
  },
  {
    title: "Hip-Hop Dinosaurs",
    subtitle: "5-Volume Coloring Series",
    image: hhdSeriesCover,
    amazonUrl: "https://www.amazon.com/dp/B0DGCXRR95",
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
