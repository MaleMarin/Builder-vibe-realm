import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-slate-50 rounded-lg p-6 md:p-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Stay updated on emerging technology
        </h2>
        <p className="text-gray-600 mb-6">
          Get the latest news on breakthrough technologies and innovations with
          our weekly newsletter.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-[1fr_auto] gap-3">
            <div>
              <Label htmlFor="email" className="sr-only">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12"
              />
            </div>
            <Button type="submit" disabled={loading} className="h-12">
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm text-gray-600">
              I agree to receive marketing emails and agree to the terms of use
            </Label>
          </div>
        </form>

        <p className="text-xs text-gray-500 mt-4">
          MIT Technology Review is committed to protecting your privacy. See our{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
