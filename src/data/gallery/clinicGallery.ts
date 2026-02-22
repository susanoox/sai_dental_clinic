export interface GalleryImage {
  id: number
  src: string
  alt: string
}

export const clinicGallery: GalleryImage[] = Array.from(
  { length: 42 },
  (_, i) => ({
    id: i + 1,
    src: `/images/treatments/t${i + 1}.webp`,
    alt: `Clinic treatment ${i + 1}`,
  })
)
