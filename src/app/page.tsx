'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Zap, Shield, Droplet, Smartphone, ArrowRight, CheckCircle2, Clock, Sparkles, Waves } from 'lucide-react'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  }
}

const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20
    }
  }
}

// Product showcase variants
const showcaseVariants = {
  left: { x: 0, rotateY: -15, scale: 1 },
  right: { x: 0, rotateY: 15, scale: 1 },
  center: { x: 0, rotateY: 0, scale: 1.05 }
}

// Problem card variants
const problemCardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 18
    }
  }
}

export default function Home() {
  const router = useRouter()
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [showcasePosition, setShowcasePosition] = useState<'left' | 'center' | 'right'>('center')
  const productRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll()
  const productRotation = useTransform(scrollYProgress, [0, 1], [0, 360])
  const productScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1.1, 1, 0.9])
  const productY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -50, 50])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50])

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Smart Hydration Tracking',
      description: 'AI-powered sensors track your daily water intake and provide personalized recommendations through our companion app.'
    },
    {
      icon: <Waves className="w-6 h-6" />,
      title: 'Temperature Control',
      description: 'Keep your water cold for 24 hours or hot for 12 hours with advanced vacuum insulation technology.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Self-Cleaning UV-C',
      description: 'Built-in UV-C light automatically eliminates 99.9% of bacteria every 2 hours for germ-free hydration.'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Smart App Integration',
      description: 'Connect via Bluetooth to track habits, set reminders, and sync with your favorite health apps seamlessly.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              layoutId="logo"
              className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
            >
              JN
            </motion.div>
            <motion.button
              onClick={() => router.push('/checkout')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <motion.div variants={itemVariants} className="inline-block">
                <span className="px-4 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-full text-sm font-medium mb-6 inline-flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  The Future of Hydration
                </span>
              </motion.div>
              
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
              >
                Stay Hydrated,
                <motion.span
                  className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  style={{ backgroundSize: '200% 100%' }}
                >
                  Stay Ahead
                </motion.span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                Experience the smart water bottle that revolutionizes your hydration habits with AI-powered tracking and premium design.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  onClick={() => router.push('/checkout')}
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
                >
                  Order Now
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                </motion.button>

                <motion.button
                  onClick={() => router.push('/demo')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg shadow-lg border-2 border-gray-200 hover:border-gray-300 transition-all"
                >
                  Watch Demo
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Hero Product Image */}
            <motion.div
              className="relative flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                ref={productRef}
                style={{
                  rotate: productRotation,
                  scale: productScale,
                  y: productY
                }}
                className="relative"
                whileHover={{
                  rotate: 15,
                  scale: 1.1,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="relative"
                >
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full blur-3xl opacity-50"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.7, 0.5]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                  
                  {/* Product image */}
                  <motion.img
                    src="/product.png"
                    alt="JN Smart Water Bottle"
                    className="relative z-10 w-80 sm:w-96 h-auto object-contain drop-shadow-2xl"
                    whileHover={{
                      filter: 'brightness(1.1) drop-shadow(0 25px 50px rgba(0,0,0,0.25))'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              The Problem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Most people struggle to stay properly hydrated throughout the day
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Forget to Drink",
                description: "Busy schedules make it easy to forget hydration until it's too late"
              },
              {
                icon: <Droplet className="w-8 h-8" />,
                title: "Can't Track Intake",
                description: "No way to know if you're actually meeting your daily hydration goals"
              },
              {
                icon: <Waves className="w-8 h-8" />,
                title: "Water Gets Warm",
                description: "Regular bottles can't keep water at the perfect temperature all day"
              }
            ].map((problem, index) => (
              <motion.div
                key={index}
                variants={problemCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
                  transition: { type: 'spring', stiffness: 300 }
                }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-red-500">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              The Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              JN solves all these problems with intelligent technology and premium design
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "Smart Reminders",
                description: "Intelligent notifications remind you to drink at optimal times based on your activity"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Precision Tracking",
                description: "Accurate sensors measure every sip and sync data in real-time to your phone"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Perfect Temperature",
                description: "Advanced insulation keeps your drink at the ideal temperature for up to 24 hours"
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                variants={problemCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
                  transition: { type: 'spring', stiffness: 300 }
                }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-500">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Premium Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every detail crafted for the ultimate hydration experience
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                layoutId={`feature-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: '0 30px 60px -15px rgba(0,0,0,0.2)',
                  transition: { type: 'spring', stiffness: 300, damping: 25 }
                }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg border border-gray-100 cursor-pointer relative overflow-hidden group"
              >
                {/* Background glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{
                    opacity: hoveredFeature === index ? 1 : 0
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    animate={{
                      rotate: hoveredFeature === index ? [0, -10, 10, -10, 0] : 0,
                      scale: hoveredFeature === index ? 1.1 : 1
                    }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeInOut'
                    }}
                    className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg"
                  >
                    {feature.icon}
                  </motion.div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  <motion.p
                    className="text-gray-600 leading-relaxed text-sm"
                    animate={{
                      height: hoveredFeature === index ? 'auto' : '2.5em',
                      overflow: hoveredFeature === index ? 'visible' : 'hidden'
                    }}
                  >
                    {feature.description}
                  </motion.p>

                  {/* Expand indicator */}
                  <motion.div
                    className="mt-4 flex items-center text-gray-500 text-sm font-medium"
                    animate={{
                      x: hoveredFeature === index ? 5 : 0,
                      opacity: hoveredFeature === index ? 1 : 0.5
                    }}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Product Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Experience JN
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Interact with the product to see it from every angle
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left panel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {[
                { label: 'Sensors', value: 'Advanced' },
                { label: 'Capacity', value: '750ml' },
                { label: 'Battery', value: '7 Days' },
                { label: 'Connectivity', value: 'Bluetooth 5.0' }
              ].map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="bg-white p-4 rounded-xl shadow-md border border-gray-100 cursor-pointer"
                >
                  <div className="text-sm text-gray-500 mb-1">{spec.label}</div>
                  <div className="text-lg font-bold text-gray-900">{spec.value}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Center product */}
            <motion.div
              className="relative flex justify-center items-center py-12"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative"
                animate={{
                  rotateY: showcasePosition === 'left' ? -15 : showcasePosition === 'right' ? 15 : 0,
                  scale: showcasePosition === 'center' ? 1.1 : 1
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                whileHover={{
                  scale: 1.15,
                  transition: { type: 'spring', stiffness: 300, damping: 25 }
                }}
                onHoverStart={() => setShowcasePosition('center')}
                onHoverEnd={() => setShowcasePosition('center')}
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

                <motion.img
                  src="/product.png"
                  alt="JN Product Showcase"
                  className="relative z-10 w-80 h-auto object-contain drop-shadow-2xl"
                  animate={{
                    rotate: [0, 2, 0, -2, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  whileHover={{
                    filter: 'brightness(1.1) drop-shadow(0 30px 60px rgba(0,0,0,0.3))',
                    rotate: 15
                  }}
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100"
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <span className="text-sm font-medium text-gray-900">New Design</span>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 bg-gradient-to-r from-gray-900 to-gray-700 px-4 py-2 rounded-full shadow-lg"
                animate={{
                  y: [0, 10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5
                }}
              >
                <span className="text-sm font-medium text-white">Best Seller</span>
              </motion.div>
            </motion.div>

            {/* Right panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {[
                { label: 'Material', value: 'BPA-Free' },
                { label: 'Insulation', value: '24 Hours' },
                { label: 'Weight', value: '350g' },
                { label: 'Colors', value: '6 Options' }
              ].map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: -10 }}
                  className="bg-white p-4 rounded-xl shadow-md border border-gray-100 cursor-pointer"
                >
                  <div className="text-sm text-gray-500 mb-1">{spec.label}</div>
                  <div className="text-lg font-bold text-gray-900">{spec.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Interactive hint */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.p
              className="text-gray-500 flex items-center justify-center gap-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" />
              Hover over the product to interact
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              animate={{
                backgroundPosition: ['0%', '100%', '0%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{
                backgroundSize: '200% 100%',
                backgroundImage: 'linear-gradient(90deg, #ffffff 0%, #d1d5db 50%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Ready to Transform Your Hydration?
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Join thousands of satisfied customers who have upgraded their hydration game with JN
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                onClick={() => router.push('/checkout')}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 20px 40px -10px rgba(255,255,255,0.3)' 
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-gray-900 rounded-full font-bold text-lg shadow-2xl flex items-center gap-3 group"
              >
                Get Your JN
                <motion.span
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </motion.span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-transparent text-white rounded-full font-bold text-lg border-2 border-white/30 hover:border-white/50 transition-all"
              >
                Compare Models
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="mt-16 flex flex-wrap justify-center items-center gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: <Shield className="w-5 h-5" />, text: '2-Year Warranty' },
                { icon: <Zap className="w-5 h-5" />, text: 'Fast Shipping' },
                { icon: <CheckCircle2 className="w-5 h-5" />, text: '30-Day Returns' }
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {badge.icon}
                  <span className="text-sm font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            layoutId="footer-logo"
            className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4"
          >
            JN
          </motion.div>
          <p className="text-gray-500 text-sm">
            © 2024 JN. All rights reserved. The future of hydration is here.
          </p>
        </div>
      </footer>
    </div>
  )
}
