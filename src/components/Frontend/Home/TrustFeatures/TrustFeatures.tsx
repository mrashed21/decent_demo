import Container from "@/components/Reusable/Container/Container";
import React, { JSX } from "react";

interface Feature {
  icon: JSX.Element;
  text: string;
}

const TrustFeatures: React.FC = () => {
  const features: Feature[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 lg:w-6 lg:h-6 text-emerald-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      text: "100% Genuine Products",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 lg:w-6 lg:h-6 text-sky-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 12l-5 5L4 12l-1 5" />
          <path d="M14 12l-2 2-2-2" />
          <path d="M13 16l-3 3-4-4" />
          <line x1="4" y1="12" x2="16" y2="12" />
          <path d="M17 19l-4-4" />
          <path d="M21 16l-4-4-1 1" />
          <path d="M18 17l-1 1-2-2" />
        </svg>
      ),
      text: "Super fast Delivery",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 lg:w-6 lg:h-6 text-orange-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="6" width="20" height="15" rx="2" ry="2" />
          <path d="M16 2v4M8 2v4" />
          <path d="M2 10h20" />
          <path d="M12 15h0M12 18h0M8 15h0M8 18h0" />
        </svg>
      ),
      text: "36 Months Installments",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 lg:w-6 lg:h-6 text-violet-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.5 12H19a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2h-1a2 2 0 0 0-2-2H4.5" />
          <path d="M15 12l-2 2-2-2" />
          <path d="M15 12l2 2-2 2" />
          <path d="M12 12l-2 2-2-2" />
          <path d="M12 12l2 2-2 2" />
          <path d="M8 12l-2 2-2-2" />
          <path d="M8 12l2 2-2 2" />
        </svg>
      ),
      text: "2 Years Replacement",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-rose-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18.3 12.3c0.1 0.1 0.1 0.3 0 0.4l-6 6c-0.1 0.1-0.3 0.1-0.4 0l-4-4c-0.1-0.1-0.1-0.3 0-0.4L18.3 4.3c0.1-0.1 0.3-0.1 0.4 0l1.3 1.3c0.1 0.1 0.1 0.3 0 0.4l-4 4z" />
          <path d="M17 17l-4 4" />
          <path d="M17 17l-4 4" />
          <path d="M18.3 12.3c0.1 0.1 0.1 0.3 0 0.4l-6 6c-0.1 0.1-0.3 0.1-0.4 0l-4-4c-0.1-0.1-0.1-0.3 0-0.4L18.3 4.3c0.1-0.1 0.3-0.1 0.4 0l1.3 1.3c0.1 0.1 0.1 0.3 0 0.4l-4 4z" />
          <path d="M17 17l-4 4" />
        </svg>
      ),
      text: "Best Price in BD",
    },
  ];

  return (
    <Container>
      <div className="mt-5 bg-background">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-4 bg-foreground px-4 py-6 rounded-lg shadow">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-secondary py-1 font-medium"
            >
              <div className="">{feature.icon}</div>
              <span className="text-xs md:text-base ">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TrustFeatures;
