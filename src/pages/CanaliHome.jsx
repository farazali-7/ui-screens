import { useState } from 'react';
import {
  Search, ChevronLeft, ChevronRight, Pause, Play, Menu, X,
  Home, Globe, ArrowRight, Check, Image as ImageIcon,
} from 'lucide-react';
import {
  SiFacebook, SiX, SiInstagram, SiPinterest, SiYoutube, SiVimeo, SiSinaweibo, SiWechat,
  SiVisa, SiMastercard, SiAmericanexpress, SiDinersclub, SiDiscover,
  SiGooglepay, SiJcb, SiPaypal, SiApplepay,
} from 'react-icons/si';

// ─── Static Data ───────────────────────────────────────────────────────────────
const NAV_LINKS = [
  'New Arrivals', 'Clothing', 'Shoes', 'Accessories',
  'Highlights', 'Made to Measure', 'Canali World',
];


const TOP_BAR_MESSAGES = [
  [
    { text: 'Subscribe to the newsletter', link: true },
    { text: ' to stay up to date with the latest news', link: false },
  ],
  [
    { text: 'Express shipping and free returns on all orders. ', link: false },
    { text: 'Learn more', link: true },
  ],
];

const CATEGORY_TILES = [
  { label: 'Casual Pants' },
  { label: 'Shoes' },
  { label: 'Shirts' },
];

const FEATURED_PRODUCTS = [
  { name: 'White double-breasted linen and silk blend modern-fit Kei jacket' },
  { name: 'Milk-colored interlock jersey cotton T-shirt' },
  { name: 'Light gray linen and cotton cargo pants with drawstring' },
  { name: 'White linen and silk blend baseball cap' },
];

const INFO_COLUMNS = [
  {
    title: 'Find a Store',
    body: 'A refined aesthetic as the perfect backdrop to showcase the Canali collections each season.',
    links: ['Find your boutique', 'Book an appointment'],
  },
  {
    title: 'Me by Canali',
    body: 'Me by Canali transforms the Made to Measure experience, allowing you to create a collection of both formal and casual garments.',
    links: ['Discover more'],
  },
  {
    title: 'Canali Care',
    body: 'The global project within which the company has decided to ascribe all its sustainability initiatives.',
    links: ['Discover more'],
  },
];

const FOOTER_COLUMNS = [
  { title: 'Our Brand', links: ['About Us', 'Collection'] },
  { title: 'Customer Care', links: ['Contact Us', 'Request an appointment'] },
  {
    title: 'Legal & Privacy',
    links: ['Website Terms of use', 'General sales conditions', 'Privacy', 'Cookies', 'Accessibility Statement'],
  },
];

const PAYMENT_METHODS = [
  { label: 'Affirm', Icon: null, color: null },
  { label: 'Amex', Icon: SiAmericanexpress, color: '#006FCF' },
  { label: 'Apple Pay', Icon: SiApplepay, color: '#000000' },
  { label: 'Diners', Icon: SiDinersclub, color: '#0079BE' },
  { label: 'Discover', Icon: SiDiscover, color: '#FF6000' },
  { label: 'G Pay', Icon: SiGooglepay, color: '#4285F4' },
  { label: 'JCB', Icon: SiJcb, color: '#0E4C96' },
  { label: 'Mastercard', Icon: SiMastercard, color: '#EB001B' },
  { label: 'PayPal', Icon: SiPaypal, color: '#00457C' },
  { label: 'Union Pay', Icon: null, color: null },
  { label: 'Visa', Icon: SiVisa, color: '#1A1F71' },
];

const SOCIAL_LINKS = [
  { label: 'Facebook', Icon: SiFacebook },
  { label: 'X', Icon: SiX },
  { label: 'Instagram', Icon: SiInstagram },
  { label: 'Pinterest', Icon: SiPinterest },
  { label: 'Youtube', Icon: SiYoutube },
  { label: 'Vimeo', Icon: SiVimeo },
  { label: 'Weibo', Icon: SiSinaweibo },
  { label: 'WeChat', Icon: SiWechat },
];

// ─── Reusable Placeholder ──────────────────────────────────────────────────────
const ImagePlaceholder = ({ className = '', label }) => (
  <div
    role="img"
    aria-label={label || 'Image placeholder'}
    className={`relative flex items-center justify-center bg-neutral-200 ${className}`}
  >
    <div className="flex flex-col items-center gap-1.5 text-neutral-400">
      <ImageIcon className="w-6 h-6" strokeWidth={1.25} />
      {label && <span className="text-[10px] tracking-wide uppercase">{label}</span>}
    </div>
  </div>
);

