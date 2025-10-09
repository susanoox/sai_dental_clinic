import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Our Services
        </h2>
        
        {/* First Tabs - General Services */}
        <Tabs defaultValue="rootcanal" className="mx-auto w-full max-w-4xl mb-12">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="rootcanal">Root Canal</TabsTrigger>
            <TabsTrigger value="implants">Dental Implants</TabsTrigger>
            <TabsTrigger value="aligners">Invisible Aligners</TabsTrigger>
            <TabsTrigger value="fillings">Cosmetic Fillings</TabsTrigger>
          </TabsList>

          <TabsContent value="rootcanal">
            <Card>
              <CardHeader>
                <CardTitle>Root Canal Treatment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  Save your tooth and eliminate pain with precise root canal
                  treatments performed by experts.
                </p>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="implants">
            <Card>
              <CardHeader>
                <CardTitle>Dental Implants</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  Restore your smile and confidence with our advanced dental
                  implant procedures.
                </p>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="aligners">
            <Card>
              <CardHeader>
                <CardTitle>Invisible Aligners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  Straighten your teeth discreetly with our clear aligner treatment.
                </p>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fillings">
            <Card>
              <CardHeader>
                <CardTitle>Cosmetic Fillings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  Get rid of visible cavities with our seamless,
                  natural-looking cosmetic fillings.
                </p>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Second Tabs - Restorative Services */}
        <Tabs defaultValue="bridges" className="mx-auto w-full max-w-4xl mb-12">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="bridges">Dental Bridges</TabsTrigger>
            <TabsTrigger value="crowns">Dental Crowns</TabsTrigger>
            <TabsTrigger value="dentures">Dental Dentures</TabsTrigger>
            <TabsTrigger value="extraction">Tooth Extraction</TabsTrigger>
          </TabsList>

          <TabsContent value="bridges">
            <Card>
              <CardHeader>
                <CardTitle>Dental Bridges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  Replace missing teeth with custom dental bridges that restore
                  your smile and chewing function.
                </p>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="crowns">
            <Card>
              <CardHeader>
                <CardTitle>Dental Crowns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  Protect and strengthen damaged teeth with our custom-made
                  dental crowns for long-lasting results.
                </p>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dentures">
            <Card>
              <CardHeader>
                <CardTitle>Dental Dentures</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  Regain your ability to eat and speak comfortably with our
                  custom-fitted dentures.
                </p>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="extraction">
            <Card>
              <CardHeader>
                <CardTitle>Tooth Extraction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  Safe and gentle tooth extraction procedures for damaged or
                  problematic teeth.
                </p>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Third Tabs - Cosmetic & Preventive Services */}
        <Tabs defaultValue="whitening" className="mx-auto w-full max-w-4xl">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="whitening">Teeth Whitening</TabsTrigger>
            <TabsTrigger value="cleaning">Dental Cleaning</TabsTrigger>
            <TabsTrigger value="veneers">Dental Veneers</TabsTrigger>
            <TabsTrigger value="emergency">Emergency Care</TabsTrigger>
          </TabsList>

          <TabsContent value="whitening">
            <Card>
              <CardHeader>
                <CardTitle>Teeth Whitening</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  Brighten your smile with our professional teeth whitening
                  treatments for noticeable results.
                </p>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cleaning">
            <Card>
              <CardHeader>
                <CardTitle>Dental Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  Maintain optimal oral health with our thorough dental
                  cleaning and preventive care services.
                </p>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="veneers">
            <Card>
              <CardHeader>
                <CardTitle>Dental Veneers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  Transform your smile with custom porcelain veneers that
                  correct imperfections and create a perfect smile.
                </p>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="emergency">
            <Card>
              <CardHeader>
                <CardTitle>Emergency Dental Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  Immediate care for dental emergencies including toothaches,
                  broken teeth, and injuries with same-day appointments.
                </p>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}