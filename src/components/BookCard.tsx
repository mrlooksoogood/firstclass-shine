import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface BookCardProps {
  title: string;
  subtitle: string;
  image: string;
  amazonUrl: string;
  index: number;
}

const BookCard = ({ title, subtitle, image, amazonUrl, index }: BookCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 border border-border hover:border-primary/30">
        {/* Image container */}
        <div className="relative overflow-hidden aspect-[3/4]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Hover overlay button */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <Button
              variant="gold"
              className="w-full"
              asChild
            >
              <a href={amazonUrl} target="_blank" rel="noopener noreferrer">
                Buy Now
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 text-center">
          <h3 className="font-display text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

export default BookCard;
