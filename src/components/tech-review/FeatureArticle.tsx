import { Link } from "react-router-dom";
import { Article } from "./types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeatureArticleProps {
  article: Article;
}

export function FeatureArticle({ article }: FeatureArticleProps) {
  const initials = article.author.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="order-2 md:order-1">
        <div className="text-sm text-red-600 uppercase font-medium mb-2">
          {article.category}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          {article.title}
        </h1>
        <p className="text-lg text-gray-600 mb-6">{article.description}</p>
        <div className="flex items-center gap-3 mb-6">
          <Avatar>
            {article.author.avatar && (
              <AvatarImage
                src={article.author.avatar}
                alt={article.author.name}
              />
            )}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{article.author.name}</div>
            <div className="text-sm text-gray-500">{article.date}</div>
          </div>
        </div>
        <Button asChild className="group gap-2">
          <Link to={article.url}>
            Read Full Story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
      <div className="order-1 md:order-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
