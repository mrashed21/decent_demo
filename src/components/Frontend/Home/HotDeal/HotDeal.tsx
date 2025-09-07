type DealItem = {
  id: number;
  title: string;
  price: string;
  oldPrice: string;
  img: string;
};

const deals: DealItem[] = [
  {
    id: 1,
    title: "TORRAS Pstand Spin Case For iPhone 16 Pro and iPhone 16 Pro Max",
    price: "৳ 3,999",
    oldPrice: "৳ 7,999",
    img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F17020%2FiPhone-16-pro-max-clear-case3.png&w=1920&q=75",
  },
  {
    id: 2,
    title: "TORRAS Pstand Case For iPhone 16 Pro and iPhone 16 Pro Max",
    price: "৳ 3,999",
    oldPrice: "৳ 7,999",
    img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F17132%2FUntitled-design(9).png&w=1920&q=75",
  },
  {
    id: 3,
    title:
      "TORRAS Magnetic Slim Fit Case For iPhone 16 Pro and iPhone 16 Pro Max",
    price: "৳ 2,999",
    oldPrice: "৳ 7,999",
    img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F48132%2FUAG-Pathfinder-Case-White-for-16-pro-max-price-in-Bangladesh.jpg&w=1920&q=75",
  },
  {
    id: 4,
    title: "TORRAS Rugged Shield Case For iPhone 16 Pro Max",
    price: "৳ 4,299",
    oldPrice: "৳ 8,299",
    img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F44223%2Fessential-16pm-ash.jpg&w=1920&q=75",
  },
  {
    id: 5,
    title: "TORRAS Slim Transparent Case For iPhone 16 Pro Max",
    price: "৳ 2,499",
    oldPrice: "৳ 5,499",
    img: "https://dazzle.com.bd/_next/image?url=https%3A%2F%2Fdazzle.sgp1.cdn.digitaloceanspaces.com%2F47919%2FPitaka-MagEZ-Case-6-for-iPhone-16-Pro-Over-The-Horizon-price-in-Bangladesh.jpg&w=1920&q=75",
  },
];

const HotDeal = () => {
  return (
    <section className="w-full h-full">
      <div className="bg-tertiary rounded-lg p-4 w-full h-full">
        <h2 className="text-lg font-semibold mb-3 flex items-center">
          <span className="mr-2">🔥</span> Hot Deal of The Day
        </h2>

        <div className="space-y-3 h-96 overflow-y-auto pr-2">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="flex items-center bg-background rounded-xl shadow p-3"
            >
              <img
                src={deal.img}
                alt={deal.title}
                className="w-14 h-20 object-cover rounded"
              />
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium line-clamp-2">{deal.title}</p>
                <div className="mt-2">
                  <span className="text-secondary font-bold mr-2">
                    {deal.price}
                  </span>
                  <span className="text-secondary/50 line-through text-sm">
                    {deal.oldPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotDeal;
