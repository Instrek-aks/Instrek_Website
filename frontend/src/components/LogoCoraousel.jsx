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
  { name: "", image: ARTIALogo },
  { name: "", image: NDMALogo },
  { name: "", image: TRAILogo },
  { name: "", image: NITILogo },
  { name: "", image: Second },
  { name: "", image: Third },
  { name: "", image: "/optimized/shardalogo.png" },

  { name: "", image: "/optimized/miblogo.png" },
  { name: "", image: "/optimized/broadp.png" },
  { name: "", image: "/optimized/meitylogo.png" },
];

const clientLogos = [
  { name: "", image: LTLogo },
  { name: "", image: "/optimized/Syniti.png" },
  { name: "", image: "/optimized/Traya.png" },
  { name: "", image: ICICILogo },
  { name: "", image: TataLogo },
  { name: "", image: "/optimized/nsdc.png" },
  { name: "", image: Suzuki },
];

export const LogoCarousel = () => {
  return (
    <div
      className="bg-black flex flex-col justify-center py-20 px-2"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto w-full space-y-24">
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
