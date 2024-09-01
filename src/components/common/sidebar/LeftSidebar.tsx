"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "_/components/ui/button";
import { sidebarLinks } from "_/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftSidebar = () => {
  const pathName = usePathname();
  return (
    <nav className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen min-h-screen flex-col justify-between overflow-y-auto border-r px-6 pb-8 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div>
        {sidebarLinks.map((link) => {
          if (link.route === "/profile") {
            return null;
          }
          const isActive =
            (pathName.includes(link.route) && link.route.length > 1) ||
            pathName === link.route;
          return (
            <Link
              className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-4`}
              href={link.route}
              key={link.route}
            >
              <Image
                alt={link.label}
                className={`${isActive ? "" : "invert-colors"}`}
                height={20}
                src={link.imgURL}
                width={20}
              />
              <p
                className={`${isActive ? "base-bold" : "base-medium"} max-lg:hidden`}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
      <div>
        <SignedIn>
          <Link
            className="text-dark300_light900 flex items-center justify-start gap-4 bg-transparent p-4"
            href="/sign-out"
          >
            <Image
              alt="Log Out"
              className="invert-colors"
              height={20}
              src="/assets/icons/sign-out.svg"
              width={20}
            />
            <p className="max-lg:hidden">Log Out</p>
          </Link>
        </SignedIn>
        <SignedOut>
          <div className="flex flex-col gap-3">
            <Link href="/sign-in">
              <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <Image
                  alt="Log In"
                  className="invert-colors lg:hidden"
                  height={20}
                  src="/assets/icons/account.svg"
                  width={20}
                />
                <span className="primary-text-gradient max-lg:hidden">
                  Log In
                </span>
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <Image
                  alt="Sign Up"
                  className="invert-colors lg:hidden"
                  height={20}
                  src="/assets/icons/sign-up.svg"
                  width={20}
                />
                <span className="max-lg:hidden">Sign Up</span>
              </Button>
            </Link>
          </div>
        </SignedOut>
      </div>
    </nav>
  );
};

export default LeftSidebar;
