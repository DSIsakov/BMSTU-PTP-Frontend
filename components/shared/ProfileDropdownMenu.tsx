import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { baseURL, profileMenuLinks } from "@/constants";
import {
  getCurrentUser,
  getCurrentUserToken,
  signOut,
} from "@/lib/actions/actions";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function ProfileDropdownMenu() {
  const router = useRouter();
  const [username, setUsername] = React.useState("Профиль");

  React.useEffect(() => {
    async function getUsername() {
      const usernameData = await getCurrentUser();
      setUsername(usernameData.username || "Профиль");
    }

    getUsername();
  }, []);

  async function handleLogout() {
    try {
      const token = await getCurrentUserToken();

      await axios.post(
        `${baseURL}/auth/logout/`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      signOut();
      router.push("/sign-in");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex relative items-center gap-3 rounded-lg p-3 data-[state=open]:bg-green-500">
        <Image src="/assets/user.svg" alt="Profile" width={24} height={24} />
        <p className="text-light-1 max-md:hidden">{username}</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-dark-1 text-light-1 mr-6">
        {profileMenuLinks.map((link) => {
          return (
            <DropdownMenuItem
              key={link.label}
              className="rounded-lg focus:bg-green-500"
            >
              <Link href={link.route} className="topbar_link">
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={24}
                  height={24}
                />
                <p className="text-light-1">{link.text}</p>
              </Link>
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuItem className="rounded-lg focus:bg-green-500">
          <Button
            onClick={handleLogout}
            className="topbar_link bg-transparent hover:bg-transparent"
          >
            <Image
              src="/assets/logout.svg"
              alt="Log-out"
              width={24}
              height={24}
            />
            <p className="text-light-1">Выйти</p>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
