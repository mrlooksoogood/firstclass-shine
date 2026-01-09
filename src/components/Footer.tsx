import { motion } from "framer-motion";
import fcmLogo from "@/assets/fcm-logo.png";

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
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src={fcmLogo} 
              alt="FIRSTCLASS MEDIA" 
              className="h-14 w-auto invert"
            />
            <span className="font-display text-lg font-bold text-secondary-foreground">
              FIRSTCLASS <span className="text-primary">MEDIA</span>
            </span>
          </div>
          
          <p className="text-secondary-foreground/60 text-sm mb-2">
            © {currentYear} FIRSTCLASS MEDIA. All rights reserved.
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
