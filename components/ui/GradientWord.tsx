import React from 'react';
import { cn } from '@/lib/utils';

interface GradientWordProps {
  word: string;
  type?: 'default' | 'secondary'; 
  size?: 'md' | 'sm';
  className?: string;
}

const GradientWord: React.FC<GradientWordProps> = ({ word, type = 'default', size = 'md', className }) => {
  // Determine gradient colors and direction based on the "type" prop
  const gradientColors =
    type === 'secondary'
      ? 'from-white/5 to-white'
      : 'from-primary via-[#7c662e] to-primary';

  const gradientDirection =
    type === 'secondary' ? 'bg-gradient-to-b' : 'bg-gradient-to-r';

  const textSize = size === 'md' ? 'text-4xl md:text-5xl' : 'text-2xl md:text-4xl';

  return (
    <div
      // Breaks long words to avoid horizontal scrolling
      className={cn(
        'relative inline-block break-words [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]',
        className
      )}
    >
      {/* Top layer with shadow for depth effect */}
      <div
        className={cn(
          'absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent py-4 [text-shadow:0_0_rgba(0,0,0,0.1)]',
          gradientDirection,
          gradientColors
        )}
      >
        <span className={cn(textSize, 'font-bold font-ubuntuBold')} aria-label={word} role="text">
          {word}
        </span>
      </div>

      {/* Main visible gradient text layer */}
      <div
        className={cn(
          'relative bg-clip-text text-transparent bg-no-repeat py-4',
          gradientDirection,
          gradientColors
        )}
      >
        <span className={cn(textSize, 'font-bold font-ubuntuBold')} aria-label={word} role="text">
          {word}
        </span>
      </div>
    </div>
  );
};

export default GradientWord;
