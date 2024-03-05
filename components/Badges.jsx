"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import AIML from "@/public/badges/AIML.png"
import ccna from "@/public/badges/ccna.png"
import cloud from "@/public/badges/cloud.png"
import devnet from "@/public/badges/devnet.png"
import Image from 'next/image'
import Link from 'next/link'

const Badges = () => {
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
        clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className='sm:w-72 sm:h-72 w-72 h-72'
      >
        <SwiperSlide className='pl-12'>
          <Link href="https://www.credly.com/badges/704af5ee-fc7b-4b09-9dc7-c31a4c5ef970/public_url" >
            <Image src={AIML} alt='Machine_learing_badge' />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='pl-12'>
          <Link href="https://www.credly.com/badges/8de24934-d629-492e-9e63-f6438b081c54/public_url" >
            <Image src={cloud} alt='cloud_foundations_badge' />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='pl-12'>
          <Link href="https://www.credly.com/badges/c5d68475-5088-4468-ad4e-aa211f7c3ba4/public_url" >
            <Image src={ccna} alt='computer_networks_badge' />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='pl-12'>
          <Link href="https://www.credly.com/badges/b9246978-a6b7-4ef5-9654-3d4909fb5a57/public_url" >
            <Image src={devnet} alt='devOps_badge' />
          </Link>
        </SwiperSlide>
      </Swiper>
  );
};

export default Badges