"use client";

import { motion } from "framer-motion";
import styles from "./PromoSplit.module.css";
import Image from "next/image";

export default function PromoSplit() {
  return (
    <section className={styles.promo}>
      <div className={styles.container}>
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/hero.jpg" // Replace with your actual image in public/images
            alt="Padel Club Promo"
            fill
            style={{ objectFit: "cover", borderRadius: "20px" }}
            className={styles.image}
          />
        </motion.div>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>A Better Way to Padel</h2>
          <p>
            Join the leading padel club in Pakistan. Whether you're a seasoned player or just starting out, our club offers world-class courts, community events, and expert coaching.
          </p>
          <button className={styles.btn}>Join the Club</button>
        </motion.div>
      </div>
    </section>
  );
}
