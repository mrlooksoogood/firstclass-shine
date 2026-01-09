import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-charcoal border-t border-primary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-sm">F</span>
            </div>
            <span className="font-display text-lg font-bold text-secondary-foreground">
              FIRSTCLASS <span className="text-primary">MEDIA</span>
            </span>
          </div>
          
          <p className="text-secondary-foreground/60 text-sm mb-2">
            © {currentYear} First Class Media. All rights reserved.
          </p>
          <p className="text-primary/80 text-sm font-medium">
            Publishing authentic culture and knowledge.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
