import type { Metadata } from "next";

const baseTitle = "Adot Technologies - Building Bold Dreams";
const defaultDescription =
  "Your one-stop solution for creative websites, custom software, and tailored services.";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "https://adot-technologies.com";
const defaultImage = "/images/og-banners/og-main.jpg";
const defaultType = "website";

export const createMetadata = ({
  title,
  description,
  image,
  path = "/",
  type,
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  type?: "article" | "website" | "profile";
}): Metadata => {
  return {
    metadataBase: new URL(baseURL),
    title: title ? `${title} | Adot Technologies` : baseTitle,
    description: description || defaultDescription,
    openGraph: {
      title: title || baseTitle,
      description: description || defaultDescription,
      url: `${baseURL}${path}`,
      siteName: "Adot Technologies",
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: "Adot Technologies Banner",
        },
      ],
      type: type || defaultType,
    },
    twitter: {
      card: "summary_large_image",
      title: title || baseTitle,
      description: description || defaultDescription,
      images: [image || defaultImage],
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
      shortcut: "/favicon.ico",
    },
    manifest: "/site.webmanifest",
  };
};
