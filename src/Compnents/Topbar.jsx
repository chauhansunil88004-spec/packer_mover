import React from "react";
import {
  CreditCard,
  Download,
  Smartphone,
  HelpCircle,
  MapPin,
  FileText,
  AlertCircle
} from "lucide-react";
import "./TopBar.css";

const topLinks = [
  {
    title: "Nepal Payment",
    url: "https://your-nepal-payment-url.com",
    icon: CreditCard
  },
  {
    title: "Android App",
    url: "",
    icon: Download
  },
  {
    title: "iOS App",
    url: "",
    icon: Smartphone
  },
  {
    title: "Enquiry",
    url: "/enquiry",
    icon: HelpCircle
  },
  {
    title: "Tracking",
    url: "/tracking",
    icon: MapPin
  },
  {
    title: "Claims",
    url: "/claims",
    icon: FileText
  },
  {
    title: "Beware Of Fake",
    url: "/beware-of-fake",
    icon: AlertCircle
  },
  {
    title: "Download Brochure",
    url: "/brochure.pdf",
    icon: Download
  }
];

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        {topLinks.map((item, index) => {
          const Icon = item.icon;

          return (
            <React.Fragment key={item.title}>
              <a
                href={item.url}
                className="topbar-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="topbar-icon" size={16} />
                <span>{item.title}</span>
              </a>

              {index < topLinks.length - 1 && (
                <span className="topbar-separator">|</span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default TopBar;
