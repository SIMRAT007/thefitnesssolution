import { galleryImages } from '../../mockData/data';

export function Gallery() {
  return (
    <div className="flex justify-center px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}