import Link from "next/link";

const Header = ({ title, LinkHref, LinkTitle }) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
      {LinkHref && LinkTitle ? (
        <Link
          href={LinkHref}
          className="md:text-xl text:sm underline hover:text-color-accent text-color-primary"
        >
          {LinkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
