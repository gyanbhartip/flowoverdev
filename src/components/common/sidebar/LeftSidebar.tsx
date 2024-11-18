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
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
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
              <Button className="small-medium btn-secondary inline-flex h-9 min-h-[41px] w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-slate-50 shadow-none transition-colors hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 dark:focus-visible:ring-slate-300">
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
              <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 inline-flex h-9 min-h-[41px] w-full items-center justify-center rounded-lg border bg-slate-900 px-4 py-3 text-sm font-medium shadow-none transition-colors hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 dark:focus-visible:ring-slate-300">
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
    </section>
  );
};

export default LeftSidebar;
