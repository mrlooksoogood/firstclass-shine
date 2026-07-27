import { motion } from "framer-motion";
import fcmMark from "@/assets/fcm-mark.png";

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
          <div className="flex flex-col items-center mb-4">
            <img
              src={fcmMark}
              alt="FIRSTCLASS MEDIA"
              className="h-20 w-auto mb-3"
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
