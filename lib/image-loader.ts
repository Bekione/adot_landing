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
  
    return `https://res.cloudinary.com/dzhobawko/image/upload/${params.join(
      ","
    )}/adot/${src}`;
  }
  