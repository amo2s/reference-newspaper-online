export type Article = {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  content: string
  author: string
  readTime: number
}

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Global Climate Summit Reaches Historic Agreement',
    excerpt: 'World leaders commit to aggressive emissions cuts in landmark Paris follow-up',
    category: 'politics',
    date: '2024-01-15',
    image: '/images/climate.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Sarah Chen',
    readTime: 5,
  },
  {
    id: '2',
    title: 'AI Breakthrough Could Transform Healthcare',
    excerpt: 'New machine learning model shows 95% accuracy in early disease detection',
    category: 'technology',
    date: '2024-01-14',
    image: '/images/ai.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'James Wilson',
    readTime: 6,
  },
  {
    id: '3',
    title: 'Tech Giant Announces Massive Expansion',
    excerpt: 'Company plans to hire 50,000 engineers over the next three years',
    category: 'business',
    date: '2024-01-13',
    image: '/images/tech.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Michael Rodriguez',
    readTime: 4,
  },
  {
    id: '4',
    title: 'New Exoplanet Discovery Hints at Life',
    excerpt: 'Scientists detect signs of water and organic molecules in distant system',
    category: 'science',
    date: '2024-01-12',
    image: '/images/space.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Dr. Elena Volkov',
    readTime: 7,
  },
  {
    id: '5',
    title: 'Stock Markets React to Interest Rate Decision',
    excerpt: 'Central banks signal potential rate cuts as inflation continues to decline',
    category: 'business',
    date: '2024-01-11',
    image: '/images/stocks.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'David Thompson',
    readTime: 5,
  },
  {
    id: '6',
    title: 'Renewable Energy Now 40% of Global Power',
    excerpt: 'Solar and wind installations reach record levels in 2024',
    category: 'science',
    date: '2024-01-10',
    image: '/images/energy.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Lisa Anderson',
    readTime: 5,
  },
  {
    id: '7',
    title: 'Congress Passes Major Tech Regulation Bill',
    excerpt: 'New framework aims to balance innovation with consumer protection',
    category: 'politics',
    date: '2024-01-09',
    image: '/images/congress.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Mark Peterson',
    readTime: 6,
  },
  {
    id: '8',
    title: 'Startup Unicorn Valued at $10 Billion',
    excerpt: 'Series F funding round establishes new AI company as market leader',
    category: 'business',
    date: '2024-01-08',
    image: '/images/startup.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Amanda Foster',
    readTime: 4,
  },
]

export const trendingArticles = mockArticles.slice(0, 3)
export const videoArticles = mockArticles.slice(2, 5)
