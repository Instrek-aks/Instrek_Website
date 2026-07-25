import React, { useState, useEffect } from "react";
import { X, Mail, Check, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs";

export default function SubscriptionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if the user has already subscribed or closed the modal
    const hasClosedOrSubscribed = localStorage.getItem("instrek_newsletter_modal");
    if (!hasClosedOrSubscribed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2500); // 2.5 seconds delay for natural experience
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("instrek_newsletter_modal", "closed");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    
    setIsSubmitting(true);
    try {
      const templateParams = {
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        from_name: name,
        from_email: email,
        user_email: email,
        message: `Hii Team,\n\nUser Name: ${name}\nUser Email: ${email}\nhas subscribed to the newsletter on the website.`,
        subject: `New Newsletter Subscription - ${EMAILJS_CONFIG.WEBSITE_NAME}`,
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
      localStorage.setItem("instrek_newsletter_modal", "subscribed");
      
      // Auto-close after 2.5 seconds
      setTimeout(() => {
        setIsOpen(false);
      }, 2500);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to subscribe. Opening email client to contact us directly at connect@instrek.com");
      const subject = encodeURIComponent("Newsletter Subscription - Instrek Website");
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nI would like to subscribe to the newsletter.`);
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
            onClick={handleClose}
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
            <div className="absolute top-0 left-0 h-[4px] w-full bg-gradient-to-r from-[#ea4820] via-cyan-500 to-white" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col items-center text-center">
                {/* Icon Container with glowing ring */}
                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ea4820]/20 to-transparent border border-[#ea4820]/30 shadow-lg shadow-[#ea4820]/10">
                  <Mail className="h-8 w-8 text-[#ea4820] animate-pulse" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Stay Ahead of the Curve
                </h3>
                <p className="mt-3 text-sm text-zinc-200 leading-relaxed font-semibold px-2">
                  Subscribe to get weekly insights on AI advancements, EV ecosystems, and deep-tech innovations directly in your inbox.
                </p>

                {/* Input Fields */}
                <div className="mt-6 w-full space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-2xl border border-white/20 bg-zinc-900 py-4 px-5 text-sm text-white font-medium placeholder-zinc-400 outline-none transition-all focus:border-[#ea4820]/60 focus:bg-white/5 focus:ring-1 focus:ring-[#ea4820]/60"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-2xl border border-white/20 bg-zinc-900 py-4 px-5 text-sm text-white font-medium placeholder-zinc-400 outline-none transition-all focus:border-[#ea4820]/60 focus:bg-white/5 focus:ring-1 focus:ring-[#ea4820]/60"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ea4820] py-4 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:bg-[#ff5d38] shadow-lg shadow-[#ea4820]/25 disabled:opacity-50"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                  {!isSubmitting && <ArrowRight className="h-4 w-4 stroke-[2.5]" />}
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-6 text-xs text-zinc-400 font-medium hover:text-zinc-200 transition-colors"
                >
                  No thanks, I'll stay outdated
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-6 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 mb-6">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Welcome aboard!</h3>
                <p className="mt-3 text-sm text-zinc-400">
                  Thank you for subscribing. You've been successfully added to our newsletter list.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
