"use client";
import { cn } from "@/lib/utils";
import { CoinsDollarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b border-dashed">
      <div className="py-6 mx-auto px-4 sm:px-6 max-w-360 w-full flex justify-between items-center h-full">
        <Link href="/" className="flex items-center gap-2">
          <HugeiconsIcon strokeWidth={1.5} icon={CoinsDollarIcon} />
          <p className="font-jet">densecoins</p>
        </Link>
        <nav className="flex  h-full items-center">
          <Link
            href="/"
            className={cn(
              "px-6 flex items-center transition-all hover:text-white font-medium text-purple-100 h-full cursor-pointer",
              {
                "text-white": pathname === "/",
                "max-sm:hidden": true,
              }
            )}
          >
            Home
          </Link>
          <p>Search Modal</p>
          <Link
            href="/coins"
            className={cn(
              "px-6 flex items-center transition-all hover:text-white font-medium text-purple-100 h-full cursor-pointer",
              {
                "text-white": pathname === "/coins",
              }
            )}
          >
            All coins
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
