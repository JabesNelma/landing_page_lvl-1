'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, CheckCircle2, CreditCard, Package, User, MapPin } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'

export default function CheckoutPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    municipality: '',
    productColor: 'default',
    quantity: 1,
    paymentMethod: 'cod'
  })

  const municipalities = [
    { id: 1, name: 'Aileu' },
    { id: 2, name: 'Ainaro' },
    { id: 3, name: 'Atauro' },
    { id: 4, name: 'Baucau' },
    { id: 5, name: 'Bobonaro' },
    { id: 6, name: 'Covalima' },
    { id: 7, name: 'Dili' },
    { id: 8, name: 'Ermera' },
    { id: 9, name: 'Lautem' },
    { id: 10, name: 'Liquica' },
    { id: 11, name: 'Manatuto' },
    { id: 12, name: 'Manufahi' },
    { id: 13, name: 'Oecusse (RAEOA)' },
    { id: 14, name: 'Viqueque' }
  ]

  const colors = [
    { value: 'default', label: 'Default White', color: '#f5f5f5' },
    { value: 'black', label: 'Midnight Black', color: '#1a1a1a' },
    { value: 'blue', label: 'Ocean Blue', color: '#2563eb' },
    { value: 'green', label: 'Forest Green', color: '#16a34a' },
    { value: 'pink', label: 'Rose Pink', color: '#db2777' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    toast.success('Thank you! Your order has been successfully placed', {
      description: 'We will contact you soon for confirmation',
      duration: 5000,
      icon: <CheckCircle2 className="w-5 h-5 text-green-500" />
    })
    setIsSubmitting(false)
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }

  const isFormValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      emailRegex.test(formData.email) &&
      formData.phone.trim() !== '' &&
      formData.address.trim() !== '' &&
      formData.municipality.trim() !== ''
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price)
  }

  const productPrice = 35
  const totalPrice = productPrice * formData.quantity
  const shippingCost = formData.quantity >= 2 ? 0 : 5
  const finalPrice = formatPrice(totalPrice + shippingCost)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.button
              onClick={() => router.push('/')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </motion.button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Checkout - JN
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </motion.header>

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <User className="w-5 h-5 text-gray-900" />
                    <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+670 7xxxxxxx"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-5 h-5 text-gray-900" />
                    <h2 className="text-xl font-bold text-gray-900">Shipping Address</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address">Complete Address</Label>
                      <Input
                        id="address"
                        name="address"
                        type="text"
                        placeholder="aldeia, suco, postu administrativu"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="municipality">Municipality</Label>
                      <select
                        id="municipality"
                        name="municipality"
                        value={formData.municipality}
                        onChange={(e) => handleSelectChange('municipality', e.target.value)}
                        required
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 bg-white"
                      >
                        <option value="">Select Municipality</option>
                        {municipalities.map((muni) => (
                          <option key={muni.id} value={muni.name}>
                            {muni.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <Package className="w-5 h-5 text-gray-900" />
                    <h2 className="text-xl font-bold text-gray-900">Order Details</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label>Choose Color</Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                        {colors.map((color) => (
                          <motion.button
                            key={color.value}
                            type="button"
                            onClick={() => handleSelectChange('productColor', color.value)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={"relative p-4 rounded-xl border-2 transition-all " + (formData.productColor === color.value ? "border-gray-900 bg-gray-50" : "border-gray-200 hover:border-gray-300")}
                          >
                            <div
                              className="w-full h-16 rounded-lg mb-2"
                              style={{ backgroundColor: color.color }}
                            />
                            <p className="text-sm font-medium text-gray-900">{color.label}</p>
                            {formData.productColor === color.value && (
                              <div className="absolute top-2 right-2">
                                <CheckCircle2 className="w-5 h-5 text-gray-900" />
                              </div>
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="quantity">Quantity</Label>
                      <div className="flex items-center gap-3 mt-2">
                        <motion.button
                          type="button"
                          onClick={() => {
                            if (formData.quantity > 1) {
                              handleSelectChange('quantity', formData.quantity - 1)
                            }
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-900 font-bold"
                          disabled={formData.quantity <= 1}
                        >
                          -
                        </motion.button>
                        <Input
                          id="quantity"
                          name="quantity"
                          type="number"
                          min="1"
                          max="10"
                          value={formData.quantity}
                          onChange={(e) => handleSelectChange('quantity', parseInt(e.target.value) || 1)}
                          className="w-20 text-center"
                        />
                        <motion.button
                          type="button"
                          onClick={() => {
                            if (formData.quantity < 10) {
                              handleSelectChange('quantity', formData.quantity + 1)
                            }
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-900 font-bold"
                          disabled={formData.quantity >= 10}
                        >
                          +
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <CreditCard className="w-5 h-5 text-gray-900" />
                    <h2 className="text-xl font-bold text-gray-900">Payment Method</h2>
                  </div>
                  <div className="space-y-3">
                    {[
                      { value: 'cod', label: 'Cash on Delivery (Pay on Delivery)' },
                      { value: 'transfer', label: 'Bank Transfer' },
                      { value: 'ewallet', label: 'E-Wallet' }
                    ].map((method) => (
                      <motion.button
                        key={method.value}
                        type="button"
                        onClick={() => handleSelectChange('paymentMethod', method.value)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={"w-full p-4 rounded-xl border-2 text-left transition-all " + (formData.paymentMethod === method.value ? "border-gray-900 bg-gray-50" : "border-gray-200 hover:border-gray-300")}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{method.label}</span>
                          {formData.paymentMethod === method.value && (
                            <CheckCircle2 className="w-5 h-5 text-gray-900" />
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="sticky top-24"
              >
                <Card className="p-6 shadow-lg border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                  <div className="flex gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                    <img
                      src="/product.png"
                      alt="JN"
                      className="w-20 h-20 object-contain"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">JN Smart Bottle</h3>
                      <p className="text-sm text-gray-600">
                        {colors.find(c => c.value === formData.productColor)?.label}
                      </p>
                      <p className="text-sm text-gray-600">Qty: {formData.quantity}</p>
                    </div>
                  </div>
                  <div className="space-y-3 border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Price ({formData.quantity}x)</span>
                      <span>{formatPrice(productPrice * formData.quantity)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span>{shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}</span>
                    </div>
                    {formData.quantity >= 2 && (
                      <div className="flex justify-between text-green-600 text-sm">
                        <span>Shipping Discount</span>
                        <span>- {formatPrice(5)}</span>
                      </div>
                    )}
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between text-lg font-bold text-gray-900">
                        <span>Total</span>
                        <span>{formatPrice(totalPrice + shippingCost)}</span>
                      </div>
                    </div>
                  </div>
                  <motion.form onSubmit={handleSubmit} className="mt-6">
                    <motion.div
                      whileHover={{ scale: isSubmitting || !isFormValid() ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting || !isFormValid() ? 1 : 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting || !isFormValid()}
                        className={"w-full py-6 text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 " + (!isFormValid() ? "opacity-50 cursor-not-allowed" : "")}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Processing...
                          </span>
                        ) : !isFormValid() ? (
                          'Please fill all required fields'
                        ) : (
                          <span>Pay {finalPrice}</span>
                        )}
                      </Button>
                    </motion.div>
                  </motion.form>
                  <div className="mt-6 space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Secure & Encrypted Payment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>2-Year Warranty</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>30-Day Returns</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
