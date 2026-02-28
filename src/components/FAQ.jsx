import { useState } from "react";

const ITEMS = [
  {
    q: "How do I get started?",
    a: "Click the 'Start Coding Free' button in the hero section and sign up with your email. You'll be up and running in seconds.",
  },
  {
    q: "Is there a free tier?",
    a: "Yes! The Starter plan is completely free for individual developers and includes all core editor features.",
  },
  {
    q: "Can I switch between light/dark themes?",
    a: "Absolutely, use the toggle in the top‑right corner of the navbar. Your preference is remembered.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section id="faq" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {ITEMS.map((item, i) => (
            <div key={i} className="border border-white/20 dark:border-gray-300/30 rounded-lg">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center text-slate-900 dark:text-white"
                onClick={() => toggle(i)}
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-xl">{openIndex === i ? "–" : "+"}</span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-gray-700 dark:text-gray-300">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
