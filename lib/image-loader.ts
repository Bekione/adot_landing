const CLOUDINARY_BASE_URL = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL;

type CloudinaryLoaderProps = {
  src: string;
  width: number;
  quality?: number | string;
};

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: CloudinaryLoaderProps): string {
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];

  return `${CLOUDINARY_BASE_URL}/${params.join(",")}/adot/${src}`;
}

export function cloudinaryBlurPlaceholder(src: string): string {
  return `${CLOUDINARY_BASE_URL}/f_auto,q_10,w_10/adot/${src}`; // Super low quality and small size
}
