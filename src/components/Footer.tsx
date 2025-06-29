const Footer = () => {
  return (
    <footer className="bg-dark-navy py-8 border-t border-shadow-gray">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-4">
            <div className="flex justify-center mb-4">
              <img
                src="/lovable-uploads/icons/logo_black.png"
                alt="GT GlobalTeam Logo"
                className="rounded-[50%] w-16 h-16 object-contain"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center space-x-6 space-x-reverse mb-4">
            <a
              href="https://wa.me/201031452115"
              target="_blank"
              rel="noopener noreferrer"
              className="text-off-white/80 hover:text-honey-gold transition-colors font-cairo"
            >
              واتساب
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61577780159397"
              target="_blank"
              rel="noopener noreferrer"
              className="text-off-white/80 hover:text-honey-gold transition-colors font-cairo"
            >
              فيسبوك
            </a>
          </div>

          <p className="text-off-white/60 font-cairo text-sm">
            © {new Date().getFullYear()} GT GlobalTeam. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
