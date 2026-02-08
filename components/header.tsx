"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  Mail,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [cartCount] = useState(2);
  const [wishlistCount] = useState(1);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "Products", href: "/products" },
    { name: "Hot Offers", href: "/" },
    { name: "Combo", href: "/" },
    { name: "Clearance", href: "/" },
  ];

  const categories = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto flex items-center justify-between text-sm px-4">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>Email: support@buybee.com</span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="#">Facebook</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">LinkedIn</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b bg-background">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-primary">
              BuyBee
            </Link>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-xl">
              <div className="relative w-full">
                <Input placeholder="Search items here..." className="pr-10" />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-0 top-0"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              {/* User Login Section */}
              <Link
                href="/login"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <User className="h-7 w-7 stroke-[1.5]" />
                <span className="text-base font-medium whitespace-nowrap">
                  Sign Up/Sign In
                </span>
              </Link>

              {/* Cart Section - Updated to include text */}
              <Link
                href="/cart"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity relative"
              >
                <div className="relative">
                  <ShoppingCart className="h-7 w-7 stroke-[1.5]" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border-2 border-white">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="text-base font-medium">Cart</span>
              </Link>

              {/* Wishlist Section */}
              <button className="hover:opacity-80 transition-opacity relative">
                <Heart className="h-7 w-7 stroke-[1.5]" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border-2 border-white">
                    {wishlistCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation + Categories */}
        <div className="border-t">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-6">
              {/* All Categories Dropdown (FIGMA STYLE) */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-primary text-white rounded-none px-6">
                    <Menu className="h-4 w-4 mr-2" />
                    All Categories
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="start" className="w-64 p-0 mt-1">
                  <ul className="divide-y">
                    {categories.map((cat) => (
                      <li
                        key={cat}
                        className="flex items-center justify-between px-4 py-3 hover:bg-muted cursor-pointer"
                      >
                        <span className="text-sm">{cat}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </li>
                    ))}
                  </ul>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Top Menu */}
              <nav className="hidden md:flex items-center gap-6 py-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
