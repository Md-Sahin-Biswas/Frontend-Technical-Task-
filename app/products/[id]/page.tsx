'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Star, Minus, Plus, Heart, Truck, CheckCircle2 } from 'lucide-react'
import { products, reviews } from '@/lib/data'
import { useState } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export default function ProductDetailPage() {
  const params = useParams()
  const product = products.find((p) => p.id === params.id)
  const productReviews = reviews.filter((r) => r.productId === params.id)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState('black')

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Link href="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4)

  const ratingDistribution = [
    { stars: 5, count: 92 },
    { stars: 4, count: 29 },
    { stars: 3, count: 18 },
    { stars: 2, count: 8 },
    { stars: 1, count: 4 },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Product Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="bg-muted rounded-lg p-8">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-auto max-h-[500px] object-contain"
              />
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'fill-gray-200 text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} Reviews)
                  </span>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  In Stock
                </Badge>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground mb-6">
                {product.description || `${product.name} - Brand: Apple`}
              </p>

              <Separator className="my-6" />

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Colours:</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedColor('black')}
                    className={`w-10 h-10 rounded-full bg-black border-2 ${
                      selectedColor === 'black' ? 'border-primary' : 'border-gray-300'
                    }`}
                  />
                  <button
                    onClick={() => setSelectedColor('gray')}
                    className={`w-10 h-10 rounded-full bg-gray-400 border-2 ${
                      selectedColor === 'gray' ? 'border-primary' : 'border-gray-300'
                    }`}
                  />
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Quantity:</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="flex-1 min-w-[200px]">
                  Buy Now
                </Button>
                <Button size="lg" variant="outline" className="flex-1 min-w-[200px] bg-transparent">
                  Add To Cart
                </Button>
                <Button size="lg" variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Delivery Info */}
              <Card>
                <CardContent className="p-4 space-y-4">
                  <div className="flex items-start gap-4">
                    <Truck className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Free Delivery</h4>
                      <p className="text-sm text-muted-foreground">
                        Enter your postal code for Delivery Availability
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Return Delivery</h4>
                      <p className="text-sm text-muted-foreground">
                        Free 30 Days Delivery Returns. Details
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Key Specifications */}
          {product.specifications && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Key Specifications</h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <li key={key} className="flex gap-2">
                        <span className="font-semibold min-w-[150px]">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>
          )}

          {/* Ratings & Reviews */}
          <section className="mb-12">
            <Card className="bg-cyan-50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Ratings & Reviews of {product.name}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Rating Summary */}
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-2">{product.rating}/5</div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-6 w-6 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'fill-gray-200 text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground">{product.reviews} ratings</p>
                  </div>

                  {/* Rating Distribution */}
                  <div className="space-y-2">
                    {ratingDistribution.map((item) => (
                      <div key={item.stars} className="flex items-center gap-3">
                        <div className="flex items-center gap-1 min-w-[60px]">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{item.stars}</span>
                        </div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{ width: `${(item.count / 150) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm min-w-[30px] text-right">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Reviews */}
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold">Product Reviews</h3>
                    <Button variant="outline" size="sm">
                      Filter: All Stars
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    {productReviews.map((review) => (
                      <Card key={review.id} className="bg-white">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? 'fill-yellow-400 text-yellow-400'
                                        : 'fill-gray-200 text-gray-200'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold">{review.author}</span>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                                ✓
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* You May Also Like */}
          <section>
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    {relatedProduct.discount && (
                      <Badge className="absolute top-4 left-4 bg-destructive z-10">
                        -{relatedProduct.discount}%
                      </Badge>
                    )}
                    <CardContent className="p-0">
                      <div className="aspect-square bg-muted relative">
                        <img
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <Button variant="default" className="w-full mb-3">
                          Add To Cart
                        </Button>
                        <h3 className="font-semibold mb-2 line-clamp-1">{relatedProduct.name}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg font-bold text-destructive">
                            ${relatedProduct.price}
                          </span>
                          {relatedProduct.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${relatedProduct.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(relatedProduct.rating)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'fill-gray-200 text-gray-200'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            ({relatedProduct.reviews})
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
