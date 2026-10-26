import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { ArrowRight, ArrowUpRight, Clock3, MapPin, Phone, Star } from 'lucide-react';
import { Link, Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { PageHeading, SiteLayout } from '@/components/site-layout';
import { MenuBrowser } from '@/components/menu-browser';
import { business } from '@/data/business';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Home() {
  return (
    <SiteLayout>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <div className="eyebrow">A little taste of the road</div>
            <h1>Come hungry.<br /><em>Leave happy.</em></h1>
            <p className="hero-intro">Seafood, dhaba favourites and a proper Pabna welcome. Pull in, settle down, and make a meal of it.</p>
            <div className="hero-cta"><Link href="/menu" className="button" data-testid="link-hero-menu">Explore the menu <ArrowRight size={16} /></Link><Link href="/visit" className="button outline" data-testid="link-hero-visit">Plan your visit</Link></div>
            <div className="hero-meta"><span className="rating" data-testid="text-google-rating"><Star size={14} fill="currentColor" /> {business.rating}<span> · {business.reviewCount} Google reviews</span></span><span>{business.priceRange}</span></div>
          </div>
          <div className="hero-visual reveal">
            <img className="hero-photo" src="/images/hero-fish.jpg" alt="Illustrative serving of crispy fish fry, bhuna curry and luchi on a dhaba table" width="1024" height="1024" fetchPriority="high" data-testid="img-home-hero" />
            <div className="photo-note"><strong>Illustrative food photo</strong>Actual plating may differ.</div>
          </div>
        </div>
      </section>
      <div className="ticker" aria-label="Seafood, dhaba favourites, and drinks"><div className="ticker-track"><span>Seafood from the river country</span><span>Dhaba favourites</span><span>A fresh mint lemonade</span><span>Pull in, eat well</span><span>Seafood from the river country</span><span>Dhaba favourites</span><span>A fresh mint lemonade</span><span>Pull in, eat well</span></div></div>
      <section className="section favorites">
        <div className="container">
          <div className="section-heading"><div><div className="eyebrow">Good things on the table</div><h2>Find your favourite.</h2></div><p>From crisp fish fry to cool lassi, there’s a little something for the whole ride.</p></div>
          <div className="food-grid">
            <article className="food-card"><figure><img src="/images/guest-favorites.png" alt="Food collage from Bikers Dhaba showing luchi and brain bhuna, tuna fish fry and other guest favourites" width="199" height="600" loading="lazy" /></figure><figcaption><div><h3>Luchi & Bhuna</h3><p>A dhaba favourite from the menu</p></div><Link className="arrow-link" href="/menu" data-testid="link-featured-menu-luchi">See menu <ArrowRight size={14} /></Link></figcaption></article>
            <article className="food-card"><figure><img src="/images/hero-fish.jpg" alt="Illustrative crisp fish fry with lemon and green chilli" width="1024" height="1024" loading="lazy" /></figure><figcaption><div><h3>Fish fry</h3><p>Rupchanda, tuna and more</p></div><Link className="arrow-link" href="/menu" data-testid="link-featured-menu-fish">Explore <ArrowRight size={14} /></Link></figcaption></article>
            <article className="food-card"><figure><img src="/images/crab-masala.jpg" alt="Illustrative bowl of crab masala served with mini luchi" width="1024" height="1024" loading="lazy" /></figure><figcaption><div><h3>Crab masala</h3><p>A richly spiced seafood pick</p></div><Link className="arrow-link" href="/menu" data-testid="link-featured-menu-crab">Explore <ArrowRight size={14} /></Link></figcaption></article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div className="split-image"><img src="/images/restaurant-interior.png" alt="Bikers Dhaba's colourful mural and dining space, as shown in a supplied business listing photograph" width="561" height="862" loading="lazy" /><div className="image-caption"><span>Inside Bikers Dhaba</span><span>Pabna, Bangladesh</span></div></div>
          <div className="split-copy"><div className="eyebrow">More than a pit stop</div><h2>A mural on the wall. A meal worth the detour.</h2><p>Find us off N6 in Pabna. The colourful interior, easygoing dhaba spirit and a menu spanning seafood, chaap and cool drinks make it a welcoming place to pause.</p><Link className="arrow-link" href="/about" data-testid="link-home-about">A little more about us <ArrowRight size={15} /></Link></div>
        </div>
      </section>
      <section className="visit-band"><div className="container visit-inner"><div><h2>Passing through Pabna?</h2><p>The listing shows opening at 11 AM; call ahead to confirm today’s hours.</p></div><Link className="button" href="/visit" data-testid="link-home-directions">Get directions <ArrowUpRight size={16} /></Link></div></section>
    </SiteLayout>
  );
}

function About() {
  return (
    <SiteLayout>
      <PageHeading eyebrow="The place & the people" title="A dhaba with its own kind of welcome." description="Bikers Dhaba brings together a colourful, mural-filled space and the generous mix of seafood and familiar dhaba plates." />
      <section className="section"><div className="container story-grid">
        <img className="story-photo" src="/images/restaurant-interior.png" alt="The Bikers Dhaba interior mural with a dining table and bench" width="561" height="862" loading="lazy" />
        <div className="story-copy"><div className="eyebrow">Right here in Pabna</div><h2>Make the stop part of the story.</h2><p>On N6 in Pabna, Bikers Dhaba is a place to pause for a meal, meet up with friends or refresh before carrying on. Its hand-painted mural brings colour to the room, while the menu moves from fish fry and crab masala to chaap, luchi and lassi.</p><p>Come by for dine-in, drive-through or delivery. For today's menu, price or availability, a quick call is the surest answer.</p><div className="story-note">Bikers Dhaba · বাইকার্স ধাবা</div></div>
      </div></section>
      <section className="values-row"><div className="container values-grid">
        <div className="value"><small>01 / THE SETTING</small><h3>Colourful by nature</h3><p>A bright, hand-painted mural gives the dining room a character all its own.</p></div>
        <div className="value"><small>02 / THE MENU</small><h3>From sea to dhaba</h3><p>Fish, seafood, chaap, luchi and drinks sit side by side on the menu.</p></div>
        <div className="value"><small>03 / THE STOP</small><h3>Make time to pause</h3><p>Find dine-in, drive-through and delivery at this Pabna roadside stop.</p></div>
      </div></section>
      <section className="section"><div className="container">
        <div className="section-heading"><div><div className="eyebrow">A look around</div><h2>Good colour. Good company.</h2></div><p>Real photographs from the supplied business listing, alongside guest food photos.</p></div>
        <div className="gallery-grid"><img src="/images/restaurant-interior.png" alt="Colourful Bikers Dhaba mural and dining interior" width="561" height="862" loading="lazy" /><img src="/images/guest-favorites.png" alt="Collage of dishes photographed by guests at Bikers Dhaba" width="199" height="600" loading="lazy" /></div>
      </div></section>
      <section className="visit-band"><div className="container visit-inner"><div><h2>Come by and see for yourself.</h2><p>26GW+G42, N6, Pabna · Listing shows opening at 11 AM</p></div><Link className="button" href="/visit" data-testid="link-about-visit">Plan your visit <ArrowUpRight size={16} /></Link></div></section>
    </SiteLayout>
  );
}

function Menu() {
  return <SiteLayout><PageHeading eyebrow="From the kitchen" title="A little bit of everything." description="Browse seafood, dhaba favourites, barbecue and something cool to drink. Call to check what's available today." /><MenuBrowser /></SiteLayout>;
}

function Visit() {
  return (
    <SiteLayout>
      <PageHeading eyebrow="Come on over" title="Your next stop: Pabna." description="Drop in for a meal, take a drive-through stop or call ahead. We’re at 26GW+G42 on N6." />
      <section className="section"><div className="container contact-layout">
        <div className="contact-info"><div className="eyebrow">Visit Bikers Dhaba</div><h2>Easy to find.<br />Hard to miss.</h2><p>Find us on N6 in Pabna. Listing hours show opening at 11 AM; full hours are not available, so please call to confirm.</p>
          <div className="contact-list">
            <div className="contact-row"><div className="contact-icon"><MapPin size={18} /></div><div><strong>Find us</strong><span>{business.address}</span></div></div>
            <div className="contact-row"><div className="contact-icon"><Phone size={17} /></div><div><strong>Call the dhaba</strong><a href={`tel:${business.phoneHref}`} data-testid="link-visit-phone">{business.phone}</a></div></div>
            <div className="contact-row"><div className="contact-icon"><Clock3 size={17} /></div><div><strong>Opening</strong><span data-testid="text-business-hours">Listing shows opening at {business.opensAt} · Full hours not listed; call to confirm.</span></div></div>
          </div>
          <a className="button" href={business.mapsUrl} target="_blank" rel="noopener noreferrer" data-testid="link-visit-maps">Open Google Maps <ArrowUpRight size={16} /></a>
        </div>
        <div className="map-card">
          <iframe title="Map showing Bikers Dhaba in Pabna, Bangladesh" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=24.0262604,89.2452605&z=15&output=embed" />
          <div className="map-overlay"><strong>Bikers Dhaba</strong><span>{business.address}</span><a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" data-testid="link-map-directions">Get directions</a></div>
        </div>
      </div></section>
      <section className="service-strip"><div className="container service-inner"><div className="service-copy"><strong>Choose your kind of stop.</strong><p>Service options shown on the business listing.</p></div><div className="service-pills">{business.services.map((service) => <span key={service}>{service}</span>)}</div></div></section>
      <section className="section"><div className="container split">
        <div className="split-copy"><div className="eyebrow">Good to know</div><h2>Call first, travel easy.</h2><p>Menu-board prices can change, and the full opening schedule isn't listed online. Give us a call to check current prices, availability and today's hours before setting out.</p><a className="arrow-link" href={`tel:${business.phoneHref}`} data-testid="link-price-confirmation-call">Call {business.phone} <ArrowRight size={15} /></a></div>
        <div className="split-image"><img src="/images/menu-board.png" alt="The restaurant's photographed menu board from August 2024; prices may be outdated" width="1272" height="691" loading="lazy" /><div className="image-caption"><span>Menu-board reference</span><span>2024 · confirm by phone</span></div></div>
      </div></section>
    </SiteLayout>
  );
}

function Router() {
  return <RoutedErrorBoundary><Switch><Route path="/" component={Home} /><Route path="/about" component={About} /><Route path="/menu" component={Menu} /><Route path="/visit" component={Visit} /><Route component={NotFound} /></Switch></RoutedErrorBoundary>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter></QueryClientProvider>;
}

export default App;
