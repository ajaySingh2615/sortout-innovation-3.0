"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [beams, setBeams] = useState<
    Array<{ left: string; animationDelay: string; animationDuration: string }>
  >([]);

  useEffect(() => {
    const generateBeams = () => {
      const newBeams = [];
      for (let i = 0; i < 10; i++) {
        newBeams.push({
          left: Math.random() * 100 + "%",
          animationDelay: Math.random() * 5 + "s",
          animationDuration: Math.random() * 3 + 7 + "s",
        });
      }
      setBeams(newBeams);
    };

    generateBeams();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 overflow-hidden bg-gradient-to-b from-red-50 via-white to-red-50",
        className
      )}
    >
      {beams.map((beam, index) => (
        <motion.div
          key={index}
          className="absolute top-0 w-px bg-gradient-to-b from-red-500/0 via-red-500/40 to-red-500/0 opacity-60"
          style={{
            left: beam.left,
            height: "100%",
            animationDelay: beam.animationDelay,
          }}
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: parseFloat(beam.animationDuration),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
