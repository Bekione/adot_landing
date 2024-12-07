'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const blogPosts = [
  {
    id: 1,
    title: "Laboris nisi aliquip dium exiulilym commo cons...",
    date: "Aug 21 2024",
    image: "/images/adot-footer-logo.png"
  },
  {
    id: 2,
    title: "Expenses as material bre mate insisted buildi...",
    date: "Aug 21 2024",
    image: "/images/adot-footer-logo.png"
  }
]

export default function Footer() {

  return (
    <footer className="bg-gradient-to-br from-[#503c3c] via-[#3d2e2e] to-[#2d2222] text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={item} className="space-y-4 lg:col-span-2">
            <Link href="/" className="block">
              <Image
                src="/footer-logo.png"
                alt="Adot Labs Logo"
                width={170}
                height={70}
                className="brightness "
              />
            </Link>
            <p className="text-white/80">
              Powering Bold Dreams.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="hover:text-white"
              >
                <Youtube className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold text-white font-ubuntuBold">Services</h3>
            <ul className="space-y-2">
              {['Web Development', 'Web Design', 'App Development', 'Software Development'].map((service) => (
                <motion.li 
                  key={service}
                  whileHover={{ x: 5 }}
                  className="hover:text-white transition-colors"
                >
                  <Link href="#">{service}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold font-ubuntuBold text-white">Products</h3>
            <ul className="space-y-2">
              {['Adot ERP', 'Youthoupia', 'Adot AI'].map((product) => (
                <motion.li 
                  key={product}
                  whileHover={{ x: 5 }}
                  className="hover:text-white transition-colors"
                >
                  <Link href="#">{product}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold font-ubuntuBold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Blog', 'Contact', 'Careers', 'FAQ'].map((link) => (
                <motion.li 
                  key={link}
                  whileHover={{ x: 5 }}
                  className="hover:text-white transition-colors"
                >
                  <Link href="#">{link}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* News & Post */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold font-ubuntuBold text-white">News & Post</h3>
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ x: 5 }}
                  className="group flex gap-3"
                >
                  <Link href="#" className="flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={48}
                      height={48}
                      className="rounded object-cover"
                    />
                  </Link>
                  <div className="flex flex-col">
                    <Link href="#" className="text-sm group-hover:text-white transition-colors line-clamp-2">
                      {post.title}
                    </Link>
                    <span className="text-xs text-slate-400 mt-1">
                      {post.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-[#634b4b] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-white/80 text-sm">
            © {new Date().getFullYear()} Adot Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Cookie Policy</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

