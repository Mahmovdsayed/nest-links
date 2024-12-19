'use client'
import React, { useEffect, useRef } from 'react';
import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";
import { Button, Card, CardFooter, CardHeader, Chip, Image, image, Link } from "@nextui-org/react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { MdVerified } from "react-icons/md";
import Noise from '@/components/layout/Noise';
import { FaX, FaXTwitter } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const Links = [
    {
      text: "AL QURAN PLAYER",
      des: "AL-Quran Player offers a comprehensive platform for an enriched Quranic experience. Listen to complete Surahs recited by over 70 renowned reciters, and follow along with the clear and accessible Quranic text. Explore detailed information about each Surah, including its background and themes. Customize and share beautifully designed Ayah cards, adjusting the background, text color, and visibility of Arabic text, English translation, and Ayah numbers. Download these personalized Ayah cards as images to share with friends and family. Additionally, effortlessly keep track of your daily prayers with real-time prayer time calculations based on your location. AL-Quran Player blends functionality and customization to provide a deeply personalized and spiritually fulfilling experience.",
      url: "https://alquran-player.vercel.app/",
    },
    {
      text: "Games Corner",
      des: "Welcome to Games Corner, your ultimate destination for everything gaming! With comprehensive reviews of over 800,000 games and detailed information on more than 40,000 pages, Games Corner has everything you need to make informed gaming choices. What sets Games Corner apart is its unique feature allowing users to save their favorite games to their personal accounts, enabling easy access for future enjoyment without the hassle of searching. Explore the world of gaming and personalize your experience with Games Corner.",
      url: "https://games-corner.vercel.app/"
    },
    {
      text: "Movies Cafe",
      des: "Welcome to our cinematic hub! Explore the world of movies and TV shows in a new light with our website powered by TMDb API. Dive into a vast database featuring details about films, actors, ratings, and more. Browse, save your favorite movies, and stay updated with the latest cinematic news. Immerse yourself in the seventh art effortlessly and enjoy a unique cinematic experience through our site!",
      url: "https://moviescafe.vercel.app/"
    },
    {
      text: "QR Code Generator",
      des: "Use this tool to easily generate a QR code for any URL. Simply enter the URL in the input field below, and a unique QR code will be created instantly. Perfect for sharing links, websites, or digital content in a quick and accessible way!",
      url: "https://dynamic-qrcode-generator.vercel.app/"
    },
    // {
    //   text: "TikTok Downloader API",
    //   des: "This API allows you to download media content from TikTok. You can retrieve video and audio download URLs, along with metadata about the video.",
    //   url: "https://www.npmjs.com/package/tiktok-api-downloader"
    // },
  ];


  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center pt-10 bg-[#121212]">
      {/* <Noise /> */}
      {/* <video src='https://res.cloudinary.com/dxvpvtcbg/video/upload/v1726956082/knr0enfcjsct3yxl6zhw.mp4' className='fixed bg-fixed  top-0 left-0 object-cover object-center w-screen h-screen' autoPlay loop muted /> */}
      <Image
        className="rounded-lg z-40 mb-4"
        width={100}

        height={100}
        alt="nest-logo"
        draggable="false"
        src={"https://res.cloudinary.com/dxvpvtcbg/image/upload/v1718408970/tmmomilgpfuexrqjpynr.svg"}
      />
      <div className="px-4 z-50">
        <div className="text-center">

          <div className="flex items-center justify-center space-x-1">
            <h1 className="text-3xl font-semibold">NEST  </h1>
            <span><MdVerified size={22} /></span>
          </div>
          <p className="mt-1 text-sm md:text-lg font-medium md:w-1/2 md:mx-auto">We combine attractive design with cutting-edge technology to deliver an exceptional experience.</p>
          <Chip className="mt-2" variant="dot" size="sm" color="success">Available For Work</Chip>
        </div>
        <div className="my-5 flex  items-center justify-center space-x-4">
          <Link target="_blank" href={"https://www.instagram.com/nest.dev/"}>
            <span className="text-white"><FaInstagram size={25} /></span>
          </Link>
          <Link target="_blank" href={"https://www.tiktok.com/@nest.dev"}>
            <span className="text-white"><FaTiktok size={25} /></span>
          </Link>
          <Link target="_blank" href={"https://www.facebook.com/nest.development/"}>
            <span className="text-white"><FaFacebook size={25} /></span>
          </Link>
          <Link target="_blank" href={"https://x.com/nest__dev"}>
            <span className="text-white"><FaXTwitter size={25} /></span>
          </Link>
        </div>
        <div className='container mx-auto'>

          <div className="my-4 flex flex-col space-y-5 items-center justify-center">
            {Links.map((fr, index) => (
              <Card isPressable key={index} className=''>
                <CardHeader className='flex flex-col items-start justify-center'>
                  <h4 className='mb-5 text-2xl font-semibold'>{fr.text}</h4>
                  <p className='text-tiny text-start'>{fr.des}</p>
                </CardHeader>

                <CardFooter>
                  <Button as={Link} href={fr.url} target="_blank" size='lg' radius='full' showAnchorIcon className='w-full backdrop-blur-sm backdrop-filter text-white bg-white/10'>Visit {fr.text}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

        </div>

      </div>

    </main>
  );
};

export default Page;
