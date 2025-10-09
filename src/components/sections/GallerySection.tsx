import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function GallerySection() {
  return (
    <section id="gallery" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Before & After Gallery
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={`/placeholder.svg?text=Before+${item}`}
                  alt={`Before treatment ${item}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <Image
                    src={`/placeholder.svg?text=After+${item}`}
                    alt={`After treatment ${item}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <CardContent>
                <p className="text-center text-gray-600">
                  Hover to see the result
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}