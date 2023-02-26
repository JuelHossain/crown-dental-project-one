import { TiLocation } from "react-icons/ti";

export default function HeaderTop() {
  return (
    <div className="bg-sec-6 px-4 py-2 text-white flex items-center justify-center gap-1">
      <TiLocation size={16} className="mb-[3px]" />
          <p className="text-xs underline">3223 harrier-club , new jersey, us, 22200</p>
          
    </div>
  );
}
