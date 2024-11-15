import Blog from './components/blog/Blog';
import Footer from './components/common/Footer';
import Nav from './components/common/Nav';
import Hero from './components/home/Hero';
import RecentPost from './components/home/RecentPost';
import FeaturedWork from './components/common/FeaturedWork';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Work from './components/work/Work';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

const Home = () => {
  return (
    <>
      <Hero />
      <RecentPost />
      <FeaturedWork />
    </>
  )
}
export default App