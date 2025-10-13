import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "John D.",
      text: "The staff at SAI Dental Clinic are professional and caring. My experience was fantastic!",
    },
    {
      name: "Sarah M.",
      text: "Dr. SAI made my root canal treatment completely painless. I highly recommend their services.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          What Our Patients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white transition-shadow duration-300 hover:shadow-lg"
            >
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-current text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4 italic text-gray-600">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="font-semibold">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}