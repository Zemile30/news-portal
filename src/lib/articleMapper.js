// NewsAPI məqaləsini mövcud komponentlərin gözlədiyi "story" formasına çevirir

export function cleanTitle(title = "") {
  return title.replace(/\s+-\s+[^-]+$/, "");
}

export function timeAgo(dateString) {
  if (!dateString) return "";
  const diff = Math.floor((Date.now() - new Date(dateString).getTime()) / 1000);
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

// NewsAPI content sonunda "… [+1234 chars]" olur, onu təmizləyirik
function cleanContent(content = "") {
  return content.replace(/\s*\[\+\d+ chars\]\s*$/, "").trim();
}

// Detay səhifəsi üçün
export function toDetailStory(article) {
  const paragraphs = [];

  if (article.description) paragraphs.push(article.description);

  const body = cleanContent(article.content || "");
  // content çox vaxt description-un təkrarıdır, belə olanda əlavə etmirik
  const isDuplicate =
    body &&
    article.description &&
    article.description.startsWith(body.slice(0, 40));
  if (body && !isDuplicate) paragraphs.push(body);

  const tags = [article.source?.name, article.category]
    .filter(Boolean)
    .map((t) => t.toUpperCase());

  return {
    id: article.url, // bookmark üçün
    url: article.url,
    title: cleanTitle(article.title),
    image: article.urlToImage,
    category: article.category,
    time: timeAgo(article.publishedAt),
    author: article.author || article.source?.name || "Unknown",
    source: article.source?.name,
    readTime: "", // NewsAPI-də yoxdur
    likes: undefined,
    shares: undefined,
    comments: undefined,
    tags,
    content: paragraphs.map((text) => ({ type: "paragraph", text })),
  };
}

// Sidebar və Related kartları üçün
export function toCardStory(article) {
  return {
    id: article.url,
    title: cleanTitle(article.title),
    image: article.urlToImage,
    likes: undefined,
    shares: undefined,
    raw: article, // ArticleLink üçün
  };
}