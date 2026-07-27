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
  isBreaking?: boolean
  isLive?: boolean
}

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'FG ends manual civil service postings, launches digital HR platform',
    excerpt: 'The Federal Government has completely phased out manual processes for civil servants, moving all HR operations to a unified digital system to curb corruption.',
    category: 'Politics',
    date: '2026-07-27',
    image: 'https://source.unsplash.com/random/800x600/?lagos,nigeria,government',
    content: 'The Federal Government announcement represents a significant milestone in digital transformation efforts. The new system streamlines recruitment, promotion, and posting processes while ensuring transparency. Civil servants can now track their career progression in real-time through a secure portal. The initiative is expected to reduce processing time from months to weeks, cutting operational costs significantly.',
    author: 'Chioma Adeyemi',
    readTime: 5,
    isBreaking: true,
  },
  {
    id: '2',
    title: 'Senate clarifies 2026 Federal Road Safety Commission Amendment Bill',
    excerpt: 'Lawmakers address controversies surrounding the new transportation amendment aimed at improving highway safety.',
    category: 'Politics',
    date: '2026-07-27',
    image: 'https://source.unsplash.com/random/800x600/?abuja,politics',
    content: 'The Senate Public Accounts Committee has issued a comprehensive statement on the contentious amendments to the FRSC Bill. The clarifications address concerns from transportation stakeholders and civil society groups. Key provisions include enhanced training requirements for commercial drivers and stricter vehicle inspection protocols.',
    author: 'Tunde Oladele',
    readTime: 4,
  },
  {
    id: '3',
    title: 'Reps move to domesticate AfCFTA, advance 13 commerce bills to boost trade',
    excerpt: 'The House of Representatives commences legislative action to strengthen Nigeria\'s commercial framework and continental free trade participation.',
    category: 'Business',
    date: '2026-07-26',
    image: 'https://source.unsplash.com/random/800x600/?lagos,nigeria,business',
    content: 'The House Committee on Commerce has introduced a comprehensive legislative package designed to position Nigeria as a trade hub in Africa. The bills address tariff harmonization, customs procedures, and export incentive programs. Economic analysts predict these measures could increase bilateral trade volumes by 40% within two years.',
    author: 'Amara Okoye',
    readTime: 6,
  },
  {
    id: '4',
    title: 'Central Bank of Nigeria Concludes 306th Monetary Policy Committee Meeting',
    excerpt: 'CBN Governor Olayemi Cardoso briefs the press on the latest interest rate decisions and economic outlook.',
    category: 'Business',
    date: '2026-07-26',
    image: 'https://source.unsplash.com/random/800x600/?nigeria,finance,bank',
    content: 'The CBN MPC voted to maintain the benchmark interest rate at 26.75%, citing persistent inflation concerns and currency stability objectives. Governor Cardoso emphasized the need for coordinated fiscal-monetary policy coordination. The decision signals confidence in ongoing inflation management strategies.',
    author: 'Dr. Emeka Nwankwo',
    readTime: 5,
    isLive: true,
  },
  {
    id: '5',
    title: 'Glasgow 2026: Didih wins Nigeria\'s fifth gold with record-breaking lift',
    excerpt: 'Weightlifter Onome Omolola Didih rewrites the record books at the Commonwealth Games, securing gold for Team Nigeria.',
    category: 'Sports',
    date: '2026-07-25',
    image: 'https://source.unsplash.com/random/800x600/?sports,weightlifting,nigeria',
    content: 'Nigerian weightlifter Onome Omolola Didih made history at the Glasgow Commonwealth Games by setting a new African record in the women\'s 76kg category. Her total lift of 325kg surpassed the previous record by 8kg. Didih attributed her success to consistent training and support from the Nigerian sports ministry.',
    author: 'Segun Akanji',
    readTime: 4,
  },
  {
    id: '6',
    title: 'BBNaija Season 11 Kicks Off As 24 Housemates Battle For Record ₦160m Prize',
    excerpt: 'The reality TV phenomenon returns with its biggest prize pool yet, introducing a massive twist to the house dynamics.',
    category: 'Entertainment',
    date: '2026-07-25',
    image: 'https://source.unsplash.com/random/800x600/?entertainment,television,nigeria',
    content: 'Big Brother Naija Season 11 premiered to over 8 million viewers across Africa, setting a new viewership record. The season features 24 housemates competing for a ₦160 million prize, the largest in the show\'s history. A surprise twist revealed that housemates would compete in teams representing different Nigerian regions.',
    author: 'Zainab Hassan',
    readTime: 5,
  },
  {
    id: '7',
    title: 'Lagos State Unveils ₦500bn Infrastructure Development Programme',
    excerpt: 'Governor announces ambitious roadmap for transportation, healthcare, and education expansion over next five years.',
    category: 'Politics',
    date: '2026-07-24',
    image: 'https://source.unsplash.com/random/800x600/?lagos,infrastructure,development',
    content: 'Lagos State Government has launched a comprehensive infrastructure development initiative targeting key sectors. The programme includes construction of 200km of new roads, 50 primary health centers, and 15 technical colleges. Funding will be sourced through public-private partnerships and green bonds.',
    author: 'Adekunle Obi',
    readTime: 6,
  },
  {
    id: '8',
    title: 'Nigeria\'s Tech Startup Ecosystem Records ₦120bn Funding in H1 2026',
    excerpt: 'Investment surge signals growing confidence in African technology innovation despite global economic headwinds.',
    category: 'Business',
    date: '2026-07-24',
    image: 'https://source.unsplash.com/random/800x600/?technology,startup,nigeria',
    content: 'Nigerian tech startups have attracted ₦120 billion in funding during the first half of 2026, marking a 45% increase year-over-year. Fintech and e-commerce platforms remain the dominant sectors. Major international investors are increasing their allocations to African startups as risk premiums decline.',
    author: 'Njide Chukwu',
    readTime: 5,
  },
]

export const trendingArticles = mockArticles.slice(0, 3)
export const videoArticles = mockArticles.slice(3, 6)
export const breakingArticles = mockArticles.filter(a => a.isBreaking)
