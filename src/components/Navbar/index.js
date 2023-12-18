import Link from "next/link";
import InputSearch from "./inputSearch";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col gap-1 justify-between p-2 md:items-center">
        <Link href="/" className="font-bold text-2xl">
          KUROSHI
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
