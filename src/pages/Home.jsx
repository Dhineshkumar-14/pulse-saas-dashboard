import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import ProductShowcase from "../components/landing/ProductShowcase";
import HowItWorks from "../components/landing/HowItWorks";
import Testimonials from "../components/landing/Testimonials";
import Pricing from "../components/landing/Pricing";
import FAQ from "../components/landing/FAQ";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ProductShowcase />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
};

export default Home;
