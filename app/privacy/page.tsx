import { GlobalHeader } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Privacy Policy - Reference Newspaper',
  description: 'Privacy policy for Reference Newspaper Online. Learn how we protect your data.',
}

export default function Privacy() {
  return (
    <>
      <GlobalHeader />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: July 2026
            </p>
          </div>

          {/* Content - Prose Layout */}
          <article className="prose prose-lg max-w-none text-foreground space-y-6">
            <h2 className="font-serif text-3xl font-bold mt-8 mb-4 text-foreground">Our Commitment to Privacy</h2>
            
            <p className="text-base leading-relaxed text-muted-foreground">
              Reference Newspaper Online ("we," "us," or "our") operates the Reference Newspaper website and mobile applications. We are committed to protecting your privacy and ensuring you have a positive experience on our platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our applications, and interact with our services. Please read this policy carefully to understand our views and practices regarding your personal data.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4 text-foreground">Information We Collect</h2>
            
            <p className="text-base leading-relaxed text-muted-foreground">
              We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, submit feedback, or contact our support team. This includes your name, email address, phone number, and any other information you choose to provide. Additionally, we automatically collect certain information when you access our platform, including your IP address, browser type, operating system, referring URLs, and pages visited. We also use cookies and similar tracking technologies to enhance your experience, remember your preferences, and analyze how our platform is used. This information helps us improve our services and deliver more relevant content to our users.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4 text-foreground">How We Use Your Information</h2>
            
            <p className="text-base leading-relaxed text-muted-foreground">
              We use the information we collect to provide, maintain, and improve our news services, personalize your experience, send you newsletters and updates you've subscribed to, respond to your inquiries and support requests, and comply with applicable laws and regulations. Your information allows us to deliver breaking news alerts, ensure content recommendations match your interests, and communicate important updates about our platform. We may also use aggregated and anonymized data for analytics and research purposes to understand usage patterns and enhance our services. Rest assured, we never sell your personal information to third parties and only share your data with service providers who assist us in operating our website and conducting our business, all under strict confidentiality agreements.
            </p>

            <h2 className="font-serif text-2xl font-bold mt-8 mb-4 text-foreground">Data Security and Your Rights</h2>
            
            <p className="text-base leading-relaxed text-muted-foreground">
              Reference Newspaper Online implements comprehensive security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption and secure server technology to safeguard your data during transmission and storage. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security. You have the right to access, update, or delete your personal information at any time by contacting our privacy team. You can also opt-out of receiving promotional communications from us by following the unsubscribe instructions in our emails or adjusting your account settings. If you have any questions about this Privacy Policy or our privacy practices, please don't hesitate to contact us at privacy@referencenewspaper.com. Your privacy is paramount to us, and we remain committed to maintaining your trust through transparent and responsible data practices.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
