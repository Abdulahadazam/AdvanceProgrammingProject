// components/Header.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Header.module.css";

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Booking', href: '/booking' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
  { name: 'ShowMyBookings', href: '/mybookings' },
  { name: 'Logout', href: '/signIn' },
  { name: 'Dashboard', href: '/admin/dashboard' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="The Padel Club Logo"
            width={60}
            height={60}
          />
          <span>The Padel Club</span>
        </Link>
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className={styles.navLink}>
              {item.name}
            </Link>
          ))}
        </nav>
        <Link href="/booking" className={styles.bookButton}>
          Book a Court
        </Link>
      </div>
    </motion.header>
  );
}
