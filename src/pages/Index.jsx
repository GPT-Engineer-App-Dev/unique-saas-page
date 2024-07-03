import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to SaaSify</h1>
        <p className="text-xl text-muted-foreground">The ultimate solution for managing your business efficiently.</p>
        <Button size="lg" className="mt-4">Get Started</Button>
        <img src="https://placehold.co/600x400" alt="placeholder" className="mx-auto mt-8" />
      </section>

      <Separator />

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature one.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature two.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature three.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Testimonials Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>John Doe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"This product has transformed the way we do business."</p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>Jane Smith</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"An essential tool for our daily operations."</p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <Separator />

      {/* Pricing Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$10/month</p>
              <ul className="mt-4 space-y-2">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$20/month</p>
              <ul className="mt-4 space-y-2">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$50/month</p>
              <ul className="mt-4 space-y-2">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Footer Section */}
      <footer className="text-center space-y-4">
        <div className="space-x-4">
          <a href="/about" className="text-muted-foreground">About</a>
          <a href="/contact" className="text-muted-foreground">Contact</a>
          <a href="/privacy" className="text-muted-foreground">Privacy Policy</a>
        </div>
        <div className="space-x-4">
          <a href="https://facebook.com" className="text-muted-foreground">Facebook</a>
          <a href="https://twitter.com" className="text-muted-foreground">Twitter</a>
          <a href="https://linkedin.com" className="text-muted-foreground">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;