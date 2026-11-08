"use client";

import Link from "next/link";
import { makeSlug, saveArticle } from "@/lib/articleStore";

export default function ArticleLink({ article, children, className, ...rest }) {
  if (!article?.url) return <span className={className}>{children}</span>;

  return (
    <Link
      href={`/news/${makeSlug(article.url)}`}
      onClick={() => saveArticle(article)}
      className={className}
      {...rest}
    >
      {children}
    </Link>
  );
}