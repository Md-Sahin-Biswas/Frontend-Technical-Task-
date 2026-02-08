'use client'

import React from "react"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Message sent successfully!')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-muted/30">
              <CardContent className="p-8 md:p-12">
                <h1 className="text-3xl font-bold mb-2 text-center">
                  Enter Your Personal Information
                </h1>
                <p className="text-muted-foreground text-center mb-8">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your Name *"
                      required
                      className="bg-cyan-50/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your Email *"
                      required
                      className="bg-cyan-50/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Your Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your Phone *"
                      required
                      className="bg-cyan-50/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your Message"
                      rows={6}
                      className="bg-cyan-50/50"
                    />
                  </div>

                  <div className="flex justify-center">
                    <Button type="submit" size="lg" className="px-12">
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
