"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Services", id: "services" },
        { name: "About", id: "about" },
        { name: "Reviews", id: "reviews" },
        { name: "Contact", id: "contact" }
      ]}
      brandName="EL GREÑAS"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="THE LAWN CREW YOUR NEIGHBORS KEEP CALLING."
      description="Family-owned. Locally trusted. Serving the Kansas City area with pride."
      buttons={[
        { text: "Get a Free Quote", href: "#contact" },
        { text: "See Our Work", href: "#before-after" }
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BUi3iQ5NJABCtAX7paZscO6Xyz/premium-professional-lawn-care-advertise-1774549896628-281ff2bb.png"
      showDimOverlay={true}
    />
  </div>

  <div id="stats" data-section="stats">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        { id: "m1", value: "Family", title: "Owned", items: ["Edy & Son crew", "Local KC roots"] },
        { id: "m2", value: "4.7★", title: "Rating", items: ["12 Google Reviews", "Neighbors recommend"] },
        { id: "m3", value: "Honest", title: "Pricing", items: ["Competitive rates", "No hidden fees"] },
        { id: "m4", value: "Fast", title: "Response", items: ["Ready to work", "Prompt service"] }
      ]}
      title="Trusted by KC"
      description="Experience you can count on."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { id: "s1", title: "Lawn Mowing", tags: ["Weekly/Bi-weekly", "Edging included"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BUi3iQ5NJABCtAX7paZscO6Xyz/close-up-of-commercial-lawn-mower-on-hea-1774549896454-11bdde69.png" },
        { id: "s2", title: "Lawn Restoration", tags: ["Dead to green", "Healthier soil"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BUi3iQ5NJABCtAX7paZscO6Xyz/lawn-restoration-after-and-before-concep-1774549898729-df1b260b.png" },
        { id: "s3", title: "Trimming & Edging", tags: ["Crisp lines", "Clean borders"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BUi3iQ5NJABCtAX7paZscO6Xyz/professional-lawn-trimmer-edging-a-garde-1774549896515-440328ff.png" },
        { id: "s4", title: "Seasonal Cleanup", tags: ["Spring/Fall", "Debris cleared"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BUi3iQ5NJABCtAX7paZscO6Xyz/spring-garden-cleanup-showing-debris-bei-1774549897089-f758450d.png" },
        { id: "s5", title: "Residential Care", tags: ["Professional", "Dependable"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BUi3iQ5NJABCtAX7paZscO6Xyz/beautiful-suburban-residential-lawn-well-1774549896532-9378c349.png" },
        { id: "s6", title: "Commercial", tags: ["Business", "Rental"], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BUi3iQ5NJABCtAX7paZscO6Xyz/professional-commercial-office-lawn-care-1774549897041-f2a9c291.png" }
      ]}
      title="What We Do"
      description="From overgrown to show-ready — we handle it all."
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="Family You Can Trust"
      description="Edy and his son show up personally to every job. This isn't a faceless franchise — it's a family that takes pride in their work and your yard. We deliver results with the pride of a local family business."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BUi3iQ5NJABCtAX7paZscO6Xyz/father-and-son-professional-landscaping--1774549898049-a2259f05.png"
    />
  </div>

  <div id="before-after" data-section="before-after">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "ba1", name: "Lawn Transformation 01", price: "Restored", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BUi3iQ5NJABCtAX7paZscO6Xyz/detailed-before-and-after-shot-of-a-lawn-1774549897513-bba00862.png?_wi=1" },
        { id: "ba2", name: "Lawn Transformation 02", price: "Healthy", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BUi3iQ5NJABCtAX7paZscO6Xyz/detailed-before-and-after-shot-of-a-lawn-1774549897513-bba00862.png?_wi=2" },
        { id: "ba3", name: "Lawn Transformation 03", price: "Green", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BUi3iQ5NJABCtAX7paZscO6Xyz/detailed-before-and-after-shot-of-a-lawn-1774549897513-bba00862.png?_wi=3" }
      ]}
      title="From Dead to Green"
      description="Real lawns. Real results. Kansas City families we've helped."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          name: "Antony P.",          date: "Jan 2025",          title: "Happy Homeowner",          quote: "An amazing job — my yard was dead and in a couple of weeks full of grass and green.",          tag: "Top Rated",          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BUi3iQ5NJABCtAX7paZscO6Xyz/professional-headshot-of-a-happy-homeown-1774549895917-d9f5503d.png",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BUi3iQ5NJABCtAX7paZscO6Xyz/lush-vibrant-garden-overview-1774549897067-432667ea.png"
        },
        {
          id: "t2",          name: "James S.",          date: "Dec 2024",          title: "Reliable Client",          quote: "Great work and very reasonable on price. Edy is a very hard worker along with his son. I highly recommend him.",          tag: "Verified",          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BUi3iQ5NJABCtAX7paZscO6Xyz/professional-headshot-of-a-satisfied-pro-1774549896135-56413d4b.png",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BUi3iQ5NJABCtAX7paZscO6Xyz/perfectly-manicured-lawn-detail-1774549896783-83120808.png"
        },
        {
          id: "t3",          name: "Sarah W.",          date: "Nov 2024",          title: "KC Resident",          quote: "Great work, professional, responsive, and competitively priced. These guys are the real deal.",          tag: "Repeat Client",          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BUi3iQ5NJABCtAX7paZscO6Xyz/portrait-of-a-local-kc-resident-1774549895962-4f3c0a92.png",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BUi3iQ5NJABCtAX7paZscO6Xyz/green-lawn-stripes-close-up-1774549896397-c08a6987.png"
        },
        {
          id: "t4",          name: "Michael R.",          date: "Oct 2024",          title: "Business Owner",          quote: "Very professional and consistent quality. They really care about the lawn's long term health.",          tag: "Commercial",          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BUi3iQ5NJABCtAX7paZscO6Xyz/portrait-of-a-happy-business-owner-1774549898882-1cf6dacb.png",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BUi3iQ5NJABCtAX7paZscO6Xyz/lush-residential-backyard-view-1774549898458-388484b5.png"
        }
      ]}
      title="What Our Customers Say"
      description="4.7 ⭐ on Google · Read all 12 reviews"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "sparkles-gradient" }}
      tag="Get Your Free Quote"
      title="Ready for a green lawn?"
      description="We respond fast. Usually within a few hours."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="EL GREÑAS"
      copyrightText="© 2025 El Greñas Lawn Mowing · Kansas City, MO"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
