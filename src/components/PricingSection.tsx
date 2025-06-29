import { Check, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      nameAr: "الأساسية",
      price: "99",
      currency: "جنيه",
      popular: false,
      features: [
        "سيرة ذاتية بلغة واحدة (عربي أو إنجليزي)",
        "تصميم محسن لأنظمة ATS",
        "مراجعة واحدة مجانية",
        "تسليم خلال 48 ساعة",
        "ملف PDF عالي الجودة",
      ],
    },
    {
      name: "Dual",
      nameAr: "المزدوجة",
      price: "159",
      currency: "جنيه",
      popular: false,
      features: [
        "سيرة ذاتية بلغتين (عربي + إنجليزي)",
        "تصميم محسن لأنظمة ATS",
        "مراجعتان مجانيتان",
        "تسليم خلال 48 ساعة",
        "ملفات PDF عالية الجودة",
      ],
    },
    {
      name: "Digital",
      nameAr: "الرقمية",
      price: "199",
      currency: "جنيه",
      popular: true,
      features: [
        "سيرة ذاتية بلغتين (عربي + إنجليزي)",
        "موقع شخصي أونلاين للسيرة الذاتية",
        "رابط مخصص قابل للمشاركة",
        "تصميم محسن لأنظمة ATS",
        "3 مراجعات مجانية",
        "تسليم خلال 48 ساعة",
      ],
    },
    {
      name: "Elite",
      nameAr: "المتميزة",
      price: "249",
      currency: "جنيه",
      popular: false,
      features: [
        "كل مميزات الباقة الرقمية",
        "مراجعات غير محدودة لمدة 7 أيام",
        "دعم أولوية على واتساب",
        "باقة التوفير"
      ],
    },
  ];

  const handleSelectPlan = (planName: string) => {
    const message = `مرحبا، عايز أشترك في باقة ${planName}`;
    window.open(
      `https://wa.me/201031452115?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-shadow-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-off-white font-cairo mb-4">
            اختار الباقة اللي تناسبك
          </h2>
          <p className="text-xl text-off-white/80 font-cairo max-w-2xl mx-auto">
            كل الباقات تشمل ضمان الجودة وإمكانية الدفع على مرحلتين
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-dark-navy border-2 transition-all duration-300 hover:scale-105 animate-on-scroll group ${
                plan.popular
                  ? "border-honey-gold shadow-lg shadow-honey-gold/20"
                  : "border-shadow-gray hover:border-honey-gold/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-honey-gold text-dark-navy px-4 py-1 rounded-full text-sm font-bold font-cairo flex items-center">
                    <Star className="w-4 h-4 ml-1" />
                    الأكثر طلباً
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-cairo text-off-white mb-2">
                  {plan.nameAr}
                </CardTitle>
                <div className="text-4xl font-bold text-honey-gold font-cairo">
                  {plan.price}
                  <span className="text-lg text-off-white/70 font-normal mr-2">
                    {plan.currency}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-off-white/90 font-cairo text-sm"
                    >
                      <Check className="h-5 w-5 text-honey-gold ml-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleSelectPlan(plan.nameAr)}
                  className={`w-full font-cairo font-semibold py-3 rounded-lg transition-all duration-300 ${
                    plan.popular
                      ? "bg-honey-gold hover:bg-[#d35400] text-dark-navy"
                      : "bg-transparent border-2 border-honey-gold text-honey-gold hover:bg-honey-gold hover:text-dark-navy"
                  }`}
                >
                  اختار الباقة دي
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-off-white/70 font-cairo text-sm">
            💳 ادفع 50% مقدم والباقي عند الاستلام | 🔄 ضمان استرداد المال خلال 7
            أيام
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
