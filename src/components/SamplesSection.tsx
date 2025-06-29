import { Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SamplesSection = () => {
  const categories = [
    {
      name: "Modern",
      nameAr: "عصري",
      description: "تصاميم حديثة ومبتكرة",
      samples: [
        { name: "Modern Pro", preview: "/lovable-uploads/templates/Modern/modern1.png", link: "https://drive.google.com/file/d/1LYdIpAurPp3OVT_4MYTeJN1bymxlakUm/view?usp=sharing" },
        { name: "Neo-Modern Look", preview: "/lovable-uploads/templates/Modern/moder2.png", link: "https://drive.google.com/file/d/1LYdIpAurPp3OVT_4MYTeJN1bymxlakUm/view?usp=sharing" },
        { name: "Creative Plus", preview: "/lovable-uploads/templates/Modern/modern3.png", link: "https://drive.google.com/file/d/1mjZPdK6iNs5mKFRL51f83FeWuR3n22hZ/view?usp=sharing" }
      ]
    },
    {
      name: "ATS",
      nameAr: " تصاميم متوافقة مع أنظمة التوظيف (ATS)",
      description: "هو سيرة ذاتية مصممة مخصوص علشان تكون مفهومة وقابلة للقراءة من أنظمة الـ ATS.",
      samples: [
        { name: "Business_Professional", preview: "/lovable-uploads/templates/ATS/ATS_1.png", link: "https://drive.google.com/file/d/1GfNpukg2AGJ3DPLrVir9_GuSf3MURrmQ/view?usp=drive_link" },
        { name: "Cleen", preview: "/lovable-uploads/templates/ATS/ATS_2.png", link: "https://drive.google.com/file/d/1td40cgxzTHd8BDV462jScnzg8oxGlSmU/view?usp=drive_link" },
        { name: "Tech_Focused", preview: "/lovable-uploads/templates/ATS/ATS_3.png", link: "https://drive.google.com/file/d/1gQxIoDnkAIP8pFxDpyQ7yyyv57JINVWJ/view?usp=sharing" }
      ]
    },
    {
      name: "Classic",
      nameAr: "كلاسيكي",
      description: "تصاميم تقليدية أنيقة",
      samples: [
        { name: "Classic Professional", preview: "/lovable-uploads/templates/CLASIC/CLASIC1.png", link: "https://drive.google.com/file/d/1s723NuY5M9V3C58ncjFtX3yaxEgXbuCO/view?usp=sharing" },
        { name: "Classic_Clean", preview: "/lovable-uploads/templates/CLASIC/CLASIC2.png", link: "https://drive.google.com/file/d/1Dh-9sWauqiZo7o2XASB9Ud6rS0l_NWP2/view?usp=sharing" },
        { name: "Elegant Classic", preview: "/lovable-uploads/templates/CLASIC/CLASIC3.png", link: "https://drive.google.com/file/d/1Yb-Oc8Iih7WbbqwWeh_YiYYCrJaclq2f/view?usp=sharing" }
      ]
    }
  ];

  // 📩 إرسال رسالة مخصصة حسب نوع التصميم
  const handleOrderTemplate = (categoryName) => {
    let message = '';
    const phone = '201031452115'; // رقمك

    if (categoryName === 'عصري') {
      message = 'مرحبًا، شفت التصاميم العصرية وعجبتني، وعاوز أطلب واحد يناسبني ✨';
    } else if (categoryName === 'كلاسيكي') {
      message = 'أهلاً، مهتم بتصميم من النوع الكلاسيكي، وعاوز أطلب واحد أنيق واحترافي 🎩';
    } else if (categoryName === ' تصاميم متوافقة مع أنظمة التوظيف (ATS)') {
      message = 'مرحبًا، محتاج سيرة ذاتية متوافقة مع أنظمة الـ ATS 👨‍💻';
    } else if (categoryName === 'الباقة') {
      message = 'مرحبًا، مهتم أعرف تفاصيل الباقة والخدمات اللي بتقدمها في تصميم السيرة الذاتية.';
    } else {
      message = `مرحبًا، مهتم بطلب تصميم من فئة: ${categoryName}`;
    }

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 bg-dark-navy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-off-white font-cairo mb-4">
            شوف نماذج من شغلنا
          </h2>
          <p className="text-xl text-off-white/80 font-cairo max-w-2xl mx-auto">
            أكثر من تصميم مختلف يناسب كل التخصصات والمستويات المهنية
          </p>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="animate-on-scroll" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
            <div className="text-center mb-8">
              <h3 className="mb-8 text-2xl md:text-3xl font-bold text-honey-gold font-cairo mb-2">
                {category.nameAr}
              </h3>
              <p className="text-off-white/70 font-cairo">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {category.samples.map((sample, sampleIndex) => (
                <Card 
                  key={sampleIndex}
                  className="bg-shadow-gray border-shadow-gray hover:border-honey-gold transition-all duration-300 hover:scale-105 group overflow-hidden"
                >
                  <div className="relative">
                    <img 
                      src={sample.preview} 
                      alt={sample.name}
                      className="w-full h-65 object-cover group-hover:scale-100 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-dark-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 space-x-reverse">
                      <Button
                        onClick={() => window.open(sample.link, '_blank')}
                        className="bg-honey-gold hover:bg-[#d35400] text-dark-navy font-cairo font-semibold px-4 py-2"
                      >
                        <Eye className="ml-2 h-4 w-4" />
                        معاينة
                      </Button>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-off-white font-cairo text-lg text-center">
                      {sample.name}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                onClick={() => handleOrderTemplate(category.nameAr)}
                className="mb-12 bg-transparent border-2 border-honey-gold text-honey-gold hover:bg-honey-gold hover:text-dark-navy font-cairo font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                عايز الشكل ده؟ ابدأ معانا دلوقتي
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SamplesSection;
