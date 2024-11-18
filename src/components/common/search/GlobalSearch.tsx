import { Input } from "_/components/ui/input";
import Image from "next/image";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          alt="search"
          className="cursor-pointer"
          height={24}
          src={"/assets/icons/search.svg"}
          width={24}
        />
        <Input
          className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none text-dark-500 shadow-none outline-none placeholder:text-slate-500 dark:text-light-700 dark:placeholder:text-slate-400"
          placeholder="Search anything globally..."
          type="text"
          // value={""}
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
