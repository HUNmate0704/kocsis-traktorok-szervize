import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import images
import eke from "@/assets/gallery/eke.jpg";
import eke2 from "@/assets/gallery/eke-2.jpg";
import mt8 from "@/assets/gallery/mt8.jpg";
import mt82 from "@/assets/gallery/mt8-2.jpg";
import mt83 from "@/assets/gallery/mt8-3.jpg";
import mt84 from "@/assets/gallery/mt8-4.jpg";
import mtb from "@/assets/gallery/mtb.jpg";
import mtb1 from "@/assets/gallery/mtb-1.jpg";
import raba151 from "@/assets/gallery/raba15-1.jpg";
import raba152 from "@/assets/gallery/raba15-2.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    { src: mt8, title: "MT8 Traktor", category: "MT8" },
    { src: mt82, title: "MT8 Traktor - Oldalnézet", category: "MT8" },
    { src: mt83, title: "MT8 Traktor - Hátsó nézet", category: "MT8" },
    { src: mt84, title: "MT8 Traktor - Oldalnézet 2", category: "MT8" },
    { src: raba151, title: "Rába-15 Traktor", category: "Rába-15" },
    { src: raba152, title: "Rába-15 Traktor - Oldalnézet", category: "Rába-15" },
    { src: mtb, title: "MTB Traktor", category: "MTB" },
    { src: mtb1, title: "MTB Traktor - Oldalnézet", category: "MTB" },
    { src: eke, title: "Eke - Mezőgazdasági eszköz", category: "Felszerelések" },
    { src: eke2, title: "Eke - BEA 21/25-2", category: "Felszerelések" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Eladó Gépeink</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Használt traktorok és felszerelések folyamatosan elérhető készletről
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedImage(item.src)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardContent className="p-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block">
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-2">
                További információkért, árakért és részletekért:
              </p>
              <p className="text-lg font-semibold text-primary">
                +36 30/330-7853 | +36 30/338-7353
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Nagyított kép" 
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
