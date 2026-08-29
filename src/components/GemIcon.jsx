import { Gem } from "lucide-react";

function GemIcon({ size = 24 }) {
  return (
    <div className="flex items-center justify-center rounded-full bg-amber-50 p-2">
      <Gem
        size={size}
        strokeWidth={2}
        className="text-amber-500"
      />
    </div>
  );
}

export default GemIcon;