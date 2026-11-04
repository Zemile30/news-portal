export const navLinks = [
  { id: 1, label: "Corona Updates", href: "/corona", live: true },
  { id: 2, label: "Politics", href: "/politics" },
  { id: 3, label: "Business", href: "/business" },
  { id: 4, label: "Sports", href: "/sports" },
  { id: 5, label: "World", href: "/world" },
  { id: 6, label: "Travel", href: "/travel" },
  { id: 7, label: "Podcasts", href: "/podcasts" },
];

export const hero = {
  id: "hero-1",
  label: "Trending",
  title: "Cake meme reflects coronavirus absurdity in a world where nothing is what it seems",
  excerpt:
    "Earlier this month, a viral video depicting hyper-realistic cakes as everyday items had folks on social media double-guessing every other post, and sometimes even their own realities, effectively launching the next meme: \"Is this real or is this cake?\"",
  image: "/images/hero.png",
  time: "2 hours ago",
  author: "Lucy Hiddleston",
  readTime: "4min read",
  likes: 28,
  shares: 72,
};

export const breakingNews = [
  { id: 1, text: "Kanye West says he's running for president in 2020." },
  { id: 2, text: "Storm Hanna makes landfall on the Texas coast." },
  { id: 3, text: "Researchers report progress on new antibody tests." },
];

// ---------- MÜƏLLİFLƏR (detay səhifəsi üçün) ----------
// stories-dəki `author` sətri (ana səhifə üçün) olduğu kimi qalır,
// detay səhifəsi isə `authorId` ilə bu obyekti götürür.
export const authors = {
  caroline: {
    name: "Caroline Casey",
    avatar: "/images/author-caroline.png",
    bio: "Caroline Casey is an award-winning social activist and founder of The Valuable 500, a global movement aimed at getting 500 companies to commit to disability inclusion.",
    twitter: "@carolinecasey",
    followers: "12.4K",
  },
  lucy: {
    name: "Lucy Hiddleston",
    avatar: "/images/author-lucy.png",
    bio: "Lucy Hiddleston is a news reporter covering national politics, culture and breaking stories for NBC News.",
    twitter: "@lucyhiddleston",
    followers: "8.1K",
  },
};

