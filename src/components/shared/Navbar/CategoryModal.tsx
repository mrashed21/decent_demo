"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface Category {
  id: string;
  name: string;
  items: { name: string; img: string }[];
}

interface CategoryModalProps {
  setCategoryOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryModal: React.FC<CategoryModalProps> = ({ setCategoryOpen }) => {
  const [activeCategory, setActiveCategory] = useState("phones");
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // prevent background scrolling when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setCategoryOpen]);

  const categories: Category[] = [
    {
      id: "phones",
      name: "Phones",
      items: [
        {
          name: "Apple",
          img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F29366%2Fapple.jpg&w=96&q=75",
        },
        {
          name: "Samsung",
          img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F29367%2FSAMSUNG.jpg&w=96&q=75",
        },
        {
          name: "Google",
          img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F29384%2FGoogle.jpg&w=96&q=75",
        },
        {
          name: "Motorola",
          img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F45206%2Flogo(2).jpg&w=96&q=75",
        },
        {
          name: "Infinix",
          img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F29389%2FInfinix.jpg&w=96&q=75",
        },
        {
          name: "OPPO",
          img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F29400%2F1000011883.png&w=96&q=75",
        },
        {
          name: "Realme",
          img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F29403%2FRealme.jpg&w=96&q=75",
        },
      ],
    },
    {
      id: "tablet",
      name: "Tablet",
      items: [
        {
          name: "Apple",
          img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F29366%2Fapple.jpg&w=96&q=75",
        },
        {
          name: "Samsung",
          img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F29367%2FSAMSUNG.jpg&w=96&q=75",
        },
        {
          name: "Xiaomi",
          img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F45205%2Flogo(1).jpg&w=96&q=75",
        },
        {
          name: "ASUS",
          img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F29372%2FAsus.jpg&w=96&q=75",
        },
      ],
    },
    {
      id: "laptop",
      name: "Laptop",
      items: [
        {
          name: "Apple",
          img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F29366%2Fapple.jpg&w=96&q=75",
        },
        {
          name: "Samsung",
          img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F29367%2FSAMSUNG.jpg&w=96&q=75",
        },
        {
          name: "ASUS",
          img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F29372%2FAsus.jpg&w=96&q=75",
        },
      ],
    },
  ];

  const activeCategoryData = categories.find(
    (category) => category.id === activeCategory
  );

  // Handle click item -> close modal + navigate
  const handleItemClick = () => {
    setCategoryOpen(false);
    router.push("/");
  };

  return (
    <div className="">
      <div className="fixed inset-0 flex top-36 left-0 z-50 p-4">
        <div
          ref={modalRef}
          className="bg-background rounded-lg shadow-2xl w-full max-w-4xl h-[80vh] overflow-hidden flex relative"
        >
          {/* Sidebar */}
          <div className="w-1/3 bg-foreground overflow-y-auto">
            <div className="p-6">
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        activeCategory === category.id
                          ? "bg-tertiary text-primary"
                          : "text-secondary hover:bg-gray-200"
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="w-2/3 bg-primary overflow-y-auto p-6">
            <h2 className="text-2xl font-bold text-secondary mb-6 font-montserrat">
              {activeCategoryData?.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {activeCategoryData?.items.map((item, index) => (
                <div
                  key={index}
                  onClick={handleItemClick}
                  className="border border-foreground rounded-lg p-4 text-center hover:bg-foreground transition-colors cursor-pointer"
                >
                  <div className="h-16 flex items-center justify-center mb-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <p className="text-secondary font-medium">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
