'use client';
import { useMotionValue } from 'framer-motion';
import { useMotionTemplate, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const EvervaultCard = ({
  img,
  name,
  className,
}: {
  img?: string;
  name?: string;
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        'p-0.5 bg-transparent aspect-square flex items-center justify-center w-full h-full relative',
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern mouseX={mouseX} mouseY={mouseY} img={img} name={name} />
      </div>
    </div>
  );
};

export function CardPattern({
  mouseX,
  mouseY,
  img,
  name,
}: {
  mouseX: any;
  mouseY: any;
  img?: string;
  name?: string;
}) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl bg-transparent group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 flex items-center justify-center transition duration-500"
        style={style}
      >
        {img && (
          <motion.img
            src={img}
            alt="Hovered"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
        )}
      </motion.div>
      {name && (
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 group-hover/card:opacity-0 z-10">
          <span className="text-primary font-bold font-ubuntuBold text-2xl">
            {name}
          </span>
        </div>
      )}
    </div>
  );
}


export const Icon = ({ className, ...rest }: any) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
        {...rest}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    );
  };