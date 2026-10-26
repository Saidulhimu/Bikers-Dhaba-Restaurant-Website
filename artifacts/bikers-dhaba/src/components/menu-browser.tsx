import { useMemo, useState } from 'react';
import { useGetMenu, type MenuCategory } from '@workspace/api-client-react';
import { business } from '@/data/business';
import { getMenuImage } from '@/data/menu-images';

export function MenuBrowser() {
  const menuQuery = useGetMenu();
  const [category, setCategory] = useState<MenuCategory | 'All'>('All');
  const categories = useMemo(() => ['All', ...(menuQuery.data?.categories ?? [])] as const, [menuQuery.data]);
  const items = useMemo(
    () => (menuQuery.data?.items ?? []).filter((item) => category === 'All' || item.category === category),
    [category, menuQuery.data],
  );

  if (!menuQuery.data && menuQuery.isLoading) {
    return <section className="menu-section"><div className="container"><p className="menu-state" role="status">Loading the menu…</p></div></section>;
  }

  if (!menuQuery.data) {
    return (
      <section className="menu-section">
        <div className="container">
          <div className="menu-state" role="alert">
            <p>We couldn’t load the menu right now. Call {business.phone} to check today’s options.</p>
            <button type="button" onClick={() => void menuQuery.refetch()} data-testid="button-retry-menu">Try again</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="menu-section">
      <div className="container">
        <div className="menu-toolbar">
          <div className="filter-list" role="group" aria-label="Filter menu category">
            {categories.map((item) => <button type="button" key={item} className={`filter-button ${category === item ? 'active' : ''}`} aria-pressed={category === item} data-testid={`filter-menu-${item.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setCategory(item)}>{item}</button>)}
          </div>
          <p className="menu-disclaimer">Some dish photos are representative. Prices are transcribed from the supplied 2024 menu board and may be outdated; please call to confirm.</p>
        </div>
        <div className="menu-grid" aria-live="polite">
          {items.map((item) => {
            const photo = getMenuImage(item);
            return (
              <article className="menu-item" key={item.name} data-testid={`menu-item-${item.name.toLowerCase().replaceAll(' ', '-')}`}>
                <div className="menu-item-image">
                  <img src={photo.src} alt={photo.alt} width="492" height="410" loading="lazy" decoding="async" data-testid={`img-menu-${item.name.toLowerCase().replaceAll(' ', '-')}`} />
                  {photo.kind === 'illustrative' && <span className="menu-photo-badge">Illustrative</span>}
                </div>
                <div className="menu-item-copy">
                  <div><h3>{item.name}</h3><small>{item.category}</small></div>
                  {item.boardPrice && <span className="menu-tag">Board · {item.boardPrice}</span>}
                </div>
              </article>
            );
          })}
        </div>
        <div className="menu-photos">
          <figure><img src="/images/guest-favorites.png" alt="Collage of food photographs from Bikers Dhaba, including luchi, fish fry and curry dishes" width="199" height="600" loading="lazy" /><figcaption>Guest food photographs from the business listing.</figcaption></figure>
          <figure><img src="/images/menu-board.png" alt="Photograph of Bikers Dhaba's yellow seafood and dhaba menu board, dated August 2024" width="1272" height="691" loading="lazy" /><figcaption>Menu-board reference, photographed in 2024; prices may have changed.</figcaption></figure>
        </div>
        <p className="menu-note">Call <a href={`tel:${business.phoneHref}`} data-testid="link-menu-phone">{business.phone}</a> to check availability and current prices before you visit.</p>
      </div>
    </section>
  );
}
