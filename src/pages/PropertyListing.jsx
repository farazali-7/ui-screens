import React, { useState } from 'react';
import {
  Heart, MapPin, Star, ChevronRight, SlidersHorizontal,
  Train, Leaf, ToggleLeft, ToggleRight, Check
} from 'lucide-react';

// ─── Data ──────────────────────────────────────────────────────────────────────
const HOTELS = [
  {
    id: 1,
    name: 'Luxe Studio Suite with Charming Juliet Balcony',
    neighborhood: 'Upper East Side, New York',
    distance: '1.1 miles from center',
    rating: 'Exceptional',
    score: 10,
    reviews: 1,
    locationScore: 10,
    isNew: true,
    roomType: 'Suite',
    roomDesc: 'Private suite',
    beds: '2 beds (1 sofa bed, 1 queen)',
    checkIn: 'Mon, Jul 17',
    checkOut: 'Wed, Jul 19',
    nights: 2,
    adults: 1,
    price: 801,
    urgency: 'Only 1 left at this price on our site',
    bgColor: 'bg-blue-50',
  },
  {
    id: 2,
    name: '5th & 55th Residence Club',
    neighborhood: 'Midtown East, New York',
    distance: '0.6 miles from center',
    rating: 'Exceptional',
    score: 10,
    reviews: 1,
    locationScore: 10,
    isNew: false,
    subway: true,
    roomType: 'Double Room',
    roomDesc: null,
    beds: '1 king bed',
    checkIn: 'Mon, Jul 3',
    checkOut: 'Wed, Jul 5',
    nights: 2,
    adults: 1,
    price: 1431,
    urgency: 'Only 1 room left at this price on our site',
    bgColor: 'bg-amber-50',
  },
  {
    id: 3,
    name: 'Luxury 2BR Duplex 5min to Central Park',
    neighborhood: 'Upper East Side, New York',
    distance: '1.1 miles from center',
    rating: 'Exceptional',
    score: 10,
    reviews: 1,
    locationScore: 10,
    isNew: true,
    roomType: 'Suite',
    roomDesc: 'Private suite · 2 bedrooms · 1 living room · 2 bathrooms · 72m²',
    beds: '4 beds (1 king, 1 sofa bed, 1 queen, 1 futon)',
    checkIn: 'Mon, Jul 3',
    checkOut: 'Wed, Jul 5',
    nights: 2,
    adults: 1,
    price: 1712,
    urgency: null,
    bgColor: 'bg-emerald-50',
  },
];

const BUDGET_OPTIONS = [
  { label: '$50 – $100', count: 18 },
  { label: '$100 – $150', count: 43 },
  { label: '$150 – $200', count: 176 },
  { label: '$200 +', count: 447 },
];

const BUSINESS_OPTIONS = [
  { label: '4 stars', count: 251 },
  { label: 'Very Good: 8+', count: 254, sub: 'Based on guest reviews' },
  { label: 'Breakfast Included', count: 175 },
  { label: 'Free cancellation', count: 434 },
  { label: 'Hotels', count: 401 },
  { label: 'Private bathroom', count: 407 },
  { label: 'No prepayment', count: 307 },
  { label: 'Parking', count: 306 },
];

const PROPERTY_RATINGS = [
  { label: '1 star', count: 5 },
  { label: '2 stars', count: 16 },
  { label: '3 stars', count: 121 },
  { label: '4 stars', count: 251 },
  { label: '5 stars', count: 63 },
  { label: 'Unrated', count: 27 },
];

