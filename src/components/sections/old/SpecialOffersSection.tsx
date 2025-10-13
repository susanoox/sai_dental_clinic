import { Button } from "@/components/ui/button";

export function SpecialOffersSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 text-4xl font-bold">Special Offers</h2>
        <p className="mb-8 text-xl">
          Enjoy free EMI options on select treatments!
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-blue-600 hover:bg-gray-100"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
}