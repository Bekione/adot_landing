import { motion } from "framer-motion";
import { WobbleCard } from "./WobbleCard";
import Button from "./Button";
import { cn } from "@/lib/utils";

interface CTABlockProps {
  title: string;
  description?: string;
  linkText: string;
  link: string;
  type?: "default" | "secondary";
  className?: string;
}

const CTABlock: React.FC<CTABlockProps> = ({
  title,
  description,
  linkText,
  link,
  type = "default",
  className,
}) => {
  return (
    <WobbleCard
      allowScale={false}
      containerClassName={cn(
        type === "default" && "bg-secondary",
        type === "secondary" && "bg-primary",
        "mb-16 w-full sm:w-11/12 mx-auto text-center",
        className
      )}
    >
      <motion.h2
        className={cn(
          type === "default" && "text-primary",
          type === "secondary" && "text-secondary",
          "text-3xl font-bold font-ubuntuBold mb-4"
        )}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className={cn(
            type === "default" && "text-gray-700",
            type === "secondary" && "text-white",
            "text-xl mb-8"
          )}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative"
      >
        <Button text={linkText} to={link} type="secondary" />
      </motion.div>
    </WobbleCard>
  );
};

export default CTABlock;
