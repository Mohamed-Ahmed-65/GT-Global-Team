
import { FileEdit, MessageSquare, Download } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: FileEdit,
      title: "املأ النموذج",
      description: "أدخل بياناتك ومعلوماتك المهنية في النموذج البسيط",
      number: "01"
    },
    {
      icon: MessageSquare,
      title: "تواصل معنا",
      description: "سنتواصل معك عبر واتساب لتأكيد التفاصيل والمتطلبات الإضافية",
      number: "02"
    },
    {
      icon: Download,
      title: "استلم سيرتك الذاتية",
      description: "احصل على نسخة PDF ورابط أونلاين لسيرتك الذاتية الاحترافية",
      number: "03"
    }
  ];

  return (
    <section className="py-20 bg-dark-navy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-off-white font-cairo mb-4">
            كيف نعمل؟
          </h2>
          <p className="text-xl text-off-white/80 font-cairo max-w-2xl mx-auto">
            ثلاث خطوات بسيطة للحصول على سيرة ذاتية احترافية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center animate-on-scroll group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step Number */}
              <div className="relative mb-8">
                <div className="mx-auto w-24 h-24 bg-gradient-to-br from-honey-gold to-[#f39c12] rounded-full flex items-center justify-center text-3xl font-bold text-dark-navy font-inter group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-honey-gold to-transparent"></div>
                )}
              </div>

              {/* Icon */}
              <div className="mb-6">
                <div className="mx-auto p-4 bg-shadow-gray rounded-full w-fit group-hover:bg-honey-gold/10 transition-colors duration-300">
                  <step.icon className="h-8 w-8 text-honey-gold" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-off-white font-cairo mb-4">
                {step.title}
              </h3>
              <p className="text-off-white/80 font-cairo leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
