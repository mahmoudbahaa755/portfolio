import { Github, Linkedin, Phone, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-secondary via-secondary/80 to-secondary py-8 md:py-12 border-t mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm sm:text-base text-muted-foreground mb-2">
              © {currentYear} Mahmoud Bahaa. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground/70">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="text-sm text-muted-foreground">
              Let&apos;s connect:
            </span>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://github.com/mahmoudbahaa755"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-card hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110 glow-effect"
                aria-label="GitHub Profile"
              >
                <Github size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ma7moud-bahaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-card hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110 glow-effect"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="tel:+201010623847"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-card hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110 glow-effect"
                aria-label="Phone Number"
              >
                <Phone size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
