import Stats from "~/components/Stats";
import PageHero from "../components/PageHero";
import WhyChooseUsServices from "~/components/WhyChooseUsServices";
import WhatDrivesUs from "~/components/WhatDrivesUs";
import OurJourney from "~/components/OurJourney";
import MeetOurLeadership from "~/components/MeetOurLeadership";

export default function AboutPage() {
  return (
    <>
      <PageHero 
        title="About Nukoo Constructions"
        subtitle="Building dreams and creating exceptional spaces for over a decade"
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
        backgroundImageAlt="Construction site with modern buildings"
      />
      <Stats showIcons={false}/>
      <WhyChooseUsServices showStatsOverlay={false}/>
      <WhatDrivesUs/>
      <OurJourney/>
      <MeetOurLeadership/>
    </>
  );
}
