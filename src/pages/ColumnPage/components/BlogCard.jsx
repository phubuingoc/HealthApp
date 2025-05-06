function BlogCard({ img, date, time, title, tags }) {
  return (
    <div className="shadow-md">
      <div className="relative mb-4">
            <img src={img} alt={title} className="w-full h-36 object-cover rounded" />
            <div className="absolute bottom-0 left-0 bg-yellow-400 text-white text-sm px-2 py-1 font-medium">
              {date} {time}
            </div>
          </div>
      <div className="px-4 py-3">
       
        <h3 className="text-gray-800 font-medium text-sm leading-tight mb-2 line-clamp-2">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 text-xs text-orange-500 font-semibold">
          {tags?.map((tag, index) => (
            <span key={index} className="hover:underline">#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
