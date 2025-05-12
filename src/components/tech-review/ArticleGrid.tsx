import { ArticleCard } from "./ArticleCard";
import { Article } from "./types";

interface ArticleGridProps {
  articles: Article[];
  columns?: 2 | 3 | 4;
  variant?: "default" | "compact";
}

export function ArticleGrid({
  articles,
  columns = 3,
  variant = "default",
}: ArticleGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6 md:gap-8`}>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} variant={variant} />
      ))}
    </div>
  );
}
