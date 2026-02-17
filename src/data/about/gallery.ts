export interface GalleryImageData {
  id: number;
  src: string;
  alt: string;
  emoji: string;
  className: string;
}

export const galleryImagesData: GalleryImageData[] = [
  {
    id: 1,
    src: "/images/gallery/gallery1.webp",
    alt: "Modern dental clinic interior",
    emoji: "🏥",
    className: "h-[500px] lg:h-[650px]",
  },
  {
    id: 2,
    src: "/images/gallery/gallery2.webp",
    alt: "Advanced dental equipment",
    emoji: "⚕️",
    className: "h-[300px] lg:h-[315px]",
  },
  {
    id: 3,
    src: "/images/gallery/gallery3.webp",
    alt: "Patient waiting area",
    emoji: "💺",
    className: "h-[300px] lg:h-[315px]",
  },
  {
    id: 4,
    src: "/images/gallery/gallery4.webp",
    alt: "Treatment room setup",
    emoji: "🦷",
    className: "h-[500px] lg:h-[650px]",
  },
];