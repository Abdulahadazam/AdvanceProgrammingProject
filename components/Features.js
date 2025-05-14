"use client";

import { motion } from "framer-motion";
import styles from "./Features.module.css";
import { FaTrophy, FaUsers, FaCalendarCheck } from "react-icons/fa";

const features = [
  {
    icon: <FaTrophy size={40} />,
    title: "Top-Class Facilities",
    description: "State-of-the-art padel courts with premium lighting and turf.",
  },
  {
    icon: <FaUsers size={40} />,
    title: "Professional Coaching",
    description: "Train with certified padel coaches from beginner to pro levels.",
  },
  {
    icon: <FaCalendarCheck size={40} />,
    title: "Easy Online Booking",
    description: "Book your court, training, or gear with just a few clicks.",
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles.he3}>{feature.title}</h3>
            <p className={styles.para}>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
