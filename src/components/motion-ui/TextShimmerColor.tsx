"use client"
import { useState } from "react";
import TextShimmer from "@/components/core/text-shimmer";

interface Props {
  children: string; // Restrict children to a string
}

export default function TextShimmerColor({ children }: Props) {
  const [duration, setDuration] = useState(1.2); // Default duration

  return (
    <div
      onMouseEnter={() => setDuration(2.6)} // Slower duration on hover
      onMouseLeave={() => setDuration(1.2)} // Reset duration on mouse leave
    >
      <TextShimmer
        duration={duration}
        className="
          [--base-color:theme(colors.purple.300)] 
          [--base-gradient-color:theme(colors.blue.50)] 
          dark:[--base-color:theme(colors.blue.700)] 
          dark:[--base-gradient-color:theme(colors.blue.400)]"
      >
        {children}
      </TextShimmer>
    </div>
  );
}
