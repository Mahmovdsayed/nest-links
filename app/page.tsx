'use client'
import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import logo from "../public/nest_logo.svg";
import link from "../public/link.png";
import { FaLinkedin, FaWhatsapp, FaInstagramSquare, FaTiktok, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button, Chip } from "@nextui-org/react";
import Link from "next/link";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { MdVerified } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const Links = [
    {
      text: "Instagram",
      url: "https://www.instagram.com/nest.dev/"
    },
    {
      text: "Facebook",
      url: "https://www.facebook.com/nest.development/"
    },
    {
      text: "Tiktok",
      url: "https://www.tiktok.com/@nest.dev"
    },
    {
      text: "Twitter",
      url: "https://x.com/nest__dev"
    },
  ];


  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-white">
      <Image
        className="rounded-lg mb-4"
        width={100}
        height={100}
        alt="fr_logo"
        blurDataURL="true"
        draggable="false"
        src={logo}
      />
      <div className="px-4">
        <div className="text-center">

          <div className="flex items-center justify-center space-x-1">
            <h1 className="text-3xl font-semibold">NEST Links </h1>
            <span><MdVerified size={22} /></span>
          </div>
          <p className="mt-1 text-sm md:text-lg font-medium md:w-1/2 md:mx-auto">We combine attractive design with cutting-edge technology to deliver an exceptional experience.</p>
          <Chip className="mt-2" variant="dot" size="sm" color="success">Available For Work</Chip>
        </div>
        {/* <div className="my-5 flex items-center justify-center space-x-4">
          <Link target="_blank" href={"https://www.instagram.com/fr.eg_/"}>
            <span className=""><FaInstagram size={30} /></span>
          </Link>
          <Link target="_blank" href={"https://www.tiktok.com/@fr.eg_"}>
            <span className=""><FaTiktok size={30} /></span>
          </Link>
        </div> */}
        <div className="my-4 flex flex-col space-y-5 items-center justify-center">
          {Links.map((fr, index) => (
            <Button key={index} as={Link} size='lg' href={fr.url} target="_blank" className="w-full font-medium" color="default">
              {fr.text}
            </Button>
          ))}
        </div>
      </div>

    </main>
  );
};

export default Page;
