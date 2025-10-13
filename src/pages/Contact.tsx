import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Store, Building2 } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Elérhetőségeink</h1>
          <p className="text-lg text-muted-foreground">
            Keresse bizalommal szakembereinket!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Building2 className="h-5 w-5" />
                Telephely
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <p className="font-medium">Sülysáp, Bogdán Flórián út 5.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <p className="font-medium">0629/435-248</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-secondary">
                <Store className="h-5 w-5" />
                Alkatrész Üzlet
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <p className="font-medium">Sülysáp, Pesti út 65.</p>
                  <p className="text-sm text-muted-foreground">31-es főút mellett</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <p className="font-medium">0629/437-608</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Google Maps - Telephely */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <MapPin className="h-5 w-5" />
                Telephelyünk Térképen
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-96 rounded-b-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.8!2d19.4!3d47.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDI3JzAwLjAiTiAxOcKwMjQnMDAuMCJF!5e0!3m2!1shu!2shu!4v1234567890123!5m2!1shu!2shu&q=S%C3%BClys%C3%A1p%2C+Bogd%C3%A1n+Fl%C3%B3ri%C3%A1n+%C3%BAt+5"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kocsis Fivérek Kft Telephely"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Google Maps - Alkatrész Üzlet */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-secondary">
                <Store className="h-5 w-5" />
                Alkatrész Üzletünk Térképen
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-96 rounded-b-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.5!2d19.4!3d47.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDI3JzAwLjAiTiAxOcKwMjQnMDAuMCJF!5e0!3m2!1shu!2shu!4v1234567890124!5m2!1shu!2shu&q=S%C3%BClys%C3%A1p%2C+Pesti+%C3%BAt+65"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kocsis Fivérek Kft Alkatrész Üzlet"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-accent">
              <Phone className="h-5 w-5" />
              Telefon
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-lg font-medium">+36 30/330-7853</p>
            <p className="text-lg font-medium">+36 30/338-7353</p>
          </CardContent>
        </Card>

        <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg max-w-2xl mx-auto">
          <p className="text-muted-foreground">
            Alkatrészek postai utánvéttel is megrendelhetők!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Contact;
