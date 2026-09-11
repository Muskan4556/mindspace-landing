import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import About from "./components/About";
import Services from "./components/Services";
import QuoteBanner from "./components/QuoteBanner";
import OurOffice from "./components/OurOffice";
import Approach from "./components/Approach";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <About />
      <Services />
      <QuoteBanner />
      <OurOffice />
      <Approach />
      <FAQ />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
}
