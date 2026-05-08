import { useEffect } from "react";
import { plans } from "./data/plans";
import {
  buildWhatsAppLink,
  finalWhatsappMessage,
  heroWhatsappMessage
} from "./config";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import GoalSection from "./components/GoalSection";
import ServiceSection from "./components/ServiceSection";
import PlansSection from "./components/PlansSection";
import PrivateAreaSection from "./components/PrivateAreaSection";
import BeforeAfterSection from "./components/BeforeAfterSection";
import RoutesSection from "./components/RoutesSection";
import FaqSection from "./components/FaqSection";
import FinalCta from "./components/FinalCta";
import BackToTopButton from "./components/BackToTopButton";
import ContactSection from "./components/ContactSection";

function scrollSlowTo(targetY, duration = 900) {
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  const startTime = performance.now();

  function easeInOutCubic(time) {
    return time < 0.5
      ? 4 * time * time * time
      : 1 - Math.pow(-2 * time + 2, 3) / 2;
  }

  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY + distance * eased);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

export default function App() {
  useEffect(() => {
    const handleAnchorClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) {
        return;
      }

      const href = link.getAttribute("href");
      if (!href || href === "#") {
        return;
      }

      const target = document.querySelector(href);
      if (!target) {
        return;
      }

      event.preventDefault();
      const targetY = target.getBoundingClientRect().top + window.pageYOffset - 12;
      scrollSlowTo(targetY);
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <>
      <Hero
        primaryCta={buildWhatsAppLink(heroWhatsappMessage)}
        secondaryCta="#planes"
      />
      <main>
        <ProblemSection />
        <GoalSection />
        <ServiceSection />
        <PlansSection plans={plans} />
        <PrivateAreaSection />
        <BeforeAfterSection />
        <RoutesSection />
        <FaqSection />
        <ContactSection />
        <FinalCta whatsappLink={buildWhatsAppLink(finalWhatsappMessage)} />
      </main>
      <footer>
        Piscinova · Mantenimiento de piscinas particulares · Solicitudes por
        formulario y WhatsApp
      </footer>
      <BackToTopButton />
    </>
  );
}
