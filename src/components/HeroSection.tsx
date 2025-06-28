
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=مرحبا، عايز أعرف أكتر عن خدمات السيرة الذاتية', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-honey-gold"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full border border-off-white"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full border border-honey-gold transform -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <img 
                src="\lovable-uploads\f8cc8309-39fc-49a7-b838-fe054c61a16d.png" 
                alt="GT GlobalTeam Logo" 
                className="rounded-[50%] w-32 h-32 md:w-48 md:h-48 object-contain"
              />
            </div>
            <h1 className="text-2xl md:text-4xl font-cairo font-bold text-honey-gold mb-2">
              GT | GlobalTeam
            </h1>
          </div>

          {/* Main headline */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-cairo font-bold text-off-white mb-6 leading-tight">
              خلي سيرتك الذاتية تتكلم عنك
              <br />
              <span className="text-honey-gold">باحتراف</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-3">
              <p className="text-lg md:text-xl text-off-white/90 font-cairo leading-relaxed">
                احصل على سيرة ذاتية احترافية ومحسنة لأنظمة ATS + موقع شخصي أونلاين
              </p>
              <p className="text-base md:text-lg text-off-white/70 font-cairo">
                نساعدك تبرز وسط المنافسة وتحصل على الوظيفة اللي بتحلم بيها
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 mb-10">
            <Button 
              onClick={handleWhatsApp}
              className="bg-honey-gold hover:bg-[#d35400] text-dark-navy font-cairo font-bold text-xl px-8 py-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <MessageCircle className="ml-3 h-6 w-6" />
              ابدأ دلوقتي على واتساب
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
            <div className="w-6 h-10 border-2 border-off-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-honey-gold rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
