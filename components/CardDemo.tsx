"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from './ui/3dCard'
import Link from "next/link";

const ThreeDCardDemo = () => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-primary relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-auto sm:w-[25rem] h-auto [aspect-ratio:16/14] rounded-xl border">
        <CardItem translateZ="75" className="w-full h-full flex">
          <Image
            src="/images/adot-office.png"
            height="1000"
            width="1000"
            className="object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Adot office"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export default ThreeDCardDemo