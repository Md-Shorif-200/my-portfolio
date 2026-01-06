import { FaCode } from "react-icons/fa";


// bg-[#02050A]/90

export default function Footer() {
  return (
    <footer className="bg-black/10 py-4 flex justify-center items-center gap-1  ">
      <p className="text-sm text-black ">
        © {new Date().getFullYear()} All Rights Reserved
      </p>

      <h1 className="text-base font-normal text-black capitalize">
        Shorif uddin{" "}
      </h1>
    </footer>
  );
}
