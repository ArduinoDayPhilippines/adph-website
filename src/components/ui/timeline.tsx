"use client";
import {useScroll, useTransform, motion} from "framer-motion";
import React, {useEffect, useRef, useState} from "react";
import {Flag} from 'lucide-react';

interface TimelineProps {
    data: TimelineEntry[];
    header: {
        title: React.ReactNode;
        content: React.ReactNode;
    };
}

interface TimelineEntry {
    title: React.ReactNode;
    content: React.ReactNode;
}

export const Timeline = ({ data, header }: TimelineProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 25%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full bg-white  font-sans md:px-10"
            ref={containerRef}
        >
            <div className="max-w-7xl mx-auto pt-48 px-4 md:px-8 lg:px-10">
                {header.title}
                {header.content}
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                    >
                        <div className="flex justify-start pt-10 md:pt-40 md:gap-10">

                            {/*left components*/}
                            <div
                                className="sticky flex flex-col md:flex-row z-40 items-start top-40 self-start max-w-xs lg:max-w-sm md:w-full">

                                <div className="relative ml-[20px] md:ml-0">
                                    {/*circle  with gradient border*/}
                                    <div
                                        className={`w-[25px] h-[25px] md:w-[60px] md:h-[60px] absolute mt-1 
                                                        ${index % 2 === 0 ? 'border-gradient-primary' : 'border-gradient-secondary'}`}/>

                                    {/*flag container*/}
                                    <div
                                        className="rounded-full absolute mt-[5px] ml-[1px] w-[25px] h-[25px] md:w-[57px] md:h-[57px] flex items-center justify-center ">
                                        <Flag
                                            className="w-[12px] h-[12px] stroke-[3px] md:h-[25px] md:w-[25px] z-10"/>
                                    </div>

                                </div>

                                <h2 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-white-50">
                                    {item.title}
                                </h2>
                            </div>


                            <div className="relative pl-20 pr-4 md:pl-4 w-full">
                                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white-50">
                                    {item.title}
                                </h3>
                                {item.content}{" "}
                            </div>

                        </div>

                        {/*div line*/}
                        <div className="relative w-full pt-14 md:pt-16 md:h-[200px] h-[10px]">
                            <div className="absolute bottom-1 right-[5%] w-[85%] lg:w-[90%] h-[1px] bg-gray-200/20 "/>
                        </div>

                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-secondary via-primary to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>

            </div>
        </div>
    );
};
