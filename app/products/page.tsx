import { createMetadata } from "@/lib/create-metadata";
import CTABlock from "@/components/ui/CTABlock";
import { products } from "@/data/products";
import GradientHeader from "@/components/GradientHeader";
import { StickyScroll } from "@/components/ui/StickyScrollReveal";

export const metadata = createMetadata({
  title: "Products",
  description: "Solving real-world problems with innovative solutions tailored for Ethiopian businesses and beyond.",
  path: "/products",
});

export default function ProductsOverwiew() {
  return (
    <div className="min-h-screen overflow-hidden">
      <GradientHeader
        title="Our Products"
        subtitle="Solving real-world problems with innovative solutions tailored for Ethiopian businesses and beyond."
      />

      <main className="py-12 w-full">
        <StickyScroll content={products} /> 
      </main>

      <CTABlock
        title="Want to be part of product building?"
        description="Our lab is a hub of innovation and creativity, where we support startups and tech enthusiasts in bringing their ideas to life."
        linkText="Adot Labs"
        link="/adot-labs"
      />
    </div>
  );
}
