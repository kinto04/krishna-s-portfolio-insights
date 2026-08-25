const Footer = () => {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-serif text-base text-foreground mb-1">
            Designing human experiences from New York<span className="text-primary">.</span>
          </p>
          <p className="label-eyebrow">
            © {new Date().getFullYear()} Krishna Suresh
          </p>

        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/krishna-suresh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground t-base"
          >
            LinkedIn
          </a>
          <a
            href="mailto:work.krishnasuresh@gmail.com"
            className="text-sm text-muted-foreground hover:text-foreground t-base"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
