import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import BlockPaving from './pages/BlockPaving'
import Resin from './pages/Resin'
import Patios from './pages/Patios'
import Landscaping from './pages/Landscaping'
import Fencing from './pages/Fencing'
import PressureWash from './pages/PressureWash'
import Gallery from './pages/Gallery'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/block-paving" element={<BlockPaving />} />
        <Route path="/resin" element={<Resin />} />
        <Route path="/patios" element={<Patios />} />
        <Route path="/landscaping" element={<Landscaping />} />
        <Route path="/fencing" element={<Fencing />} />
        <Route path="/pressure-wash" element={<PressureWash />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