export const stories = [
  {
    id: "s1",
    section: "general",
    category: null,
    title: "John Lewis to make final journey across Edmund Pettus Bridge in procession",
    excerpt:
      "The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
    image: "/images/story-1.png",
    time: "2 hours ago",
    author: "Lucy Hiddleston",
    readTime: "4min read",
    likes: 28,
    shares: 72,
    // ---- detay səhifəsi üçün yeni sahələr ----
    authorId: "lucy",
    comments: 21,
    tags: ["NBCBLK", "TRENDING", "LEWIS", "FREEBIE"],
    relatedIds: ["s2", "s3", "s4", "s5", "s6"],
    recommendedIds: ["s7", "s8"],
    basedOnLikeId: "s2",
    content: [
      { type: "paragraph", text: "The body of the late US Rep. John Lewis will make a final journey across the Edmund Pettus Bridge in Selma, Alabama, on Sunday, where he helped lead a march for voting rights in 1965." },
      { type: "paragraph", text: "A horse-drawn caisson will carry the congressman across the bridge, followed by his family, as crowds gather along the route to pay their respects." },
      { type: "heading", text: "A procession decades in the making" },
      { type: "image", src: "/images/story-1.png", caption: "Mourners gather near the bridge ahead of the procession.", credit: "Reuters" },
      { type: "quote", text: "He crossed this bridge to change a nation, and now the nation crosses with him.", author: "Local resident" },
      { type: "paragraph", text: "The procession will end at the state capitol, where Lewis will lie in state before services continue in Atlanta." },
    ],
  },
  {
    id: "s2",
    section: "general",
    category: null,
    title: "John Lewis, civil rights giant, crosses infamous Selma bridge one final time",
    excerpt:
      "Solemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge",
    image: "/images/story-2.png",
    time: "4 hours ago",
    author: "Caroline Casey",
    readTime: "4min read",
    likes: 28,
    shares: 72,
    // ---- detay səhifəsi üçün yeni sahələr (Figma-dakı əsas məqalə) ----
    authorId: "caroline",
    comments: 21,
    tags: ["NBCBLK", "TRENDING", "LEWIS", "FREEBIE"],
    relatedIds: ["r3", "r4", "r5", "r6", "r2"],
    recommendedIds: ["r1"],
    basedOnLikeId: "r2",
    content: [
      { type: "paragraph", text: "Crowds watched solemnly as the body of Rep. John Lewis crossed the Edmund Pettus Bridge one final time, 55 years after the civil rights icon marched for peace and was met with brutality in Selma, Alabama." },
      { type: "paragraph", text: "Body bearers from the U.S. armed forces placed the late Georgia congressman and civil rights icon onto a horse-drawn caisson Sunday at the Brown Chapel African Methodist Episcopal Church. From there, the public were allowed to line up to honor Lewis for about a half-mile to the foot of the bridge." },
      { type: "paragraph", text: "Rep. Terri Sewell, D-Al., thanked Lewis' family during a ceremony at the chapel for sharing the congressman with the public for so many years." },
      { type: "paragraph", text: "\"Our nation is better off because of John Robert Lewis,\" she remarked. \"My life is better, Selma is better, this nation and this world is better because of John Robert Lewis.\"" },
      { type: "quote", text: "Solemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge", author: "NBC News" },
      { type: "image", src: "/images/article-1.png", caption: "The casket of late U.S. Rep. John Lewis, a pioneer of the civil rights movement who died July 17, is carried outside the Brown Chapel A.M.E. Church, in Selma, Ala., on July 26, 2020.", credit: "Christopher Aluka Berry / Reuters" },
      { type: "paragraph", text: "Crowds waited for Lewis' body at the foot of the bridge, where he was met by Alabama state troopers, who safely escorted him across and on to the state capitol." },
      { type: "paragraph", text: "\"His final march, that final crossing, so different than the first, speaks to the legacy that he leaves behind and the lives that he changed,\" Sewell said. \"It's poetic justice that this time, Alabama state troopers will see John to his safety.\"" },
      { type: "paragraph", text: "As the horse-drawn caisson approached the bridge, those in the masses on the sidewalk could be heard singing for Lewis. In an emotional moment, the voices stopped as Lewis' casket began to make its way across the bridge in silent reverence." },
      { type: "paragraph", text: "Lewis, who died earlier this month at the age of 80, made his last journey across the Edmund Pettus Bridge with only his family to join him." },
      { type: "paragraph", text: "Lewis' son, brothers and sister followed behind the caisson along Lewis' longtime chief of staff wearing shirts emblazoned with the words \"Good Trouble,\" a nod to Lewis' view on activism." },
      { type: "image", src: "/images/article-2.png", caption: "The casket of Rep. John Lewis moves over the Edmund Pettus Bridge by horse-drawn caisson.", credit: "Reuters" },
      { type: "paragraph", text: "The 16-term lawmaker, often called the conscience of Congress, was a giant of the civil rights movement of the 1960s. Lewis was only 25 when he believed Alabama troopers would kill him on the peaceful march for voting rights across the bridge on March 7, 1965, known today as “Bloody Sunday.”" },
      { type: "paragraph", text: "Lewis suffered a fractured skull and was one of dozens of nonviolent protesters who were hospitalized. News coverage of the brutal beatings prompted increased pressure on Congress to pass the 1965 Voting Rights Act, to bar states from enforcing discriminatory laws that had long hindered prospective Black voters." },
      { type: "paragraph", text: "And though Lewis is possibly best known for his march in Selma, he had already emerged as a leading voice in the fight for equal rights and had been arrested a number of times for the cause by that time." },
    ],
  },
  {
    id: "s3",
    section: "general",
    category: "WEATHER",
    title: "Tornado and tide warnings as Storm Hanna lashes Texas",
    excerpt:
      "The body of the late US Rep. John Lewis on Sunday will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
    image: "/images/story-3.png",
    time: "5 hours ago",
    author: "Lucy Hiddleston",
    readTime: "4min read",
    likes: 28,
    shares: 72,
    authorId: "lucy",
    comments: 15,
    tags: ["WATCH", "LIVE", "TRENDING", "FREEBIE"],
    relatedIds: ["s1", "s2", "s4", "s5", "s6"],
    recommendedIds: ["s7", "s8"],
    basedOnLikeId: "s2",
    content: [
      { type: "paragraph", text: "Storm Hanna made landfall on the Texas coast, bringing heavy rain, tornado warnings and dangerous tides to communities along the Gulf." },
      { type: "heading", text: "Residents urged to stay indoors" },
      { type: "paragraph", text: "Local officials asked people in low-lying areas to move to higher ground as water levels continued to rise through the afternoon." },
      { type: "image", src: "/images/story-3.png", caption: "Waves crash over a seawall as the storm moves inland.", credit: "Associated Press" },
      { type: "quote", text: "Please do not drive through flooded roads. Turn around, don't drown.", author: "County emergency manager" },
      { type: "paragraph", text: "Forecasters expect the storm to weaken over the next day, though flooding remains a concern." },
    ],
  },
  {
    id: "s4",
    section: "think",
    category: null,
    title: "20 Years Ago, Steve Jobs Built the 'Coolest Computer Ever.' It Bombed",
    excerpt:
      "This month marks the 20th anniversary of the Power Mac G4 Cube, which debuted July 19, 2000. It also marks the 19th anniversary of Apple's announcement that it was putting the Cube on ice.",
    image: "/images/story-4.png",
    time: "12 hours ago",
    author: "Lucy Hiddleston",
    readTime: "4min read",
    likes: 28,
    shares: 72,
    authorId: "lucy",
    comments: 12,
    tags: ["TECH", "TRENDING", "THINK", "FREEBIE"],
    relatedIds: ["s1", "s2", "s3", "s5", "s6"],
    recommendedIds: ["s7", "s8"],
    basedOnLikeId: "s6",
    content: [
      { type: "paragraph", text: "When Apple unveiled the Power Mac G4 Cube in 2000, it looked like nothing else on the market: a silent, eight-inch cube of clear acrylic and aluminum." },
      { type: "heading", text: "Beautiful, but too expensive" },
      { type: "paragraph", text: "Despite the praise for its design, the Cube was priced above comparable desktops, and sales fell far short of expectations." },
      { type: "image", src: "/images/story-4.png", caption: "The Power Mac G4 Cube at its launch event in July 2000.", credit: "Getty Images" },
      { type: "quote", text: "It was a design triumph and a commercial miss, and both things were true.", author: "Industry analyst" },
      { type: "paragraph", text: "Many of the ideas behind the Cube later returned in products that became bestsellers." },
    ],
  },
  {
    id: "s5",
    section: "health",
    category: "CORONA",
    title: "Why some people never seem to catch a cold, and what scientists are learning",
    excerpt:
      "Researchers are studying immune responses in people who repeatedly avoid common infections, hoping the findings can inform future treatments.",
    image: "/images/story-1.png",
    time: "13 hours ago",
    author: "Caroline Casey",
    readTime: "5min read",
    likes: 14,
    shares: 31,
    authorId: "caroline",
    comments: 9,
    tags: ["HEALTH", "WATCH", "CORONA", "FREEBIE"],
    relatedIds: ["s1", "s2", "s3", "s4", "s6"],
    recommendedIds: ["s7", "s8"],
    basedOnLikeId: "s2",
    content: [
      { type: "paragraph", text: "Researchers are studying people who rarely get sick, hoping their immune systems hold clues for new treatments." },
      { type: "heading", text: "What the studies show" },
      { type: "paragraph", text: "Early findings suggest that prior exposure to related viruses and overall health habits may both play a role." },
      { type: "image", src: "/images/story-1.png", caption: "A researcher prepares samples in a laboratory.", credit: "Reuters" },
      { type: "quote", text: "There is no single answer. It is a combination of many small advantages.", author: "Immunology researcher" },
      { type: "paragraph", text: "Scientists say larger studies are needed before any conclusions can be applied to the wider public." },
    ],
  },
  {
    id: "s6",
    section: "think",
    category: null,
    title: "The quiet return of the office: what remote work taught us about focus",
    excerpt:
      "After months at home, workers and managers are rethinking what the office is actually for, and many say the answer is collaboration, not desks.",
    image: "/images/story-2.png",
    time: "14 hours ago",
    author: "Lucy Hiddleston",
    readTime: "6min read",
    likes: 40,
    shares: 55,
    authorId: "lucy",
    comments: 18,
    tags: ["THINK", "TRENDING", "WORK", "FREEBIE"],
    relatedIds: ["s1", "s2", "s3", "s4", "s5"],
    recommendedIds: ["s7", "s8"],
    basedOnLikeId: "s2",
    content: [
      { type: "paragraph", text: "After months of working from home, many employees and managers are rethinking what the office is actually for." },
      { type: "heading", text: "Collaboration over desks" },
      { type: "paragraph", text: "Companies are testing flexible schedules and smaller shared spaces designed around meetings rather than individual desks." },
      { type: "image", src: "/images/story-2.png", caption: "An office floor with distanced workstations.", credit: "Associated Press" },
      { type: "quote", text: "We learned that focus happens at home and connection happens at the office.", author: "HR director" },
      { type: "paragraph", text: "Whether the hybrid model will last remains an open question for many employers." },
    ],
  },
  {
    id: "s7",
    section: "general",
    category: "POLITICS",
    title: "Lawmakers return to Washington as negotiations over relief package stall",
    excerpt:
      "Both parties say they want a deal, but disagreements over unemployment benefits and school funding remain unresolved.",
    image: "/images/story-3.png",
    time: "15 hours ago",
    author: "Caroline Casey",
    readTime: "4min read",
    likes: 22,
    shares: 48,
    authorId: "caroline",
    comments: 27,
    tags: ["POLITICS", "WATCH", "LIVE", "FREEBIE"],
    relatedIds: ["s1", "s2", "s3", "s4", "s8"],
    recommendedIds: ["s1", "s6"],
    basedOnLikeId: "s5",
    content: [
      { type: "paragraph", text: "Lawmakers returned to Washington this week as talks over a new relief package continued to stall." },
      { type: "heading", text: "Where the talks stand" },
      { type: "paragraph", text: "Both parties say they want a deal, but disagreements over unemployment benefits and school funding remain unresolved." },
      { type: "image", src: "/images/story-3.png", caption: "Lawmakers arrive at the Capitol for a vote.", credit: "Associated Press" },
      { type: "quote", text: "Families are waiting, and every day without a deal matters.", author: "Senate aide" },
      { type: "paragraph", text: "Negotiations are expected to continue in the coming days." },
    ],
  },
  {
    id: "s8",
    section: "health",
    category: null,
    title: "Sleep and stress: how a better routine can change your whole week",
    excerpt:
      "Doctors say small, consistent habits like a fixed bedtime and less evening screen time can noticeably lower daily stress levels.",
    image: "/images/story-4.png",
    time: "16 hours ago",
    author: "Lucy Hiddleston",
    readTime: "3min read",
    likes: 18,
    shares: 20,
    authorId: "lucy",
    comments: 8,
    tags: ["HEALTH", "TRENDING", "WATCH", "FREEBIE"],
    relatedIds: ["s1", "s2", "s3", "s4", "s7"],
    recommendedIds: ["s1", "s6"],
    basedOnLikeId: "s3",
    content: [
      { type: "paragraph", text: "Doctors say small, consistent habits can noticeably lower daily stress, and better sleep is often the first step." },
      { type: "heading", text: "Start with a fixed bedtime" },
      { type: "paragraph", text: "Going to bed at the same time each night and avoiding screens in the last hour of the day are two of the easiest changes to try." },
      { type: "image", src: "/images/story-4.png", caption: "A bedside table with a book and an alarm clock.", credit: "Getty Images" },
      { type: "quote", text: "Sleep is the foundation. Everything else gets easier when you have it.", author: "Sleep specialist" },
      { type: "paragraph", text: "Most people notice a difference within a week of keeping a steady routine." },
    ],
  },
];