// ─── Checkbox Row ──────────────────────────────────────────────────────────────
const CheckRow = ({ label, count, sub, checked, onChange }) => (
  <label className="flex items-start gap-2.5 cursor-pointer group">
    <div
      onClick={onChange}
      className={`mt-0.5 w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center transition-all duration-150 cursor-pointer
        ${checked ? 'bg-[#0071c2] border-[#0071c2]' : 'border-gray-400 group-hover:border-[#0071c2]'}`}
    >
      {checked && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex justify-between items-center gap-1">
        <span className="text-sm text-gray-700 leading-tight">{label}</span>
        <span className="text-sm text-gray-500 flex-shrink-0">{count}</span>
      </div>
      {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
    </div>
  </label>
);

// ─── Filter Section Block ──────────────────────────────────────────────────────
const FilterBlock = ({ title, children }) => (
  <div className="border-b border-gray-200 pb-4 mb-4">
    <h3 className="text-sm font-bold text-gray-900 mb-3">{title}</h3>
    {children}
  </div>
);

// ─── Sidebar ───────────────────────────────────────────────────────────────────
const FilterSidebar = () => {
  const [budgetToggle, setBudgetToggle] = useState(false);
  const [checkedBudget, setCheckedBudget] = useState({});
  const [checkedBiz, setCheckedBiz] = useState({});
  const [checkedSustain, setCheckedSustain] = useState(false);
  const [checkedRating, setCheckedRating] = useState({});

  const toggle = (obj, setObj, key) =>
    setObj(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <aside className="w-full lg:w-[260px] xl:w-[280px] flex-shrink-0">
      <div className="sticky top-4 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <h2 className="text-base font-bold text-gray-900 mb-4">Filter by:</h2>

        {/* Budget */}
        <FilterBlock title="Your Budget (per night)">
          {/* Toggle */}
          <div className="flex items-center gap-2 mb-3">
            <button
              onClick={() => setBudgetToggle(p => !p)}
              className="relative w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none"
              style={{ background: budgetToggle ? '#0071c2' : '#d1d5db' }}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${budgetToggle ? 'translate-x-5' : ''}`}
              />
            </button>
            <span className="text-sm text-gray-600">Set your own budget</span>
          </div>
          <div className="flex flex-col gap-2.5">
            {BUDGET_OPTIONS.map(opt => (
              <CheckRow
                key={opt.label}
                label={opt.label}
                count={opt.count}
                checked={!!checkedBudget[opt.label]}
                onChange={() => toggle(checkedBudget, setCheckedBudget, opt.label)}
              />
            ))}
          </div>
        </FilterBlock>

        {/* Business */}
        <FilterBlock title="Popular for Business Travelers">
          <div className="flex flex-col gap-2.5">
            {BUSINESS_OPTIONS.map(opt => (
              <CheckRow
                key={opt.label}
                label={opt.label}
                count={opt.count}
                sub={opt.sub}
                checked={!!checkedBiz[opt.label]}
                onChange={() => toggle(checkedBiz, setCheckedBiz, opt.label)}
              />
            ))}
          </div>
        </FilterBlock>

        {/* Sustainability */}
        <FilterBlock title="Sustainability">
          <CheckRow
            label="Travel Sustainable properties"
            count={246}
            sub="Properties taking steps to make your stay more sustainable"
            checked={checkedSustain}
            onChange={() => setCheckedSustain(p => !p)}
          />
        </FilterBlock>

        {/* Property Rating */}
        <div className="pb-2">
          <h3 className="text-sm font-bold text-gray-900 mb-1">Property rating</h3>
          <p className="text-xs text-gray-400 mb-3">Includes stars and other ratings</p>
          <div className="flex flex-col gap-2.5">
            {PROPERTY_RATINGS.map(opt => (
              <CheckRow
                key={opt.label}
                label={opt.label}
                count={opt.count}
                checked={!!checkedRating[opt.label]}
                onChange={() => toggle(checkedRating, setCheckedRating, opt.label)}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

// ─── Score Badge ───────────────────────────────────────────────────────────────
const ScoreBadge = ({ score }) => (
  <div
    className="w-9 h-9 rounded-tl-xl rounded-tr-xl rounded-br-xl flex items-center justify-center text-white font-bold text-base flex-shrink-0"
    style={{ background: '#003580' }}
  >
    {score}
  </div>
);

// ─── Hotel Card ────────────────────────────────────────────────────────────────
const HotelCard = ({ hotel }) => {
  const [saved, setSaved] = useState(false);

  return (
    <article className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col sm:flex-row">

      {/* Image */}
      <div className={`relative sm:w-[200px] md:w-[220px] flex-shrink-0 ${hotel.bgColor} min-h-[160px] sm:min-h-0`}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center p-4">
            <div className="w-16 h-16 rounded-full bg-white/60 flex items-center justify-center mx-auto mb-2">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <p className="text-xs text-gray-400">Property Image</p>
          </div>
        </div>
        <button
          onClick={() => setSaved(p => !p)}
          className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${saved ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col sm:flex-row flex-1 p-4 gap-4">

        {/* Main Info */}
        <div className="flex-1 min-w-0">
          {/* Name */}
          <a
            href="#"
            className="text-[#0071c2] font-bold text-lg leading-snug hover:underline hover:text-[#005999] transition-colors block mb-1"
          >
            {hotel.name}
          </a>

          {/* Location */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-2">
            <button className="text-xs text-[#0071c2] hover:underline font-medium">{hotel.neighborhood}</button>
            <span className="text-gray-300">·</span>
            <button className="text-xs text-[#0071c2] hover:underline">Show on map</button>
            <span className="text-xs text-gray-500">{hotel.distance}</span>
            {hotel.subway && (
              <span className="flex items-center gap-0.5 text-xs text-gray-600">
                <Train className="w-3 h-3" /> Subway Access
              </span>
            )}
          </div>

          {/* Room Type Badge */}
          <div className="inline-block border border-gray-300 rounded px-2 py-0.5 text-xs font-semibold text-gray-700 mb-2">
            {hotel.roomType}
          </div>

          {/* Room Details */}
          <div className="text-xs text-gray-600 leading-relaxed">
            {hotel.roomDesc && <p>{hotel.roomDesc}</p>}
            <p>{hotel.beds}</p>
          </div>

          {/* Urgency */}
          {hotel.urgency && (
            <p className="text-xs font-semibold text-red-600 mt-2">{hotel.urgency}</p>
          )}
        </div>

        {/* Pricing Panel */}
        <div className="flex flex-col items-end justify-between min-w-[160px] sm:min-w-[170px]">

          {/* Rating */}
          <div className="flex items-start gap-2 mb-2 sm:mb-0">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">{hotel.rating}</p>
              <p className="text-xs text-gray-500">{hotel.reviews} review</p>
              <p className="text-xs font-semibold text-[#0071c2] mt-0.5">Location {hotel.locationScore}</p>
              {hotel.isNew && (
                <span className="inline-block bg-yellow-400 text-yellow-900 text-[10px] font-bold px-1.5 py-0.5 rounded mt-1">
                  New to Booking.com
                </span>
              )}
            </div>
            <ScoreBadge score={hotel.score} />
          </div>

          {/* Dates + Price + CTA */}
          <div className="text-right">
            <div className="text-xs text-gray-500 border border-gray-300 rounded px-2 py-1 mb-2 inline-block">
              {hotel.checkIn} – {hotel.checkOut}
            </div>
            <p className="text-xs text-gray-500 mb-0.5">
              {hotel.nights} nights, {hotel.adults} adult
            </p>
            <p className="text-2xl font-bold text-gray-900 mb-3">${hotel.price.toLocaleString()}</p>
            <button
              className="flex items-center gap-1 text-sm font-semibold text-white px-4 py-2 rounded-lg transition-colors duration-200 hover:opacity-90"
              style={{ background: '#0071c2' }}
            >
              See availability
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

// ─── Page Header ───────────────────────────────────────────────────────────────
const PageHeader = () => (
  <div
    className="text-white px-6 py-10 md:py-14"
    style={{ background: 'linear-gradient(135deg, #003580 0%, #0071c2 100%)' }}
  >
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-1">New York: 684 properties found</h1>
      <p className="text-blue-200 text-sm">Mon, Jul 17 – Wed, Jul 19 · 2 nights · 1 adult · 1 room</p>

      {/* Search bar */}
      <div className="mt-5 flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          defaultValue="New York"
          className="flex-1 rounded-lg px-4 py-2.5 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="text"
          defaultValue="Mon, Jul 17 – Wed, Jul 19"
          className="sm:w-48 rounded-lg px-4 py-2.5 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="text"
          defaultValue="1 adult · 1 room"
          className="sm:w-36 rounded-lg px-4 py-2.5 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          className="bg-[#ffb700] hover:bg-[#f0ad00] text-gray-900 font-bold px-6 py-2.5 rounded-lg text-sm transition-colors duration-200"
        >
          Search
        </button>
      </div>
    </div>
  </div>
);

// ─── Sort Bar ──────────────────────────────────────────────────────────────────
const SortBar = () => {
  const [active, setActive] = useState('Top picks');
  const opts = ['Top picks', 'Homes & apts first', 'Price (low to high)', 'Best reviewed'];

  return (
    <div className="flex items-center gap-2 mb-5 overflow-x-auto pb-1">
      <span className="text-sm text-gray-600 flex-shrink-0 font-medium">Sort by:</span>
      {opts.map(o => (
        <button
          key={o}
          onClick={() => setActive(o)}
          className={`text-sm px-3 py-1.5 rounded-full border flex-shrink-0 transition-all duration-150 font-medium
            ${active === o
              ? 'bg-[#003580] text-white border-[#003580]'
              : 'border-gray-300 text-gray-700 hover:border-[#003580] hover:text-[#003580]'
            }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
};

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function PropertyListing() {
  const [mobileFilters, setMobileFilters] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Top Nav */}
      <nav className="bg-[#003580] border-b border-blue-900 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="bg-white rounded px-2 py-0.5">
              <span className="text-[#003580] font-extrabold text-lg tracking-tight">Booking</span>
            </div>
            <span className="text-blue-200 text-lg font-light">.com</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-white text-sm hover:bg-blue-700 px-3 py-1.5 rounded-lg transition-colors">Sign in</button>
            <button className="text-white text-sm bg-blue-700 hover:bg-blue-600 px-3 py-1.5 rounded-lg transition-colors font-medium">Register</button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <PageHeader />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">

        {/* Mobile filter button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setMobileFilters(p => !p)}
            className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:border-[#0071c2] transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>

        <div className="flex gap-6 items-start">

          {/* Sidebar — hidden on mobile unless toggled */}
          <div className={`${mobileFilters ? 'block' : 'hidden'} lg:block`}>
            <FilterSidebar />
          </div>

          {/* Results */}
          <div className="flex-1 min-w-0">
            <SortBar />

            <div className="flex flex-col gap-4">
              {HOTELS.map(hotel => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>

            {/* Load more */}
            <div className="mt-8 text-center">
              <button
                className="border-2 border-[#0071c2] text-[#0071c2] hover:bg-[#0071c2] hover:text-white font-semibold px-8 py-2.5 rounded-lg transition-all duration-200 text-sm"
              >
                Load more results
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 bg-gray-900 text-gray-400 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded px-2 py-0.5">
              <span className="text-[#003580] font-extrabold text-sm tracking-tight">Booking</span>
            </div>
            <span className="text-gray-400 text-sm font-light">.com</span>
          </div>
          <p className="text-xs text-gray-500">© 2025 Booking.com — All rights reserved</p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>curated by</span>
            <span className="font-bold text-white">Mobbin</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
