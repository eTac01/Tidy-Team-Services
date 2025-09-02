import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export default function FAQPage() {
  const faqs = [
    {
      category: "Booking & Pricing",
      questions: [
        {
          question: "How do I book a service?",
          answer:
            "You can book online through our website, call us directly, or use our mobile app. We offer same-day booking for most services and provide instant quotes based on your vehicle type and selected services.",
        },
        {
          question: "What's included in the pricing?",
          answer:
            "Our pricing includes all materials, equipment, and labor. For car services, pricing varies by vehicle size (hatchback £40-60, SUV £55-70, etc.). Home cleaning includes all eco-friendly supplies and equipment.",
        },
        {
          question: "Do you offer package deals?",
          answer:
            "Yes! We offer maintenance packages with 20-30% savings, bundle deals for multiple services, and loyalty discounts for regular customers. Check our maintenance page for current offers.",
        },
      ],
    },
    {
      category: "Car Detailing",
      questions: [
        {
          question: "What's the difference between Mini Valet and Full Valet?",
          answer:
            "Mini Valet (£40-60) includes exterior wash, interior vacuum, and basic cleaning. Full Valet (£80-100) adds paint protection, detailed interior cleaning, tire shine, and window treatment.",
        },
        {
          question: "How long does ceramic coating last?",
          answer:
            "Our ceramic coating lasts 2-5 years depending on the package. We offer Bronze (2 years), Silver (3 years), and Gold (5 years) options with full warranties and maintenance support.",
        },
        {
          question: "Do you work on all vehicle types?",
          answer:
            "Yes, we service all vehicle types from small hatchbacks to large SUVs and commercial vehicles. Pricing is adjusted based on vehicle size and complexity.",
        },
      ],
    },
    {
      category: "Home Cleaning",
      questions: [
        {
          question: "What areas do you cover for home cleaning?",
          answer:
            "We provide comprehensive home cleaning including kitchens, bathrooms, bedrooms, living areas, and common spaces. Deep cleaning includes appliances, inside cabinets, and detailed sanitization.",
        },
        {
          question: "Are your cleaning products safe?",
          answer:
            "We use only eco-friendly, non-toxic cleaning products that are safe for children, pets, and the environment while delivering professional-grade results.",
        },
        {
          question: "How often should I book regular cleaning?",
          answer:
            "Most customers book weekly or bi-weekly regular cleaning. We offer flexible scheduling and can adjust frequency based on your needs and lifestyle.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 neon-glow bg-primary/20 text-primary border-primary/30">
            Frequently Asked Questions
          </Badge>
          <h1 className="text-5xl font-bold mb-6 neon-text">Got Questions? We've Got Answers</h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our services, pricing, and booking process
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="glass border-border/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-primary">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${categoryIndex}-${index}`}>
                      <AccordionTrigger className="text-left hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass border-border/20 mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our customer service team is here to help with any additional questions you might have
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="glass border-primary/30 bg-transparent">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Button>
              <Button variant="outline" className="glass border-primary/30 bg-transparent">
                <Mail className="mr-2 h-4 w-4" />
                Email Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
