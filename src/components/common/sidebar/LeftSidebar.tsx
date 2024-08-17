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
    <nav className="flex min-h-screen flex-col justify-between px-6 pb-9 pt-36 shadow-sm max-md:pb-14">
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
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
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
            <p>Log Out</p>
          </Link>
        </SignedIn>
        <SignedOut>
          <div className="flex flex-col gap-3">
            <Link href="/sign-in">
              <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <span className="primary-text-gradient">Log In</span>
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                Sign Up
              </Button>
            </Link>
          </div>
        </SignedOut>
      </div>
    </nav>
  );
};

export default LeftSidebar;
