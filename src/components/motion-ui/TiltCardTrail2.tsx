import { Tilt } from "@/components/core/tilt";
import { TiltTrail2 } from "./TiltTrail2";

export function TiltCardTrail2() {
  return (
    <Tilt rotationFactor={8} isRevese>
      <div className="rounded-xl flex max-w-[320px] flex-col bg-white dark:border-zinc-50/10 dark:bg-zinc-900">
        <TiltTrail2 />
        {/* <img
          src="https://everydaypower.com/wp-content/uploads/2023/02/the-powerpuff-girls-quotes-11.jpg"
          alt="Bubbles's quote"
          className="h-48 w-full"
        /> */}
      </div>
    </Tilt>
  );
}
