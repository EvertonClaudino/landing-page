
import { House } from 'lucide-react';

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <div className="absolute inset-0 border-2 border-[#FFC107] rounded-sm transform rotate-45 scale-75"></div>
    <div className="z-10 text-[#FFC107]">
       <House strokeWidth={1.5} />
    </div>
  </div>
);
