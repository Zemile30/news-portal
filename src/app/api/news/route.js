import { NextResponse } from "next/server";

const BASE_URL = "https://newsapi.org/v2";

export async function GET(request) {
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "NEWS_API_KEY tapılmadı. .env.local faylını yoxla." },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") || "headlines";
  const category = searchParams.get("category");
  const q = searchParams.get("q");
  const sortBy = searchParams.get("sortBy");
  const page = searchParams.get("page") || "1";
  const pageSize = searchParams.get("pageSize") || "8";

  const params = new URLSearchParams({ page, pageSize });
  let endpoint;

  if (type === "search") {
    if (!q) {
      return NextResponse.json(
        { error: "Axtarış sözü boşdur." },
        { status: 400 }
      );
    }
    endpoint = "everything";
    params.set("q", q);
    params.set("language", "en");
    if (sortBy) params.set("sortBy", sortBy);
  } else {
    endpoint = "top-headlines";
    params.set("country", "us");
    if (category && category !== "all") params.set("category", category);
  }

  try {
    const res = await fetch(`${BASE_URL}/${endpoint}?${params.toString()}`, {
      headers: {
        "X-Api-Key": apiKey,
        "User-Agent": "news-portal/1.0",
      },
      next: { revalidate: 300 },
    });

    const text = await res.text();

    let json;
    try {
      json = JSON.parse(text);
    } catch {
      console.error("NewsAPI JSON olmayan cavab qaytardı:", res.status, text.slice(0, 200));
      return NextResponse.json(
        { error: `NewsAPI cavabı oxunmadı (status ${res.status}).` },
        { status: 502 }
      );
    }

    if (!res.ok || json.status === "error") {
      console.error("NewsAPI xətası:", res.status, json.code, json.message);
      return NextResponse.json(
        { error: json.message || "NewsAPI xəta qaytardı." },
        { status: res.status || 502 }
      );
    }

    const articles = (json.articles || [])
      .filter((a) => a.title && a.title !== "[Removed]")
      .map((a) => ({
        ...a,
        id: a.url,
        category: category || "general",
      }));

    return NextResponse.json({
      articles,
      totalResults: json.totalResults ?? articles.length,
    });
  } catch (err) {
    console.error("NewsAPI sorğusu alınmadı:", err);
    return NextResponse.json(
      { error: `Serverə qoşulmaq mümkün olmadı: ${err.message}` },
      { status: 502 }
    );
  }
}