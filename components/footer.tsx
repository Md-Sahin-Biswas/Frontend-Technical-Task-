import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">BuyBee</h3>
            <p className="text-sm opacity-90 mb-4">
              BuyBee is your one-stop destination for all electronics, fashion, and lifestyle products. 
              We connect quality sellers with smart buyers — fast, secure, and reliable shopping.
            </p>
            <div>
              <h4 className="font-semibold mb-2">Check Our App on</h4>
              <div className="flex gap-2">
                <Link href="#">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Get it on Google Play"
                    className="h-10"
                  />
                </Link>
                <Link href="#">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="Download on the App Store"
                    className="h-10"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="/" className="hover:opacity-100">Home</Link>
              </li>
              <li>
                <Link href="/products" className="hover:opacity-100">Shop</Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-100">Contact Us</Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="font-semibold mb-4">Customer Support</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="#" className="hover:opacity-100">Help Center</Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100">Shipping & Delivery</Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100">Return & Refund Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Follow */}
          <div>
            <h3 className="font-semibold mb-4">Contact & Follow Us</h3>
            <ul className="space-y-2 text-sm opacity-90 mb-4">
              <li>Email: support@buybee.com</li>
              <li>Phone: +8801XXXXXXXXX</li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm opacity-90">
            © 2025 BuyBee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
