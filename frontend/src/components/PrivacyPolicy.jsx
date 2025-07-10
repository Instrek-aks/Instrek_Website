import React from "react";
import Header from "./Header";

export default function PrivacyPolicy() {
  const today = "July 9, 2025"; // Fixed as per your request

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800 leading-relaxed font-sans pt-[80px]">
        <h1 className="text-4xl font-bold text-center mb-6 text-black">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 text-center mb-10">
          Last updated: {today}
        </p>

        <p className="mb-6">
          At <strong>Instrek Technologies</strong>, we value your trust. As a
          next-generation technology solutions provider working across AI, IoT,
          Blockchain, AR/VR, and Digital Transformation, data protection is at
          the heart of our operations. This Privacy Policy explains how we
          collect, use, store, share, and protect your personal data in
          accordance with India’s Digital Personal Data Protection Act, 2023 and
          international best practices including GDPR.
        </p>

        <Section title="1. What Data We Collect">
          <ul className="list-disc list-inside">
            <li>
              <strong>Personal Information:</strong> Name, email, phone number,
              company name (via contact forms, emails, sign-ups).
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, device type, browser,
              OS (for analytics and system performance).
            </li>
            <li>
              <strong>Interaction Data:</strong> Website usage, session
              behavior, navigation data.
            </li>
            <li>
              <strong>Sensitive Personal Data (when applicable):</strong>{" "}
              Emotion or behavior-based inputs for specific services (e.g., AI
              career counselling tool).
            </li>
          </ul>
        </Section>

        <Section title="2. Legal Basis for Processing">
          <ul className="list-disc list-inside">
            <li>Your explicit consent (via website forms or checkboxes)</li>
            <li>Contractual necessity (to deliver services you requested)</li>
            <li>Compliance with legal obligations</li>
            <li>
              Our legitimate interests, where not overridden by your rights
            </li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Data">
          <ul className="list-disc list-inside">
            <li>Respond to queries, demo or partnership requests</li>
            <li>Improve our website and product experiences</li>
            <li>Monitor system stability and security</li>
            <li>Personalize services where relevant (e.g., AI tools)</li>
            <li>Fulfill legal or compliance obligations</li>
          </ul>
          <p className="mt-2">
            We do not sell or use your data for unsolicited marketing.
          </p>
        </Section>

        <Section title="4. User Consent">
          <p>
            Consent is obtained clearly and unambiguously through opt-ins and
            consent banners. You can withdraw consent at any time by contacting
            us or via privacy settings. If you're under 18, we require verified
            parental consent.
          </p>
        </Section>

        <Section title="5. Data Retention">
          <p>
            We retain your data for a period of 12 months unless longer
            retention is legally required or consented. Data is securely deleted
            or anonymized after retention expires.
          </p>
        </Section>

        <Section title="6. Data Sharing & Processors">
          <ul className="list-disc list-inside">
            <li>
              With verified service providers (cloud, analytics) under strict
              contracts
            </li>
            <li>For legal compliance or security reasons</li>
            <li>With your consent, if applicable</li>
          </ul>
          <p className="mt-2">
            We conduct privacy due diligence before working with third parties
            and ensure GDPR/DPDPA-aligned contracts are in place.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <ul className="list-disc list-inside">
            <li>Access your data</li>
            <li>Request correction or deletion</li>
            <li>Withdraw consent</li>
            <li>Object to processing</li>
            <li>Request data portability</li>
          </ul>
          <p className="mt-2">
            You can email us at{" "}
            <a
              href="mailto:connect@instrek.com"
              className="text-blue-600 underline"
            >
              connect@instrek.com
            </a>{" "}
            or use the privacy dashboard (coming soon). We respond within 15
            working days.
          </p>
        </Section>

        <Section title="8. Cookie & Tracking Notice">
          <p>
            We use minimal cookies for performance analytics and basic
            functionality. A cookie consent banner appears on first visit,
            allowing you to accept or manage preferences. Tools used: CookieYes
            (implementation in progress)
          </p>
        </Section>

        <Section title="9. Data Security">
          <ul className="list-disc list-inside">
            <li>Encrypted cloud storage (AWS/GCP)</li>
            <li>Role-based access and MFA</li>
            <li>Regular penetration testing and threat monitoring</li>
            <li>
              Breach reporting protocol (notify authorities/users within 72
              hours)
            </li>
          </ul>
        </Section>

        <Section title="10. External Links">
          <p>
            Our site may link to external platforms. We are not responsible for
            their content or privacy practices. Please review their policies
            independently.
          </p>
        </Section>

        <Section title="11. Updates to This Policy">
          <p>
            We may periodically revise this policy. Changes will be updated here
            with a new “Last Updated” date and, where necessary, communicated
            directly via email or banners.
          </p>
        </Section>

        <Section title="12. Grievance Redressal">
          <p>
            In compliance with Rule 5(9) of the Indian IT Rules, 2011 and DPDPA:
          </p>
          <address className="not-italic mt-2">
            <strong>Grievance Officer</strong>
            <br />
            Name: [To be updated]
            <br />
            Email:{" "}
            <a
              href="mailto:connect@instrek.com"
              className="text-blue-600 underline"
            >
              connect@instrek.com
            </a>
            <br />
            Phone: +91-
            <br />
            Address: 912, SuryaKiran Building, KG Marg,
            <br />
            Connaught Place, Delhi – 110001
          </address>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-2 text-black">{title}</h2>
      {children}
    </section>
  );
}
