import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <section className="flex gap-4 mt-6">
      {/* Facebook */}
      <Link
        href="https://web.facebook.com/shorif.web.dev"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-10 h-10  icon_bg_color   flex justify-center items-center text-2xl "
      >
        <FaFacebook className="primary_color" />
      </Link>

      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/md-shorif-375533275/"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-10 h-10  icon_bg_color   flex justify-center items-center text-2xl "
      >
        <FaLinkedin className="primary_color" />
      </Link>

      {/* GitHub */}
      <Link
        href="https://github.com/Md-Shorif-200"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-10 h-10  icon_bg_color    flex justify-center items-center text-2xl "
      >
        <FaGithub className="primary_color"/>
      </Link>

      {/* Instagram */}
      {/* <Link
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-10 h-10  icon_bg_color rounded-full flex justify-center items-center text-2xl "
      >
        <FaInstagram />
      </Link> */}
    </section>
  );
}
