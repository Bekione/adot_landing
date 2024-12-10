import React from 'react';

interface GradientWordProps {
  word: string;
  type?: 'default' | 'secondary'; 
  size?: 'md' | 'sm';
  className?: string;
}

const GradientWord: React.FC<GradientWordProps> = ({ word, type = 'default', size = 'md', className}) => {
  // Determine gradient colors and direction based on the "type" prop
  const gradientColors =
    type === 'secondary'
      ? 'from-white/5 to-white'
      : 'from-primary via-[#7c662e] to-primary';

  const gradientDirection =
    type === 'secondary' ? 'bg-gradient-to-b' : 'bg-gradient-to-r';

  const textSize = size === 'md' ? 'text-3xl md:text-5xl' : 'text-2xl md:text-4xl';

  return (
    <div className={`relative inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] ${className}`}>
      {/* Top layer with shadow */}
      <div
        className={`absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent py-4 ${gradientDirection} ${gradientColors} [text-shadow:0_0_rgba(0,0,0,0.1)]`}
      >
        <span className={`${textSize} font-bold font-ubuntuBold`}>{word}</span>
      </div>

      {/* Main visible layer */}
      <div
        className={`relative bg-clip-text text-transparent bg-no-repeat py-4 ${gradientDirection} ${gradientColors}`}
      >
        <span className={`${textSize} font-bold font-ubuntuBold`}>{word}</span>
      </div>
    </div>
  );
};

export default GradientWord;
