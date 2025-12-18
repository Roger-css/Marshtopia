export const Footer = () => {
  return (
    <footer
      id="about"
      className="bg-background-dark text-stone-400 py-12 px-6 border-t border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-display font-bold text-2xl text-white">
            marshtopia
          </span>
          <p className="text-sm mt-2">
            Preserving the past, protecting the future.
          </p>
        </div>
        <div className="flex space-x-6 text-sm">
          <a
            className="hover:text-primary transition-colors cursor-pointer"
            href="#"
          >
            Privacy
          </a>
          <a
            className="hover:text-primary transition-colors cursor-pointer"
            href="#"
          >
            Contact
          </a>
          <a
            className="hover:text-primary transition-colors cursor-pointer"
            href="#"
          >
            Credits
          </a>
        </div>
      </div>
    </footer>
  );
};
