"use client";

import { barLinks } from "@/constants";
import { isSignedIn } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ProfileDropdownMenu from "./ProfileDropdownMenu";

export default function Topbar() {
  const pathname = usePathname();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  async function getLoggedIn() {
    if (await isSignedIn()) {
      setLoggedIn(true);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
        <p className="max-xs:hidden text-heading3-bold text-light-1">
          BEsports
        </p>
      </Link>

      <div className="hidden md:flex w-full flex-1 flex-row gap-5 justify-center">
        {barLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`topbar_link ${isActive ? "bg-green-500" : ""}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-light-1 max-lg:hidden">{link.text}</p>
            </Link>
          );
        })}
      </div>
      {!loading ? (
        <div className="flex flex-row gap-2 ml-auto">
          {loggedIn ? (
            <ProfileDropdownMenu />
          ) : (
            <>
              <Link href="/sign-up" key="Sign-up" className="topbar_link">
                <Image
                  src="/assets/sign-up.svg"
                  alt="SignUp"
                  width={24}
                  height={24}
                />
                <p className="text-light-1 max-md:hidden">Регистрация</p>
              </Link>
              <Link href="/sign-in" key="Sign-in" className="topbar_link">
                <Image
                  src="/assets/login.svg"
                  alt="Login"
                  width={24}
                  height={24}
                />
                <p className="text-light-1 max-md:hidden">Войти</p>
              </Link>
            </>
          )}
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
}
