"use client";
import React from "react";
import Image from "next/image";

export const BackgroundGradients = () => {
    return (
        <div className="relative w-full h-full overflow-hidden">
            {/*orange gradient*/}
            <Image
                className="absolute top-0 left-0"
                alt="orange gradient background"
                src="/assets/secondary-gradient.svg"
                width={985}
                height={964}
                priority
            />

            {/*teal gradient*/}
            <Image
                className="absolute bottom-0 right-0"
                alt="teal gradient background"
                src="/assets/primary-gradient.svg"
                width={885}
                height={1175}
                priority
            />
        </div>
    );
};