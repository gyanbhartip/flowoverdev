"use client";

import { SignedOut } from "@clerk/nextjs";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "_/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "_/components/ui/sheet";
import { sidebarLinks } from "_/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          alt="Hamburger Icon"
          className="invert-colors sm:hidden"
          height={36}
          width={36}
          src={"/assets/icons/hamburger.svg"}
        />
      </SheetTrigger>
      <SheetContent
        className="border-none bg-light-900 dark:bg-dark-200"
        side={"left"}
      >
        <VisuallyHidden>
          <SheetHeader>
            <SheetTitle>Mobile Navigation Menu</SheetTitle>
            <SheetDescription>
              Menu items for mobile navigation
            </SheetDescription>
          </SheetHeader>
        </VisuallyHidden>
        <Link href="/" className="flex items-center gap-1">
          <Image
            alt="Site Logo"
            height={23}
            src={"/assets/images/site-logo.svg"}
            width={23}
          />
          <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
            Flow <span className="text-primary-500">Over Dev</span>
          </p>
        </Link>
        <div className="">
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
          <SignedOut>
            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    <span className="primary-text-gradient">Log In</span>
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    Sign Up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

const NavContent = () => {
  const pathName = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((link) => {
        const isActive =
          (pathName.includes(link.route) && link.route.length > 1) ||
          pathName === link.route;

        return (
          <SheetClose asChild key={link.route}>
            <Link
              className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-4`}
              href={link.route}
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
          </SheetClose>
        );
      })}
    </section>
  );
};
