import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full max-w-3xl"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Is the treatment painful?</AccordionTrigger>
            <AccordionContent>
              We use modern techniques and anesthetics to ensure your
              comfort during all procedures. Most patients report minimal to
              no pain during treatment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How long does a dental implant procedure take?
            </AccordionTrigger>
            <AccordionContent>
              The entire process, including healing, can take 3-6 months.
              The actual implant placement usually takes 1-2 hours per
              implant.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you offer payment plans?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer various payment plans and financing options to
              make your dental care more affordable. Please ask our staff
              for more details.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}