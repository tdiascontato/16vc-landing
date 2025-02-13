import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Section } from './components/Section/Section';
import { Accelerator } from './components/Sections/Accelerator/Accelerator';
import { Fellowship } from './components/Sections/Fellowship/Fellowship';
import { HelpFounders } from './components/Sections/HelpFounders/HelpFounders';
import { MeetTeam } from './components/Sections/MeetTeam/MeetTeam';
import { WhoWeAre } from './components/Sections/WhoWheAre/WhoWeAre';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <div className="header-hero-wrapper">
        <Header />
        <Hero />
      </div>
      
      <Section title="Who We Are">
        <WhoWeAre />
      </Section>

      <Section title="How 16VC Helps Founders">
        <HelpFounders />
      </Section>
      
      <Section title="16VC Fellowship">
        <Fellowship />
      </Section>
      
      <Section title="16VC Accelerator">
        <Accelerator />
      </Section>
      
      <Section title="Meet the Team">
        <MeetTeam />
      </Section>

      <Footer />
    </>
  );
}

export default App;
