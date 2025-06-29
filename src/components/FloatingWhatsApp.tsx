
import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Show tooltip after 3 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Hide tooltip after 8 seconds
    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, []);

  const handleWhatsApp = () => {
     window.open('https://wa.me/201031452115?text=مرحبًا،%20مهتم%20بخدمة%20تصميم%20CV%20الإحترافي%20وعايز%20أعرف%20التفاصيل', '_blank');
    setShowTooltip(false);
  };


  const hideTooltip = () => {
    setShowTooltip(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div
        className={`fixed bottom-6 left-6 z-50 transition-all duration-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <Button
          onClick={handleWhatsApp}
          className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce-gentle"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Tooltip */}
      {showTooltip && isVisible && (
        <div className="fixed bottom-20 left-6 z-40 bg-dark-navy border border-honey-gold rounded-lg p-3 shadow-lg animate-fade-in max-w-xs">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-off-white font-cairo text-sm font-semibold mb-1">
                💬 محتاج مساعدة؟
              </p>
              <p className="text-off-white/80 font-cairo text-xs">
                اضغط هنا للتواصل معانا على واتساب
              </p>
            </div>
            <button 
              onClick={hideTooltip}
              className="text-off-white/60 hover:text-off-white transition-colors mr-2"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          {/* Arrow pointing to button */}
          <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-honey-gold"></div>
        </div>
      )}
    </>
  );
};

export default FloatingWhatsApp;
