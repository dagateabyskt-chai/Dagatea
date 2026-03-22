"use client"
import { motion } from 'motion/react'
import { Search } from 'lucide-react'
import { useState } from 'react'
import Product from '@/components/all/Product'

const ProductsPage = () => {
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <main className="max-w-480 mx-auto px-6 py-30 bg-[#f6eee0] dark:bg-[#341100] dark:text-[#f6eee0] text-[#341100]">

      <section className="relative p-8 bg-linear-to-br dark:from-[#f6eee0]/10 dark:via-[#f6eee0]/40  dark:to-[#f6eee0]/5 from-[#341100]/40 via-[#341100]/10  to-[#341100]/50 rounded-4xl">
        <div className="max-w-400 mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-bold text-4xl md:text-7xl mb-6">
              Our Tea Collection
            </h1>
            <p className="font-medium text-xl max-w-3xl mx-auto dark:text-[#f6eee0]/50 text-[#341100]/50">
              Explore our premium selection of loose and packet tea varieties
            </p>
          </motion.div>
        </div>
      </section>

      {isEmpty && <div className="bg-transparent border dark:border-[#f6eee0] border-[#341100] my-15 rounded-3xl">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-20"
        >
          <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 dark:bg-[#f6eee0]/10 bg-[#341100]/10">
            <Search className="w-12 h-12 dark:text-[#f6eee0]/40 text-[#341100]/40" />
          </div>
          <h3 className="font-bold text-4xl mb-3">
            No products found
          </h3>
          <p className="font-paragraph dark:text-[#f6eee0]/60 text-[#341100]/60 mb-6">
            Please Contact to Us
          </p>
        </motion.div>
      </div>}

      {!isEmpty && <section className="my-12 p-8 bg-linear-to-br dark:from-[#f6eee0]/10 dark:via-[#f6eee0]/40  dark:to-[#f6eee0]/5 from-[#341100]/40 via-[#341100]/10  to-[#341100]/50 rounded-4xl">
        <Product />
      </section>}

      <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
      >
          <h3 className="text-xl font-semibold text-green-800">
            For Loose Tea & Personalized Packaging
          </h3>
          <a href='/#wholesale' className="text-red-600 underline mt-2 font-bold">
            Contact Us Now!
          </a>
      </motion.div>
    </main>
  )
}

export default ProductsPage