import { motion } from "framer-motion";
import BookCard from "./BookCard";
import grouchosMottosCover from "@/assets/grouchos-mottos-cover.jpg";
import cryptoGameCover from "@/assets/crypto-game-cover.jpg";
import superheroesVol1Cover from "@/assets/superheroes-vol1-cover.jpg";
import superheroesVol2Cover from "@/assets/superheroes-vol2-cover.jpg";

const books = [
  {
    title: "Groucho's Mottos",
    subtitle: "by Eryc Fields",
    image: grouchosMottosCover,
    amazonUrl: "https://amazon.com",
  },
  {
    title: "Crypto G.A.M.E.",
    subtitle: "Digital Wealth Revolution",
    image: cryptoGameCover,
    amazonUrl: "https://amazon.com",
  },
  {
    title: "Black Superheroes Coloring Book",
    subtitle: "Neighborhood Heroes",
    image: superheroesVol1Cover,
    amazonUrl: "https://amazon.com",
  },
  {
    title: "Black Superheroes Vol. 2",
    subtitle: "More Heroes, More Inspiration",
    image: superheroesVol2Cover,
    amazonUrl: "https://amazon.com",
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
            Other Titles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of books celebrating culture, knowledge, and creativity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {books.map((book, index) => (
            <BookCard
              key={book.title}
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
