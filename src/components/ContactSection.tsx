import { motion } from "framer-motion";
import { Mail, Instagram, Facebook } from "lucide-react";

// lucide-react has no TikTok brand icon, so provide one inline (inherits currentColor).
const TikTok = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.78.12V9.79a5.7 5.7 0 0 0-.78-.05 5.69 5.69 0 1 0 5.69 5.69V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-3.25-1.48z" />
  </svg>
);

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/firstclassmediagroup" },
  { icon: TikTok, label: "TikTok", href: "https://tiktok.com/@firstclassmediagroup" },
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
