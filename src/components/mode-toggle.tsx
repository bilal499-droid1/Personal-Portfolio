"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        type="button"
        size="icon"
        className="px-2"
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2 transition-transform duration-300 ease-out hover:scale-105"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="relative">
        <SunIcon 
          className={`h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200 transition-all duration-500 ease-out ${
            theme === "dark" ? "opacity-0 rotate-180 scale-0" : "opacity-100 rotate-0 scale-100"
          }`} 
        />
        <MoonIcon 
          className={`absolute inset-0 h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200 transition-all duration-500 ease-out ${
            theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-0"
          }`} 
        />
      </div>
    </Button>
  );
}
