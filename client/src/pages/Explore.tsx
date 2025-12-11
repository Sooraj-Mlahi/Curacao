import Layout from "@/components/Layout";
import { destinations } from "@/lib/mockData";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Clock, Utensils, Camera, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Explore() {
  return (
    <Layout>
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Explore Curaçao</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the island's most iconic locations. From hidden beaches to historic streets.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((place) => (
            <Dialog key={place.id}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer rounded-2xl bg-card border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src={place.image} 
                      alt={place.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{place.name}</h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm">{place.shortDesc}</p>
                    <div className="mt-4 pt-4 border-t flex items-center text-primary font-bold text-sm">
                      View Details <Info className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0 rounded-2xl">
                <div className="relative h-64 w-full">
                  <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <DialogTitle className="text-3xl font-display font-bold mb-2">{place.name}</DialogTitle>
                    <DialogDescription className="text-gray-200 text-base">{place.shortDesc}</DialogDescription>
                  </div>
                </div>
                
                <div className="p-6 space-y-6">
                  <div className="grid gap-4">
                    <div className="flex gap-4 items-start p-4 bg-secondary/10 rounded-xl">
                      <Clock className="h-5 w-5 text-secondary-foreground shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-sm text-secondary-foreground mb-1">Best Time to Visit</h4>
                        <p className="text-sm text-muted-foreground">{place.details.bestTime}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start p-4 bg-primary/10 rounded-xl">
                      <Utensils className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-sm text-primary mb-1">Local Food</h4>
                        <p className="text-sm text-muted-foreground">{place.details.food}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Camera className="h-4 w-4" /> Things to do
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {place.details.activities.map((activity) => (
                        <Badge key={activity} variant="secondary" className="px-3 py-1 text-sm font-medium">
                          {activity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border">
                    <h4 className="font-bold text-sm mb-2">Travel Tip 💡</h4>
                    <p className="text-sm text-muted-foreground italic">"{place.details.tips}"</p>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                     <Button asChild className="w-full sm:w-auto">
                        <a href="/chat">Ask AI about this place</a>
                     </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </Layout>
  );
}
