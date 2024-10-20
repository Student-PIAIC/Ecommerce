import{Search, ShoppingBag, User} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



export const links = [
    {
        name: "Jewelry & Accessories",
        link: "/shop",
      },
      {
        name: "Clothing & Shoes",
        link: "/shop",
      },
      {
        name: "Home & Living",
        link: "/shop",
      },
      {
        name: "Wedding & Party",
        link: "/shop",
      },
      {
        name: "Toys & Entertainment",
        link: "/shop",
      },
      {
        name: "Art & Collectibles",
        link: "/shop",
      },
      {
        name: "Craft Supplies & Tools",
        link: "/shop",
      },
]

const Header=()=>{
    return(
        <div>
        <div className="flex justify-between wrapper py-4 border-b items-center">
            <Search />
            <Image src="/logo.png" alt="logo" width={180} height={34} />
            <div className="flex justify-between gap-x-8">
                <div className="flex">
                <User />
                <h3>Account</h3>
                </div>
                <div className="flex">
                <ShoppingBag />
                <h3>Cart</h3>
                </div>
                <div className="lg:hidden">
                
                <Sheet>
  <SheetTrigger><Menu /></SheetTrigger>
  <SheetContent>
  <ul>
    {links.map((item)=>{
      return(
       <li key={item.name} className="py-4">
{item.name}
       </li>
      )
    })}
  </ul>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

                </div>
              
            </div>
        </div>

<ul className="hidden lg:flex justify-between border-b gap-x-4 wrapper py-4 sm:hidden bg-amber-300">
    {links.map((item)=> {
        return (
            <li key={item.name}>
                <Link href={item.link}>{item.name}</Link>
            </li>)
    })}
    
</ul>
</div>

    )
}
export default Header;

