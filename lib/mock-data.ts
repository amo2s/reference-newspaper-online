export type Article = {
  id: string
  title: string
  excerpt: string
  category: 'Politics' | 'Business' | 'Sports'
  date: string
  imageUrl: string
  author: string
  readTime: number
  content: string
  isFeatured?: boolean
  isLive?: boolean
}

export const mockArticles: Article[] = [
  // Politics - Featured
  {
    id: '1',
    title: 'FG ends manual civil service postings, launches digital HR platform',
    excerpt: 'The Federal Government has completely phased out manual processes for civil servants, moving all HR operations to a unified digital system to curb corruption.',
    category: 'Politics',
    date: '2026-07-27',
    imageUrl: 'https://source.unsplash.com/random/800x600/?lagos,nigeria,government',
    content: 'The Federal Government announcement represents a significant milestone in digital transformation efforts. The new system streamlines recruitment, promotion, and posting processes while ensuring transparency and accountability. Civil servants can now track their career progression in real-time through a secure portal. The initiative is expected to reduce processing time from months to weeks, cutting operational costs significantly. This move is seen as a major step in the administration\'s anti-corruption agenda and efficiency drive.',
    author: 'Chioma Adeyemi',
    readTime: 5,
    isFeatured: true,
  },
  // Politics
  {
    id: '2',
    title: 'Senate clarifies 2026 Federal Road Safety Commission Amendment Bill',
    excerpt: 'Lawmakers address controversies surrounding the new transportation amendment aimed at improving highway safety.',
    category: 'Politics',
    date: '2026-07-27',
    imageUrl: 'https://source.unsplash.com/random/800x600/?abuja,politics,senate',
    content: 'The Senate Public Accounts Committee has issued a comprehensive statement clarifying key provisions in the newly amended FRSC Bill. The clarifications directly address concerns raised by transportation stakeholders, civil society organizations, and commercial driver associations. Key provisions include enhanced training requirements for commercial drivers, stricter vehicle inspection protocols, and improved road safety infrastructure funding. The bill is expected to reduce road accidents by up to 30% when fully implemented.',
    author: 'Tunde Oladele',
    readTime: 4,
  },
  // Business - Featured Video
  {
    id: '3',
    title: 'Reps move to domesticate AfCFTA, advance 13 commerce bills to boost trade',
    excerpt: 'The House of Representatives commences legislative action to strengthen Nigeria\'s commercial framework and continental free trade participation.',
    category: 'Business',
    date: '2026-07-26',
    imageUrl: 'https://source.unsplash.com/random/800x600/?lagos,nigeria,business',
    content: 'The House Committee on Commerce has introduced a comprehensive legislative package designed to position Nigeria as a trade hub across Africa. The 13 bills address critical areas including tariff harmonization, customs procedures, export incentive programs, and trade financing mechanisms. Economic analysts predict these measures could increase bilateral trade volumes by 40% within two years. The legislation also aims to reduce the cost of doing business and attract foreign direct investment to key sectors.',
    author: 'Amara Okoye',
    readTime: 6,
  },
  // Business - LIVE
  {
    id: '4',
    title: 'Central Bank of Nigeria Concludes 306th Monetary Policy Committee Meeting',
    excerpt: 'CBN Governor Olayemi Cardoso briefs the press on the latest interest rate decisions and economic outlook.',
    category: 'Business',
    date: '2026-07-26',
    imageUrl: 'https://source.unsplash.com/random/800x600/?abuja,nigeria,finance',
    content: 'The CBN Monetary Policy Committee voted to maintain the benchmark interest rate at 26.75% during its latest meeting. Governor Cardoso emphasized the need for continued coordination between fiscal and monetary policy authorities. The decision signals confidence in the ongoing inflation management strategies and reflects the bank\'s commitment to achieving price stability. Market analysts believe this stable stance will support continued foreign investment in Nigerian securities.',
    author: 'Dr. Emeka Nwankwo',
    readTime: 5,
    isLive: true,
  },
  // Sports - Featured Video
  {
    id: '5',
    title: 'Glasgow 2026: Didih wins Nigeria\'s fifth gold with record-breaking lift',
    excerpt: 'Weightlifter Onome Omolola Didih rewrites the record books at the Commonwealth Games, securing gold for Team Nigeria.',
    category: 'Sports',
    date: '2026-07-25',
    imageUrl: 'https://source.unsplash.com/random/800x600/?glasgow,weightlifting,sports',
    content: 'Nigerian weightlifter Onome Omolola Didih made history at the Glasgow Commonwealth Games by setting a new African record in the women\'s 76kg category. Her total lift of 325kg surpassed the previous continental record by 8kg. Didih attributed her success to consistent training, support from the Nigerian sports ministry, and the unwavering encouragement from Nigerian fans worldwide. This victory marks Nigeria\'s fifth gold medal at the Games, positioning the nation among the top performers.',
    author: 'Segun Akanji',
    readTime: 4,
  },
  // Sports - Featured Video
  {
    id: '6',
    title: 'BBNaija Season 11 Kicks Off As 24 Housemates Battle For Record ₦160m Prize',
    excerpt: 'The reality TV phenomenon returns with its biggest prize pool yet, introducing a massive twist to the house dynamics.',
    category: 'Sports',
    date: '2026-07-25',
    imageUrl: 'https://source.unsplash.com/random/800x600/?television,entertainment,reality',
    content: 'Big Brother Naija Season 11 premiered to over 8 million viewers across Africa, setting a new viewership record for the franchise. The season features 24 housemates competing for a ₦160 million prize, the largest in the show\'s history. A surprise twist revealed that housemates would compete in teams representing different Nigerian regions, adding strategic depth to the competition. The new season promises unprecedented drama, alliance-building, and unforgettable moments.',
    author: 'Zainab Hassan',
    readTime: 5,
  },
  // Politics - Additional
  {
    id: '7',
    title: 'Lagos State Unveils ₦500bn Infrastructure Development Programme',
    excerpt: 'Governor announces ambitious roadmap for transportation, healthcare, and education expansion over next five years.',
    category: 'Politics',
    date: '2026-07-24',
    imageUrl: 'https://source.unsplash.com/random/800x600/?lagos,infrastructure,development',
    content: 'Lagos State Government has launched a comprehensive infrastructure development initiative targeting key economic sectors. The ₦500 billion programme includes construction of 200km of new roads, establishment of 50 primary health centers, and creation of 15 new technical colleges. Funding will be sourced through public-private partnerships, green bonds, and international development financing. Officials project significant economic multiplier effects and job creation across the state.',
    author: 'Adekunle Obi',
    readTime: 6,
  },
  // Business - Additional
  {
    id: '8',
    title: 'Nigeria\'s Tech Startup Ecosystem Records ₦120bn Funding in H1 2026',
    excerpt: 'Investment surge signals growing confidence in African technology innovation despite global economic headwinds.',
    category: 'Business',
    date: '2026-07-24',
    imageUrl: 'https://source.unsplash.com/random/800x600/?technology,startup,innovation',
    content: 'Nigerian tech startups have attracted ₦120 billion in funding during the first half of 2026, marking a 45% increase year-over-year. Fintech and e-commerce platforms remain the dominant sectors attracting investor capital. Major international venture capital firms are increasing their allocations to African startups as risk premiums decline and exit opportunities improve. The ecosystem now supports over 3,000 active startups employing more than 50,000 professionals.',
    author: 'Njide Chukwu',
    readTime: 5,
  },
  // Sports - Additional
  {
    id: '9',
    title: 'Super Eagles Secure AFC Cup Spot with Dominant Victory Over Rivals',
    excerpt: 'Nigeria qualifies for continental championship after impressive group stage performance.',
    category: 'Sports',
    date: '2026-07-23',
    imageUrl: 'https://source.unsplash.com/random/800x600/?football,soccer,nigeria',
    content: 'The Super Eagles secured their place in the AFC Cup finals with a commanding 3-1 victory over their nearest rivals in the qualification group. The team\'s strong defensive structure and clinical finishing impressed observers and analysts. Coach Finidi George praised the players\' commitment and tactical discipline. Nigeria will now prepare for the continental championship scheduled for August 2026.',
    author: 'Chidi Okoro',
    readTime: 4,
  },
]

export const politicsArticles = mockArticles.filter(a => a.category === 'Politics')
export const businessArticles = mockArticles.filter(a => a.category === 'Business')
export const sportsArticles = mockArticles.filter(a => a.category === 'Sports')
export const featuredArticle = mockArticles.find(a => a.isFeatured)
export const videoArticles = [mockArticles[2], mockArticles[3], mockArticles[4]]
