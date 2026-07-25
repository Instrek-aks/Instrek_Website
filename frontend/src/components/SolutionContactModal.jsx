import React, { useState } from "react";
import { X, Check, ArrowRight, MessageSquare } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs";

export default function SolutionContactModal({ isOpen, onClose, solutionName = "General Solutions" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    
    try {
      const templateParams = {
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        from_name: name,
        from_email: email,
        user_email: email,
        message: `Name: ${name}\nEmail: ${email}\nInquiry: ${solutionName}\n\nMessage:\n${message}`,
        subject: `New Solution Inquiry: ${solutionName} - Instrek Website`,
        timestamp: new Date().toLocaleString(),
        website: EMAILJS_CONFIG.WEBSITE_NAME,
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setIsSubmitted(true);
      
      // Auto close after 2.5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setName("");
        setEmail("");
        setMessage("");
        onClose();
      }, 2500);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Opening email client to contact us directly at connect@instrek.com");
      const subject = encodeURIComponent(`Inquiry: ${solutionName} - Instrek Website`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInquiry: ${solutionName}\n\nMessage:\n${message}`);
      window.location.href = `mailto:connect@instrek.com?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-8 text-white shadow-2xl md:p-10"
            style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
          >
            {/* Top Glow Accent Line */}
            <div className="absolute top-0 left-0 h-[4px] w-full bg-gradient-to-r from-[#EA6220] via-orange-500 to-white" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col items-center">
                {/* Icon Container with glowing ring */}
                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EA6220]/20 to-transparent border border-[#EA6220]/30 shadow-lg shadow-[#EA6220]/10">
                  <MessageSquare className="h-8 w-8 text-[#EA6220]" />
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white">
                    Get in Touch
                  </h3>
                  <p className="mt-2 text-sm text-zinc-200 font-semibold px-2">
                    Let's discuss how we can customize <span className="text-[#EA6220] font-bold">{solutionName}</span> for your needs.
                  </p>
                </div>

                {/* Input Fields */}
                <div className="mt-8 w-full space-y-4 text-left">
                  <div className="relative">
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2 pl-1">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-2xl border border-white/20 bg-zinc-900 py-4 px-5 text-sm text-white font-medium placeholder-zinc-400 outline-none transition-all focus:border-[#EA6220]/60 focus:bg-white/5 focus:ring-1 focus:ring-[#EA6220]/60"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2 pl-1">
                      Your Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-2xl border border-white/20 bg-zinc-900 py-4 px-5 text-sm text-white font-medium placeholder-zinc-400 outline-none transition-all focus:border-[#EA6220]/60 focus:bg-white/5 focus:ring-1 focus:ring-[#EA6220]/60"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2 pl-1">
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        required
                        rows={4}
                        placeholder="Write your message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full rounded-2xl border border-white/20 bg-zinc-900 py-4 px-5 text-sm text-white font-medium placeholder-zinc-400 outline-none transition-all resize-none focus:border-[#EA6220]/60 focus:bg-white/5 focus:ring-1 focus:ring-[#EA6220]/60"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#EA6220] to-[#ff724a] py-4 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-[#EA6220]/30 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Send Message"}
                  {!isSubmitting && <ArrowRight className="h-4 w-4 stroke-[2.5]" />}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-8 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 mb-6">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="mt-3 text-sm text-zinc-400">
                  Thank you, <span className="text-[#EA6220] font-medium">{name}</span>. We've received your message and will contact you shortly.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
