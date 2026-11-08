const KEY = "sv_articles";
const MAX_ARTICLES = 50;

export function makeSlug(url = "") {
  let hash = 5381;
  for (let i = 0; i < url.length; i++) {
    hash = (hash * 33) ^ url.charCodeAt(i);
  }
  return (hash >>> 0).toString(36);
}

function readAll() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {};
  } catch {
    return {};
  }
}

export function saveArticle(article) {
  if (!article?.url) return null;
  const slug = makeSlug(article.url);

  try {
    const all = readAll();
    delete all[slug];
    all[slug] = {
      url: article.url,
      title: article.title,
      description: article.description,
      content: article.content,
      urlToImage: article.urlToImage,
      author: article.author,
      publishedAt: article.publishedAt,
      source: article.source,
      category: article.category,
    };

    const keys = Object.keys(all);
    if (keys.length > MAX_ARTICLES) {
      keys.slice(0, keys.length - MAX_ARTICLES).forEach((k) => delete all[k]);
    }

    localStorage.setItem(KEY, JSON.stringify(all));
  } catch {}
  return slug;
}

export function getArticle(slug) {
  return readAll()[slug] || null;
}