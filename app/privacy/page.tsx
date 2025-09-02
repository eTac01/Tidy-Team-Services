import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">How we collect, use, and protect your personal information</p>
        </div>

        <Card className="glass border-border/20">
          <CardHeader>
            <CardTitle>Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
              <p className="text-muted-foreground">
                We collect information you provide directly to us, such as when you create an account, book a service,
                or contact us for support. This may include your name, email address, phone number, and address.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Service Information</h3>
              <p className="text-muted-foreground">
                We collect information about the services you book, including service type, scheduling preferences, and
                any special instructions you provide.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">How We Use Your Information</h3>
              <p className="text-muted-foreground">
                We use the information we collect to provide, maintain, and improve our services, process transactions,
                send you technical notices and support messages, and communicate with you about products, services, and
                promotional offers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Information Sharing</h3>
              <p className="text-muted-foreground">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy or as required by law.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at privacy@tidyteam.com or call
                (555) 123-4567.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