// ─── Top Utility Bar ───────────────────────────────────────────────────────────
const TopBar = () => {
  const [index, setIndex] = useState(0);
  const segments = TOP_BAR_MESSAGES[index];
  const cycle = (dir) =>
    setIndex((p) => (p + dir + TOP_BAR_MESSAGES.length) % TOP_BAR_MESSAGES.length);

  return (
    <div className="bg-[#5c6d59] text-white text-xs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-9 flex items-center justify-between gap-4">
        <button className="hidden sm:inline hover:underline whitespace-nowrap">Find a Boutique</button>

        <div className="flex items-center gap-3 mx-auto">
          <button onClick={() => cycle(-1)} aria-label="Previous message" className="hover:opacity-70">
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <p className="whitespace-nowrap">
            {segments.map((seg, i) =>
              seg.link ? (
                <a key={i} href="#" className="underline font-medium">{seg.text}</a>
              ) : (
                <span key={i}>{seg.text}</span>
              )
            )}
          </p>
          <button onClick={() => cycle(1)} aria-label="Next message" className="hover:opacity-70">
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <button className="hidden sm:inline hover:underline whitespace-nowrap">Customer Care</button>
      </div>
    </div>
  );
};

// ─── Header / Nav ──────────────────────────────────────────────────────────────
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-neutral-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="lg:hidden text-neutral-800"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <a href="#" className="font-serif text-2xl sm:text-3xl tracking-[0.15em] text-neutral-900">
          CANALI
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-neutral-700 hover:text-neutral-950 transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <button aria-label="Search" className="text-neutral-800 hover:opacity-70 transition-opacity">
          <Search className="w-5 h-5" />
        </button>
      </div>

      {menuOpen && (
        <nav className="lg:hidden border-t border-neutral-200 px-4 py-3 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="text-sm text-neutral-700">
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

// ─── Hero Slide (used for both the static hero and the video banner) ──────────
const HeroSlide = ({ headingLines, eyebrow, cta, mediaLabel, withMediaControls }) => {
  const [playing, setPlaying] = useState(true);

  return (
    <section className="relative h-[78vh] min-h-[420px] max-h-[820px] w-full overflow-hidden">
      <ImagePlaceholder className="absolute inset-0 w-full h-full" label={mediaLabel} />

      <div className="absolute inset-0 flex items-end sm:items-center">
        <div className="max-w-[1440px] mx-auto w-full px-6 sm:px-10 pb-12 sm:pb-0">
          <h1 className="font-serif text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
            {headingLines.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </h1>
          <p className="mt-4 text-white text-xs tracking-[0.25em] uppercase">{eyebrow}</p>
          <button className="mt-6 border border-white text-white text-xs tracking-[0.2em] uppercase px-7 py-3 hover:bg-white hover:text-neutral-900 transition-colors duration-200">
            {cta}
          </button>
        </div>
      </div>

      {withMediaControls && (
        <button
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? 'Pause video' : 'Play video'}
          className="absolute bottom-6 right-6 sm:right-10 w-9 h-9 border border-white/80 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
      )}
    </section>
  );
};

// ─── Category Tiles ────────────────────────────────────────────────────────────
const CategoryTiles = () => (
  <section className="grid grid-cols-1 sm:grid-cols-3">
    {CATEGORY_TILES.map((tile) => (
      <div key={tile.label} className="relative h-[280px] sm:h-[360px] group cursor-pointer">
        <ImagePlaceholder className="absolute inset-0 w-full h-full" label={tile.label} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-white text-2xl tracking-[0.1em] uppercase drop-shadow">
            {tile.label}
          </span>
        </div>
      </div>
    ))}
  </section>
);

// ─── Featured Section ──────────────────────────────────────────────────────────
const FeaturedSection = () => (
  <section className="max-w-[1440px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
    <h2 className="font-serif text-3xl sm:text-4xl text-center text-neutral-900 tracking-wide mb-10">
      Featured
    </h2>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 sm:gap-0 sm:bg-transparent">
      {FEATURED_PRODUCTS.map((product) => (
        <div key={product.name} className="bg-white">
          <ImagePlaceholder className="aspect-[3/4] w-full" label="Product" />
          <p className="mt-3 text-sm text-neutral-700 leading-snug pr-3">{product.name}</p>
        </div>
      ))}
    </div>
  </section>
);

// ─── Info Columns ───────────────────────────────────────────────────────────────
const InfoColumns = () => (
  <section className="bg-[#e9e6df]">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-3 gap-10">
      {INFO_COLUMNS.map((col) => (
        <div key={col.title}>
          <ImagePlaceholder className="aspect-[4/3] w-full mb-6" label={col.title} />
          <h3 className="font-serif text-2xl text-neutral-900 tracking-wide mb-3">{col.title}</h3>
          <p className="text-sm text-neutral-600 leading-relaxed mb-4">{col.body}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {col.links.map((link) => (
              <a key={link} href="#" className="text-sm text-neutral-900 underline underline-offset-4 hover:text-neutral-600">
                {link}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

// ─── Footer ─────────────────────────────────────────────────────────────────────
const Footer = () => {
  const [consent, setConsent] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-[#5c6d59] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        {/* Newsletter */}
        <div>
          <h3 className="font-serif text-xl tracking-wide mb-3">Newsletter</h3>
          <p className="text-sm text-white/80 mb-5 max-w-sm">
            Sign up to receive email updates on Canali&apos;s latest collections, campaigns and videos.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-end gap-3 border-b border-white/40 pb-1.5 max-w-sm"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email*"
              className="flex-1 bg-transparent text-sm placeholder-white/60 focus:outline-none"
            />
            <button type="submit" aria-label="Subscribe" className="hover:opacity-70">
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <label className="flex items-start gap-2.5 mt-5 cursor-pointer max-w-sm">
            <span
              onClick={() => setConsent((p) => !p)}
              className={`mt-0.5 w-4 h-4 flex-shrink-0 border border-white/70 flex items-center justify-center transition-colors ${consent ? 'bg-white' : ''}`}
            >
              {consent && <Check className="w-3 h-3 text-[#5c6d59]" strokeWidth={3} />}
            </span>
            <span className="text-xs text-white/80 leading-relaxed">
              I consent to the processing of my data to receive newsletters, as per the{' '}
              <a href="#" className="underline">Privacy policy</a>*.
            </span>
          </label>
          <p className="text-xs text-white/60 mt-3">*Mandatory fields</p>
        </div>

        {/* Link columns */}
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs tracking-[0.15em] uppercase text-white/70 mb-4">{col.title}</h4>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:underline">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Boutique / payment row */}
      <div className="border-t border-white/20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2 text-sm hover:underline">
              <Home className="w-4 h-4" /> Find a Boutique
            </a>
            <a href="#" className="flex items-center gap-2 text-sm hover:underline">
              <Globe className="w-4 h-4" /> International
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-sm text-white/80">Accepted payment methods:</span>
            <div className="flex flex-wrap gap-1.5">
              {PAYMENT_METHODS.map((method) => (
                <span
                  key={method.label}
                  title={method.label}
                  className="bg-white h-6 min-w-[2.25rem] px-2 rounded-sm flex items-center justify-center"
                >
                  {method.Icon ? (
                    <method.Icon className="w-4 h-4" style={{ color: method.color }} />
                  ) : (
                    <span className="text-[#5c6d59] text-[9px] font-semibold tracking-wide leading-none">
                      {method.label}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright row */}
      <div className="border-t border-white/20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/70 text-center sm:text-left">
            © 2026 Canali SpA a socio unico, soggetta a direzione e coordinamento di Canali Holding SpA -
            Partita I.V.A. 00694880964 - All Rights Reserved
          </p>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a key={social.label} href="#" aria-label={social.label} className="hover:opacity-70">
                <social.Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// ─── Page ───────────────────────────────────────────────────────────────────────
export default function CanaliHome() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <TopBar />
      <Header />

      <main>
        <HeroSlide
          headingLines={['High', 'Summer']}
          eyebrow="New Arrivals"
          cta="Discover More"
          mediaLabel="High Summer hero"
        />

        <HeroSlide
          headingLines={['Spring', 'Summer 2027']}
          eyebrow="Preview"
          cta="Discover the Looks"
          mediaLabel="Spring Summer 2027 preview video"
          withMediaControls
        />

        <CategoryTiles />
        <FeaturedSection />
        <InfoColumns />
      </main>

      <Footer />
    </div>
    
  );
}
