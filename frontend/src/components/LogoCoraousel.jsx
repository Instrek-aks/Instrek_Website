import { LogoSection } from "./LogoSection";

// Import all SVG logos
import ARTIALogo from "/Rimages/ARTIA_Engagement.svg";
import NDMALogo from "/Rimages/National Disaster Management Authority Engagement.svg";
import TRAILogo from "/Rimages/TRAI_Engagement.svg";
import NITILogo from "/Rimages/NITI Aayog_Engagement.svg";
import LTLogo from "/Rimages/L&T_Client.svg";
import MazdaLogo from "/Rimages/Mazda_Client.svg";
import NagarroLogo from "/Rimages/Nagarro_Client.svg";
import ICICILogo from "/Rimages/ICICI Bank_Client.svg";
import TataLogo from "/Rimages/Tata Steel_Client.svg";
import YesBankLogo from "/Rimages/Yes Bank_Client.svg";
import UCBerkeleyLogo from "/Rimages/UC Berkeley_Client.svg";

const engagementLogos = [
  { name: "", image: ARTIALogo },
  { name: "", image: NDMALogo },
  { name: "", image: TRAILogo },
  { name: "", image: NITILogo },
  { name: "", image: "/optimized/second.webp" },
  { name: "", image: "/optimized/third.webp" },
];

const clientLogos = [
  { name: "", image: LTLogo },
  { name: "", image: MazdaLogo },
  { name: "", image: NagarroLogo },
  { name: "", image: ICICILogo },
  { name: "", image: TataLogo },
  { name: "", image: YesBankLogo },
  { name: "", image: UCBerkeleyLogo },
];

export const LogoCarousel = () => {
  return (
    <div
      className="bg-black flex flex-col justify-center py-20 px-4"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto w-full space-y-24">
        <LogoSection
          title="OUR KEY"
          subtitle="ENGAGEMENTS"
          sectionTitle="Ministries & Associations"
          logos={engagementLogos}
          direction="left"
        />

        <LogoSection
          title="OUR"
          subtitle="CLIENTS"
          sectionTitle=""
          logos={clientLogos}
          direction="right"
        />
      </div>
    </div>
  );
};
