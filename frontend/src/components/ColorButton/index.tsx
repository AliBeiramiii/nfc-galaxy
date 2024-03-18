import React, {useState } from 'react';

interface ColorButtonProps {
    color: string;
    onColorSelect: (color: string) => void;
    btnSelectedColor: string;
  }
  
  const ColorButton: React.FC<ColorButtonProps> = ({ color, onColorSelect, btnSelectedColor }) => {
    const [hovered, setHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };
  
    const handleClick = () => {
      onColorSelect(color);
    };
    const colorToName =(color:string)=>{
        if(color==='bg-[#2e77bd]')
            return 'آبی'
        else if(color==='bg-[#6c62ac]')
            return 'بنفش'
        else if(color==='bg-[#feef76]')
            return 'زرد'
        else if(color==='bg-[#18665c]')
            return 'سبز'
        else if(color==='bg-[#f0f0f0]')
            return 'سفید'
        else if(color==='bg-[#e0218a]')
            return 'صورتی'
        else if(color==='bg-[#52666f]')
            return 'طوسی'
        else if(color==='bg-[#db1e39]')
            return 'قرمز'
        else if(color==='bg-[#0f0f0f]')
            return 'مشکی'
        else if(color==='bg-[#f47d62]')
            return 'نارنجی'
    }
  
    return (
      <div className="relative inline-block">
        <div className={btnSelectedColor==color ? "flex border-[3px] rounded-full border-black mb-2" : ' border-4 border-hidden'}>
        <button
          className={`h-[30px] w-[30px] hover:ring-black hover:ring-2 hover:ring-offset-1 rounded-full `+ color}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
        </button>
        </div>
        {hovered && (
          <div className="absolute w-full bg-gray-100 text-xs bg-opacity-90 flex items-center justify-center bottom-12 p-1 text-gray-700 font-bold rounded">
            {colorToName(color)}
          </div>
        )}
      </div>
    );
  };

  export default ColorButton;