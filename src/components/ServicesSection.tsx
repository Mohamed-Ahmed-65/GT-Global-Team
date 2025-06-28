
import { FileText, Globe, Target, Clock, MessageCircle, Users, Award, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const mainServices = [
    {
      icon: FileText,
      title: "تصميم السيرة الذاتية",
      subtitle: "عربي | إنجليزي | الاثنين معاً",
      description: "سيرة ذاتية احترافية مصممة خصيصاً لمجالك مع ضمان اجتياز أنظمة ATS",
      features: ["تصاميم حديثة ومتنوعة", "محتوى محسن ومكتوب بطريقة احترافية", "ملف PDF عالي الجودة"]
    },
    {
      icon: Globe,
      title: "موقع شخصي أونلاين",
      subtitle: "رابط مخصص لسيرتك الذاتية",
      description: "موقع ويب تفاعلي يعرض معلوماتك المهنية بشكل احترافي وقابل للمشاركة",
      features: ["رابط مخصص سهل الحفظ", "تصميم متجاوب مع كل الأجهزة", "إمكانية التحديث والتعديل"]
    },
    {
      icon: Target,
      title: "تحسين لأنظمة ATS",
      subtitle: "اضمن وصول سيرتك للـ HR",
      description: "تصميم محسن خصيصاً لاجتياز أنظمة تتبع المتقدمين في الشركات الكبيرة",
      features: ["كلمات مفتاحية محسنة", "تنسيق متوافق مع الأنظمة", "اختبار على أنظمة حقيقية"]
    }
  ];

  return (
    <section className="py-20 bg-shadow-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-off-white font-cairo mb-4">
            خدماتنا الاحترافية
          </h2>
          <p className="text-xl text-off-white/80 font-cairo max-w-3xl mx-auto">
            كل اللي محتاجه عشان تبرز في سوق العمل وتحصل على الوظيفة اللي بتحلم بيها
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card 
              key={index}
              className="bg-dark-navy border-shadow-gray hover:border-honey-gold transition-all duration-300 hover:scale-105 animate-on-scroll group h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-honey-gold/10 rounded-full w-fit group-hover:bg-honey-gold/20 transition-colors duration-300">
                  <service.icon className="h-10 w-10 text-honey-gold" />
                </div>
                <CardTitle className="text-xl font-cairo text-off-white mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-honey-gold font-cairo text-sm font-semibold">
                  {service.subtitle}
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-off-white/80 font-cairo leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-off-white/70 font-cairo text-sm flex items-center justify-center">
                      <Zap className="h-4 w-4 text-honey-gold ml-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-dark-navy p-8 rounded-2xl border border-honey-gold/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-off-white font-cairo mb-4">
              جاهز تبدأ رحلتك المهنية؟
            </h3>
            <p className="text-off-white/80 font-cairo mb-6">
              اختار الخدمة اللي تناسبك وخلينا نساعدك توصل لهدفك
            </p>
            <a 
              href="https://wa.me/1234567890?text=عايز أعرف أكتر عن خدماتكم"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-honey-gold hover:bg-[#d35400] text-dark-navy font-cairo font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="ml-2 h-5 w-5" />
              تواصل معانا دلوقتي
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
