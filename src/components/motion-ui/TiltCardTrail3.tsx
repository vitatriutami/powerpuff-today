import { Tilt } from "@/components/core/tilt";
import { TiltTrail3 } from "./TiltTrail3";

export function TiltCardTrail3() {
  return (
    <Tilt rotationFactor={8} isRevese>
      <div className="rounded-xl flex max-w-[320px] flex-col bg-white dark:border-zinc-50/10 dark:bg-zinc-900">
        <TiltTrail3 />
      </div>
    </Tilt>
  );
}
