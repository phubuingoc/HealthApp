function RecommendCard({ title, subtitle }) {
  return (
    <div className="bg-gray-800 text-center text-white px-6 py-8 w-full h-36 ">
      <h3 className="text-yellow-400 font-bold text-xl tracking-widest">{title}</h3>
      <div className="w-14 border-t border-white mx-auto my-2"></div>
      <p className="text-lg">{subtitle}</p>
    </div>
  );
}

export default RecommendCard;
