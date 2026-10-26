import { useEffect, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowUpRight, Bike, Menu as MenuIcon, X } from 'lucide-react';
import { business } from '@/data/business';

const pages = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Our story' },
  { href: '/menu', label: 'Menu' },
  { href: '/visit', label: 'Visit & contact' },
];

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Bikers Dhaba home" data-testid="link-brand-home">
      <span className="brand-mark"><Bike size={22} strokeWidth={1.7} /></span>
      <span className="brand-copy">
        <span className="brand-name">Bikers Dhaba</span>
        <span className="brand-bn" lang="bn">{business.bengaliName}</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [path] = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  return (
    <>
      <div className="topline">A roadside welcome in Pabna · listing shows opening at 11 AM</div>
      <header className="header">
        <div className="container nav-wrap">
          <Brand />
          <nav className="nav-links" aria-label="Main navigation">
            {pages.map((page) => <Link key={page.href} href={page.href} className={`nav-link ${path === page.href ? 'active' : ''}`} aria-current={path === page.href ? 'page' : undefined} data-testid={`link-nav-${page.label.toLowerCase().replaceAll(' ', '-')}`}>{page.label}</Link>)}
          </nav>
          <div className="nav-actions">
            <a className="phone-link" href={`tel:${business.phoneHref}`} data-testid="link-header-phone">{business.phone}</a>
            <Link href="/visit" className="button" data-testid="link-header-visit">Find us <ArrowUpRight size={15} /></Link>
            <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" data-testid="button-mobile-navigation" onClick={() => setOpen(!open)}>
              {open ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{pages.map((page) => <Link key={page.href} href={page.href} className={path === page.href ? 'active' : ''} aria-current={path === page.href ? 'page' : undefined} data-testid={`link-mobile-nav-${page.label.toLowerCase().replaceAll(' ', '-')}`}>{page.label}</Link>)}</nav>}
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div><Brand /><p className="footer-intro">A welcoming stop for good food and good company on the road through Pabna.</p></div>
          <div><h3>Find your way</h3><div className="footer-links"><a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" data-testid="link-footer-directions">Directions to the dhaba <ArrowUpRight size={13} /></a><span data-testid="text-business-address">{business.address}</span><a href={`tel:${business.phoneHref}`} data-testid="link-footer-phone">{business.phone}</a></div></div>
          <div><h3>Explore</h3><div className="footer-links">{pages.slice(1).map((page) => <Link key={page.href} href={page.href} data-testid={`link-footer-${page.label.toLowerCase().replaceAll(' ', '-')}`}>{page.label}</Link>)}<span>Dine-in · Drive-through · Delivery</span></div></div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Bikers Dhaba, Pabna</span>
          <span className="developer-credit">Developed by <a href="https://saidul-dev-mern.vercel.app" target="_blank" rel="noopener noreferrer" data-testid="link-developer-portfolio">Md. Saidul Islam</a></span>
          <span>Menu imagery includes supplied guest photos and representative illustrations.</span>
        </div>
      </div>
    </footer>
  );
}

export function PageHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-heading"><div className="container page-heading-grid"><div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1></div><p>{description}</p></div></section>;
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [path] = useLocation();
  useEffect(() => {
    const pageMetadata: Record<string, { title: string; description: string }> = {
      '/': {
        title: 'Bikers Dhaba | Restaurant in Pabna',
        description: 'Visit Bikers Dhaba in Pabna for seafood, dhaba favourites and a warm roadside welcome. Browse the menu, find us on N6 or call 01815-107701.',
      },
      '/about': {
        title: 'About Bikers Dhaba | Pabna restaurant',
        description: 'Get to know Bikers Dhaba in Pabna: a colourful, mural-filled restaurant serving seafood, luchi, chaap and refreshing drinks along N6.',
      },
      '/menu': {
        title: 'Menu | Bikers Dhaba restaurant in Pabna',
        description: 'Browse seafood, barbecue, dhaba favourites and drinks at Bikers Dhaba in Pabna. Menu-board prices may change; call 01815-107701 to confirm.',
      },
      '/visit': {
        title: 'Visit Bikers Dhaba | Location & contact in Pabna',
        description: 'Plan a visit to Bikers Dhaba on N6 in Pabna. Find our Google Maps location, service options and phone number; call to confirm today’s hours.',
      },
    };
    const metadata = pageMetadata[path] ?? {
      title: 'Bikers Dhaba | Restaurant in Pabna',
      description: 'Visit Bikers Dhaba in Pabna for seafood, dhaba favourites and a warm roadside welcome. Browse the menu, find us on N6 or call 01815-107701.',
    };
    document.title = metadata.title;
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.setAttribute('name', 'description');
      document.head.appendChild(description);
    }
    description.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', metadata.description);
  }, [path]);
  return <div className="site-shell"><Header /><main>{children}</main><Footer /></div>;
}
