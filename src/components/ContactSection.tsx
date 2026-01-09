import { motion } from "framer-motion";
import { Mail, Instagram, Facebook } from "lucide-react";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/firstclassmediagroup" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/firstclassmediagroup" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
            Connect With Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground mb-8">
            Get In Touch
          </h2>
          
          {/* Email */}
          <motion.a
            href="mailto:thefirstclassmediagroup@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors text-lg mb-12 group"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>thefirstclassmediagroup@gmail.com</span>
          </motion.a>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-secondary-foreground/70 group-hover:text-primary-foreground group-hover:scale-110 transition-all" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
