import About from "./(Homepage)/About";
import Herosection from "./(Homepage)/Herosection";
import Marquee from "./(Homepage)/Marquee";
import Services from "./(Homepage)/Services";
import GlobalSection from "./(Homepage)/GlobalSection";
import Industry from "./(Homepage)/Industry";
import HomeForm from "./(Homepage)/HomeForm";
import Process from "./(Homepage)/Process";
import CTASection from "./(Homepage)/CTAsection";
export default function Home() {
  return (
    <main>
      <Herosection />
      <About />
      <Services />
      <Marquee />
      <GlobalSection />
      <CTASection />
      <Process />
      <Industry />
      <HomeForm />
    </main>
  );
}
