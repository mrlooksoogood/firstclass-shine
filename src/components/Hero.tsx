import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import hellaToHyphyBook from "@/assets/hella-to-hyphy-book.png";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden pt-16 lg:pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-4 lg:py-20 relative">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center lg:min-h-[80vh]">
          {/* Book Image */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end order-2 lg:order-1 mt-5 lg:mt-0"
          >
            <div className="relative">
              {/* Book shadow/reflection */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/30 blur-xl rounded-full" />
              
              <motion.img
                src={hellaToHyphyBook}
                alt="From Hella to Hyphy - Bay Area Slang Dictionary"
                className="w-48 sm:w-72 md:w-96 lg:w-[28rem] relative z-10 [filter:drop-shadow(0_20px_28px_rgb(0_0_0/0.28))]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-semibold tracking-widest uppercase text-sm mb-4"
            >
              Now Available
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-3 lg:mb-4 leading-tight"
            >
              From Hella to Hyphy
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gradient-gold text-xl md:text-2xl font-display font-semibold mb-4 lg:mb-6"
            >
              Bay Area Slang Dictionary
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-secondary-foreground/70 text-sm lg:text-lg leading-relaxed mb-5 lg:mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Your comprehensive guide to authentic Bay Area language and culture. 
              From the streets of Oakland to the heart of San Francisco, discover the 
              slang that defines the Bay.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-5 justify-center lg:justify-start"
            >
              <Button
                variant="gold"
                size="lg"
                className="group"
                asChild
              >
                <a href="https://www.amazon.com/dp/B0GG54919P" target="_blank" rel="noopener noreferrer">
                  Buy on Amazon
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <a
                href="/hella-to-hyphy/"
                className="text-secondary-foreground/80 hover:text-primary font-semibold transition-colors underline-offset-4 hover:underline"
              >
                Explore the book →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default Hero;
