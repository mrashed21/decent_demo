import { useState } from "react";

const ProductDescription = () => {
  const [value, setValue] = useState(`
    <div>
      <h1>iPhone 16 Pro Price in Bangladesh</h1>
      <p>Discover the remarkable <strong>iPhone 16 Pro</strong>, Apple’s innovative creation designed to deliver unparalleled smartphone performance. Whether upgrading your current device or investing in your first iPhone, this model promises to exceed expectations with its powerful features and sleek design. At Dazzle, we’re thrilled to offer the iPhone 16 Pro at competitive prices in Bangladesh, starting from <strong>BDT 1,21,992</strong>. Prices may vary depending on factors like storage, color, and variant, but we guarantee you’ll get the best value.</p>
      
      <h2>Why Choose the iPhone 16 Pro?</h2>
      <ul>
        <li><strong>Exceptional Camera Performance:</strong> Experience incredible photography with advanced AI and enhanced low-light capabilities.</li>
        <li><strong>High-Speed Processor:</strong> Powered by Apple’s latest chip for seamless multitasking.</li>
        <li><strong>Sophisticated Design:</strong> Premium finishes to reflect your style.</li>
        <li><strong>Improved Battery Life:</strong> Stay connected all day.</li>
      </ul>

      <h2>Key Features</h2>
      <ul>
        <li>Pro-Grade Camera System</li>
        <li>Vivid Super Retina XDR Display</li>
        <li>Durable Build with Water Resistance</li>
        <li>Seamless iOS Ecosystem</li>
      </ul>

      <h2>Exclusive Benefits When You Shop with Dazzle</h2>
      <ul>
        <li>Dazzle’s Own Warranty</li>
        <li>Best Prices in Bangladesh</li>
        <li>Free Delivery Nationwide</li>
        <li>Flexible EMI Plans</li>
        <li>Authenticity Guaranteed</li>
        <li>Apple Care+ Facility</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <p><strong>What is the iPhone 16 Pro price in Bangladesh?</strong><br/> Prices start at BDT 1,21,992.</p>
      <p><strong>What colors are available?</strong><br/> Natural Titanium, Black Titanium, White Titanium.</p>
      <p><strong>What storage options are available?</strong><br/> 128GB, 256GB, 512GB.</p>
      <p><strong>Does it come with an official warranty?</strong><br/> Yes, official Apple warranty included.</p>
      <p><strong>Are EMI options available?</strong><br/> Absolutely, with leading banks.</p>
      <p><strong>Standout features?</strong><br/> Upgraded camera, faster processor, durable design, iOS ecosystem.</p>
    </div>
  `);

  return (
    <div className="lg:mt-6 lg:p-4 p-2 lg:mx-20">
      <img
        src="https://i.ibb.co.com/NdR4fX6P/photo-1575909812264-6902b55846ad-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-1.jpg"
        alt="iPhone 16 Pro"
        className="w-full h-[320px] md:h-[380px] lg:h-[450px]"
      />
      <div className="mt-5" dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
};

export default ProductDescription;
