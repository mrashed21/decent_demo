"use client";
import Container from "@/components/Reusable/Container/Container";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary text-background font-inter">
      {/* Main footer content */}
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">
              COMPANY
            </h3>
            <ul className="space-y-2">
              {[
                "About Us",
                "Our Brands",
                "Blogs",
                "Press Coverage",
                "Order Tracking",
                "Trade In",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-background/80 hover:text-background/70 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Center Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">
              HELP CENTER
            </h3>
            <ul className="space-y-2">
              {[
                "FAQ",
                "Support Center",
                "Announcement",
                "Corporate",
                "Feedback",
                "Sitemap",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-background/80 hover:text-background/70 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Terms & Conditions Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">
              TERMS & CONDITIONS
            </h3>
            <ul className="space-y-2">
              {[
                "Terms & Conditions",
                "Refund Policy",
                "Privacy Policy",
                "Warranty Policy",
                "Exchange Policy",
                "EMI Policy",
                "Others Policy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-background/80 hover:text-background/70  transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">
              STAY CONNECTED
            </h3>
            <div className="space-y-4 text-background/80">
              <p>
                Branch 1, Shop No. 02IC & 02ID, North Court, Block-1 B, 4th
                floor, Jamuna Future Park, Dhaka.
              </p>
              <p>
                Branch 2, Shop No. 44A/022B, West Court, Level 4, Block A,
                Jamuna Future Park, Dhaka.
              </p>
              <p>
                Branch 3, Shop No. 41A & 42A 4th floor, Friday Square, east
                realisade, Chittagong.
              </p>
              <p>
                Branch 4, 46A, 4th floor, Samnar Ocean City, Neirabaul,
                Chittagong.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Contact and copyright section */}
      <div className="border-t border-background/70 mb-14 xl:mb-0">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-background/80">Email: exaple@gamil.com</p>
              <p className="text-background/80">Phone: +8801712345678</p>
            </div>
            <p className="text-background/80">
              <Link
                href={"https://www.classicit.com.bd/"}
                target="_blank"
                className="mt-4 text-sm text-background sm:order-first sm:mt-0"
              >
                &copy; {new Date().getFullYear()} Classic IT &amp; Sky Mart Ltd
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
