"use client";

import { motion } from "framer-motion";
import styles from "./JoinTheClubCTA.module.css";

export default function JoinTheClubCTA() {
  return (
    <section className={styles.ctaSection}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.heading}
      >
        Join The Club And Let The Games Begin
      </motion.h2>

      <motion.a
        href="#"
        className={styles.button}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Become a Member
      </motion.a>
    </section>
  );
}
