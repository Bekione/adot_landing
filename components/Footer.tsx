"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
} from "lucide-react";
import { blogPosts } from "@/data/blogs";
import { contactInformation } from "@/data/contactInformation";
import { socialLinks } from "@/data/socialLinks";
import { footerLinks } from "@/data/footerLinks";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-[#3d2e2e] to-[#2d2222] text-slate-200">
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
                src="/images/logos/footer-logo.png"
                alt="Adot Labs Logo"
                width={200}
                height={90}
                className="brightness "
              />
            </Link>
            <p className="text-white/80">Powering Bold Dreams.</p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="hover:text-white"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold text-white font-ubuntuBold">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((service) => (
                <motion.li
                  key={service.title}
                  whileHover={{ x: 5 }}
                  className="hover:text-white transition-colors"
                >
                  <Link href={service.href}>{service.title}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold font-ubuntuBold text-white">
              Products
            </h3>
            <ul className="space-y-2">
              {footerLinks.products.map((product) => (
                <motion.li
                  key={product.title}
                  whileHover={{ x: 5 }}
                  className="hover:text-white transition-colors flex items-center"
                >
                  <Link href={product.href} className="flex items-center">
                    {product.title}
                    {product.badge && (
                      <span className="ml-2 px-2 py-1 text-xs bg-secondary text-white rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold font-ubuntuBold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <motion.li
                  key={link.title}
                  whileHover={{ x: 5 }}
                  className="hover:text-white transition-colors"
                >
                  <Link href={link.href}>{link.title}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Links */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold font-ubuntuBold text-white">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              {contactInformation.map((info, index) => (
                <li key={index} className="flex items-start gap-2">
                  <info.icon className="h-5 w-5 text-white flex-shrink-0" />
                  <div>
                    {/* <span className="font-semibold text-white">
                      {info.title}:
                    </span> */}
                    {Array.isArray(info.content) ? (
                      <ul className="space-y-1">
                        {info.content.map((item, i) => (
                          <li key={i}>
                            {info.title === "Phone" ? (
                              <Link
                                href={`tel:${item}`}
                                className="hover:text-white"
                              >
                                {item}
                              </Link>
                            ) : (
                              item
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : info.title === "Email" ? (
                      <Link
                        href={`mailto:${info.content}`}
                        className="hover:text-white"
                      >
                        {info.content}
                      </Link>
                    ) : (
                      <p>{info.content}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* News & Post */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold font-ubuntuBold text-white">
              News & Post
            </h3>
            <div className="space-y-4">
              {blogPosts.slice(0, 2).map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ x: 5 }}
                  className="group flex gap-3"
                >
                  <Link href={`/blog/${post.id}`} className="flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={48}
                      height={48}
                      className="rounded object-cover"
                    />
                  </Link>
                  <div className="flex flex-col">
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-sm group-hover:text-white transition-colors line-clamp-2"
                    >
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
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
