import { Routes, Route, Link } from 'react-router-dom'
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'
import ContactSection from './pages/ContactSection'
import PropertyListing from './pages/PropertyListing'
import CanaliHome from './pages/CanaliHome'

function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginBottom: '1rem' }}>Page Previewer</h1>
      <p style={{ color: '#666', marginBottom: '1.5rem' }}>
        Add page components in <code>src/pages/</code> and register their routes below.
      </p>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <li><Link to="/page-one">/page-one → PageOne</Link></li>
        <li><Link to="/page-two">/page-two → PageTwo</Link></li>
        <li><Link to="/contact">/contact → ContactSection</Link></li>
        <li><Link to="/property-listing">/property-listing → PropertyListing</Link></li>
        <li><Link to="/canali">/canali → CanaliHome</Link></li>
      </ul>
    </div>
  )
}

function NotFound() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>404 — Page not found</h1>
      <p>Add a route for this URL in <code>src/App.jsx</code>.</p>
      <Link to="/">← Home</Link>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page-one" element={<PageOne />} />
      <Route path="/page-two" element={<PageTwo />} />
      <Route path="/contact" element={<ContactSection />} />
      <Route path="/property-listing" element={<PropertyListing />} />
      <Route path="/canali" element={<CanaliHome />} />
      {/* Add more routes here: <Route path="/your-slug" element={<YourPage />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
