import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

export function BranchesSection() {
  return (
    <section id="branches" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Our Branches
        </h2>
        <Tabs
          defaultValue="mayiladuthurai"
          className="mx-auto w-full max-w-4xl"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="mayiladuthurai">Mayiladuthurai</TabsTrigger>
            <TabsTrigger value="nidur">Nidur</TabsTrigger>
          </TabsList>
          <TabsContent value="mayiladuthurai">
            <Card>
              <CardHeader>
                <CardTitle>Mayiladuthurai Branch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2 flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                  <span>123 Main St, Mayiladuthurai</span>
                </div>
                <div className="mb-2 flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-blue-600" />
                  <span>+91 1234567890</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-blue-600" />
                  <span>Mon-Sat: 9AM-7PM</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="nidur">
            <Card>
              <CardHeader>
                <CardTitle>Nidur Branch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2 flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                  <span>456 Park Ave, Nidur</span>
                </div>
                <div className="mb-2 flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-blue-600" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-blue-600" />
                  <span>Mon-Sat: 10AM-8PM</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}