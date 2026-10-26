import type { MenuItem } from '@workspace/api-client-react';

type MenuImage = {
  src: string;
  alt: string;
  kind: 'guest-photo' | 'illustrative';
};

const guestPhoto = (file: string, dishName: string): MenuImage => ({
  src: `/images/menu/${file}`,
  alt: `Guest photo of ${dishName} from the supplied Bikers Dhaba photo collage`,
  kind: 'guest-photo',
});

const illustration = (src: string, dishName: string): MenuImage => ({
  src,
  alt: `Illustrative image representing ${dishName}; actual plating may differ`,
  kind: 'illustrative',
});

const photosByDish: Record<string, MenuImage> = {
  'Luchi & Brain Bhuna': guestPhoto('luchi-brain-bhuna.jpg', 'luchi and brain bhuna'),
  'Luchi & Kolija Bhuna': guestPhoto('luchi-kolija-bhuna.jpg', 'luchi and kolija bhuna'),
  'Tiger Set': guestPhoto('tiger-set.jpg', 'the Tiger Set'),
  'Khichuri with Beef and Achar': guestPhoto('khichuri-beef.jpg', 'khichuri with beef and achar'),
  'Chicken Chaap with Luchi': guestPhoto('chicken-chaap-luchi.jpg', 'chicken chaap with luchi'),
  'Octopus Luchi & Beef Chaap': guestPhoto('octopus-beef-chaap.jpg', 'octopus, luchi and beef chaap'),
  'Luchi & Chaap': guestPhoto('luchi-chaap.jpg', 'luchi and chaap'),
  'Tuna Fish Fry': guestPhoto('tuna-fish-fry.jpg', 'tuna fish fry'),
  'Rupchanda Fish Fry': guestPhoto('whole-fish.jpg', 'whole fried fish'),
  'Loitta Fish Fry': guestPhoto('fish-curry.jpg', 'a fish dish'),
  'Tilapia Fish': guestPhoto('whole-fish.jpg', 'whole fried fish'),
  'Octopus Fry': guestPhoto('octopus-beef-chaap.jpg', 'octopus and chaap'),
  'Squid Fry': guestPhoto('octopus-beef-chaap.jpg', 'octopus and chaap'),
  'Crab Fry': illustration('/images/crab-masala.jpg', 'crab'),
  'Crab Masala': illustration('/images/crab-masala.jpg', 'crab masala'),
  'BBQ Chicken Quarter': guestPhoto('chicken-chaap-luchi.jpg', 'chicken chaap'),
  'Chana Dal with Beef Koliza': guestPhoto('luchi-kolija-bhuna.jpg', 'kolija bhuna'),
  'Mogoj Masala': guestPhoto('luchi-brain-bhuna.jpg', 'brain bhuna'),
  'Chicken Chaap': guestPhoto('chicken-chaap-luchi.jpg', 'chicken chaap'),
  'Beef Chaap': guestPhoto('luchi-chaap.jpg', 'luchi and chaap'),
  'Dhaba Special Kheer': illustration('/images/menu/kheer.svg', 'kheer'),
  'Chole Bhature': illustration('/images/crab-masala.jpg', 'chole bhature'),
  'Mini Luchi': illustration('/images/crab-masala.jpg', 'mini luchi'),
  'Mint Lemonade': guestPhoto('chicken-chaap-luchi.jpg', 'mint lemonade'),
  'Lemon Lassi': illustration('/images/menu/lassi.svg', 'lemon lassi'),
  'Cashewnut Lassi': illustration('/images/menu/lassi.svg', 'cashewnut lassi'),
  'Chocolate Cold Coffee': illustration('/images/menu/chocolate-coffee.svg', 'chocolate cold coffee'),
  'Strawberry Milkshake': illustration('/images/menu/strawberry-milkshake.svg', 'strawberry milkshake'),
  'Oreo Milkshake': illustration('/images/menu/oreo-milkshake.svg', 'Oreo milkshake'),
};

const fallbackByCategory: Record<MenuItem['category'], MenuImage> = {
  Seafood: illustration('/images/hero-fish.jpg', 'a seafood dish'),
  'Dhaba favourites': illustration('/images/crab-masala.jpg', 'a dhaba favourite'),
  Barbecue: illustration('/images/hero-fish.jpg', 'a barbecue dish'),
  Drinks: illustration('/images/menu/lassi.svg', 'a chilled drink'),
};

export function getMenuImage(item: MenuItem): MenuImage {
  return photosByDish[item.name] ?? fallbackByCategory[item.category];
}
