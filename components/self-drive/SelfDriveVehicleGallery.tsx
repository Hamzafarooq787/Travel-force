"use client";
import { useState } from "react";

interface GalleryImage {
  src: string;
  hidden?: boolean; // whether the image is initially hidden
}

const galleryImages: GalleryImage[] = [
  { src: "https://travelforce.co.uk/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-30-at-14.44.45_6d33d783.jpg", hidden: false },
  { src: "https://travelforce.co.uk/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-27-at-17.40.13_26d934ef.jpg", hidden: false },
  { src: "https://travelforce.co.uk/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-27-at-17.40.13_d03e83ea.jpg", hidden: false },
  { src: "https://travelforce.co.uk/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-27-at-17.40.13_8b71e5cd.jpg", hidden: false },
  { src: "https://travelforce.co.uk/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-27-at-17.40.14_ac19c774.jpg", hidden: true },
  { src: "https://travelforce.co.uk/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-27-at-17.40.14_a8486d4a.jpg", hidden: true },
  { src: "https://travelforce.co.uk/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-27-at-17.40.15_deb569cd.jpg", hidden: true },
  { src: "https://travelforce.co.uk/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-27-at-17.40.14_075d2c6c.jpg", hidden: true },
  { src: "https://travelforce.co.uk/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-27-at-17.40.14_9c1d304a.jpg", hidden: true },
];

export default function SelfDriveVehicleGallery() {
  const [showAll, setShowAll] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const visibleImages = showAll ? galleryImages : galleryImages.filter(img => !img.hidden);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="self-drive-vehicle content-fonts self-drive-main py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="self-drive-inner flex flex-col gap-6 md:gap-8">
            {/* Top row: left text + right featured image */}
            <div className="self-drive-top flex flex-col md:flex-row justify-between gap-8">
              <div className="self-drive-left md:w-5/12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#252525] mb-3">Vehicle Overview</h2>
                <p className="text-[#3D4C5E] mb-4">
                  Hire a 17-seater Ford Transit Minibus for short or long-term use. Whether you’re planning a weekend
                  away, team travel, or require group transport for work, Travel Force offers a flexible and affordable
                  self-drive solution.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <li className="flex items-center gap-2 text-[#3D4C5E]">
                    <img src="https://travelforce.co.uk/wp-content/uploads/2025/06/Group-3.svg" alt="" className="w-5 h-5" /> Ford Transit 17-Seater
                  </li>
                  <li className="flex items-center gap-2 text-[#3D4C5E]">
                    <img src="https://travelforce.co.uk/wp-content/uploads/2025/06/Vector-2.svg" alt="" className="w-5 h-5" /> Automatic Transmission
                  </li>
                  <li className="flex items-center gap-2 text-[#3D4C5E]">
                    <img src="https://travelforce.co.uk/wp-content/uploads/2025/06/Group-4.svg" alt="" className="w-5 h-5" /> Diesel Fuel Type
                  </li>
                  <li className="flex items-center gap-2 text-[#3D4C5E]">
                    <img src="https://travelforce.co.uk/wp-content/uploads/2025/06/Vector-3.svg" alt="" className="w-5 h-5" /> Air Conditioning
                  </li>
                  <li className="flex items-center gap-2 text-[#3D4C5E]">
                    <img src="https://travelforce.co.uk/wp-content/uploads/2025/06/Vector-4.svg" alt="" className="w-5 h-5" /> Bluetooth Connectivity
                  </li>
                  <li className="flex items-center gap-2 text-[#3D4C5E]">
                    <img src="https://travelforce.co.uk/wp-content/uploads/2025/06/Vector-5.svg" alt="" className="w-5 h-5" /> 17 Seating Capacity
                  </li>
                </ul>
              </div>
              <div className="self-drive-right md:w-6/12 flex justify-end">
                <img
                  src="https://travelforce.co.uk/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-27-at-17.40.13_26d934ef.jpg"
                  alt="Ford Transit Minibus"
                  className="max-w-full h-auto object-cover rounded-md"
                />
              </div>
            </div>

            {/* Bottom gallery */}
            <div className="self-drive-bottom">
              <div
                id="gallery-outer-vehicle"
                className="self-drive-gallery grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4"
              >
                {visibleImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="gallery-single relative overflow-hidden group cursor-pointer"
                    onClick={() => openLightbox(img.src)}
                  >
                    <img
                      src={img.src}
                      alt="Minibus gallery"
                      className="w-full h-auto max-h-[350px] object-cover transition duration-500 group-hover:opacity-50 group-hover:scale-110"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-500">
                      <span className="btn btn-white bg-white text-black px-4 py-2 rounded-full">View Image</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Images button – only if there are hidden images */}
              {galleryImages.some(img => img.hidden) && (
                <div className="header-menu-btn flex justify-center mt-6">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="btn btn-black inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
                  >
                    <span>{showAll ? "Show Less" : "View All Images"}</span>
                    <img
                      src="https://travelforce.co.uk/wp-content/uploads/2025/05/Arrow-Right.svg"
                      alt="arrow"
                      className="w-4 h-4"
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
            >
              ×
            </button>
            <img src={selectedImage} alt="Full view" className="max-w-full max-h-[80vh] object-contain rounded shadow-lg" />
          </div>
        </div>
      )}
    </>
  );
}