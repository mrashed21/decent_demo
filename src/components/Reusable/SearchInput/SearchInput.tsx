import { FaSearch } from "react-icons/fa";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  className = "",
}) => {
  return (
    <div className={`relative w-full max-w-sm `}>
      <input
        type="text"
        placeholder={placeholder}
        aria-label={placeholder}
        className={`w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none ${className}`}
      />
      <FaSearch
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />
    </div>
  );
};

export default SearchInput;