const makeExtra = ({ id, title, image, time, readTime, authorId, likes = 28, comments, paragraphs, quote }) => ({
  id,
  section: "detail",
  category: null,
  title,
  excerpt: paragraphs[0],
  image,
  time,
  author: authors[authorId].name,
  authorId,
  readTime,
  likes,
  shares: 72,
  comments,
  tags: ["TRENDING", "WATCH", "FREEBIE"],
  relatedIds: ["r3", "r4", "r5", "r6", "r2"],
  recommendedIds: ["r1", "s7"],
  basedOnLikeId: "r2",
  content: [
    { type: "paragraph", text: paragraphs[0] },
    { type: "heading", text: "What we know" },
    { type: "paragraph", text: paragraphs[1] },
    { type: "quote", text: quote },
    { type: "paragraph", text: paragraphs[2] },
  ],
});

export const moreStories = [
  makeExtra({
    id: "r1",
    title: "Millions rely on emergency pandemic benefits for rent, food, and medicine. Now, that lifeline could disappear.",
    image: "/images/image 49.png",
    time: "1 day ago",
    readTime: "6min read",
    authorId: "lucy",
    comments: 27,
    paragraphs: [
      "Emergency pandemic benefits have helped millions of households cover rent, food and medicine, but the programs are set to expire without new action from Congress.",
      "Advocates warn that families who have relied on the extra support may fall behind quickly if payments stop.",
      "Negotiations are expected to continue in the coming weeks.",
    ],
    quote: "For a lot of families, this is the difference between staying housed and not.",
  }),
  makeExtra({
    id: "r2",
    title: "The ADA is turning 30. It's time that it included digital accessibility.",
    image: "/images/image 62.png",
    time: "2 days ago",
    readTime: "5min read",
    authorId: "caroline",
    comments: 18,
    paragraphs: [
      "Thirty years after the Americans with Disabilities Act became law, millions of people still face barriers when they try to use websites and apps.",
      "The law was written before the modern internet, and courts have been inconsistent in applying it to digital spaces.",
      "Updating the ADA would give companies clear standards and give users clear protections.",
    ],
    quote: "Accessibility is not a feature. It is a basic right of participation.",
  }),
  makeExtra({
    id: "r3",
    title: "India & Its Magnetic Charm For Foreign Investments",
    image: "/images/image 55.png",
    time: "3 hours ago",
    readTime: "5min read",
    authorId: "lucy",
    comments: 9,
    paragraphs: [
      "Global investors continue to look toward India as one of the few large economies still attracting steady capital inflows.",
      "Analysts point to a young workforce, a growing digital economy and ongoing policy reforms.",
      "Experts warn that infrastructure gaps could slow the pace of investment.",
    ],
    quote: "India offers scale that very few markets can match today.",
  }),
  makeExtra({
    id: "r4",
    title: "Hill Republicans begin jockeying for power in a possible post-Trump world",
    image: "/images/image 63.png",
    time: "5 hours ago",
    readTime: "6min read",
    authorId: "caroline",
    comments: 34,
    paragraphs: [
      "Several Republican lawmakers have quietly started positioning themselves for leadership roles in a party that may look very different next year.",
      "Aides say informal conversations about committee posts and party messaging have intensified.",
      "How the party balances loyalty with a changing political map will shape its direction.",
    ],
    quote: "Everyone is planning for more than one outcome right now.",
  }),
  makeExtra({
    id: "r5",
    title: "Twitter 'walkout' planned after rapper's anti-Semitic tirade",
    image: "/images/image 64.png",
    time: "7 hours ago",
    readTime: "3min read",
    authorId: "lucy",
    comments: 15,
    paragraphs: [
      "A planned social media walkout is gaining momentum after a rapper posted a series of anti-Semitic messages.",
      "Advocacy groups have urged the company to enforce its own rules.",
      "The company has not yet announced whether it will take further action.",
    ],
    quote: "Silence from platforms sends a message of its own.",
  }),
  makeExtra({
    id: "r6",
    title: "Fleetwood Mac co-founder Peter Green dies at 73",
    image: "/images/image 66.png",
    time: "1 day ago",
    readTime: "4min read",
    authorId: "caroline",
    comments: 12,
    paragraphs: [
      "Peter Green, the guitarist who co-founded Fleetwood Mac and shaped the sound of British blues, has died at the age of 73.",
      "Green's playing was praised for its tone and emotional depth.",
      "Tributes from musicians around the world have continued to arrive.",
    ],
    quote: "He played fewer notes than anyone, and every one of them mattered.",
  }),
];

