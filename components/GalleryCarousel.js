"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import styles from "./GalleryCarousel.module.css";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "/hero.jpg",
  "/hero.jpg",
  "/hero.jpg",
  "/hero.jpg",
  "/hero.jpg",
];

export default function GalleryCarousel() {
  return (
    <section className={styles.gallerySection}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Club Moments
      </motion.h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={styles.swiper}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className={styles.slide}>
            <div className={styles.imageWrapper}>
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                style={{ objectFit: "cover", borderRadius: "15px" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
