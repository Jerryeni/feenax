"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What is Feenax?",
      answer: "Feenax is an innovative blockchain platform designed for scalability, security, and efficiency. It offers a comprehensive ecosystem for digital assets and decentralized applications."
    },
    {
      question: "How can I participate in the FNX seed sale?",
      answer: "You can participate in the FNX seed sale by connecting your wallet, selecting your preferred payment method (USDT or BNB), and purchasing FNX coins through our platform."
    },
    {
      question: "What makes Feenax different from other blockchain platforms?",
      answer: "Feenax stands out with its innovative architecture, community-driven governance, low transaction fees, and comprehensive ecosystem designed for long-term sustainability."
    },
    {
      question: "What are the benefits of staking FNX coins?",
      answer: "Staking FNX coins provides you with passive income through rewards, helps secure the network, and gives you voting rights in platform governance decisions."
    },
    {
      question: "How does Feenax ensure transaction security?",
      answer: "Feenax employs advanced cryptographic protocols, secure consensus mechanisms, and regular security audits to ensure the safety of all transactions on the platform."
    },
    {
      question: "When will FNX be listed on exchanges?",
      answer: "FNX is scheduled to be listed on major exchanges in Q3 2025. Specific details about exchange partnerships will be announced closer to the listing date."
    }
  ];

  return (
    <section id="faqs" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}