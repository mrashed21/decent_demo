"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductSpecification = () => {
  const specificationGroups = [
    {
      heading: "SIM",
      items: [
        { title: "GLOBAL", description: "NANO-SIM AND ESIM" },
        { title: "USA", description: "DUAL ESIM WITH MULTIPLE NUMBERS" },
        {
          title: "HK/CHINA",
          description: "DUAL SIM (NANO-SIM, DUAL STAND-BY)",
        },
        { title: "INDIA", description: "NANO-SIM AND ESIM" },
      ],
    },
    {
      heading: "BODY",
      items: [
        {
          title: "DIMENSIONS",
          description: "163 X 77.6 X 8.3 MM (6.42 X 3.06 X 0.33 IN)",
        },
        { title: "WEIGHT", description: "227 G (8.01 OZ)" },
        {
          title: "BUILD",
          description: "GLASS FRONT, GLASS BACK, TITANIUM FRAME",
        },
      ],
    },
    {
      heading: "COMMS",
      items: [
        {
          title: "WLAN",
          description: "WI-FI 802.11 A/B/G/N/AC/6E/7, TRI-BAND, HOTSPOT",
        },
        { title: "BLUETOOTH", description: "5.3, A2DP, LE" },
        {
          title: "POSITIONING",
          description: "GPS, GLONASS, GALILEO, BDS, QZSS, NAVIC",
        },
        { title: "NFC", description: "YES" },
        { title: "RADIO", description: "NO" },
        { title: "USB", description: "USB TYPE-C 3.2 GEN 2, DISPLAYPORT" },
      ],
    },
    {
      heading: "FEATURES",
      items: [
        {
          title: "SENSORS",
          description:
            "FACE ID, ACCELEROMETER, GYRO, PROXIMITY, COMPASS, BAROMETER",
        },
        { title: "SOUND", description: "STEREO SPEAKERS" },
        {
          title: "BATTERY",
          description: "NON-REMOVABLE LI-ION 4676 MAH BATTERY",
        },
      ],
    },
  ];

  // all open initially
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(
    Object.fromEntries(specificationGroups.map((g) => [g.heading, true]))
  );

  const toggleGroup = (heading: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [heading]: !prev[heading],
    }));
  };

  return (
    <section className="py-8 px-4 bg-background">
      <h2 className="text-2xl font-bold mb-6 text-secondary">Specification</h2>

      <div className="space-y-2">
        {specificationGroups.map((group) => {
          const isOpen = openGroups[group.heading];
          return (
            <div
              key={group.heading}
              className=" overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => toggleGroup(group.heading)}
                className="w-full px-4 py-2 flex justify-between items-center font-semibold text-secondary bg-tertiary cursor-pointer rounded-lg"
              >
                {group.heading}
                <span className="text-secondary/50">
                  {isOpen ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              {/* Animated content */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="py-2 space-y-2">
                  {group.items.map((item, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 bg-foreground px-3 py-2 rounded-md"
                    >
                      <span className="col-span-1 flex items-center text-xs lg:text-base font-medium text-secondary border-r-2 border-borderColor border-dashed -mr-2">
                        {item.title}
                      </span>
                      <span className="pl-5 lg:pl-8 col-span-2 text-[10px] lg:text-base text-secondary ">
                        {item.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductSpecification;
