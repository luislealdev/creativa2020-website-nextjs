import React from "react";
import {
  AboutUsSection,
  Clients,
  TestimonialsSection,
  PackagesSection,
  RecentBlogPostSection,
  ContactSection
} from ".";

export const MainInfo = () => {
  return (
    <main id="main">
      <AboutUsSection />
      <Clients />
      <PackagesSection />
      <TestimonialsSection />
      <RecentBlogPostSection />
      <ContactSection />
    </main>
  );
};
