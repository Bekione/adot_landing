import { testimonials } from "@/data/testimonials";
import GradientWord from "../ui/GradientWord";
import { AnimatedTestimonials } from "../ui/AnimatedTestimonial";

const Testimonials = () => {

  return (
    <div className="flex flex-col items-center mt-6">
        <GradientWord word="Testimonials" />
        <AnimatedTestimonials testimonials={testimonials} autoplay />
    </div>
  );
};

export default Testimonials;
