import React from "react";
import {
  AboutUsSection,
  Clients,
  StatsSection,
  OurServicesSection,
  TestimonialsSection,
  PortFolioSection,
  OurTeamSection,
  PackagesSection,
  RecentBlogPostSection,
  ContactSection
} from ".";

export const MainInfo = () => {
  return (
    <main id="main">
      <AboutUsSection />
      <Clients />
      <StatsSection />
      <OurServicesSection />
      <TestimonialsSection />
      <PortFolioSection/>
      <OurTeamSection/>
      <PackagesSection/>
      <RecentBlogPostSection/>
      <ContactSection/>
    </main>
  );
};
