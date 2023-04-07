import Link from "next/link";
import { useRouter } from "next/router";

const LandingNav = () => {
  const router = useRouter();
  const navLinkStyle =
    "font-archivo hover:underline transition duration-300 ease-in-out  ";
  const handleGetStartedClick = () => {
    router.push("/login");
  };
  return (
    <div className="sticky top-0 w-full border-b-2 border-white bg-white/30 backdrop-blur-md z-20">
      <div className="flex flex-row w-full justify-between items-center px-20 py-4 ">
        {/* Logo with Title */}
        <div className="flex flex-row items-center">
          <img src="./logo.svg" alt="logo" />
          <h1 className="font-archivo font-semibold text-lg ">GyanaGuru</h1>
        </div>
        {/* Nav Links */}
        <div className="flex flex-row items-center gap-8">
          <Link className={navLinkStyle} href="/">
            Home
          </Link>
          <Link className={navLinkStyle} href="/courses">
            Courses
          </Link>
          <Link className={navLinkStyle} href="#ourservices">
            Our Services
          </Link>
          <Link className={navLinkStyle} href="#whychooseus">
            Benifits
          </Link>
          <Link className={navLinkStyle} href="/faqs">
            FAQ’s
          </Link>
        </div>
        {/* Get Started Button */}
        <div
          onClick={handleGetStartedClick}
          className="flex cursor-pointer flex-row gap-4 border-2 border-black p-1 rounded-full items-center"
        >
          <h4 className="font-medium ml-2">Get Started</h4>
          <span className="material-icons bg-black text-white p-2 rounded-full">
            arrow_outward
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingNav;
