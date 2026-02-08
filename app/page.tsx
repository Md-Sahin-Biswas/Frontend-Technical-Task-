"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from "lucide-react";
import { categories, products } from "@/lib/data";

export default function Page() {
  const bestSellingProducts = products.slice(0, 4);
  const exploreProducts = products.slice(4, 12);

  const sidebarCategories = [
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
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* ================= HERO SECTION (FIGMA STYLE) ================= */}
        <section className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-0">
            <aside className="hidden lg:block w-64   bg-white shrink-0">
              <ul className="flex flex-col h-full">
                {sidebarCategories.map((cat) => (
                  <li
                    key={cat}
                    className="group flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer border-b last:border-0 transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-[#0070DC]">
                      {cat}
                    </span>
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-[#0070DC]" />
                  </li>
                ))}
              </ul>
            </aside>

            <div className="flex-1 pb-6">
              <div className="relative h-[250px] md:h-[500px] overflow-hidden bg-black group ">
                {/* Background Image */}
                <img
                  src="/images/banner.png"
                  alt="Hero Banner"
                  className="absolute inset-0 w-full h-full object-cover md:object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/30 flex items-center px-6 md:px-16">
                  <div className="max-w-xl text-[#FF36BC]">
                    <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 leading-tight">
                      Up to 15% off <br /> Voucher
                    </h1>
                    <p className="text-xl md:text-3xl mb-4 md:mb-8 text-[#FFFFFF]">
                      On all types of products
                    </p>
                    <Button
                      size="lg"
                      className="bg-[#220AF5] text-[#FFEEA4] px-8 md:px-12 py-5 text-lg rounded-full transition-all duration-300 shadow-md "
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CATEGORIES (SHOP FROM TOP) ================= */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-10 border-b pb-0">
              <div className="relative inline-block">
                <h2 className="text-2xl md:text-3xl font-bold pb-4">
                  Shop From <span className="text-primary">Top Category</span>
                </h2>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-primary rounded-full" />
              </div>
              <div className="flex gap-2 mb-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <Card
                  key={category.id}
                  className="hover:shadow-lg transition-shadow border-none overflow-hidden"
                >
                  <CardContent
                    style={{ backgroundColor: category.color }}
                    className="p-8 flex flex-col items-center justify-center gap-3 h-full"
                  >
                    <div className="relative w-16 h-16">
                      <img
                        src={category.icon}
                        alt={category.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-center text-sm">
                      {category.name}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/*TOP ELECTRONIC BRANDS  */}

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Header Section */}
            <div className="flex items-end justify-between mb-10 border-b pb-0">
              <div className="relative inline-block">
                <h2 className="text-2xl md:text-3xl font-bold pb-4">
                  Top Electronic Brands
                </h2>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-primary rounded-full" />
              </div>

              <div className="flex gap-2 mb-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-8 h-8"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-8 h-8"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative rounded-lg overflow-hidden h-[270px] group cursor-pointer border-none shadow-sm">
                <div className="absolute inset-0">
                  <img
                    src="/images/lap.png"
                    alt="HP Series"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="relative z-10 w-[45%] h-full p-6 flex items-center">
                  <h3 className="text-2xl font-bold leading-tight text-yellow-400 drop-shadow-lg">
                    10% Off On hp
                    <br />
                    series
                  </h3>
                </div>
              </div>

              <div className="flex rounded-lg overflow-hidden h-[270px] group cursor-pointer border-none shadow-sm">
                <div className="w-[45%] bg-[#FFCABA] p-6 flex items-center">
                  <h3 className="text-2xl font-bold leading-tight text-[#D32F2F]">
                    10% Off On <br /> Apple Macbook series
                  </h3>
                </div>
                <div className="w-[55%] bg-[#FFCABA] relative">
                  <img
                    src="/images/tv.png"
                    alt="TV"
                    className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex rounded-lg overflow-hidden h-[270px] group cursor-pointer border-none shadow-sm">
                <div className="w-[45%] bg-[#FFE5C2] p-6 flex items-center">
                  <h3 className="text-2xl font-bold leading-tight text-black">
                    10% Off On <br /> iPhone series
                  </h3>
                </div>
                <div className="w-[55%] bg-[#FFE5C2] relative">
                  <img
                    src="/images/mb.png"
                    alt="Mobile"
                    className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  BEST SELLING  */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-10 border-b pb-0">
              <div className="relative inline-block">
                <h2 className="text-2xl md:text-3xl font-bold pb-4">
                  Best Selling Products
                </h2>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-primary rounded-full" />
              </div>
              <Link href="/products" className="mb-4">
                <Button variant="outline" className="rounded-full">
                  View All
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bestSellingProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow relative border-none shadow-sm">
                    {product.discount && (
                      <Badge className="absolute top-3 left-3 bg-[#DB4444] text-white border-none rounded-sm px-3 py-1 z-10">
                        -{product.discount}%
                      </Badge>
                    )}

                    <CardContent className="p-0">
                      <div className="aspect-square bg-[#F5F5F5] flex items-center justify-center p-8 relative group">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />

                        <Button className="absolute bottom-0 w-full rounded-none bg-primary hover:bg-primary/90  group-hover:flex items-center justify-center gap-2 py-2 text-xs">
                          <ShoppingCart className="h-4 w-4" /> Add To Cart
                        </Button>
                      </div>

                      <div className="p-4 bg-white">
                        <h3 className="font-bold text-base mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>

                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-base font-bold text-[#DB4444]">
                            ${product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm line-through text-gray-400">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-[#FFAD33] text-[#FFAD33]" : "fill-gray-200 text-gray-200"}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-semibold text-gray-400">
                            ({product.reviews})
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= NEW ARRIVAL ================= */}
        {/* ================= NEW ARRIVAL SECTION ================= */}
        {/* ================= NEW ARRIVAL SECTION ================= */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Header Section */}
            <div className="flex items-end justify-between mb-10 border-b pb-0">
              <div className="relative inline-block">
                <h2 className="text-2xl md:text-3xl font-bold pb-4">
                  New Arrival
                </h2>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-primary rounded-full" />
              </div>
              <div className="flex gap-2 mb-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-8 h-8"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-8 h-8"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
                <div className="md:col-span-6 relative group overflow-hidden rounded-lg h-[650px] flex items-end">
                  <img
                    src="/images/n1.png"
                    alt="iPhone 16 Pro Max"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 "
                  />
                  <div className="relative z-10 p-8 text-white w-full bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl font-bold mb-1">16 PRO MAX</h3>
                    <p className="text-sm text-gray-300 mb-4 max-w-[250px]">
                      Experience the new A18 Pro chip.
                    </p>
                    <Link
                      href="#"
                      className="underline font-bold hover:text-primary transition-colors"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>

                {/* Right: 40% Width Card (iPhone 16) */}
                <div className="md:col-span-4 relative group overflow-hidden rounded-lg bg-[#0D0D0D] h-[650px] flex items-end">
                  <img
                    src="/images/n2.png"
                    alt="iPhone 16"
                    className="absolute right-0 top-0 h-full w-auto object-contain"
                  />
                  <div className="relative z-10 p-6 text-white w-full">
                    <h3 className="text-xl font-bold mb-1">iPhone 16</h3>
                    <p className="text-xs text-gray-400 mb-3 max-w-[150px]">
                      New camera control and more.
                    </p>
                    <Link
                      href="#"
                      className="underline font-bold hover:text-primary text-sm"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* SECOND ROW: Full Width Banner (Smart Gadgets) */}
              <div className="relative group overflow-hidden rounded-lg bg-black h-[580px] flex items-end">
                <img
                  src="/images/n3.png"
                  alt="Smart Gadgets"
                  className="absolute inset-0 w-full h-full object-cover  transition-transform duration-500 "
                />
                <div className="relative z-10 p-8 text-white w-full bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-2xl font-bold mb-2">Smart Gadgets</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Discover the latest tech arrivals.
                  </p>
                  <Link
                    href="#"
                    className="underline font-bold hover:text-primary text-sm"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EXPLORE ================= */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-10 border-b pb-0">
              <div className="relative inline-block">
                <h2 className="text-2xl md:text-3xl font-bold pb-4">
                  Explore Our Products
                </h2>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-primary rounded-full" />
              </div>
              <div className="flex gap-4 mb-4">
                <Button variant="outline" className="rounded-full">
                  🔍 Filters
                </Button>
                <Button variant="outline" className="rounded-full">
                  Sort by
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {exploreProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg">
                    <CardContent className="p-4">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-48 object-cover mb-3 rounded"
                      />
                      <h3 className="font-semibold mb-2">{product.name}</h3>
                      <span className="text-destructive font-bold">
                        ${product.price}
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/products">
                <Button size="lg" className="rounded-full px-8">
                  View All
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
