"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  Mail,
  ChevronDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

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
    "Automotive",
    "Books & Stationery",
    "Music & Entertainment",
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0070DC] text-white py-2">
        <div className="container mx-auto flex items-center justify-between text-xs md:text-sm px-4">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Email: support@buybee.com</span>
            <span className="sm:hidden">support@buybee.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-blue-200 transition-colors">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-blue-200 transition-colors">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-blue-200 transition-colors">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="hidden sm:inline hover:text-blue-200 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu - Left Side Drawer */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-[300px] flex flex-col p-0"
                >
                  {/* Accessibility Header */}
                  <div className="p-6 border-b">
                    <SheetTitle className="text-xl font-bold text-[#0070DC]">
                      BuyBee Menu
                    </SheetTitle>
                  </div>

                  {/* Scrollable Navigation Items */}
                  <div className="flex-1 overflow-y-auto px-6 py-4">
                    <nav className="flex flex-col gap-2">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                        Main Menu
                      </p>
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-base font-medium py-3 border-b border-gray-50 hover:text-[#0070DC]"
                        >
                          {item.name}
                        </Link>
                      ))}

                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-6 mb-2">
                        All Categories
                      </p>
                      <div className="flex flex-col gap-1 pb-10">
                        {categories.map((cat) => (
                          <Link
                            key={cat}
                            href="#"
                            className="text-sm py-2.5 px-2 hover:bg-blue-50 hover:text-[#0070DC] rounded-md transition-colors"
                          >
                            {cat}
                          </Link>
                        ))}
                      </div>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo */}
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold text-[#0070DC]"
            >
              BuyBee
            </Link>

            {/* Desktop Search Bar */}
            <div className="hidden sm:flex flex-1 max-w-xl mx-4">
              <div className="relative w-full">
                <Input
                  placeholder="Search items here..."
                  className="pr-10 rounded-md border-[#0070DC]/30 focus:border-[#0070DC]"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-0 top-0 h-full"
                >
                  <Search className="h-5 w-5 text-gray-500" />
                </Button>
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-3 md:gap-6">
              <Link
                href="/login"
                className="flex items-center gap-2 hover:text-[#0070DC]"
              >
                <User className="h-6 w-6 md:h-7 md:w-7 stroke-[1.5]" />
                <span className="hidden lg:inline text-sm md:text-base font-medium whitespace-nowrap">
                  Sign Up/Sign In
                </span>
              </Link>

              <Link
                href="/cart"
                className="flex items-center gap-2 hover:text-[#0070DC] relative"
              >
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 md:h-7 md:w-7 stroke-[1.5]" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center border-2 border-white">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline text-sm md:text-base font-medium">
                  Cart
                </span>
              </Link>

              <button className="relative hidden sm:block hover:text-[#0070DC]">
                <Heart className="h-6 w-6 md:h-7 md:w-7 stroke-[1.5]" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center border-2 border-white">
                    {wishlistCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Bottom Bar */}

        <div className="hidden lg:block border-t">
          <div className="container mx-auto px-4 flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-[#0070DC] text-white rounded-none h-12 px-6 gap-3 hover:bg-[#005bb5] lg:pointer-events-none">
                  <Menu className="h-5 w-5" />
                  <span className="font-semibold text-sm">ALL CATEGORIES</span>

                  <ChevronDown className="h-4 w-4 ml-4 lg:hidden" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                className="w-[240px] rounded-none p-0 max-h-[400px] overflow-y-auto lg:hidden"
              >
                {categories.map((cat) => (
                  <DropdownMenuItem
                    key={cat}
                    className="py-3 px-4 border-b last:border-0 cursor-pointer hover:bg-gray-100"
                  >
                    {cat}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <nav className="flex items-center gap-8 font-semibold text-sm text-gray-700">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-[#0070DC] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
