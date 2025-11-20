import clsx from "clsx";
import type { PropsWithChildren } from "react";

type BackgroundGradientProps = PropsWithChildren<{
  className?: string;
}>;

export function BackgroundGradient({
  className,
  children,
}: BackgroundGradientProps) {
  return (
    <div className={clsx("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/30 via-sky-300/10 to-purple-500/30 blur-3xl opacity-40" />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-[110%] -translate-x-1/2 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_55%)]" />
      {children}
    </div>
  );
}
