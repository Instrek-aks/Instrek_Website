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
import Second from "/Rimages/second.svg";
import Third from "/Rimages/third.svg";
import NSDC from "/Rimages/NSDC.svg";
import Suzuki from "/Rimages/suzuki.svg";
import Sharda from "/Rimages/sharda.svg";

const engagementLogos = [
  { name: "ARTIA", image: ARTIALogo, scale: 1.0 },
  { name: "NDMA", image: NDMALogo, scale: 1.1 },
  { name: "TRAI", image: TRAILogo, scale: 1.1 },
  { name: "NITI Aayog", image: NITILogo, scale: 1.1 },
  { name: "AI For Skill India", image: Second, scale: 1.1 },
  { name: "Engagement Partner", image: Third, scale: 1.1 },
  { name: "Sharda University", image: "/optimized/shardalogo.webp", scale: 1.1 },

  { name: "Ministry of Information & Broadcasting", image: "/optimized/miblogo.webp", scale: 1.0 },
  { name: "Digitally", image: "/optimized/broadp.webp", scale: 1.1 },
  { name: "MeitY", image: "/optimized/meitylogo.webp", scale: 1.1 },
];

const clientLogos = [
  { name: "L&T", image: LTLogo, scale: 1.1 },
  { name: "Syniti", image: "/optimized/Syniti.webp", scale: 1.1 },
  { name: "Traya", image: "/optimized/Traya.webp", scale: 1.1 },
  { name: "ICICI Bank", image: ICICILogo, scale: 1.1 },
  { name: "Tata Steel", image: TataLogo, scale: 1.1 },
  { name: "NSDC", image: "/optimized/nsdc.webp", scale: 1.1 },
  { name: "Suzuki", image: Suzuki, scale: 1.1 },
  { name: "MCC", image: "/optimized/mcc.webp", scale: 1.1 },
  { name: "IIT", image: "/optimized/iit.webp", scale: 1.1 },
  { name: "Netguru", image: "/optimized/netguru.webp", scale: 1.1 },
  { name: "Post", image: "/optimized/post.webp", scale: 1.1 },
  { name: "Ashirwad Plastics", image: "/optimized/ashirwad_plastics.webp", scale: 1.0 },
];

export const LogoCarousel = () => {
  return (
    <div
      className="bg-black flex flex-col justify-center py-6 md:py-10 px-2"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto w-full space-y-6 md:space-y-10">
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
          sectionTitle="Trusted Enterprise & Government Partners"
          logos={clientLogos}
          direction="right"
        />
      </div>
    </div>
  );
};
