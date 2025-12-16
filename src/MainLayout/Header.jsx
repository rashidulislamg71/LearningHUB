import Logo from "../Components/UI/Logo";
import SearchBar from "../Components/UI/SearchBar";
import DarkLight from "../Components/UI/DarkLight/DarkLight";
import SignIn from "../Components/UI/Auth/SignIn";
import SignOut from "../Components/UI/Auth/SignOut";

const Header = () => {
  return (
    <header className="-mt-38 px-4 md:px-10 py-5 shadow-md flex justify-around items-center flex-wrap gap-2 md:gap-10 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <Logo />
      <SearchBar />
      <DarkLight />
      <div className="flex gap-3 items-center">
        <SignIn />
        <SignOut />
      </div>
    </header>
  );
};

export default Header;
