"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "_/components/ui/menubar";
import { themes } from "_/constants";
import { useTheme } from "_/context/ThemeProvider";
import Image from "next/image";

const Theme = () => {
  const { mode, setMode } = useTheme();
  return (
    <Menubar className="relative border-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === "light" ? (
            <Image
              alt={"light theme"}
              className="active-theme"
              height={20}
              src="/assets/icons/sun.svg"
              width={20}
            />
          ) : (
            <Image
              alt={"dark theme"}
              className="active-theme"
              height={20}
              src="/assets/icons/moon.svg"
              width={20}
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute -right-12 mt-3 min-w-[120px] rounded border bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((theme) => (
            <MenubarItem
              key={theme.label}
              className="flex items-center gap-4 px-2.5 py-2 focus:bg-light-700 dark:focus:bg-dark-400"
              onClick={() => {
                if (theme.value !== "system") {
                  setMode(theme.value);
                  localStorage.setItem("theme", theme.value);
                } else {
                  setMode("");
                  localStorage.removeItem("theme");
                }
              }}
            >
              <Image
                alt={theme.label}
                className={`${mode === theme.value && "active-theme"}`}
                height={16}
                src={theme.icon}
                width={16}
              />
              <p
                className={`body-semibold text-light-500 ${mode === theme.value ? "text-primary-500" : "text-dark100_light900"}`}
              >
                {theme.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
