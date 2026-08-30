"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { ui } from "@/lib/content";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { tr } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // next-themes only knows the real theme on the client; render a stable
  // placeholder first so the static export does not mismatch on hydration.
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme !== "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={tr(ui.toggleTheme)}
      aria-pressed={mounted ? isDark : undefined}
      className="inline-flex size-11 cursor-pointer items-center justify-center rounded-lg border border-border bg-card/60 text-muted-foreground transition-colors duration-200 hover:border-primary-accent/50 hover:text-foreground [touch-action:manipulation]"
    >
      {mounted && !isDark ? (
        <Sun className="size-[18px]" aria-hidden="true" />
      ) : (
        <Moon className="size-[18px]" aria-hidden="true" />
      )}
    </button>
  );
}
