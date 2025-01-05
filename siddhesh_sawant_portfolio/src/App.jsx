import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import WorkExperience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

const App = () => {
  return (
    <main className="max-w-8xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
export default App;