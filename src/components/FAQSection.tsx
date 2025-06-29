
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "كام وقت بيخد تصميم السيرة الذاتية؟",
      answer: "عادة بنسلم السيرة الذاتية خلال 24-48 ساعة من تاريخ استلام البيانات المطلوبة والدفعة الأولى. في الحالات العاجلة، ممكن نسلم في نفس اليوم مقابل رسوم إضافية."
    },
    {
      question: "هل بتقدموا مراجعات مجانية؟",
      answer: "أيوة طبعاً! كل باقة ليها عدد مراجعات مجانية محدد. الباقة الأساسية مراجعة واحدة، المزدوجة مراجعتين، الرقمية 3 مراجعات، والمتميزة مراجعات غير محدودة."
    },
    {
      question: "إيه هو نظام ATS وليه مهم؟",
      answer: "ATS هو نظام تتبع المتقدمين اللي بتستخدمه الشركات لفلترة السير الذاتية قبل ما توصل للـ HR. إحنا بنصمم السيرة الذاتية بطريقة تضمن إنها تعدي من الأنظمة دي وتوصل للشخص المسؤول عن التوظيف."
    },
    {
      question: "ممكن أطلب تعديلات بعد الاستلام؟",
      answer: "أكيد! إحنا بنقدم مراجعات مجانية حسب الباقة اللي اخترتها. وحتى بعد انتهاء المراجعات المجانية، ممكن نعمل تعديلات إضافية برسوم رمزية."
    },
    {
      question: "هل بتشتغلوا بالعربي والإنجليزي؟",
      answer: "أيوة، إحنا متخصصين في السير الذاتية بالعربي والإنجليزي. وممكن نعمل نسختين منفصلتين أو نسخة واحدة بلغتين حسب احتياجك والباقة اللي هتختارها."
    },
    {
      question: "إزاي أقدر أدفع؟",
      answer: "ممكن تدفع عن طريق فودافون كاش عن طريق الرقم (01033027601)"
    },
    {
      question: "هل ممكن أشوف نماذج من شغلكم قبل ما أطلب؟",
      answer: "طبعاً! عندنا معرض أعمال كامل فيه أكثر من نموذج مختلف في كل التخصصات. ممكن تشوفه من خلال الرابط في قسم النماذج أو تطلبه عالواتساب."
    },
    {
      question: "إيه الفرق بين الموقع الشخصي والسيرة الذاتية العادية؟",
      answer: "الموقع الشخصي ده رابط أونلاين بيضم كل معلوماتك المهنية، أعمالك، وإنجازاتك بشكل تفاعلي. ممكن تشاركه على LinkedIn أو في الإيميلات، وبيدي انطباع احترافي أكثر من السيرة الذاتية العادية."
    },
    {
      question: " إيه نوع الاستضافة اللي بتقدموها هنا؟",
      answer: "إحنا بنوفر استضافة مجانية عن طريق GitHub، يعني تقدر ترفع موقعك ويبقى شغال على طول من غير ما تدفع ولا جنيه!"

    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-dark-navy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-off-white font-cairo mb-4">
            أسئلة شائعة
          </h2>
          <p className="text-xl text-off-white/80 font-cairo max-w-2xl mx-auto">
            إجابات على أكثر الأسئلة اللي بتوصلنا من عملائنا
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className="bg-shadow-gray border-shadow-gray hover:border-honey-gold/50 transition-all duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader 
                className="cursor-pointer select-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-cairo font-semibold text-off-white">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 mr-4">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-honey-gold" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-honey-gold" />
                    )}
                  </div>
                </div>
              </CardHeader>
              
              {openIndex === index && (
                <CardContent className="pt-0">
                  <p className="text-off-white/80 font-cairo leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-off-white/70 font-cairo mb-4">
            لسة عندك أسئلة تانية؟
          </p>
          <a 
            href="https://wa.me/201031452115?text=مرحبًا،%20مهتم%20بخدمة%20تصميم%20CV%20احترافي%20وعايز%20أعرف%20التفاصيل"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-honey-gold hover:text-[#d35400] font-cairo font-semibold transition-colors"
          >
            اسألنا على واتساب
            <ChevronDown className="mr-2 h-4 w-4 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
