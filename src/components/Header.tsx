import { motion } from "framer-motion";
import fcmLogo from "@/assets/fcm-logo.png";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-primary/20"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img 
            src={fcmLogo} 
            alt="FIRSTCLASS MEDIA" 
            className="h-10 w-auto invert"
          />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#books" className="text-secondary-foreground/80 hover:text-primary transition-colors font-medium">
            Books
          </a>
          <a href="#about" className="text-secondary-foreground/80 hover:text-primary transition-colors font-medium">
            About
          </a>
          <a href="#contact" className="text-secondary-foreground/80 hover:text-primary transition-colors font-medium">
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
