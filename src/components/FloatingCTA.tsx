
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    window.open('https://forms.google.com/your-form-link', '_blank');
  };

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <Button
        onClick={handleClick}
        className="bg-honey-gold hover:bg-[#d35400] text-dark-navy font-cairo font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-bounce-gentle"
      >
        ابدأ الآن
        <ArrowLeft className="mr-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default FloatingCTA;
