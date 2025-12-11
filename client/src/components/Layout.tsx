import { Link, useLocation } from "wouter";
import { TreePalm, Map, MessageCircle, Settings, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", icon: TreePalm },
    { href: "/chat", label: "AI Assistant", icon: MessageCircle },
    { href: "/explore", label: "Explore", icon: Map },
  ];

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-secondary p-2 rounded-full group-hover:rotate-12 transition-transform">
              <TreePalm className="h-5 w-5 text-secondary-foreground" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-primary">
              Curaçao<span className="text-foreground">AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.href
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <Button size="sm" asChild className="rounded-full px-6 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
              <Link href="/chat">
                Chat Now
              </Link>
            </Button>
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-colors ${
                      location === item.href
                        ? "bg-primary/10 text-primary font-bold"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-muted/30 border-t py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TreePalm className="h-6 w-6 text-primary" />
            <span className="font-display font-bold text-xl">CuraçaoAI</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8">
            Your personal intelligent guide to the Caribbean's hidden gem. 
            Discover beaches, culture, and cuisine with ease.
          </p>
          <div className="text-xs text-muted-foreground/60">
            © 2024 Curaçao AI Demo. Built for demonstration purposes.
          </div>
        </div>
      </footer>
    </div>
  );
}
