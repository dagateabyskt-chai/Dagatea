"use client"
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WholesaleSection from '@/components/all/WholesaleSection';

/* ----- UIs ----- */
import { ToastContainer, Bounce } from 'react-toastify';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Award, Users, Package, Leaf, Shield, TrendingUp } from 'lucide-react';

/* ----- IMAGES ----- */
import hero from "../../../public/images/hero-bg.png"
import cup1 from "../../../public/images/cup1.png"
import garden from "../../../public/images/garden.png"

const Home = () => {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const imageParallax = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const trustBadges = [
    { icon: Package, label: 'Retail Supply' },
    { icon: Users, label: 'Wholesale' },
    { icon: Award, label: 'Bulk Orders' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every batch is meticulously tested for purity, aroma, and freshness before it reaches your cup.'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Pricing',
      description: 'We offer the best market rates for wholesale and bulk orders without compromising on quality.'
    },
    {
      icon: Package,
      title: 'Bulk Availability',
      description: 'Ensuring a consistent and reliable supply chain for your business needs, year-round.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f6eee0] dark:bg-[#694e29]  overflow-auto">

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      {/* HERO SECTION - Immersive & Cinematic */}
      <section ref={heroRef} className="relative w-full min-h-screen bg-[#f6eee0] text-white flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-[#614219]/20 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-linear-to-b bg-[#614218]/60 via-transparent to-[#614218]/50 z-10" />
          <Image
            src={hero}
            alt="Premium dark tea leaves"
            className="w-full h-full object-cover scale-105"
            loading='lazy'
          />
        </motion.div>

        {/* Floating Tea Leaves Animation */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ 
                y: -100, 
                x: `${Math.random() * 100}%`, 
                opacity: 0,
                rotate: 0,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{
                y: '100vh',
                x: `${Math.random() * 100}%`,
                opacity: [0, 0.4, 0],
                rotate: 360
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: 'linear'
              }}
            >
              <Leaf className="w-6 h-6 text-white/40 drop-shadow-lg" />
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-fit w-full max-w-480 mx-auto px-6 pb-5 md:px-12 flex flex-col items-center text-center mt-20">
          <div
            className="flex flex-col items-center"
          >
            <div
              className="mb-8"
            >
              <span className="inline-flex mr-2 mb-2 items-center gap-2 px-6 py-2 border border-[#f6eee0] rounded-full bg-[#69481d]/40 text-[#f6eee0] text-xs md:text-sm font-medium tracking-[0.2em] uppercase">
                <Leaf className="w-3 h-3" />
                Shree Krishna Traders
                <Leaf className="w-3 h-3" />
              </span> 
              <span className="inline-flex items-center gap-2 px-6 py-2 border border-[#f6eee0] rounded-full bg-[#69481d]/40 text-[#f6eee0] text-xs md:text-sm font-medium tracking-[0.2em] uppercase">
                <Leaf className="w-3 h-3" />
                Daga Tea Traders
                <Leaf className="w-3 h-3" />
              </span>
            </div>

            <h1 className="font-bold text-6xl md:text-8xl lg:text-[9rem] text-[#f6eee0]/90 mb-6 leading-[0.9] ">
              Premium Tea
              <br />
              <span className="text-[#f6eee0] italic font-light">for Every Cup</span>
            </h1>

            <p className="text-lg md:text-2xl text-[#f6eee0]/40 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Discover the finest selection of loose and packet tea from Rajasthan's most trusted tea artisans.
            </p>

            <div className="mb-12 flex flex-col sm:flex-row gap-1 sm:gap-6 justify-center items-center">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden bg-[#69481d]/40 text-[#f6eee0] px-10 py-5 rounded-full font-semibold text-lg flex items-center gap-3 transition-all duration-300 shadow-[0_0_40px_rgba(200,169,81,0.3)] hover:shadow-[0_0_60px_rgba(200,169,81,0.5)]"
                >
                  <span className="relative z-10 text-sm sm:text-xl">Explore Collection</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </motion.button>
              </Link>

              <a href="#wholesale">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-transparent text-sm sm:text-lg text-[#f6eee0] border border-white/30 px-10 py-5 rounded-full font-semibold transition-all duration-300 hover:bg-[#f6eee0]/30 backdrop-blur-sm"
                >
                  Partner With Us
                </motion.button>
              </a>
            </div>
          </div>
        </div>

      </section>
      
        {/* Trust Badges - Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="w-full bg-[#69481d]/80 backdrop-blur-xl border-t border-[#f6eee0] py-6 z-20"
        >
          <div className="max-w-480 mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6">
            <div className="hidden md:block text-[#f6eee0]/80 font-light text-sm tracking-widest uppercase">
              Trusted Excellence
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <badge.icon className="w-5 h-5 text-[#f6eee0] group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-paragraph text-sm font-medium text-[#f6eee0]/60 tracking-wide">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      {/* ABOUT SECTION - Editorial Split Layout */}
      <section id="about" className="py-32 md:py-48 bg-[#fbeacd] dark:bg-[#695132]/60 relative z-10">
        <div className="max-w-400 mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 lg:col-start-2 space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 dark:bg-[#f6eee0] bg-[#69481d]" />
                <span className="dark:text-[#f6eee0] text-[#69481d] text-sm font-semibold tracking-[0.2em] uppercase">
                  Our Heritage
                </span>
              </div>
              
              <h2 className="font-bold text-5xl md:text-7xl text-[#e79934] leading-[1.1]">
                Tradition <br/>
                <span className="italic text-secondary/60">Meets</span> <br/>
                Excellence.
              </h2>
              
              <div className="space-y-6 text-lg text-[#69481d]/90 dark:text-[#f6eee0]/90 leading-relaxed pt-6 border-t border-[#69481d] dark:border-[#f6eee0]">
                <p>
                  At <strong className="font-semibold">Shree Krishna Traders</strong>, we have dedicated years to curating the finest quality tea under our premium brand, <strong className="font-semibold">Daga Tea</strong>. Rooted in the vibrant heart of Bikaner, Rajasthan, our passion is steeped in every leaf.
                </p>
                <p>
                  Our unwavering commitment to quality has established us as a trusted partner for retailers and wholesalers alike. Every batch is a testament to our rigorous selection process, ensuring that only the richest aromas and most authentic tastes reach your cup.
                </p>
              </div>

              <div className="pt-8">
                <Link href="/about" className="inline-flex items-center gap-2 font-semibold hover:gap-4 transition-all duration-300">
                  Read Our Full Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Image Composition */}
            <div className="lg:col-span-6 relative h-150 md:h-200 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 40 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 rounded-t-full rounded-b-[4rem] overflow-hidden shadow-2xl"
              >
                <motion.div style={{ y: imageParallax }} className="w-full h-[120%] -mt-[10%]">
                  <Image
                    src={garden}
                    alt="Lush tea plantation"
                    className="w-full h-full object-cover"
                    loading='lazy'
                  />
                </motion.div>
                <div className="absolute inset-0 bg-[#69481d]/30 mix-blend-overlay" />
              </motion.div>

              {/* Floating Stat Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute -bottom-12 -left-6 md:-left-12 bg-transparent text-[#f6eee0] p-8 md:p-10 rounded-3xl shadow-2xl border border-white backdrop-blur-xl"
              >
                <div className="text-6xl md:text-7xl font-bold text-[#f6eee0] mb-2">25+</div>
                <div className="text-sm md:text-base tracking-widest uppercase">Years of<br/>Mastery</div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* VISUAL BREATHER */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: useTransform(scrollYProgress, [0.3, 0.7], ['-20%', '20%']) }}
        >
          <Image
            src={cup1}
            alt="Tea pouring aesthetic"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#69481d]/60 mix-blend-multiply" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <Leaf className="w-12 h-12 text-[#f6eee0] mx-auto mb-8 opacity-80" />
          <h2 className="font-heading text-4xl md:text-6xl text-[#f6eee0] max-w-4xl mx-auto leading-tight">
            "A simple cup of tea is far from a simple matter."
          </h2>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-32 md:py-48 bg-[#443333] dark:bg-[#3d2e2f] text-[#e2b898] relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#f6eee0]/30 to-transparent" />
        <div className="absolute -top-160 -right-160 w-7xl h-320 bg-[#f6eee0]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-400 mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between sm:items-end mb-24 gap-2 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-center"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-[#ce892f] " />
                <span className="text-center text-[#ce892f] text-sm font-semibold tracking-[0.2em] uppercase">
                  The Daga Difference
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl mb-6 leading-tight">
                Your Trusted <br/>Tea Partner.
              </h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-[#d5b386] max-w-md pb-4"
            >
              We combine generations of traditional expertise with modern quality standards to deliver exceptional value to our partners.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-[#69481d]/5 backdrop-blur-md p-10 rounded-4xl border border-zinc-500 dark:border-white/10 hover:border-white/50 transition-colors duration-500 overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-[#69481d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#69481d]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#69481d]/20 transition-all duration-500">
                    <feature.icon className="w-8 h-8 text-[#e49f45]" />
                  </div>
                  <h3 className="font-heading text-3xl mb-4 text-[#d49037]">{feature.title}</h3>
                  <p className="font-paragraph leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BRAND SECTION - Daga Tea Showcase */}
      <section className="py-32 bg-[#fbeacd] dark:bg-[#3f2901] text-[#3f2903] dark:text-[#f4d5a1] relative">
        <div className="max-w-400 mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#825301]/50 dark:bg-[#d6ba8a]" />
              <span className="text-[#825301] dark:text-[#d6ba8a] text-sm font-semibold tracking-[0.2em] uppercase">
                Our Premium Brand
              </span>
              <div className="h-px w-12 bg-[#825301]/50 dark:bg-[#d6ba8a]" />
            </div>
            <h2 className="text-5xl md:text-7xl text-[#825301] dark:text-[#d6ba8a] mb-6 leading-tight">
              Daga Tea Collection
            </h2>
            <p className="text-xl text-[#825301]/50 dark:text-[#d6ba8a]/50 max-w-3xl mx-auto">
              Experience the finest tea varieties under our premium Daga Tea brand
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Daga Premium CTC',
                type: 'Strong & Bold',
                description: 'Perfect for chai lovers who prefer a robust, full-bodied flavor',
                highlight: 'Best Seller'
              },
              {
                name: 'Daga Assam Gold',
                type: 'Rich & Malty',
                description: 'Authentic Assam tea with a distinctive malty character',
                highlight: 'Premium'
              },
              {
                name: 'Daga Special Blend',
                type: 'Balanced & Smooth',
                description: 'A carefully crafted blend for the perfect cup every time',
                highlight: 'Signature'
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-linear-to-br from-[#825301]/5 to-[#825301]/5 p-8 rounded-3xl border-2 border-amber-950 dark:border-[#f6eee0] transition-all duration-500 overflow-hidden"
              >
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 dark:bg-[#d6ba8a]/10 bg-[#825301]/20 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <span className="inline-block px-4 py-2 dark:bg-[#d6ba8a]/10 bg-[#825301]/20 rounded-full font-paragraph text-xs font-bold tracking-wider uppercase mb-6">
                    {product.highlight}
                  </span>
                  
                  <div className="mb-6">
                    <Leaf className="w-12 h-12 text-[#825301] dark:text-[#dc9211] mb-4 group-hover:rotate-12 transition-transform duration-500" />
                  </div>

                  <h3 className="font-bold text-3xl text-[#3f2903] dark:text-[#f5e6cd] mb-3">
                    {product.name}
                  </h3>
                  <p className="font-paragraph text-lg text-[#805406] dark:text-[#d4c1a0] mb-4 font-semibold">
                    {product.type}
                  </p>
                  <p className="font-paragraph text-[#3f2903]/50 dark:text-[#f4d5a1] leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <Link href="/products">
                    <button className="w-full bg-transparent text-[#3f2903] dark:text-[#f4d5a1] border-2 border-[#f6eee0] px-6 py-3 rounded-full font-semibold hover:bg-[#3f2903]/50 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-4">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / WHOLESALE SECTION */}
      <WholesaleSection />

    </div>
  )
}

export default Home