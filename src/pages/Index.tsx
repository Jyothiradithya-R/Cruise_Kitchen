import { Button } from "@/components/ui/button";
import { MapPin, Clock, Instagram, Phone, Leaf, Drumstick, Coffee, Truck, Heart } from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";
import dishParatha from "@/assets/dish-paratha.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import dishDosa from "@/assets/dish-dosa.jpg";
import menuPoster from "@/assets/menu-poster.png";

const veg = [
  { n: "Aloo Paratha", o: "Punjab", p: 60 },
  { n: "Paneer Roll", o: "North India", p: 80 },
  { n: "Veg Fried Rice", o: "Indo-Chinese", p: 70 },
  { n: "Masala Dosa", o: "South India", p: 70 },
  { n: "Chole Kulche", o: "Delhi", p: 70 },
  { n: "Veg Hakka Noodles", o: "Indo-Chinese", p: 70 },
  { n: "Masala Maggi", o: "India", p: 50 },
  { n: "Paneer Bhurji Roll", o: "North India", p: 80 },
  { n: "Veg Grilled Sandwich", o: "Mumbai", p: 60 },
  { n: "Dahi Bhalla", o: "North India", p: 60 },
];

const nonVeg = [
  { n: "Chicken Roll", o: "Kolkata", p: 90 },
  { n: "Chicken Biryani (Small)", o: "Hyderabad", p: 90 },
  { n: "Chicken Fried Rice", o: "Indo-Chinese", p: 80 },
  { n: "Chicken Noodles", o: "Indo-Chinese", p: 80 },
  { n: "Butter Chicken Roll", o: "North India", p: 100 },
  { n: "Chicken Tikka Roll", o: "North India", p: 90 },
  { n: "Egg Roll", o: "Kolkata", p: 60 },
  { n: "Egg Fried Rice", o: "Indo-Chinese", p: 70 },
  { n: "Chicken Momos (6 pcs)", o: "North East", p: 80 },
  { n: "Chicken Seekh Roll", o: "North India", p: 90 },
];

const itemOfDay = [
  { d: "Mon", n: "Poha", p: 50 },
  { d: "Tue", n: "Rajma Chawal", p: 80 },
  { d: "Wed", n: "Cheese Corn Sandwich", p: 60 },
  { d: "Thu", n: "Lemon Rice", p: 50 },
  { d: "Fri", n: "Chicken Curry Rice", p: 90 },
  { d: "Sat", n: "Pav Bhaji", p: 70 },
  { d: "Sun", n: "Kadhi Chawal", p: 60 },
];

const combos = [
  { n: "Veg Classic Combo", items: "Aloo Paratha + Dahi Bhalla + Masala Chai", p: 145, was: 170 },
  { n: "Non-Veg Roll Combo", items: "Chicken Roll + Egg Roll + Lemonade", p: 153, was: 180 },
  { n: "Rice Combo", items: "Veg Fried Rice + Gobi Manchurian + Cold Drink", p: 153, was: 180 },
  { n: "Biryani Combo", items: "Chicken Biryani + Raita + Masala Chai", p: 162, was: 190 },
];

const beverages = [
  ["Masala Chai", 20], ["Lemonade", 30], ["Cold Coffee", 60],
  ["Lassi", 50], ["Nimbu Pani", 30], ["Soft Drink (Can)", 40], ["Bottle Water", 20],
];

