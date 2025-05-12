import { Link } from "react-router-dom";
import { Article } from "./types";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "compact" | "horizontal";
  className?: string;
}

export function ArticleCard({
  article,
  variant = "default",
  className,
}: ArticleCardProps) {
  const initials = article.author.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  if (variant === "horizontal") {
    return (
      <div className={cn("flex gap-4 items-start", className)}>
        <div className="flex-shrink-0 w-32 h-24 overflow-hidden rounded-md">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="text-xs text-red-600 uppercase font-medium mb-1">
            {article.category}
          </div>
          <h3 className="text-base font-bold leading-tight mb-2">
            <Link to={article.url} className="hover:underline">
              {article.title}
            </Link>
          </h3>
          <div className="flex items-center text-xs text-gray-500">
            <span>{article.date}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={cn("group", className)}>
        <div className="w-full aspect-[4/3] overflow-hidden rounded-md mb-3">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-200"
          />
        </div>
        <div className="text-xs text-red-600 uppercase font-medium mb-1">
          {article.category}
        </div>
        <h3 className="text-base font-bold leading-tight mb-2">
          <Link to={article.url} className="hover:underline">
            {article.title}
          </Link>
        </h3>
        <div className="flex items-center text-xs text-gray-500">
          <span>{article.date}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("group", className)}>
      <div className="w-full aspect-[4/3] overflow-hidden rounded-md mb-4">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-200"
        />
      </div>
      <div className="text-xs text-red-600 uppercase font-medium mb-1">
        {article.category}
      </div>
      <h3 className="text-lg font-bold leading-tight mb-2">
        <Link to={article.url} className="hover:underline">
          {article.title}
        </Link>
      </h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
        {article.description}
      </p>
      <div className="flex items-center gap-2">
        <Avatar className="h-6 w-6">
          {article.author.avatar && (
            <AvatarImage
              src={article.author.avatar}
              alt={article.author.name}
            />
          )}
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="text-xs">
          <span className="font-medium">{article.author.name}</span>
          <span className="text-gray-500 ml-2">{article.date}</span>
        </div>
      </div>
    </div>
  );
}
