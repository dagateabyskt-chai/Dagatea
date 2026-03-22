"use client"
import Image from 'next/image'

/* ----- UIs ----- */
import { motion } from 'motion/react';
import { UserStar, Rocket, Eye, Award, Handshake } from 'lucide-react';

/* ----- IMAGE ----- */
import skt from "../../../../public/images/shree-krishna-traders.jpeg"


const AboutClient = () => {
    const yearEstablish = 1999;
    const date = new Date();
    let years = date.getFullYear() - yearEstablish;

    return (
        <>
            <main className="max-w-480 mx-auto px-6 py-30 bg-[#f6eee0] dark:bg-[#341100] dark:text-[#f6eee0] text-[#341100]">

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                    <h3 className="text-xl font-semibold text-green-800">
                        Daga Tea Traders {"(Since 1999)"}
                    </h3>
                    <p className="text-green-700 mt-2">
                        Premium Quality • Strong Taste • {years} Years of Trust
                    </p>
                    <p className="text-sm text-zinc-500 mt-1">
                        Serving from Nokha & Bikaner and working towards delivering quality tea
                        across India.
                    </p>
                </motion.div>

                {/* Page Title */}
                <motion.header
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center my-14"
                >
                    <h1 className="text-4xl font-bold mb-4 text-center">
                        About Daga Tea - Trusted Tea Trader in Rajasthan
                    </h1>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        Premium Quality Tea with a Strong and Authentic Taste - Serving customers
                        for over {years} years from Nokha and Bikaner.
                    </p>
                </motion.header>


                {/* About Section */}
                <section className="space-y-10 leading-relaxed md:text-lg p-8 rounded-2xl">

                    <motion.article
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col lg:flex-row gap-10 items-center border-0 border-[#ff9a03] pb-10"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/3"
                        >
                            <Image
                                src={skt}
                                alt="Business picture"
                                width={500}
                                height={500}
                                className="rounded-xl shadow-md w-full h-auto object-cover"
                            />
                        </motion.div>
                        <div className='space-y-4 lg:w-2/3 leading-relaxed'>
                            <p>
                                <strong>Daga Tea Traders</strong> is a trusted name in the tea industry
                                with over <strong>{years} years of experience</strong> in delivering
                                <strong> premium quality tea with a strong and rich taste</strong>.
                                Our journey began with a simple vision — to provide high-quality raw
                                tea that satisfies both everyday tea lovers and business partners in
                                the tea trade.
                            </p>

                            <p>
                                We proudly operate through two locations that help us serve customers
                                efficiently across the region.
                            </p>

                            <ul className="list-disc ml-6 space-y-1">
                                <li><strong>Daga Tea Traders – Nokha</strong></li>
                                <li><strong>Shree Krishna Traders – Bikaner</strong></li>
                            </ul>

                            <p>
                                Through these two centers, we serve a wide range of customers including
                                individual buyers, retailers, wholesalers, and distributors.
                            </p>
                        </div>
                    </motion.article>

                    <div className="grid lg:grid-cols-2 gap-10 p-4">

                        {/* Expertise */}
                        <motion.article
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="dark:bg-[#f6eee0]/10 bg-[#341100]/10 border dark:border-[#f6eee0]/30 border-[#341100]/30 p-8 rounded-2xl"
                        >
                            <h2 className="text-2xl font-semibold mb-3 text-zinc-950 dark:text-zinc-200">
                                <UserStar className='inline mr-2 font-extrabold' />
                                Our Expertise
                            </h2>

                            <p className="mb-4">
                                With more than two decades of experience in the tea business, we have
                                developed deep knowledge in selecting and supplying high-grade raw tea
                                leaves. Our focus has always been on maintaining:
                            </p>

                            <ul className="list-disc ml-6 space-y-1">
                                <li>Premium Quality</li>
                                <li>Strong and Refreshing Taste</li>
                                <li>Reliable Supply</li>
                                <li>Trusted Business Relationships</li>
                            </ul>

                            <p className="mt-4">
                                Every batch of tea we supply is carefully sourced to ensure our
                                customers receive consistent quality and authentic flavor.
                            </p>
                        </motion.article>


                        {/* Customers */}
                        <motion.article
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="dark:bg-[#f6eee0]/10 bg-[#341100]/10 border dark:border-[#f6eee0]/30 border-[#341100]/30 p-8 rounded-2xl"
                        >
                            <h2 className="text-2xl font-semibold mb-3 text-zinc-950 dark:text-zinc-200">
                                <Handshake className='inline mr-2 font-extrabold' />
                                Who We Serve
                            </h2>

                            <p className="mb-4">
                                We proudly supply tea to a wide network of customers including:
                            </p>

                            <ul className="list-disc ml-6 space-y-1">
                                <li>Retail Shop Owners</li>
                                <li>Wholesalers</li>
                                <li>Distributors</li>
                                <li>Individual Customers</li>
                            </ul>

                            <p className="mt-4">
                                Whether you are a small tea seller or a large distributor, we ensure
                                you receive the best quality tea at competitive prices.
                            </p>
                        </motion.article>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid lg:grid-cols-2 gap-10">

                        <motion.article
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="dark:bg-[#f6eee0]/10 bg-[#341100]/10 border dark:border-[#f6eee0]/30 border-[#341100]/30 p-8 rounded-2xl"
                        >
                            <h2 className="text-2xl font-semibold mb-3 text-zinc-950 dark:text-zinc-200">
                                <Rocket className='inline mr-2 font-extrabold' />
                                Our Mission
                            </h2>
                            <p>
                                Our mission is to continue delivering high-quality tea products with
                                honesty, consistency, and dedication while expanding our network to
                                serve customers across India.
                            </p>
                        </motion.article>

                        {/* <div className="md:hidden border-b border-zinc-800"></div> */}

                        <motion.article
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="dark:bg-[#f6eee0]/10 bg-[#341100]/10 border dark:border-[#f6eee0]/30 border-[#341100]/30 p-8 rounded-2xl"
                        >
                            <h2 className="text-2xl font-semibold mb-3 text-zinc-950 dark:text-zinc-200">
                                <Eye className='inline mr-2 font-extrabold' />
                                Our Vision
                            </h2>
                            <p>
                                We aim to grow Daga Tea Traders into a recognized tea supplier across
                                India, known for premium quality, strong taste, and trustworthy
                                service.
                            </p>
                        </motion.article>

                    </div>


                    {/* Commitment */}
                    <motion.article
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="dark:bg-[#f6eee0]/10 bg-[#341100]/10 border dark:border-[#f6eee0]/30 border-[#341100]/30 p-8 rounded-2xl"
                    >
                        <h2 className="text-2xl font-semibold mb-3 text-zinc-950 dark:text-zinc-200">
                            <Award className='inline mr-2 font-extrabold' />
                            Commitment to Quality
                        </h2>

                        <p>
                            At Daga Tea Traders, tea is not just a product — it is our passion. For
                            the last <strong>{years} years</strong>, we have built our reputation by
                            focusing on quality, trust, and long-term relationships with our
                            customers.
                        </p>
                    </motion.article>

                </section>

            </main>
        </>
    )
}

export default AboutClient