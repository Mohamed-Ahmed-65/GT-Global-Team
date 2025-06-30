
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
const handleWhatsApp = () => {
  const phone = "201031452115";
  const message = "مرحبًا، مهتم بخدمة تصميم CV احترافي وعايز أعرف التفاصيل";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};


  const handleFacebook = () => {
    window.open('https://www.facebook.com/profile.php?id=61578109641392', '_blank');
  };

  return (
    <section className="py-20 bg-shadow-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-off-white font-cairo mb-4">
            تواصل معانا
          </h2>
          <p className="text-xl text-off-white/80 font-cairo max-w-2xl mx-auto">
            إحنا هنا عشان نساعدك في كل خطوة من رحلتك المهنية
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="animate-on-scroll space-y-6">
            <h3 className="text-2xl font-cairo font-bold text-off-white mb-6 text-center">
              طرق التواصل
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* WhatsApp */}
              <Card 
                onClick={handleWhatsApp}
                className="bg-dark-navy border-shadow-gray hover:border-[#25D366] transition-all duration-300 cursor-pointer group hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="p-3 bg-[#25D366] rounded-full group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-cairo font-semibold text-off-white group-hover:text-[#25D366] transition-colors">
                        واتساب - الأسرع في الرد
                      </h4>
                      <p className="text-off-white/80 font-cairo text-sm">
                        متاحين 24/7 للرد على استفساراتك
                      </p>
                      <p className="text-[#25D366] font-cairo text-sm font-semibold mt-1">
                        اضغط للتواصل المباشر
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Facebook */}
              <Card 
                onClick={handleFacebook}
                className="bg-dark-navy border-shadow-gray hover:border-[#1877F2] transition-all duration-300 cursor-pointer group hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="p-3 bg-[#1877F2] rounded-full group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-cairo font-semibold text-off-white group-hover:text-[#1877F2] transition-colors">
                        فيسبوك
                      </h4>
                      <p className="text-off-white/80 font-cairo text-sm">
                        GT GlobalTeam
                      </p>
                      <p className="text-[#1877F2] font-cairo text-sm font-semibold mt-1">
                        تابعنا لآخر التحديثات والعروض
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="bg-dark-navy p-6 rounded-lg border border-honey-gold/20 mt-8">
              <h4 className="text-lg font-cairo font-semibold text-honey-gold mb-4 text-center">
                معلومات إضافية
              </h4>
              <div className="flex justify-center space-x-8 space-x-reverse">
                <div className="flex items-center text-off-white/80 font-cairo">
                  <Phone className="h-4 w-4 text-honey-gold ml-3" />
                  <span>متاحين للرد من 9 صباحاً - 11 مساءً</span>
                </div>
                <div className="flex items-center text-off-white/80 font-cairo">
                  <Mail className="h-4 w-4 text-honey-gold ml-3" />
                  <span>نرد على كل الرسائل خلال ساعتين كحد أقصى</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
