import { ChevronDown, Cloud, Code, Database, MessageSquare, BarChart3, Zap } from "lucide-react"
import Link from "next/link"
import ServiceCard from "@/components/service-card"
import TrustSignal from "@/components/trust-signal"
import MobileMenu from "@/components/mobile-menu"
import ChatBot from "@/components/chatbot"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl md:text-2xl">
              <span className="text-primary">IESC</span>
            </Link>
            <span className="hidden text-xs text-muted-foreground md:inline-block lg:text-sm">
              Innovative Technology Solutions for a Competitive Edge
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#home"
              className="text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="relative flex min-h-[80vh] sm:min-h-[90vh] items-center justify-center overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(26, 42, 68, 0.85), rgba(26, 42, 68, 0.95)), url('/placeholder.svg?height=1080&width=1920')",
          }}
        >
          <div className="container relative z-10 mx-auto px-4 py-16 sm:py-32 text-center">
            <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8 animate-fade-in">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Empower Your Business with Next-Level Technology
              </h1>
              <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-gray-300 md:text-xl">
                Tailored Solutions for Growth, Efficiency, and Innovation
              </p>
              <div className="mt-8 sm:mt-10">
                <Link
                  href="#contact"
                  className="rounded-md bg-primary px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white shadow-lg transition-transform hover:translate-y-[-2px] hover:shadow-xl"
                >
                  Let&apos;s Collaborate
                </Link>
              </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <Link href="#services" aria-label="Scroll down">
                <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-white opacity-70" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-10 sm:mb-16 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl relative inline-block">
                What We Offer
                <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-primary to-primary/50"></span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                Comprehensive technology solutions tailored to your business needs
              </p>
            </div>

            <div className="grid gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={<Zap className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />}
                title="Digital Transformation"
                description="Spearheaded digital transformation projects for small and medium businesses, driving productivity gains and cost savings."
              />
              <ServiceCard
                icon={<Code className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />}
                title="Bespoke Software Development"
                description="Crafted custom in-house software to tackle unique business challenges and streamline operations."
              />
              <ServiceCard
                icon={<Cloud className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />}
                title="Cloud & AI Innovation"
                description="Harnessed cloud engineering and AI tools to boost productivity and unlock new revenue opportunities."
              />
              <ServiceCard
                icon={<Database className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />}
                title="Data-Driven Insights"
                description="Engineered data streaming pipelines to convert diverse data sources into actionable business intelligence."
              />
              <ServiceCard
                icon={<MessageSquare className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />}
                title="Social Media Automation"
                description="Designed and automated self-service systems for social media platforms like WhatsApp."
              />
              <ServiceCard
                icon={<BarChart3 className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />}
                title="Smart Chatbot Solutions"
                description="Built fine-tuned, AI-powered chatbots to solve specific business problems with precision."
              />
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <section className="py-10 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-8 sm:mb-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">Why Choose IESC?</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4">
              <TrustSignal icon="🏆" value="10+" label="Years of Expertise" />
              <TrustSignal icon="🚀" value="50+" label="Successful Projects" />
              <TrustSignal icon="🌐" value="20+" label="Industries Served" />
              <TrustSignal icon="👥" value="100%" label="Client Satisfaction" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Get in touch with our team of experts to discuss your technology needs
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="rounded-lg border bg-background p-8 shadow-sm">
                  <h3 className="mb-4 text-xl font-bold">Send us an Email</h3>
                  <p className="mb-6 text-muted-foreground">
                    We&apos;ll get back to you as soon as possible with the information you need.
                  </p>
                  <a
                    href="mailto:info@iesc.com.ng?subject=Business%20Inquiry&body=Hello%20IESC%20Team,%0A%0AI'm%20interested%20in%20learning%20more%20about%20your%20services.%0A%0ABest%20regards,"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-lg transition-transform hover:translate-y-[-2px] hover:shadow-xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Email Us
                  </a>
                </div>

                <div className="rounded-lg border bg-background p-8 shadow-sm">
                  <h3 className="mb-4 text-xl font-bold">Book a Call</h3>
                  <p className="mb-6 text-muted-foreground">
                    Schedule a call with our experts to discuss your specific needs and solutions.
                  </p>
                  <a
                    href="https://cal.com/your-scheduling-link" // Replace with actual cal.com URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 text-base font-medium text-secondary-foreground shadow-lg transition-transform hover:translate-y-[-2px] hover:shadow-xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Book a Call
                  </a>
                </div>

                <div className="rounded-lg border bg-background p-8 shadow-sm">
                  <h3 className="mb-4 text-xl font-bold">Chat on WhatsApp</h3>
                  <p className="mb-6 text-muted-foreground">
                    Connect with us instantly for quick responses to your questions.
                  </p>
                  <a
                    href="https://wa.me/2347034994623?text=Hello%20IESC%20Team,%20I'm%20interested%20in%20your%20technology%20consulting%20services.%20Could%20you%20provide%20more%20information?"
                    className="inline-flex items-center justify-center rounded-md bg-[#25D366] px-6 py-3 text-base font-medium text-white shadow-lg transition-transform hover:translate-y-[-2px] hover:shadow-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>

              <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-8">
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@iesc.com.ng" className="text-primary hover:underline">
                    info@iesc.com.ng
                  </a>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+2347034994623" className="text-primary hover:underline">
                    +234 703 499 4623
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Ityav Enterprise Systems Consult(IESC). All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-muted-foreground">Systems Operational</span>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  )
}

