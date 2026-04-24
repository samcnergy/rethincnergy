import * as React from "react";
import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="1" y="1" width="26" height="26" rx="6" className="fill-ink-800" />
        <path
          d="M8 19V9h6.2c2.2 0 3.6 1.3 3.6 3.3 0 1.5-.8 2.6-2.2 3l2.4 3.7h-2.3l-2.2-3.5H9.9V19H8zm1.9-5.2h4.2c1.2 0 1.9-.6 1.9-1.6 0-1-.7-1.6-1.9-1.6H9.9v3.2z"
          className="fill-sand-50"
        />
        <circle cx="22" cy="7" r="2" className="fill-copper-500" />
      </svg>
      <span className="font-serif text-xl tracking-tight text-ink-800">
        ReTHINK <span className="text-copper-500">CNERGY</span>
      </span>
    </div>
  );
}
