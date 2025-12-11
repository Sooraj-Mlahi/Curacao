import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, MessageCircle, Map, Sun } from "lucide-react";
import heroImage from "@assets/generated_images/curaçao_hero_image.png";
import blueBayImage from "@assets/generated_images/blue_bay_curaçao.png";
import willemstadImage from "@assets/generated_images/willemstad_city_center.png";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Beautiful Curaçao Coastline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative pt-20">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/90 text-secondary-foreground text-sm font-bold mb-6 backdrop-blur-sm">
              <Sun className="h-4 w-4" />
              <span>The #1 AI Travel Guide</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Experience <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">
                Curaçao
              </span>
              <br /> Like Never Before.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-lg leading-relaxed drop-shadow-md">
              Your personal AI assistant for the perfect Caribbean getaway. 
              Discover hidden beaches, authentic food, and local culture instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="h-14 px-8 rounded-full text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30 transition-all hover:-translate-y-1">
                <Link href="/chat">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat with AI
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" asChild className="h-14 px-8 rounded-full text-lg font-bold bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white/20 transition-all">
                <Link href="/explore">
                  <Map className="mr-2 h-5 w-5" />
                  Explore Places
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Plan your trip in seconds
            </h2>
            <p className="text-muted-foreground text-lg">
              Stop searching through dozens of blogs. Our AI knows everything about the island.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              image={blueBayImage}
              title="Find Perfect Beaches"
              desc="From family-friendly spots to secluded coves, find your slice of paradise."
            />
            <FeatureCard 
              image={willemstadImage}
              title="Local Culture & Food"
              desc="Discover the best Keshi Yena and explore the colorful history of Willemstad."
            />
            <div className="relative group rounded-2xl overflow-hidden shadow-lg border h-[300px] bg-secondary/10 flex flex-col items-center justify-center text-center p-8">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Itineraries</h3>
              <p className="text-muted-foreground mb-6">Ask the AI to plan your whole 3-day or 7-day trip.</p>
              
              <Button variant="link" asChild className="text-primary font-bold group-hover:underline">
                <Link href="/chat">
                  Try it now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function FeatureCard({ image, title, desc }: { image: string, title: string, desc: string }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg h-[300px]">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
        <h3 className="text-2xl font-display font-bold mb-2">{title}</h3>
        <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{desc}</p>
      </div>
    </div>
  );
}
