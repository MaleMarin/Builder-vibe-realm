import { Article } from "./types";
import { ArticleCard } from "./ArticleCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TopicSectionProps {
  title: string;
  articles: Article[];
}

export function TopicSection({ title, articles }: TopicSectionProps) {
  if (!articles.length) return null;

  const featuredArticle = articles[0];
  const secondaryArticles = articles.slice(1);

  return (
    <section>
      <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Button variant="link" asChild className="group gap-1">
          <Link to={`#${title.toLowerCase().replace(/\s/g, "-")}`}>
            View all
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <ArticleCard article={featuredArticle} />
        </div>
        <div className="space-y-6">
          {secondaryArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              variant="horizontal"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
