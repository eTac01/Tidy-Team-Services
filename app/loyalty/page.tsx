import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown, Gift, Star, Trophy, Users, Calendar, Percent } from "lucide-react"
import Link from "next/link"

export default function LoyaltyPage() {
  const tiers = [
    {
      name: "Silver Member",
      icon: Star,
      visits: "5-9 visits",
      discount: "10%",
      benefits: ["Priority booking", "10% discount", "Birthday bonus", "Email support"],
      color: "text-gray-400",
    },
    {
      name: "Gold Member",
      icon: Crown,
      visits: "10-19 visits",
      discount: "15%",
      benefits: ["All Silver benefits", "15% discount", "Free add-on monthly", "Phone support", "Flexible scheduling"],
      color: "text-yellow-500",
    },
    {
      name: "Platinum Member",
      icon: Trophy,
      visits: "20+ visits",
      discount: "20%",
      benefits: [
        "All Gold benefits",
        "20% discount",
        "VIP treatment",
        "Dedicated account manager",
        "Free emergency service",
      ],
      color: "text-purple-500",
    },
  ]

  const rewards = [
    {
      name: "Free Mini Valet",
      points: 500,
      description: "Redeem for a complimentary mini valet service",
    },
    {
      name: "£20 Service Credit",
      points: 800,
      description: "Apply towards any service booking",
    },
    {
      name: "Free Add-on Service",
      points: 1000,
      description: "Choose any premium add-on service for free",
    },
    {
      name: "Full Valet Package",
      points: 1500,
      description: "Complete interior and exterior detailing service",
    },
  ]

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 neon-glow bg-primary/20 text-primary border-primary/30">Loyalty Program</Badge>
          <h1 className="text-5xl font-bold mb-6 neon-text">Tidy Team Rewards</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Earn points with every service and unlock exclusive benefits, discounts, and VIP treatment
          </p>
        </div>

        {/* Membership Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Membership Tiers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => {
              const IconComponent = tier.icon
              return (
                <Card
                  key={index}
                  className="glass border-border/20 hover:border-primary/50 transition-all duration-300 hover-lift relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-primary/20" />
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className={`h-8 w-8 ${tier.color}`} />
                    </div>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{tier.discount}</div>
                    <Badge variant="outline" className="text-xs">
                      {tier.visits}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* How It Works */}
        <Card className="glass border-border/20 mb-16">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Book Services</h3>
                <p className="text-sm text-muted-foreground">
                  Every service booking earns you points and counts towards your tier status
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Earn Points</h3>
                <p className="text-sm text-muted-foreground">
                  Collect 1 point per £1 spent, plus bonus points for reviews and referrals
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Unlock Tiers</h3>
                <p className="text-sm text-muted-foreground">
                  Advance through Silver, Gold, and Platinum tiers for better benefits
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Redeem Rewards</h3>
                <p className="text-sm text-muted-foreground">
                  Use points for free services, discounts, and exclusive perks
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rewards Catalog */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Rewards Catalog</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewards.map((reward, index) => (
              <Card key={index} className="glass border-border/20 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Gift className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{reward.name}</h3>
                  <div className="text-2xl font-bold text-primary mb-2">{reward.points} pts</div>
                  <p className="text-sm text-muted-foreground mb-4">{reward.description}</p>
                  <Button size="sm" variant="outline" className="w-full glass border-primary/30 bg-transparent">
                    Redeem
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <Card className="glass border-border/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Earning Rewards?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our loyalty program today and start earning points with your first service booking
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="neon-glow">
                  <Users className="mr-2 h-5 w-5" />
                  Join & Book Now
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="glass border-primary/30 bg-transparent">
                <Percent className="mr-2 h-5 w-5" />
                View All Benefits
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Free to join • Instant benefits • No expiration on points
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
