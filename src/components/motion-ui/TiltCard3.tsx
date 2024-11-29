import { Tilt } from "@/components/core/tilt";

export function TiltCard3() {
  return (
    <Tilt rotationFactor={8} isRevese>
      <div
        style={{
          borderRadius: "12px",
        }}
        className="flex max-w-[270px] flex-col overflow-hidden border-2 border-teal-300/70 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
      >
        <img
          src="https://everydaypower.com/wp-content/uploads/2023/02/the-powerpuff-girls-quotes-7.jpg"
          alt="Buttercup's quote"
          className="h-48 w-full"
        />
      </div>
    </Tilt>
  );
}