const Rupee = ({ v }: { v: number }) => <span className="font-display">₹{v}</span>;

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="container flex items-center justify-between py-5">
          <a href="#" className="flex items-center gap-2 font-display text-lg md:text-xl font-bold">
            <Truck className="h-5 w-5 text-primary" />
            Cruise Kitchen
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#menu" className="hover:text-foreground transition-smooth">Menu</a>
            <a href="#combos" className="hover:text-foreground transition-smooth">Combos</a>
            <a href="#today" className="hover:text-foreground transition-smooth">Today's Special</a>
            <a href="#find" className="hover:text-foreground transition-smooth">Find Us</a>
          </div>
          <Button size="sm" className="bg-gradient-sunset text-primary-foreground hover:opacity-90 shadow-glow">
            Order Now
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <img src={heroTruck} alt="Cruise Kitchen Indian food truck" className="absolute inset-0 h-full w-full object-cover" width={1600} height={1024} />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 container text-center animate-fade-up">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-secondary backdrop-blur">
            <Heart className="h-3.5 w-3.5" /> Indian Street Food · Made with Love
          </p>
          <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.95] mb-6">
            Cruise <span className="text-gradient-sunset">Kitchen</span>
          </h1>
          <p className="font-display italic text-2xl md:text-4xl text-foreground/90 mb-4">
            Taste the journey.
          </p>
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-secondary mb-10">
            Minimal Ingredients · Maximum Flavour
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-sunset text-primary-foreground hover:opacity-90 shadow-glow text-base h-12 px-8">
              <a href="#menu">Explore Menu</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/30 backdrop-blur border-border/60 hover:bg-background/60 text-base h-12 px-8">
              <a href="#find">Find Us Today</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured dishes */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Crowd Favourites</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              A bite of <span className="text-gradient-sunset">India</span>, on the go.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "Aloo Paratha", d: "Stuffed paratha with spiced potato, fresh off the tawa.", img: dishParatha },
              { n: "Chicken Biryani", d: "Aromatic Hyderabadi rice with mild spices and tender chicken.", img: dishBiryani },
              { n: "Masala Dosa", d: "Crispy South Indian dosa with potato filling & chutney.", img: dishDosa },
            ].map((d) => (
              <article key={d.n} className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card transition-smooth hover:-translate-y-2 hover:shadow-glow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={d.img} alt={d.n} loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-smooth group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold mb-2">{d.n}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{d.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">The Full Menu</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              20 dishes. <span className="text-gradient-sunset">One journey.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Veg */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="h-10 w-10 rounded-full bg-emerald-500/15 flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">Veg Menu</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">10 items</p>
                </div>
              </div>
              <ul className="space-y-3">
                {veg.map((it) => (
                  <li key={it.n} className="flex items-baseline justify-between gap-4 py-2 border-b border-border/50 last:border-0">
                    <div>
                      <p className="font-medium">{it.n}</p>
                      <p className="text-xs text-muted-foreground">{it.o}</p>
                    </div>
                    <span className="text-secondary font-semibold whitespace-nowrap"><Rupee v={it.p} /></span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Non-Veg */}
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="h-10 w-10 rounded-full bg-primary/15 flex items-center justify-center">
                  <Drumstick className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">Non-Veg Menu</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">10 items</p>
                </div>
              </div>
              <ul className="space-y-3">
                {nonVeg.map((it) => (
                  <li key={it.n} className="flex items-baseline justify-between gap-4 py-2 border-b border-border/50 last:border-0">
                    <div>
                      <p className="font-medium">{it.n}</p>
                      <p className="text-xs text-muted-foreground">{it.o}</p>
                    </div>
                    <span className="text-secondary font-semibold whitespace-nowrap"><Rupee v={it.p} /></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Beverages */}
          <div className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="h-5 w-5 text-secondary" />
              <h3 className="font-display text-2xl font-bold">Beverages</h3>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-2">
              {beverages.map(([n, p]) => (
                <div key={n as string} className="flex items-baseline justify-between border-b border-dashed border-border/60 py-2">
                  <span className="text-sm">{n}</span>
                  <span className="text-secondary font-semibold text-sm"><Rupee v={p as number} /></span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-border/60">
              <a href={menuPoster} target="_blank" rel="noreferrer">View Full Printed Menu</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Item of the day */}
      <section id="today" className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Item of the Day</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              A new <span className="text-gradient-sunset">special</span>, every day.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {itemOfDay.map((s) => (
              <div key={s.d} className="rounded-xl border border-border bg-card p-5 shadow-card text-center transition-smooth hover:border-primary/60 hover:-translate-y-1">
                <p className="font-display text-2xl font-bold text-gradient-sunset mb-2">{s.d}</p>
                <p className="text-sm font-medium leading-tight mb-2">{s.n}</p>
                <p className="text-xs text-secondary font-semibold"><Rupee v={s.p} /></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combos */}
      <section id="combos" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Combos · Save 15%</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              More on the plate, <span className="text-gradient-sunset">less on the bill</span>.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {combos.map((c, i) => (
              <div key={c.n} className="rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:shadow-glow hover:-translate-y-1">
                <div className="h-9 w-9 rounded-full bg-gradient-sunset text-primary-foreground font-display font-bold flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{c.n}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 min-h-[3.5rem]">{c.items}</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-2xl font-bold text-gradient-sunset"><Rupee v={c.p} /></span>
                  <span className="text-xs text-muted-foreground line-through"><Rupee v={c.was} /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Us */}
      <section id="find" className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Find Us</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                One truck. <span className="text-gradient-sunset">Many journeys.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Catch us parked across the city, serving up handcrafted Indian street food made with minimal ingredients and maximum love.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-primary mt-0.5" /><span>Rotating locations · Check Instagram for today's spot</span></div>
                <div className="flex items-start gap-3"><Clock className="h-5 w-5 text-primary mt-0.5" /><span>Open daily · 11:00 AM – 11:00 PM</span></div>
                <div className="flex items-start gap-3"><Phone className="h-5 w-5 text-primary mt-0.5" /><span>+91 98765 43210</span></div>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <Button className="bg-gradient-sunset text-primary-foreground hover:opacity-90 shadow-glow">
                  <Phone className="h-4 w-4 mr-2" /> Call to Order
                </Button>
                <Button variant="outline" className="border-border/60">
                  <Instagram className="h-4 w-4 mr-2" /> @cruisekitchen
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-border shadow-card">
                <img src={heroTruck} alt="Cruise Kitchen truck" loading="lazy" width={1600} height={1024} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-gradient-sunset p-6 shadow-glow max-w-[220px]">
                <p className="font-display text-primary-foreground text-lg font-bold leading-tight">Good Food.<br />Good Mood.<br />Great Journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 mt-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="font-display text-base">Cruise Kitchen · Taste the journey.</p>
          <p>© {new Date().getFullYear()} Cruise Kitchen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
