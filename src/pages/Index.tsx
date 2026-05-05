import { Button } from "@/components/ui/button";
import { MapPin, Clock, Instagram, Phone, ChefHat, Truck } from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";
import dishBurger from "@/assets/dish-burger.jpg";
import dishTacos from "@/assets/dish-tacos.jpg";
import dishFries from "@/assets/dish-fries.jpg";

const dishes = [
  { name: "Coastal Smash", desc: "Double smash patty, aged cheddar, smoked aioli on a brioche bun.", img: dishBurger },
  { name: "Sunset Tacos", desc: "Slow-braised carnitas, pickled onion, lime, fresh cilantro.", img: dishTacos },
  { name: "Roadside Fries", desc: "Hand-cut, golden, loaded with house sauce & herbs.", img: dishFries },
];

const schedule = [
  { day: "Thu", where: "Harbor Square", time: "5pm – 10pm" },
  { day: "Fri", where: "Riverside Park", time: "5pm – 11pm" },
  { day: "Sat", where: "Sunset Boulevard", time: "12pm – 11pm" },
  { day: "Sun", where: "Farmers Market", time: "10am – 4pm" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="container flex items-center justify-between py-6">
          <a href="#" className="flex items-center gap-2 font-display text-xl font-bold">
            <Truck className="h-6 w-6 text-primary" />
            Cruise Kitchen
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#menu" className="hover:text-foreground transition-smooth">Menu</a>
            <a href="#about" className="hover:text-foreground transition-smooth">Our Story</a>
            <a href="#find" className="hover:text-foreground transition-smooth">Find Us</a>
            <a href="#contact" className="hover:text-foreground transition-smooth">Contact</a>
          </div>
          <Button variant="default" className="bg-gradient-sunset text-primary-foreground hover:opacity-90 shadow-glow">
            Book Us
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroTruck}
          alt="Cruise Kitchen food truck at sunset"
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 container text-center animate-fade-up">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-secondary backdrop-blur">
            <ChefHat className="h-3.5 w-3.5" /> Street Food · Made With Soul
          </p>
          <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.95] mb-6">
            Cruise <span className="text-gradient-sunset">Kitchen</span>
          </h1>
          <p className="font-display italic text-2xl md:text-4xl text-foreground/90 mb-10">
            Taste the journey.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-sunset text-primary-foreground hover:opacity-90 shadow-glow text-base h-12 px-8">
              View the Menu
            </Button>
            <Button size="lg" variant="outline" className="bg-background/30 backdrop-blur border-border/60 hover:bg-background/60 text-base h-12 px-8">
              Find Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              A kitchen on the move, <span className="text-gradient-sunset">crafted with passion</span>.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Born from a love of open roads and bold flavors, Cruise Kitchen brings handcrafted street food
              to wherever the day takes us — coast, city, festival, or your front door.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every plate is a postcard from somewhere delicious. Hop on. Taste the journey.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "5+", l: "Years on the road" },
              { n: "12k", l: "Happy bellies" },
              { n: "20+", l: "Signature recipes" },
              { n: "100%", l: "Locally sourced" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <p className="font-display text-4xl font-bold text-gradient-sunset">{s.n}</p>
                <p className="text-sm text-muted-foreground mt-2">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-28 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Signature Dishes</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Made fresh, <span className="text-gradient-sunset">served with soul</span>.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {dishes.map((d) => (
              <article key={d.name} className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card transition-smooth hover:-translate-y-2 hover:shadow-glow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover transition-smooth group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold mb-2">{d.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Find Us */}
      <section id="find" className="py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Where to find us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Catch us on the <span className="text-gradient-sunset">road</span>.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {schedule.map((s) => (
              <div key={s.day} className="rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:border-primary/60">
                <p className="font-display text-3xl font-bold text-gradient-sunset mb-3">{s.day}</p>
                <div className="flex items-start gap-2 text-sm mb-2">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{s.where}</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{s.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-28">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-sunset p-12 md:p-20 text-center shadow-glow">
            <h2 className="font-display text-4xl md:text-6xl font-black text-primary-foreground mb-4">
              Hungry yet?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
              Book Cruise Kitchen for your next event, or swing by — we're always cooking up something good.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 h-12 px-8">
                <Phone className="h-4 w-4 mr-2" /> (555) 123-4567
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8">
                <Instagram className="h-4 w-4 mr-2" /> @cruisekitchen
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="font-display text-base">Cruise Kitchen · Taste the journey.</p>
          <p>© {new Date().getFullYear()} Cruise Kitchen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
