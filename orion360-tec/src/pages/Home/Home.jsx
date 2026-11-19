import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import WhyOrion from "../../components/WhyOrion/WhyOrion";
import Process from "../../components/Process/Process";
import About from "../../components/About/About";
import ContactCta from "../../components/ContactCta/ContactCta";

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyOrion />
      <Process />
      <About />
      <ContactCta />
    </main>
  );
}

export default Home;
