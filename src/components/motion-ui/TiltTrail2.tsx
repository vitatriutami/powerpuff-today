"use client";
import { cn } from "@/lib/utils";
import { BorderTrail } from "@/components/core/border-trail";
import { useState } from "react";

export function TiltTrail2() {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsLoading(true);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsLoading(false);
    setTimeout(() => setIsVisible(false), 300); // Menunggu animasi selesai sebelum menyembunyikan
  };

  return (
    <div className="relative rounded-xl border-4 border-zinc-900 bg-zinc-100 dark:border-zinc-700/40 dark:bg-zinc-900">
      {isVisible && (
        <BorderTrail
          className={cn(
            "bg-gradient-to-l from-green-300 via-green-500 to-green-300 transition-opacity duration-300 dark:from-green-700/30 dark:via-green-500 dark:to-green-700/30",
            isLoading ? "opacity-100" : "opacity-0"
          )}
          size={120}
          transition={{
            ease: [0, 0.5, 0.8, 0.5],
            duration: 4,
            repeat: 2,
          }}
          onAnimationComplete={() => setIsLoading(false)}
        />
      )}
      <div
        className="flex h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src="https://everydaypower.com/wp-content/uploads/2023/02/the-powerpuff-girls-quotes-3.jpg"
          alt="Blossom's quote"
          className="h-48 w-full"
        />
      </div>
    </div>
  );
}
