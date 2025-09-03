import CategoryCard from "./CategoryCard";

export type CategoryData = {
  id: number;
  name: string;
  image: string;
};

// Mock data for the categories
const categories: CategoryData[] = [
  {
    id: 1,
    name: "Phones",
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvbmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "Tablet",
    image:
      "https://plus.unsplash.com/premium_photo-1673968280716-ca0c00af8a39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGFibGV0fGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Laptop",
    image:
      "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Smart Watch",
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U21hcnQlMjBXYXRjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    name: "AirPods",
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWlyUG9kc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    name: "Sounds",
    image:
      "https://images.unsplash.com/photo-1590783609742-82564b33e5fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c291bmRzeXN0ZW18ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1515940175183-6798529cb860?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmUlMjBBY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    name: "Gadgets",
    image:
      "https://images.unsplash.com/photo-1636115305669-9096bffe87fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R2FkZ2V0c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 9,
    name: "Earbuds",
    image:
      "https://plus.unsplash.com/premium_photo-1668418188837-d40b734ed6d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 10,
    name: "Phone Cases",
    image:
      "https://images.unsplash.com/photo-1535157412991-2ef801c1748b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGhvbmUlMjBDYXNlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 11,
    name: "Screen Protectors",
    image:
      "https://plus.unsplash.com/premium_photo-1682065724607-22877c1b6983?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBob25lJTIwUHJvdGVjdG9yc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 12,
    name: "Over-Ear Headphones",
    image:
      "https://images.unsplash.com/photo-1638803782506-d975a6809f43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T3ZlciUyMEVhciUyMEhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 13,
    name: "MacBook Case",
    image:
      "https://plus.unsplash.com/premium_photo-1680371834671-26c3d8f0e0d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWFjQm9vayUyMENhc2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 14,
    name: "Power Banks",
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UG93ZXIlMjBCYW5rc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 15,
    name: "Adapters",
    image:
      "https://images.unsplash.com/photo-1756043827116-5764e6d23d85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWRhcHRlcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 16,
    name: "Smart TV",
    image:
      "https://plus.unsplash.com/premium_photo-1664302149029-50514758ed8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U21hcnQlMjBUVnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Category = () => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-1.5 lg:gap-3">
      {categories?.map((category) => (
        <CategoryCard key={category?.id} category={category} />
      ))}
    </div>
  );
};

export default Category;
