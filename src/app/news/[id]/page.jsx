import { Suspense } from "react";
import { notFound } from "next/navigation";
import ArticleHero from "@/components/news/ArticleHero";
import StickyActions from "@/components/news/StickyActions";
import ArticleContent from "@/components/news/ArticleContent";
import NewsletterSignup from "@/components/news/NewsletterSignup";
import ArticleTags from "@/components/news/ArticleTags";
import AuthorCard from "@/components/news/AuthorCard";
import { RecommendedSidebar, RelatedTopics } from "@/components/news/RelatedArticles";
import {
  allStories,
  getStoryById,
  getStoriesByIds,
  getAuthorById,
} from "@/lib/mockData";

export function generateStaticParams() {
  return allStories.map((story) => ({ id: story.id }));
}

export default function NewsDetailPage({ params }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f6f5f3]" />}>
      <ArticleView params={params} />
    </Suspense>
  );
}

async function ArticleView({ params }) {
  const { id } = await params;
  const story = getStoryById(id);

  if (!story) notFound();

  const author = getAuthorById(story.authorId);
  const recommended = getStoriesByIds(story.recommendedIds);
  const basedOnLike = getStoryById(story.basedOnLikeId);
  const related = getStoriesByIds(story.relatedIds);

  return (
    <main className="bg-[#f6f5f3]">
      <ArticleHero story={story} />

      <div className="mx-auto mt-6 grid max-w-[1262px] grid-cols-1 items-start gap-x-10 px-4 lg:grid-cols-[140px_minmax(0,1fr)_256px]">
        <StickyActions story={story} />

        <article className="min-w-0">
          <div className="mb-5 flex flex-wrap items-center gap-x-3 text-[11px] text-gray-500">
            <span className="text-gray-800">{story.time}</span>
            <span>By {story.author}</span>
            <span className="border-l border-gray-400 pl-3">{story.readTime}</span>
          </div>

          <ArticleContent content={story.content} />
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