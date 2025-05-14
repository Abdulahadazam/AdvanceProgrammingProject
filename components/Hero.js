"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src="/jero.jpg" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.overlay} />

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to The Padel Club
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Pakistan’s #1 Padel Sports Club – Join the Community
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link href="/booking" className={styles.ctaButton}>
            Book Now
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}