import { Roboto_Flex } from "next/font/google";
import Image from "next/image";

const RobotoFlex = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-flex",
});

const Navbar = () => {
  return (
    <nav
      className={`fixed w-full bg-white p-4 border-b border-gray-300 text-gray-800 ${RobotoFlex.variable}`}
    >
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <Image src="/icons/Logo.svg" alt="Logo" width={50} height={50} />
          <h2 className="text-3xl">
            <span className="text-4xl">M</span>bak
            <span className="text-4xl">W</span>idya
          </h2>
        </div>
        <div className="flex gap-5 items-center">
          <div className="bg-slate-50 flex gap-5 items-center p-2 px-4 text-2xl text-gray-600 border border-gray-300 rounded-md">
            <Image
              src="/icons/Speaker.svg"
              alt="Speaker"
              width={50}
              height={50}
              className="cursor-pointer"
            />
            <h2>Speaker</h2>
          </div>
          <ul className="flex text-blue-500 gap-5 items-center text-2xl">
            <li className="hover:underline hover:text-blue-600 cursor-pointer">
              Tentang kami
            </li>
            <li className="hover:underline hover:text-blue-600 cursor-pointer">
              FAQ
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
