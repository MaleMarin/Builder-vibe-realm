import { Helmet } from "react-helmet";
import { Header } from "@/components/tech-review/Header";
import { FeatureArticle } from "@/components/tech-review/FeatureArticle";
import { ArticleGrid } from "@/components/tech-review/ArticleGrid";
import { Footer } from "@/components/tech-review/Footer";
import { TopicSection } from "@/components/tech-review/TopicSection";
import { Newsletter } from "@/components/tech-review/Newsletter";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  mockArticles,
  featuredArticle,
  topicSections,
} from "@/components/tech-review/mock-data";

export default function TechReview() {
  return (
    <>
      <Helmet>
        <title>MIT Technology Review - Clone</title>
        <meta
          name="description"
          content="A clone of MIT Technology Review website"
        />
      </Helmet>
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            {/* Hero section with featured article */}
            <section className="mb-16">
              <FeatureArticle article={featuredArticle} />
            </section>

            {/* Latest articles section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">
                Latest
              </h2>
              <ArticleGrid articles={mockArticles.slice(0, 6)} />
            </section>

            {/* Topic sections */}
            <div className="mb-16 space-y-16">
              {topicSections.map((section) => (
                <TopicSection
                  key={section.title}
                  title={section.title}
                  articles={section.articles}
                />
              ))}
            </div>

            {/* Newsletter signup */}
            <section className="mb-16">
              <Newsletter />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
