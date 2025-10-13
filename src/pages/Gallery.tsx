import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const Gallery = () => {
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

        <Card className="p-8 text-center">
          <p className="text-muted-foreground">
            Képgaléria hamarosan elérhető. Kérem, látogasson vissza később vagy vegye fel velünk a kapcsolatot telefonon!
          </p>
        </Card>
      </main>
    </div>
  );
};

export default Gallery;