export const allStories = [...stories, ...moreStories];

export const tabs = [
  { id: "latest", label: "Latest Stories" },
  { id: "think", label: "Think" },
  { id: "health", label: "Health" },
];

export const live = {
  id: "live-1",
  title: "Beloved Arizona coach loses battle with coronavirus",
  image: "/images/live.png",
};

export const editorsPicks = [
  {
    id: "e1",
    category: "CORONA",
    title: "Serological surveys are being conducted to test for coronavirus antibodies. How useful are they?",
    excerpt:
      "The authorities are hoping to find that a substantial proportion of the population has already been infected with the virus – and so is immune.",
    image: "/images/pick-1.png",
    likes: 28,
    shares: 72,
  },
  {
    id: "e2",
    category: null,
    title: "Making a mark in Asia: East Bengal's 2003 Asean Cup win – a defining moment for Indian club football",
    excerpt:
      "Beating some of the finest teams from South Asia, East Bengal became the first Indian club to win an officially recognised Asian football tournament.",
    image: "/images/pick-2.png",
    likes: 28,
    shares: 72,
  },
  {
    id: "e3",
    category: "BUSINESS",
    title: "Small businesses look for new ways to survive the slowdown",
    excerpt:
      "Owners are moving online, renegotiating leases and rethinking supply chains to stay afloat.",
    image: "/images/pick-1.png",
    likes: 17,
    shares: 40,
  },
  {
    id: "e4",
    category: null,
    title: "A look back at the music festivals that moved online this summer",
    excerpt:
      "Artists and fans say virtual stages created unexpected ways to connect, even if nothing replaces a live crowd.",
    image: "/images/pick-2.png",
    likes: 23,
    shares: 36,
  },
];

export const footerLinks = {
  legal: [
    { id: 1, label: "Privacy Policy", href: "/privacy" },
    { id: 2, label: "Do not sell my personal info", href: "/do-not-sell" },
    { id: 3, label: "Terms of Service", href: "/terms" },
    { id: 4, label: "nbcnews.com Site Map", href: "/sitemap" },
  ],
  company: [
    { id: 1, label: "About", href: "/about" },
    { id: 2, label: "Contact", href: "/contact" },
    { id: 3, label: "Careers", href: "/careers" },
    { id: 4, label: "Coupons", href: "/coupons" },
  ],
  social: ["rss", "twitter", "reddit", "facebook"],
  copyright: "copyright © 2020 | NBC NEWS",
};

// ---------- Detay səhifəsi üçün köməkçi funksiyalar ----------

export const getStoryById = (id) => allStories.find((story) => story.id === id);

export const getStoriesByIds = (ids = []) =>
  ids.map((id) => getStoryById(id)).filter(Boolean);

export const getAuthorById = (authorId) => authors[authorId];


