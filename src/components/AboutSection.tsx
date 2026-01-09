import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            Our Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Because 2nd Class is{" "}
            <span className="text-gradient-gold">Too Expensive</span>
          </h2>
          
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              First Class Media is dedicated to self-publishing authentic culture and knowledge. 
              We believe everyone deserves access to stories and information that represent 
              their communities and experiences.
            </p>
            <p>
              From Bay Area slang dictionaries to empowering coloring books, our catalog 
              celebrates diversity, creativity, and the richness of culture that often goes 
              underrepresented in mainstream publishing.
            </p>
          </div>
          
          {/* Decorative element */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 h-1 w-24 mx-auto bg-gradient-gold rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
