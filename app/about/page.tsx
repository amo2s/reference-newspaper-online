import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'About Us - Reference Newspaper',
  description: 'Learn about Reference Newspaper, Nigeria\'s trusted source for news and journalism.',
}

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-foreground">
              About Reference Newspaper
            </h1>
            <p className="text-xl text-muted-foreground">
              Nigeria's trusted source for breaking news, in-depth analysis, and comprehensive journalism.
            </p>
          </div>

          {/* Content - Prose Layout */}
          <article className="prose prose-lg max-w-none text-foreground space-y-6">
            <p className="text-base leading-relaxed text-muted-foreground">
              Reference Newspaper Online stands as Nigeria's premier digital news platform, dedicated to delivering accurate, timely, and impactful journalism. Founded with a mission to inform and empower Nigerian citizens, we have established ourselves as a trusted voice in the country's media landscape. Our commitment to editorial excellence, investigative reporting, and comprehensive coverage has made us the go-to source for news across politics, business, sports, and entertainment.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              We believe journalism serves a fundamental role in democracy and social progress. Our team of seasoned reporters, editors, and correspondents work tirelessly to uncover stories that matter, provide context to complex issues, and hold institutions accountable. From breaking political developments to business trends shaping our economy, from sporting achievements to entertainment milestones, Reference Newspaper delivers the comprehensive coverage Nigerians deserve. We maintain the highest standards of journalistic integrity, verifying facts, protecting sources, and presenting balanced perspectives on the issues affecting our nation.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              Beyond just reporting news, Reference Newspaper is committed to fostering informed discourse and civic engagement among Nigerians. In an era of information overload and misinformation, we remain steadfast in our dedication to truth, accuracy, and fairness. Our digital platform ensures that quality journalism is accessible to every Nigerian, regardless of location. As we continue to evolve and innovate, our core mission remains unchanged: to serve Nigerians with journalism that informs, inspires, and empowers action toward a better future for our nation.
            </p>

            {/* Values Section */}
            <div className="mt-12 pt-12 border-t border-border">
              <h2 className="font-serif text-3xl font-bold mb-8 text-foreground">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-serif text-xl font-bold mb-3 text-foreground">Truth</h3>
                  <p className="text-sm text-muted-foreground">
                    We are committed to uncovering and reporting the truth, free from bias, agenda, or commercial pressure. Every story is verified and fact-checked by our editorial team.
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-serif text-xl font-bold mb-3 text-foreground">Accuracy</h3>
                  <p className="text-sm text-muted-foreground">
                    Precision in reporting is non-negotiable. We strive to get the facts right the first time and correct any errors promptly and transparently.
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-serif text-xl font-bold mb-3 text-foreground">Impact</h3>
                  <p className="text-sm text-muted-foreground">
                    Our journalism aims to create meaningful impact by informing public debate, driving accountability, and contributing to positive change in society.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
