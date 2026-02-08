'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ShoppingCart, CheckCircle2, Star, Zap, Waves, Shield, Smartphone, Clock, Thermometer, Droplet, Battery, Bluetooth, Award, Leaf, Recycle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'

export default function DemoPage() {
  const router = useRouter()
  const [selectedColor, setSelectedColor] = useState('default')
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const productScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1])

  const colors = [
    { value: 'default', label: 'Default White', color: '#f5f5f5' },
    { value: 'black', label: 'Midnight Black', color: '#1a1a1a' },
    { value: 'blue', label: 'Ocean Blue', color: '#2563eb' },
    { value: 'green', label: 'Forest Green', color: '#16a34a' },
    { value: 'pink', label: 'Rose Pink', color: '#db2777' }
  ]

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Smart Hydration Tracking',
      description: 'AI-powered sensors track your daily water intake and provide personalized recommendations through our companion app.',
      details: ['Real-time tracking', 'Personalized goals', 'Daily insights', 'Weekly reports']
    },
    {
      icon: <Waves className="w-6 h-6" />,
      title: 'Temperature Control',
      description: 'Advanced vacuum insulation keeps your water cold for 24 hours or hot for 12 hours.',
      details: ['24h cold retention', '12h hot retention', 'Vacuum sealed', 'Condensation-free']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Self-Cleaning UV-C',
      description: 'Built-in UV-C light automatically eliminates 99.9% of bacteria every 2 hours.',
      details: ['99.9% bacteria kill', 'Auto-cleaning cycle', 'Chemical-free', 'Safe for daily use']
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Smart App Integration',
      description: 'Connect via Bluetooth to track habits, set reminders, and sync with your health apps.',
      details: ['Bluetooth 5.0', 'Health app sync', 'Custom reminders', 'Data export']
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: 'Long Battery Life',
      description: 'Powered by a rechargeable battery that lasts up to 7 days on a single charge.',
      details: ['7-day battery', 'USB-C charging', 'Quick charge', 'Low power mode']
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      title: 'Leak-Proof Design',
      description: 'Engineered with precision sealing to ensure zero leaks, even when inverted.',
      details: ['100% leak-proof', 'One-hand operation', 'Easy to clean', 'Dishwasher safe']
    }
  ]

  const specifications = [
    { category: 'Material', items: [
      { label: 'Body Material', value: 'Premium 18/8 Stainless Steel' },
      { label: 'Lid Material', value: 'BPA-Free Tritan Plastic' },
      { label: 'Finish', value: 'Powder Coated' },
      { label: 'Safety', value: 'FDA Approved, BPA-Free' }
    ]},
    { category: 'Capacity & Size', items: [
      { label: 'Capacity', value: '750ml (25oz)' },
      { label: 'Height', value: '26cm' },
      { label: 'Diameter', value: '8cm' },
      { label: 'Weight', value: '350g (empty)' }
    ]},
    { category: 'Performance', items: [
      { label: 'Cold Retention', value: '24 hours' },
      { label: 'Hot Retention', value: '12 hours' },
      { label: 'Battery Life', value: '7 days' },
      { label: 'Charging Time', value: '2 hours' }
    ]},
    { category: 'Technology', items: [
      { label: 'Connectivity', value: 'Bluetooth 5.0' },
      { label: 'App Support', value: 'iOS & Android' },
      { label: 'UV-C Wavelength', value: '270-280nm' },
      { label: 'Water Resistance', value: 'IPX7 Rated' }
    ]},
    { category: 'Package Contents', items: [
      { label: 'JN Bottle', value: '1x' },
      { label: 'USB-C Charging Cable', value: '1x' },
      { label: 'Quick Start Guide', value: '1x' },
      { label: 'Warranty Card', value: '1x' }
    ]},
    { category: 'Warranty', items: [
      { label: 'Warranty Period', value: '2 Years' },
      { label: 'Coverage', value: 'Manufacturing Defects' },
      { label: 'Return Policy', value: '30 Days' },
      { label: 'Customer Support', value: '24/7' }
    ]}
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Header */}
      <motion.header
        style={{ opacity: headerOpacity }}
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
              Kembali
            </motion.button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              JN Demo
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <motion.div
              style={{ scale: productScale }}
              className="relative flex justify-center items-center py-12"
            >
              <motion.div
                animate={{
                  rotate: [0, 3, 0, -3, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="relative"
              >
                {/* Animated rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 border-2 border-gray-200 rounded-full"
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{
                      scale: [1, 1.5, 2],
                      opacity: [0.5, 0.3, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 1,
                      ease: 'easeOut'
                    }}
                  />
                ))}

                <img
                  src="/product.png"
                  alt="JN Smart Water Bottle"
                  className="relative z-10 w-80 sm:w-96 h-auto object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-sm font-medium text-gray-900">Best Seller</span>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 bg-gradient-to-r from-gray-900 to-gray-700 px-4 py-2 rounded-full shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <span className="text-sm font-medium text-white">New Design</span>
              </motion.div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <Badge className="mb-4 bg-gradient-to-r from-gray-900 to-gray-700">Premium</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                  JN Smart Bottle
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  Botol air pintar yang mengubah cara Anda hidrasi dengan teknologi AI canggih dan desain premium.
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-900">4.9</span>
                <span className="text-gray-600">(2,847 ulasan)</span>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Pilih Warna</h3>
                <div className="flex flex-wrap gap-3">
                  {colors.map((color) => (
                    <motion.button
                      key={color.value}
                      onClick={() => setSelectedColor(color.value)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`relative w-12 h-12 rounded-full border-4 transition-all ${
                        selectedColor === color.value
                          ? 'border-gray-900 scale-110'
                          : 'border-gray-200'
                      }`}
                      style={{ backgroundColor: color.color }}
                    >
                      {selectedColor === color.value && (
                        <CheckCircle2 className="absolute inset-0 m-auto w-6 h-6 text-gray-900 -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2" />
                      )}
                    </motion.button>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Selection: {colors.find(c => c.value === selectedColor)?.label}
                </p>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-gray-900">
                    {formatPrice(35)}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    {formatPrice(50)}
                  </span>
                  <Badge variant="destructive">Save 29%</Badge>
                </div>
                <p className="text-sm text-gray-600">
                  Includes tax, free shipping for purchases of 2 or more
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => router.push('/checkout')}
                    size="lg"
                    className="w-full sm:w-auto px-8 py-6 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy Now
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto px-8 py-6 border-2 border-gray-200"
                  >
                    Add to Wishlist
                  </Button>
                </motion.div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <Award className="w-8 h-8 mx-auto mb-2 text-gray-900" />
                  <p className="text-sm font-medium text-gray-900">2-Year Warranty</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-gray-900" />
                  <p className="text-sm font-medium text-gray-900">Secure Payment</p>
                </div>
                <div className="text-center">
                  <Recycle className="w-8 h-8 mx-auto mb-2 text-gray-900" />
                  <p className="text-sm font-medium text-gray-900">Eco-Friendly</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fitur Unggulan
            </h2>
            <p className="text-xl text-gray-600">
              Teknologi canggih untuk pengalaman hidrasi terbaik
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 30px 60px -15px rgba(0,0,0,0.2)',
                  transition: { type: 'spring', stiffness: 300 }
                }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Spesifikasi Lengkap
            </h2>
            <p className="text-xl text-gray-600">
              Detail teknis JN Smart Bottle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                  {spec.category}
                </h3>
                <ul className="space-y-3">
                  {spec.items.map((item, i) => (
                    <li key={i} className="flex justify-between items-start">
                      <span className="text-gray-600 flex-1">{item.label}</span>
                      <span className="text-gray-900 font-medium text-right flex-1">
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What People Say?
            </h2>
            <p className="text-xl text-gray-600">
              Reviews from satisfied customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah Wijaya',
                rating: 5,
                review: 'Botol terbaik yang pernah saya punya! Fitur tracking airnya sangat membantu saya tetap terhidrasi sehari-hari.',
                date: '2 minggu lalu'
              },
              {
                name: 'Budi Santoso',
                rating: 5,
                review: 'Suhu air tetap dingin seharian. Desainnya elegan dan fitur UV-C membuat saya merasa lebih aman.',
                date: '1 bulan lalu'
              },
              {
                name: 'Dewi Putri',
                rating: 5,
                review: 'Aplikasinya sangat user-friendly. Saya bisa tracking konsumsi air harian dan dapat reminder otomatis.',
                date: '3 minggu lalu'
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 30px 60px -15px rgba(0,0,0,0.2)',
                  transition: { type: 'spring', stiffness: 300 }
                }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-700">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">{review.review}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready for Better Hydration?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get JN now and experience the difference
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              onClick={() => router.push('/checkout')}
              size="lg"
              className="px-10 py-6 bg-white text-gray-900 hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Buy Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
