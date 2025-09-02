import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfService() {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">Terms and conditions for using our services</p>
        </div>

        <Card className="glass border-border/20">
          <CardHeader>
            <CardTitle>Service Agreement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Service Provision</h3>
              <p className="text-muted-foreground">
                The Tidy Team provides professional car detailing and home cleaning services. All services are subject
                to availability and scheduling constraints.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Booking and Cancellation</h3>
              <p className="text-muted-foreground">
                Bookings can be made through our website or by phone. Cancellations must be made at least 24 hours in
                advance to avoid cancellation fees. Same-day cancellations may be subject to a 50% service fee.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Payment Terms</h3>
              <p className="text-muted-foreground">
                Payment is due upon completion of services unless otherwise arranged. We accept cash, credit cards, and
                bank transfers. Subscription packages are billed monthly in advance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Satisfaction Guarantee</h3>
              <p className="text-muted-foreground">
                We stand behind our work with a 100% satisfaction guarantee. If you're not completely satisfied with our
                service, we'll make it right at no additional cost.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Liability</h3>
              <p className="text-muted-foreground">
                While we take every precaution to protect your property, our liability is limited to the cost of the
                service provided. We carry comprehensive insurance for your peace of mind.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
              <p className="text-muted-foreground">
                For questions about these terms, please contact us at info@tidyteam.com or call (555) 123-4567.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
