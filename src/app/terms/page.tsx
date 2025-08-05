"use client";
import { motion } from "framer-motion";

const termsData = [
  {
    title: "1. Overview",
    description:
      "Automatix is an innovative agency amplified with AI, offering a range of creative and digital services. These Terms apply to all visitors, users, and others who access or use our services.",
  },
  {
    title: "2. Services",
    description:
      "We provide a variety of services, including but not limited to branding, web development, digital marketing, and AI-driven solutions. Each service is subject to its own specific agreement, which outlines the scope, timeline, and payment terms.",
  },
  {
    title: "3. User Responsibilities",
    description:
      "As a user of Automatix, you agree to:\n• Provide accurate and up-to-date information when required.\n• Use our services only for lawful purposes and in a manner that does not infringe the rights of others.\n• Maintain the confidentiality of your account information and be responsible for all activities under your account.",
  },
  {
    title: "4. Intellectual Property",
    description:
      "All content, designs, graphics, logos, and software used on this website are the property of Automatix or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute any content without our express permission.",
  },
  {
    title: "5. Payments",
    description:
      "Fees for our services are agreed upon in advance and will be outlined in a service agreement. Payment is due upon receipt of the invoice unless otherwise specified. Late payments may incur interest at a rate of 1.5% per month.",
  },
  {
    title: "6. Confidentiality",
    description:
      "We take your privacy and confidentiality seriously. Any business or personal information shared with Automatix will be kept confidential and will not be disclosed to third parties without your consent, except as required by law.",
  },
  {
    title: "7. Termination",
    description:
      "Either party may terminate a service agreement by providing written notice. If you terminate the agreement, you will be responsible for any costs incurred up to the date of termination. Automatix reserves the right to terminate your access to our services if you violate these Terms.",
  },
  {
    title: "8. Limitation of Liability",
    description:
      "Automatix is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability will not exceed the amount paid by you for the services provided.",
  },
  {
    title: "9. Governing Law",
    description:
      "These Terms are governed by the laws of James Hopkins. Any disputes arising from these Terms will be resolved in the courts of James Hopkins.",
  },
  {
    title: "10. Changes to Terms",
    description:
      "We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes your acceptance of the new Terms.",
  },
  {
    title: "11. Contact Information",
    description:
      "If you have any questions or concerns about these Terms, please contact us at customer@automatix.com.",
  },
];

const Terms = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 md:px-20 py-20 font-inter" data-aos="fade-up">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-[72px] leading-[1.2] font-medium font-hero mb-8 text-7xl md:text-7xl  text-center text-white">
          Term & Conditions
        </h1>
        <p className="text-[18px] leading-[1.6]  text-center text-lg text-gray-400 mb-12 pb-5">
          Welcome to Automatix! These terms and conditions outline the rules <br />
          and regulations for the use of our website and services.
        </p>

        <div className="space-y-10">
          {termsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-black p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-black"
            >
              <h2 className="text-[24px] leading-[1.3] text-xl  font-semibold text-white mb-2">
                {item.title}
              </h2>
              <p className="text-[18px] leading-[1.6] text-gray-400 text-lg whitespace-pre-line">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-9 text-[18px] leading-[1.6] text-lg text-white border-t border-black ">
          By using Automatix services, you acknowledge that you have read,
          understood, and agree to be bound by<br/> these Terms and Conditions.
        </div>
      </motion.div>
    </div>
  );
};

export default Terms; 