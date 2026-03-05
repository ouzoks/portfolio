import { cn } from "../lib/cn";

type PhotoPlaceholderProps = {
  label: string;
  className?: string;
  src?: string;
};

export function PhotoPlaceholder({ label, className, src }: PhotoPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative grid min-h-44 place-items-center overflow-hidden rounded-2xl border border-dashed border-ink-700/30",
        "bg-[linear-gradient(135deg,rgba(47,158,68,0.12),rgba(255,255,255,0.9))]",
        className,
      )}
    >
      {src ? (
        <img src={src} alt={label} className="h-full w-full object-cover" />
      ) : (
        <span className="px-2 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-ink-700/70">
          {label}
        </span>
      )}
    </div>
  );
}
