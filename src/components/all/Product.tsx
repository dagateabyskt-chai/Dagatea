"use client"
import { SetStateAction, useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"

import { cardData } from "@/data/productInfo"

const features = () => {
    const [more, setMore] = useState(-1);
    const showMore = (index: number) => {
        setMore((prev: SetStateAction<number>) => (prev === index ? -1 : index))
    }
    return (cardData.map((value, index) => {
        return (
            <section key={index} className='rounded-2xl bg-[#1f190f]/20 dark:bg-[#1f190f] text-sm md:text-base px-6.75 flex flex-col-reverse lg:flex-row h-full'>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-4 lg:w-2/3 my-4"
                >
                    <h2 className="text-3xl lg:text-5xl font-extrabold">{value.Product}</h2>

                    <div onClick={() => showMore(index)} className="flex gap-0.5 flex-col">
                        <div className={`${more === index ? "line-clamp-none" : "line-clamp-3"}`}>
                            {value.Description?.split("\n").map((line, i) => (
                                <p key={i} className="leading-7">{line}</p>
                            ))}
                        </div>
                    </div>


                    <div className="flex gap-1 flex-wrap">
                        <p className="text-[#f6eee0]/30 font-semibold">Category:</p>
                        <p className="">{value.Category}</p>
                    </div>

                    <p className="w-fit font-bold text-xl px-4 py-1 border-b border-[#f6eee0] rounded-lg">Different weight packs:</p>
                    {[...Array(3)].map((_, i) => {
                        return (
                            <div key={i} className="flex gap-2 leading-2 flex-wrap">
                                <p className="pl-4">- {value.Price[i]}:</p>
                                <p className="pl-4">{value.Size[i]}</p>
                            </div>
                        )
                    })}

                        <p className="w-fit font-bold text-xl px-4 py-1 border-b border-[#f6eee0] rounded-lg">Specification</p>
                        <div className="flex flex-col gap-1.5">
                        {Object.entries(value.Specification).map(([k, v], i) => {
                            return(
                                <div key={i} className="flex gap-1 md:gap-3">
                                    <p className="leading-none text-[#f6eee0]/30">{k}</p>
                                    <p className="leading-none">{v}</p>
                                </div>
                            )}
                        )}
                    </div>
                    </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="lg:w-1/3 max-w-75 h-fit rounded-3xl overflow-hidden my-4"
                >
                    <Image
                        src={value.img}
                        alt={`${value.Product} - Assam CTC Tea`}
                        width={500}
                        height={500}
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                    />
                </motion.div>
            </section>)
    }))
}

const Product = () => {
    return (
        <div className="py-10 grid md:grid-cols-2 gap-2 max-w-336 mx-auto">
            {
                features().map((Element, index) => {
                    return (
                        <div key={index} className="h-full">
                            {Element}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Product;