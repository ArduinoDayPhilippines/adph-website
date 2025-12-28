'use client'
import { useState } from "react"
import { StaticImageData } from "next/image"
import White_Shirt_Logo from "../../../public/images/White_Shirt_Logo.png"
import Black_Shirt_Logo from "../../../public/images/Black_Shirt_Logo.png"
import White_Shirt_Logo_Date from "../../../public/images/White_Shirt_Logo_Date.png"
import Black_Shirt_Logo_Date from "../../../public/images/Black_Shirt_Logo_Date.png"
import Maker_Mug from "../../../public/images/Maker_Mug.png"
import White_Tote_Bag from "../../../public/images/White_Tote_Bag.png"
import Black_Tote_Bag from "../../../public/images/Black_Tote_Bag.png"
import Bamboo_Pen from "../../../public/images/Bamboo_Pen.png"
import { Button } from "../ui/button"
import { Carousel } from "../ui/carousel"
import Link from "next/link"

interface Shirt {
    src: StaticImageData;
    alt: string;
    title: string;
    price: string;
}

export default function Merch() {
    const shirts: Shirt[] = [
        {
            src: White_Shirt_Logo,
            alt: "White_Shirt_Logo",
            title: "WHITE Arduino Innovator Tee",
            price: "264.00"
        },
        {
            src: Black_Shirt_Logo,
            alt: "Black_Shirt_Logo",
            title: "BLACK Arduino Innovator Tee",
            price: "264.00"
        },
        {
            src: White_Shirt_Logo_Date,
            alt: "White_Shirt_Logo_Date",
            title: "WHITE Arduino Day 2025 Innovator Tee",
            price: "264.00"
        },
        {
            src: Black_Shirt_Logo_Date,
            alt: "Black_Shirt_Logo_Date",
            title: "BLACK Arduino Day 2025 Innovator Tee",
            price: "264.00"
        },
        {
            src: Maker_Mug,
            alt: "Maker_Mug",
            title: "Maker's Mug",
            price: "85.00"
        },
        {
            src: White_Tote_Bag,
            alt: "White_Tote_Bag",
            title: "WHITE Tech-Tote",
            price: "159.50"
        },
        {
            src: Black_Tote_Bag,
            alt: "Black_Tote_Bag",
            title: "BLACK Tech-Tote",
            price: "159.50"
        },
        {
            src: Bamboo_Pen,
            alt: "Bamboo_Pen",
            title: "Inko",
            price: "40"
        },
        
    ];

    const [currentShirt, setCurrentShirt] = useState(0);

    return (
        <section className="h-screen w-full px-4 md:px-0 mt-12">
            <div className="flex mt-6 flex-col text-center gap-1">
                <h2>Merch</h2>
                <p className="text-[15px] md:text-xl mx-[20px] md:mx-0">Gear Up, Innovate, and Represent! Get Your Exclusive Arduino Merch Today!</p>
            </div>
            <div className="flex justify-center mt-4">
                <div className="z-10 w-full">
                    <Carousel 
                        items={shirts.map(shirt => ({ src: shirt.src, alt: shirt.alt }))} 
                        onSlideChange={setCurrentShirt}
                    />
                    <div className="space-y-0 mt-4">
                        <h4 className="text-shadow-glow text-center leading-none">
                            {shirts[currentShirt].title}
                        </h4>
                        <p className="text-shadow-glow font-morganite text-2xl font-medium text-center leading-none text-price">
                            {shirts[currentShirt].price} PHP
                        </p>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Link href="https://forms.gle/kiugDJvcyiid3NAb7">
                        <Button className="py-4">BUY NOW</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}