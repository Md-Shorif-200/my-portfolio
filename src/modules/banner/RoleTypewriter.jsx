"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const dynamicRoles = [
  "MERN Stack Specialist",
  "Tech Enthusiast",
];

export default function RoleTypewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = dynamicRoles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 55;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.slice(0, text.length + 1));

        if (text.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentRole.slice(0, text.length - 1));

        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % dynamicRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <motion.div
      className="mt-8 flex items-center gap-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Fixed Word */}
      <span className="text-base sm:text-lg font-medium text-ds-primary/80 tracking-wider whitespace-nowrap">
        Web Developer
      </span>

      {/* Divider */}
      <span className="text-ds-primary/40 font-light select-none">|</span>

      {/* Typewriter Dynamic Part */}
      <span className="text-base sm:text-lg font-medium text-ds-primary/80 tracking-wider min-w-[200px]">
        {text}
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-ds-primary/70 ml-[2px] align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      </span>
    </motion.div>
  );
}