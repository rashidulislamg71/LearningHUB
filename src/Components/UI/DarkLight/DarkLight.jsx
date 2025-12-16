import { useEffect, useState } from "react";

const DarkLight = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 rounded-xl 
                 bg-gray-200 dark:bg-gray-700 
                 text-black dark:text-white 
                 text-sm font-medium cursor-pointer
                 hover:bg-gray-300 dark:hover:bg-gray-600
                 transition-colors duration-300"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default DarkLight;
