import { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";
import FAQAccordion from "@/components/FAQAccordion";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "Web 4.0 FAQ — Common Questions Answered",
  description:
    "Is Web 4.0 real? When is it coming? How is it different from Web3? Get clear answers to the most common questions about the next evolution of the internet.",
};

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
        <SectionReveal>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Frequently Asked <span className="text-accent">Questions</span>
          </h1>
          <p className="mt-4 text-xl text-muted max-w-2xl">
            The most common questions about Web 4.0 — answered clearly and honestly.
          </p>
        </SectionReveal>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24 space-y-4">
        {faqItems.map((item, i) => (
          <FAQAccordion
            key={item.question}
            question={item.question}
            answer={item.answer}
            index={i}
          />
        ))}
      </section>
    </main>
  );
}
