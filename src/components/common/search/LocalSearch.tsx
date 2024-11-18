"use client";

import { Input } from "_/components/ui/input";
import Image from "next/image";

type Props = {
  iconPosition?: "left" | "right";
  iconSource?: string;
  otherClasses?: string;
  placeholder: string;
  route: string;
};

const LocalSearch = ({
  iconPosition = "left",
  iconSource = "/assets/icons/search.svg",
  otherClasses,
  placeholder,
  route,
}: Props) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" ? (
        <Image
          alt="Search Icon"
          className="cursor-pointer"
          height={24}
          src={iconSource}
          width={24}
        />
      ) : null}

      <Input
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none text-dark-500 shadow-none outline-none placeholder:text-slate-500 dark:text-light-700 dark:placeholder:text-slate-400"
        onChange={() => {}}
        placeholder={placeholder}
        type="text"
        // value={""}
      />

      {iconPosition === "right" ? (
        <Image
          alt="Search Icon"
          className="cursor-pointer"
          height={24}
          src={iconSource}
          width={24}
        />
      ) : null}
    </div>
  );
};

export default LocalSearch;
