
const GradientWord = ({ word }: { word: string }) => {
  return (
    <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
      <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-[#503c3c] via-[#614a4a] to-[#d5cea3] [text-shadow:0_0_rgba(0,0,0,0.1)]">
        <span className="text4xl md:text-5xl font-bold font-[family-name:var(--font-techniq-n)]">{word}</span>
      </div>
      <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-[#503c3c] via-[#614a4a] to-[#d5cea3] py-4">
        <span className="text4xl md:text-5xl font-bold font-[family-name:var(--font-techniq-n)]">{word}</span>
      </div>
    </div>
  );
};

export default GradientWord;
