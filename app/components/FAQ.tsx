import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  faqs?: FAQItem[];
}

export default function FAQ({
  title = "Frequently Asked Questions",
  faqs = [
    {
      question: "What services do you offer for property development?",
      answer: "We offer comprehensive property development services including land acquisition, project planning and design, construction management, quality control and inspection, and timeline and budget management. Our team handles everything from concept to completion."
    },
    {
      question: "How long does a typical property development project take?",
      answer: "Project timelines vary depending on the scope and complexity. Residential projects typically take 6-18 months, while commercial developments can range from 12-36 months. We provide detailed timelines during the planning phase and keep you updated throughout the process."
    },
    {
      question: "Do you provide financing options for property purchases?",
      answer: "While we don't directly provide financing, we work with trusted financial partners and can help connect you with mortgage brokers and lenders who specialize in real estate investments. We also provide guidance on investment strategies and ROI calculations."
    },
    {
      question: "What areas do you serve for property development?",
      answer: "We primarily serve the Greater Accra region, with a strong focus on Oyarifa and surrounding areas. Our expertise includes both residential and commercial developments, and we're expanding our services to cover more locations across Ghana."
    },
    {
      question: "How do I get started with a property development project?",
      answer: "Getting started is easy! Simply contact us through our website, call our office, or visit us in person. We'll schedule a consultation to discuss your needs, budget, and timeline. Our team will then provide a detailed proposal and guide you through every step of the process."
    }
  ]
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Second item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-blue-900">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          {title}
        </h2>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index}>
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-6 px-0 flex items-center justify-between hover:bg-blue-800 transition-colors"
              >
                <span className="text-white text-lg pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-white flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-white flex-shrink-0" />
                )}
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="pb-6 pl-0">
                  <p className="text-gray-200 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}

              {/* Separator */}
              {index < faqs.length - 1 && (
                <div className="border-t border-white border-opacity-20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
