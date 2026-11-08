"use client";

import { Suspense, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ArticleHero from "@/components/news/ArticleHero";
import StickyActions from "@/components/news/StickyActions";
import ArticleContent from "@/components/news/ArticleContent";
import NewsletterSignup from "@/components/news/NewsletterSignup";
import ArticleTags from "@/components/news/ArticleTags";
import AuthorCard from "@/components/news/AuthorCard";
import {
  RecommendedSidebar,
  RelatedTopics,
} from "@/components/news/RelatedArticles";
import useNews from "@/hooks/useNews";
import { getArticle } from "@/lib/articleStore";
import { toDetailStory, toCardStory } from "@/lib/articleMapper";

export default function NewsDetailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f6f5f3]" />}>
      <ArticleLoader />
    </Suspense>
  );
}

function ArticleLoader() {
  const { id } = useParams();
  // undefined = hələ oxunur, null = tapılmadı
  const [article, setArticle] = useState(undefined);

  useEffect(() => {
    setArticle(getArticle(id));
  }, [id]);

  if (article === undefined) {
    return <div className="min-h-screen bg-[#f6f5f3]" />;
  }

  if (article === null) {
    return (
      <main className="bg-[#f6f5f3] min-h-[60vh] flex flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="font-serif text-xl font-bold text-gray-900">
          Məqalə tapılmadı
        </h1>
        <p className="text-sm text-gray-600 max-w-md">
          Bu məqalə yalnız onu açdığın brauzerdə saxlanılır. Ana səhifədən
          xəbəri yenidən seç.
        </p>
        <Link
          href="/"
          className="bg-brand text-white text-[11px] font-medium tracking-wider uppercase px-6 py-3 hover:opacity-90"
        >
          Ana səhifəyə qayıt
        </Link>
      </main>
    );
  }

  return <ArticleView article={article} />;
}

function ArticleView({ article }) {
  const story = toDetailStory(article);

  // Eyni kateqoriyadan digər xəbərlər
  const relatedRes = useNews({
    category: article.category || "general",
    pageSize: 8,
  });
  // Ana səhifədəki sorğu ilə eyni (pageSize: 5), cache-dən gəlir
  const recommendedRes = useNews({ pageSize: 5 });

  const related = relatedRes.data
    .filter((a) => a.url !== article.url && a.title)
    .slice(0, 5)
    .map(toCardStory);

  const rec = recommendedRes.data.filter(
    (a) => a.url !== article.url && a.title && a.urlToImage
  );
  const recommended = rec.slice(0, 1).map(toCardStory);
  const basedOnLike = rec[1] ? toCardStory(rec[1]) : null;

  // NewsAPI-də müəllif profili yoxdur, ona görə yalnız ad ötürürük
  const author = {
    name: story.author,
    avatar: null,
    bio: "",
    twitter: "",
    followers: "",
  };

  return (
    <main className="bg-[#f6f5f3]">
      <ArticleHero story={story} />

      <div className="mx-auto mt-6 grid max-w-[1262px] grid-cols-1 items-start gap-x-10 px-4 lg:grid-cols-[140px_minmax(0,1fr)_256px]">
        <StickyActions story={story} />

        <article className="min-w-0">
          <div className="mb-5 flex flex-wrap items-center gap-x-3 text-[11px] text-gray-500">
            <span className="text-gray-800">{story.time}</span>
            <span>By {story.author}</span>
            {story.source && (
              <span className="border-l border-gray-400 pl-3">
                {story.source}
              </span>
            )}
          </div>

          <ArticleContent content={story.content} />

          {/* NewsAPI tam mətn vermir, ona görə orijinal xəbərə keçid */}
          <a
            href={story.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-brand text-white text-[11px] font-medium tracking-wider uppercase px-6 py-3 hover:opacity-90"
          >
            Read full article
          </a>

          <NewsletterSignup author={author} />
          <ArticleTags tags={story.tags} story={story} />
          <AuthorCard author={author} />
        </article>

        <RecommendedSidebar recommended={recommended} basedOnLike={basedOnLike} />
      </div>

      <RelatedTopics stories={related} />
    </main>
  );
}