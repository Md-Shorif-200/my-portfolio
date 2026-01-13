import { FaCode } from "react-icons/fa";


// bg-[#02050A]/90

export default function Footer() {
  return (
    <footer className="bg-green-200 w-full h-[120px] py-4 flex flex-col justify-center items-center gap-1  ">
        <div className="flex gap-3 items-center">
           <p className="text-sm text-black ">
        © {new Date().getFullYear()} All Rights Reserved
      </p>

      <h1 className="text-base font-normal text-black capitalize">
        Shorif uddin{" "}
      </h1>  
        </div>
              <div>
                  <h2 className="text-sm italic "> Alhamdulillah for everything.</h2>
              </div>
    </footer>
  );
}
