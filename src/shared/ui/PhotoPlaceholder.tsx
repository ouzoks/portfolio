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
        "relative grid min-h-44 place-items-center overflow-hidden rounded-[1.8rem] border border-white/10",
        "bg-[linear-gradient(135deg,rgba(99,245,198,0.12),rgba(16,26,24,0.96))]",
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
