# Xəbər Portalı (NBC News Clone)

NewsAPI-dən real xəbərləri çəkən, Next.js ilə hazırlanmış xəbər portalı. İstifadəçi kateqoriyalara görə xəbərlərə baxa, şəhər üzrə axtarış edə, xəbərləri bookmark edib detay səhifəsində oxuya bilər. API açarı serverdə saxlanılır və brauzerə çıxmır.

## 🔗 Canlı Demo

[https://VERCEL_LINKI.vercel.app](https://news-portal-d61w.vercel.app)


## 🛠 Texnologiyalar

- **Next.js (App Router)**: marşrutlaşdırma və server tərəfli API Route
- **React**: komponent əsaslı interfeys və custom hook-lar
- **Tailwind CSS**: stilizasiya
- **NewsAPI**: xəbər məlumat mənbəyi
- **localStorage**: bookmark və baxılmış məqalələrin saxlanması
- **Vercel**: deploy

## ✨ Xüsusiyyətlər

- Ən son xəbərlər üzrə Hero bölməsi və Breaking News ticker
- Kateqoriya tabları (Latest, Business, Technology, Sports, Health, Science)
- Grid və list görünüşü, "View More" düyməsi və scroll ilə avtomatik yükləmə (infinite scroll)
- Editor's Picks slider-i
- Şəhərə görə xəbər axtarışı (Location News)
- Xəbər detay səhifəsi və əlaqəli xəbərlər
- Bookmark sistemi (localStorage, `article.url` ilə)
- Bütün bölmələrdə loading skeleton və xəta mesajları
- API açarı server tərəfdə (Next.js API Route), client-ə çıxmır

## 🔐 Mühit dəyişənləri

`.env.local` faylında aşağıdakı açar lazımdır (dəyəri özün yaz, repo-ya əlavə etmə):

```
NEWS_API_KEY=
```

`NEXT_PUBLIC_` prefiksi yoxdur, çünki açar yalnız serverdə istifadə olunur.

## 🌐 API məlumatı

- **API:** [NewsAPI](https://newsapi.org/docs)
- **İstifadə olunan endpoint-lər:** `top-headlines` (ən son xəbərlər və kateqoriyalar), `everything` (axtarış)
- **Pulsuz plan limitləri:** gündə 100 sorğu, hər axtarış üçün ən çox 100 nəticə, məqalələr bir qədər gecikmiş ola bilər. Pulsuz plan inkişaf (developer) məqsədlidir.
- **API key necə alınır:** [newsapi.org/register](https://newsapi.org/register) ünvanında qeydiyyatdan keç, açarı panelindən kopyala.
- **Qeyd:** Bütün çağırışlar `/api/news` Next.js API Route-u üzərindən gedir, nəticələr 5 dəqiqə cache olunur. NewsAPI tam məqalə mətni, müəllif profili və baxış sayı vermir, ona görə detay səhifəsində qısa məzmun və orijinal xəbərə keçid göstərilir.

## 📁 Qovluq strukturu

```
├── public/
│   ├── images/            # ikonlar və statik şəkillər
├── src/
│   ├── app/
│   │   ├── api/news/      # NewsAPI-yə server tərəfli sorğu (route.js)
│   │   ├── news/[id]/     # xəbər detay səhifəsi
│   │   ├── layout.js
│   │   └── page.js        # ana səhifə
│   ├── components/
│   │   ├── home/          # Hero, BreakingBanner, LatestStories, EditorsPicks, SidePanel, LocationNews
│   │   ├── layout/        # Navbar, Footer
│   │   ├── news/          # detay səhifəsi komponentləri
│   │   └── ui/            # NewsCard, ActionIcons, ArticleLink, BookmarkButton və s.
│   ├── hooks/             # useNews, useBookmark
│   └── lib/               # siteConfig, articleStore, articleMapper
├── .env.local             # (repo-da yoxdur) NEWS_API_KEY
└── package.json
```
