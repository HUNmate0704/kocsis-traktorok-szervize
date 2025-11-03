import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, CheckCircle, Truck, Settings, ShoppingCart, Phone } from "lucide-react";
import boltkepImage from "@/assets/boltkep.jpg";
import gepekImage from "@/assets/gepek2.jpg";
import kocsis007Image from "@/assets/Kocsis007.jpg";

const Index = () => {
  const services = [
    { icon: Wrench, title: "Szervizelés és Javítás", desc: "Rába-15, TZ4K, MT8, Antonio traktorok, kínai és japán kistraktorok" },
    { icon: Settings, title: "Teljes Felújítás", desc: "Komplett traktor felújítás szakértő csapatunkkal" },
    { icon: CheckCircle, title: "Műszaki Vizsgáztatás", desc: "Traktorok vizsgáztatása az összes adminisztrációval" },
    { icon: ShoppingCart, title: "Alkatrész Értékesítés", desc: "Gyári, utángyártott, felújított vagy használt alkatrészek" },
    { icon: Truck, title: "Gépszállítás", desc: "Telephelyről telephelyre gépszállítás" },
  ];

  const tractorTypes = [
    "Rába-15", "TZ4K", "MT8", "Antonio", "Kínai és Japán kistraktorok"
  ];

  const partsAvailable = [
    "TZ4K, Rába-15, Antonio traktorok és alkatrészek, kínai és japán kistraktorok és alkatrészeik",
    "STIHL damilos kaszák, láncfűrészek",
    "STIHL kapálógépek, fűnyírók, kerti gépek",
    "Csapágyak, szimeringek",
    "Hidraulika, tömlő és műszaki áruk"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Kocsis Fivérek<br />Mezőgazdasági Gépszervíz
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Több mint 30 éves tapasztalat mezőgazdasági gépek szervizelésében
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Elérhetőségek
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30 text-white hover:text-white">
                <Link to="/gallery">Eladó Gépek</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <img src={kocsis007Image} alt="Alkatrész üzlet" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src={gepekImage} alt="Eladó traktorok" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src={boltkepImage} alt="Üzlet épülete" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 space-y-4 text-foreground">
                <p className="text-lg leading-relaxed">
                  Általános mezőgazdasági gépek, traktorok javításával foglalkozunk.
                  <strong className="text-primary"> 10 éve nyitottuk alkatrész üzletünket Sülysápon</strong>, közvetlenül a 31-es főút mellett, ahol a felsorolt géptípusokhoz folyamatosan tudjuk biztosítani az alkatrészeket. Gyári, utángyártott, felújított vagy használt készletről.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong className="text-primary">Szervizünk 6 fő szakképzett</strong>, nagy tapasztalattal rendelkező szakemberekből áll. A gépek javítását végezzük szakműhelyben és helyszínen is.
                </p>
                <p className="text-lg leading-relaxed">
                  A gépek szállítását telephelyről telephelyre cégünk átvállalja. Rendszeres megbízóink részére - igény esetén - a javítás idejére cseregépet biztosítunk.
                </p>
                <p className="text-lg leading-relaxed">
                  Szervizünk megkezdte <strong className="text-secondary">TZ4K és RÁBA-15 kistraktorok szervokormányra való átszerelését</strong>, továbbá korszerű négyütemű motorok beszerelését!
                </p>
                <p className="text-lg leading-relaxed">
                  Minden javításra <strong className="text-primary">Garanciát</strong> vállalunk!
                </p>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Cégünk Főbb Tevékenységei
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tractor Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Szervizelt Traktor Típusok
            </h2>
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-wrap gap-3 justify-center">
                  {tractorTypes.map((type, index) => (
                    <span key={index} className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-full">
                      {type}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Parts Available */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
              Alkatrész Üzletünkben Kapható
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Sülysáp, Pesti út 65. - Postai utánvéttel is rendelhető!
            </p>
            <Card>
              <CardContent className="p-8">
                <ul className="space-y-3">
                  {partsAvailable.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-secondary/10 to-accent/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
                  További Szolgáltatások
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Üzemképtelen traktorok megvásárlása</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Traktorok adás-vételének közvetítése</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Használt traktorok és felszerelések értékesítése</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Kocsis Fivérek Mezőgazdasági Gépszervíz</p>
          <p className="opacity-90">Több mint 20 év tapasztalat mezőgazdasági gépek szervizelésében</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
