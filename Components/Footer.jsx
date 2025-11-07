import { FaCode } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#02050A]/90 py-4 flex justify-center items-center gap-1  ">
      <p className="text-sm text-gray-300 ">
        © {new Date().getFullYear()} All Rights Reserved
      </p>

      <h1 className="text-base font-normal text-white capitalize">
        Shorif uddin{" "}
      </h1>
    </footer>
  );
}
