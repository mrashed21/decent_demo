import { CategoryData } from "./Category";

interface CategoryCardProps {
  category: CategoryData;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="p-3 bg-foreground rounded-sm shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center text-center font-inter">
      {/* Container for the image with a gray background */}
      <div className="w-full mb-2 flex items-center justify-center rounded-lg">
        <img
          src={category?.image}
          alt={category?.name}
          className="min-w-10 min-h-10 aspect-square"
        />
      </div>
      {/* The name of the category */}
      <p className=" text-[8px] sm:text-sm xl:text-base md:font-medium text-secondary mt-auto">
        {category?.name}
      </p>
    </div>
  );
};

export default CategoryCard;
