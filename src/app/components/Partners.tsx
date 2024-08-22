"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import megatron from "@/assets/megatron.jpg";
import ksph from "@/assets/KSPH.jpg";
import rpp from "@/assets/rpp.jpg";
import rosetta from "@/assets/Rosetta.jpg";
import Autoplay from "embla-carousel-autoplay";
import sjr from "@/assets/sjr.jpg";
import Image from "next/image";

export default function CarouselSpacing() {
  const partners = [
    {
      logo: rosetta,
    },
    {
      logo: sjr,
    },

    {
      logo: ksph,
    },
    {
      logo: rpp,
    },
    {
      logo: megatron,
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-2xl font-bold title-font mb-4 text-red-600">
            Our Customers
          </h1>
          <Carousel
            className="w-3/4 items-center text-center container"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent className="">
              {partners.map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/3 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src={_.logo}
                          alt="logo"
                          width={200}
                          height={200}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
