
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] grid-cols-1 items-center justify-items-center min-h-screen font-[family-name:var(--font-manrope-reg)]">
     
      <Hero /> 
  <div className="h-screen w-full border">
    <h2>Fullscreen Content</h2>
  </div>
</div>

  );
}
