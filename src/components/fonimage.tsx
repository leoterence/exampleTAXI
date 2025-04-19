export default function Fonimage() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Demi-cercle jaune */}
        <div className="absolute left-0 top-0 h-full w-1/2 bg-yellow-400 rounded-r-full" />

        {/* Arcs de cercles alignés à gauche et espacés */}
        <div className="absolute left-0 top-0 h-full w-full">
            {/* Chaque arc : un demi-cercle étendu vers la droite */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[58%] h-[100%] border-r border-gray-50/40 rounded-r-full" />
            <div className="absolute left-6 top-1/2 -translate-y-1/2 w-[65%] h-[100%] border-r border-gray-100/40 rounded-r-full" />
            <div className="absolute left-12 top-1/2 -translate-y-1/2 w-[70%] h-[100%] border-r border-gray-200/40 rounded-r-full" />
        </div>
    </div>
  );
}
