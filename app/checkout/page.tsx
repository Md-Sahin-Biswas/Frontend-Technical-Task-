'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('card')

  const orderItems = [
    {
      id: '10',
      name: 'iPhone 17 Pro Max',
      price: 799,
      image: 'https://images.unsplash.com/photo-1592286927505-02c68672829b?w=100&h=100&fit=crop',
    },
    {
      id: '11',
      name: 'HP Laptop',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&fit=crop',
    },
  ]

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0)
  const shipping = 0
  const total = subtotal + shipping

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6 p-4 bg-cyan-50 rounded-lg">
            <p className="text-sm">
              Returning to customer?{' '}
              <Link href="/login" className="text-primary font-semibold hover:underline">
                Click Here to Login
              </Link>
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Shipping Form */}
            <div className="lg:col-span-2">
              <h1 className="text-2xl font-bold mb-6">Shipping info form</h1>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name*</Label>
                    <Input id="firstName" placeholder="First Name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name*</Label>
                    <Input id="lastName" placeholder="Last Name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">Town/City*</Label>
                  <Input id="city" placeholder="Town/City" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Street Address*</Label>
                  <Input id="address" placeholder="Street Address" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="apartment">Apartment, floor, etc. (optional)</Label>
                  <Input id="apartment" placeholder="Apartment, floor, etc." />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number*</Label>
                    <Input id="phone" type="tel" placeholder="Phone Number" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address*</Label>
                    <Input id="email" type="email" placeholder="Email Address" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Order Summary (optional)*</Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    rows={4}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="save" />
                  <Label
                    htmlFor="save"
                    className="text-sm font-normal cursor-pointer"
                  >
                    Save this information for faster check-out next time
                  </Label>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  {/* Order Items */}
                  <div className="space-y-4 mb-6">
                    {orderItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <span className="text-sm">{item.name}</span>
                        </div>
                        <span className="font-semibold">${item.price}</span>
                      </div>
                    ))}
                  </div>

                  {/* Totals */}
                  <div className="space-y-3 mb-6 border-t pt-4">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span className="font-semibold">${subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping:</span>
                      <span className="font-semibold text-green-600">Free</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between text-lg">
                      <span className="font-bold">Total:</span>
                      <span className="font-bold">${total}</span>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-4">Choose Payment Method</h3>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2 mb-3 p-3 border rounded-lg">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex-1 cursor-pointer">
                          Pay with Card
                        </Label>
                        <div className="flex gap-1">
                          <span className="text-xs font-semibold text-pink-600">bkash</span>
                          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
                          <span className="text-xs font-semibold text-orange-600">Rocket</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="cash" id="cash" />
                        <Label htmlFor="cash" className="flex-1 cursor-pointer">
                          Cash on delivery
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Coupon Code */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Have Coupon /Voucher?</h3>
                    <div className="flex gap-2">
                      <Input placeholder="Coupon Code" />
                      <Button>Apply Coupon</Button>
                    </div>
                  </div>

                  {/* Place Order Button */}
                  <Button className="w-full" size="lg">
                    Place Order
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
