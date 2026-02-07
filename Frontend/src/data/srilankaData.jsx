// Sri Lanka Districts and Tourist Places Data

export const districts = [
  {
    id: 1,
    name: "Colombo",
    province: "Western Province",
    description:
      "The commercial capital and largest city of Sri Lanka, offering a blend of modern life, colonial buildings, and cultural heritage.",
    coordinates: { lat: 6.9271, lng: 79.8612 },
    touristPlaces: [
      {
        id: 101,
        name: "Galle Face Green",
        description:
          "A popular ocean-side urban park stretching for half a kilometer along the coast. Perfect for evening walks and street food.",
        category: "Recreation",
        coordinates: { lat: 6.9271, lng: 79.8466 },
        googleMapsLink: "https://maps.google.com/?q=Galle+Face+Green+Colombo",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Colombo_-_Galle_Face.jpg/500px-Colombo_-_Galle_Face.jpg",
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/2b/4a/4c/galle-face-green.jpg",
        ],
        bestTimeToVisit: "November to March",
        duration: "1-2 hours",
        entranceFee: "Free",
      },
      {
        id: 102,
        name: "National Museum of Colombo",
        description:
          "The largest museum in Sri Lanka, featuring a vast collection of artifacts depicting Sri Lankan history and heritage.",
        category: "Historical",
        coordinates: { lat: 6.9098, lng: 79.8607 },
        googleMapsLink: "https://maps.google.com/?q=National+Museum+Colombo",
        images: [
          "https://media.gettyimages.com/id/2213743003/photo/colombo-national-museum-sri-lanka.jpg?s=2048x2048&w=gi&k=20&c=FXPybrOZMbKcvj4JAQyT652V7EZzwLi2ZLWQGu9zrBw=",
        ],
        bestTimeToVisit: "Year-round",
        duration: "2-3 hours",
        entranceFee: "LKR 600 (Adults)",
      },
      {
        id: 103,
        name: "Gangaramaya Temple",
        description:
          "One of the most important Buddhist temples in Colombo, blending modern and traditional architecture with a museum and library.",
        category: "Religious",
        coordinates: { lat: 6.9167, lng: 79.8562 },
        googleMapsLink: "https://maps.google.com/?q=Gangaramaya+Temple+Colombo",
        images: [
          "https://i0.wp.com/albinger.me/wp-content/uploads/2014/12/seema-malaka-on-beiralake-in-colombo.jpg?ssl=1",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1-2 hours",
        entranceFee: "LKR 300",
      },
      {
        id: 104,
        name: "Independence Square",
        description:
          "National monument built for commemoration of Sri Lanka's independence from Britain in 1948.",
        category: "Historical",
        coordinates: { lat: 6.9034, lng: 79.8682 },
        googleMapsLink:
          "https://maps.google.com/?q=Independence+Square+Colombo",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/5e/c6/b9/de-hal-gezien-vanaf-de.jpg?w=1400&h=800&s=1",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1 hour",
        entranceFee: "Free",
      },
    ],
  },
  {
    id: 2,
    name: "Kandy",
    province: "Central Province",
    description:
      "The last capital of the ancient kings' era of Sri Lanka, famous for the Temple of the Tooth Relic and cultural shows.",
    coordinates: { lat: 7.2906, lng: 80.6337 },
    touristPlaces: [
      {
        id: 201,
        name: "Temple of the Tooth Relic",
        description:
          "Sacred Buddhist temple housing the relic of the tooth of the Buddha. A UNESCO World Heritage Site and major pilgrimage site.",
        category: "Religious",
        coordinates: { lat: 7.2934, lng: 80.6411 },
        googleMapsLink: "https://maps.google.com/?q=Temple+of+the+Tooth+Kandy",
        images: [
          "https://www.ceylonexpeditions.com/medias/destination_places/big/106/temple-of-the-sacred-tooth-relic-kandy.jpg",
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/d5/88/0a/sacred-tooth-relic.jpg",
        ],
        bestTimeToVisit: "July-August (Esala Perahera festival)",
        duration: "2-3 hours",
        entranceFee: "LKR 2000",
      },
      {
        id: 202,
        name: "Royal Botanical Gardens, Peradeniya",
        description:
          "147-acre botanical garden with over 4000 species of plants including orchids and palms. Perfect for nature lovers.",
        category: "Nature",
        coordinates: { lat: 7.2683, lng: 80.5967 },
        googleMapsLink:
          "https://maps.google.com/?q=Peradeniya+Botanical+Gardens",
        images: [
          "https://for91days.com/photos/SriLanka/Royal%20Botanical%20Gardens%20of%20Peradeniya/Botanical-Gardens-of-Peradeniya.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "2-4 hours",
        entranceFee: "LKR 1500",
      },
      {
        id: 203,
        name: "Kandy Lake",
        description:
          "An artificial lake in the heart of Kandy, created by the last Sinhalese king. Scenic walking path around the lake.",
        category: "Nature",
        coordinates: { lat: 7.2906, lng: 80.6337 },
        googleMapsLink: "https://maps.google.com/?q=Kandy+Lake",
        images: [
          "https://srilankaexplorers.com/wp-content/uploads/2024/05/1_UTMYLJ4O9xJS89SazTUBLw.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1-2 hours",
        entranceFee: "Free",
      },
      {
        id: 204,
        name: "Bahirawakanda Vihara Buddha Statue",
        description:
          "Giant white Buddha statue overlooking Kandy city, offering panoramic views of the surrounding hills and cityscape.",
        category: "Religious",
        coordinates: { lat: 7.2847, lng: 80.638 },
        googleMapsLink:
          "https://maps.google.com/?q=Bahirawakanda+Buddha+Statue+Kandy",
        images: [
          "https://www.lovidhu.com/uploads/posts/2021/05//bahirawakanda-temple-sri-lanka-945x630.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1 hour",
        entranceFee: "Free",
      },
    ],
  },
  {
    id: 3,
    name: "Galle",
    province: "Southern Province",
    description:
      "Historic coastal city famous for Galle Fort, a UNESCO World Heritage Site with Dutch colonial architecture and pristine beaches.",
    coordinates: { lat: 6.0535, lng: 80.221 },
    touristPlaces: [
      {
        id: 301,
        name: "Galle Fort",
        description:
          "A UNESCO World Heritage Site, this 17th-century Dutch fort is one of the best-preserved colonial fortifications in Asia.",
        category: "Historical",
        coordinates: { lat: 6.0267, lng: 80.217 },
        googleMapsLink: "https://maps.google.com/?q=Galle+Fort+Sri+Lanka",
        images: [
          "https://do6raq9h04ex.cloudfront.net/sites/8/2021/07/galle-fort-1050x700-1.jpg",
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/46/3c/galle-fort.jpg",
        ],
        bestTimeToVisit: "November to April",
        duration: "3-4 hours",
        entranceFee: "Free",
      },
      {
        id: 302,
        name: "Unawatuna Beach",
        description:
          "Beautiful crescent-shaped beach with calm waters, perfect for swimming, snorkeling, and relaxing. Popular tourist destination.",
        category: "Beach",
        coordinates: { lat: 6.0099, lng: 80.2487 },
        googleMapsLink: "https://maps.google.com/?q=Unawatuna+Beach",
        images: [
          "https://www.wondersofceylon.com/content/images/2024/01/WoC-Unawatuna-Beach-Featured.webp",
        ],
        bestTimeToVisit: "November to April",
        duration: "Half day to full day",
        entranceFee: "Free",
      },
      {
        id: 303,
        name: "Japanese Peace Pagoda",
        description:
          "White Buddhist stupa on Rumassala hill offering stunning views of Unawatuna bay and the Indian Ocean.",
        category: "Religious",
        coordinates: { lat: 6.0046, lng: 80.2503 },
        googleMapsLink:
          "https://maps.google.com/?q=Japanese+Peace+Pagoda+Unawatuna",
        images: [
          "https://www.lovesrilanka.org/wp-content/uploads/2020/04/Japanese-Peace-Pagoda-1920.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1-2 hours",
        entranceFee: "Free",
      },
    ],
  },
  {
    id: 4,
    name: "Nuwara Eliya",
    province: "Central Province",
    description:
      "Known as 'Little England', this hill station features cool climate, tea plantations, colonial architecture, and scenic landscapes.",
    coordinates: { lat: 6.9497, lng: 80.7891 },
    touristPlaces: [
      {
        id: 401,
        name: "Horton Plains National Park",
        description:
          "UNESCO World Heritage Site featuring World's End cliff with 4000ft drop, Baker's Falls, and unique biodiversity.",
        category: "Nature",
        coordinates: { lat: 6.8069, lng: 80.7986 },
        googleMapsLink:
          "https://maps.google.com/?q=Horton+Plains+National+Park",
        images: [
          "https://www.lovesrilanka.org/wp-content/uploads/2020/04/Horton-Plains-National-Park-1920.jpg",
        ],
        bestTimeToVisit: "January to March",
        duration: "4-5 hours",
        entranceFee: "LKR 3000 + vehicle charges",
      },
      {
        id: 402,
        name: "Gregory Lake",
        description:
          "Man-made lake offering boat rides, horse riding, and beautiful scenery. Popular recreational spot in the heart of Nuwara Eliya.",
        category: "Nature",
        coordinates: { lat: 6.9536, lng: 80.7657 },
        googleMapsLink: "https://maps.google.com/?q=Gregory+Lake+Nuwara+Eliya",
        images: [
          "https://www.honeymoonguidesrilanka.com/wp-content/uploads/2024/08/Lake-Gregory-Park-1920x600-1.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "2-3 hours",
        entranceFee: "LKR 200 (entry), boat rides extra",
      },
      {
        id: 403,
        name: "Pedro Tea Estate",
        description:
          "One of the highest tea estates in Sri Lanka where you can tour the factory and learn about Ceylon tea production.",
        category: "Cultural",
        coordinates: { lat: 6.9425, lng: 80.7733 },
        googleMapsLink:
          "https://maps.google.com/?q=Pedro+Tea+Estate+Nuwara+Eliya",
        images: [
          "https://cdn.forevervacation.com/uploads/digital/assets/pedro-tea-estate.png?tr=w-1235,h-354",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1-2 hours",
        entranceFee: "LKR 250",
      },
      {
        id: 404,
        name: "Victoria Park",
        description:
          "Well-maintained public park in the heart of Nuwara Eliya with beautiful flower gardens and birdwatching opportunities.",
        category: "Nature",
        coordinates: { lat: 6.9688, lng: 80.7644 },
        googleMapsLink: "https://maps.google.com/?q=Victoria+Park+Nuwara+Eliya",
        images: [
          "https://www.flamingotravels.net/_next/image?url=https%3A%2F%2Fimgcdn.flamingotravels.co.in%2FImages%2FPlacesOfInterest%2FThe-Victoria-Park-Nuwara%20Eliya-Sri-Lanka-Places-To-Visit-Intrest-3.jpg&w=1080&q=90",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1-2 hours",
        entranceFee: "LKR 200",
      },
    ],
  },
  {
    id: 5,
    name: "Anuradhapura",
    province: "North Central Province",
    description:
      "Ancient capital of Sri Lanka and UNESCO World Heritage Site, featuring sacred Buddhist sites and impressive ruins over 2000 years old.",
    coordinates: { lat: 8.3114, lng: 80.4037 },
    touristPlaces: [
      {
        id: 501,
        name: "Sri Maha Bodhi",
        description:
          "Sacred fig tree grown from a cutting of the original Bodhi tree under which Buddha attained enlightenment. Over 2000 years old.",
        category: "Religious",
        coordinates: { lat: 8.3448, lng: 80.3969 },
        googleMapsLink:
          "https://maps.google.com/?q=Sri+Maha+Bodhi+Anuradhapura",
        images: [
          "https://tropicallifedambulla.com/wp-content/uploads/2019/07/jayasrimahabodi2.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1 hour",
        entranceFee: "LKR 25 (sacred area)",
      },
      {
        id: 502,
        name: "Ruwanwelisaya",
        description:
          "Magnificent white stupa and one of the tallest ancient structures in the world, built in 140 BC by King Dutugemunu.",
        category: "Religious",
        coordinates: { lat: 8.3493, lng: 80.3964 },
        googleMapsLink: "https://maps.google.com/?q=Ruwanwelisaya+Anuradhapura",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/ea/a4/e8/ruwanwelisaya-temple.jpg?w=800&h=-1&s=1",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1-2 hours",
        entranceFee: "LKR 25",
      },
      {
        id: 503,
        name: "Jetavanaramaya",
        description:
          "Once the third tallest structure in the ancient world, this massive stupa stands 122 meters tall with impressive architecture.",
        category: "Historical",
        coordinates: { lat: 8.3554, lng: 80.4017 },
        googleMapsLink:
          "https://maps.google.com/?q=Jetavanaramaya+Anuradhapura",
        images: ["https://cdn.lakpura.com/images/LK94009853-01-E.JPG"],
        bestTimeToVisit: "Year-round",
        duration: "1 hour",
        entranceFee: "USD 25 (main site ticket)",
      },
    ],
  },
  {
    id: 6,
    name: "Polonnaruwa",
    province: "North Central Province",
    description:
      "Medieval capital of Sri Lanka, UNESCO World Heritage Site with well-preserved ruins, massive Buddha statues, and ancient reservoirs.",
    coordinates: { lat: 7.9403, lng: 81.0188 },
    touristPlaces: [
      {
        id: 601,
        name: "Gal Vihara",
        description:
          "Four magnificent Buddha statues carved from a single granite rock face, considered masterpieces of Sri Lankan art.",
        category: "Religious",
        coordinates: { lat: 7.9561, lng: 81.0071 },
        googleMapsLink: "https://maps.google.com/?q=Gal+Vihara+Polonnaruwa",
        images: ["https://cdn.lakpura.com/images/LK94009888-01-E-239-150.JPG"],
        bestTimeToVisit: "Year-round",
        duration: "1 hour",
        entranceFee: "USD 25 (main site ticket)",
      },
      {
        id: 602,
        name: "Parakrama Samudra",
        description:
          "Ancient massive reservoir created by King Parakramabahu I, spanning over 2400 hectares with scenic views.",
        category: "Historical",
        coordinates: { lat: 7.9167, lng: 81.0 },
        googleMapsLink:
          "https://maps.google.com/?q=Parakrama+Samudra+Polonnaruwa",
        images: [
          "https://www.wondersofceylon.com/content/images/2024/01/WoC-Parakrama-Samudraya-Featured.png",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1-2 hours",
        entranceFee: "Free",
      },
      {
        id: 603,
        name: "Royal Palace of King Parakramabahu",
        description:
          "Ruins of a magnificent seven-story palace with impressive architecture showcasing the grandeur of ancient Sri Lankan kingdoms.",
        category: "Historical",
        coordinates: { lat: 7.9475, lng: 81.0062 },
        googleMapsLink: "https://maps.google.com/?q=Royal+Palace+Polonnaruwa",
        images: [
          "https://orientalarchitecture.com/gallery/sri-lanka/polonnaruwa/parakramabahu-royal-palace/thumbs/parakramabahu_royal-palace03thumb.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1 hour",
        entranceFee: "USD 25 (main site ticket)",
      },
    ],
  },
  {
    id: 7,
    name: "Jaffna",
    province: "Northern Province",
    description:
      "Cultural capital of Sri Lankan Tamils, featuring unique architecture, Hindu temples, Portuguese and Dutch colonial heritage.",
    coordinates: { lat: 9.6615, lng: 80.0255 },
    touristPlaces: [
      {
        id: 701,
        name: "Jaffna Fort",
        description:
          "Large colonial fort built by Portuguese and later expanded by Dutch, offering views of the lagoon and city.",
        category: "Historical",
        coordinates: { lat: 9.6631, lng: 80.007 },
        googleMapsLink: "https://maps.google.com/?q=Jaffna+Fort",
        images: [
          "https://www.lovesrilanka.org/wp-content/uploads/2020/04/Jaffna-Fort-1920.jpg",
        ],
        bestTimeToVisit: "November to March",
        duration: "1-2 hours",
        entranceFee: "Free",
      },
      {
        id: 702,
        name: "Nallur Kandaswamy Temple",
        description:
          "One of the most significant Hindu temples in Sri Lanka dedicated to Lord Murugan, with colorful gopuram and annual festival.",
        category: "Religious",
        coordinates: { lat: 9.6833, lng: 80.0261 },
        googleMapsLink: "https://maps.google.com/?q=Nallur+Kandaswamy+Temple",
        images: [
          "https://www.talesofceylon.com/wp-content/uploads/2019/10/Nallur-Kandaswamy-Kovil_1920x700.jpg",
        ],
        bestTimeToVisit: "July-August (festival time)",
        duration: "1-2 hours",
        entranceFee: "Free",
      },
      {
        id: 703,
        name: "Casuarina Beach",
        description:
          "Beautiful beach lined with casuarina trees, offering clear waters and a peaceful atmosphere away from crowds.",
        category: "Beach",
        coordinates: { lat: 9.7661, lng: 80.0492 },
        googleMapsLink: "https://maps.google.com/?q=Casuarina+Beach+Jaffna",
        images: [
          "https://static.wixstatic.com/media/ba255b_eabd6286129d47e09667ef77beb35b0b~mv2.jpg/v1/fill/w_1176,h_984,al_c,q_85,enc_auto/ba255b_eabd6286129d47e09667ef77beb35b0b~mv2.jpg",
        ],
        bestTimeToVisit: "November to March",
        duration: "2-4 hours",
        entranceFee: "Free",
      },
    ],
  },
  {
    id: 8,
    name: "Trincomalee",
    province: "Eastern Province",
    description:
      "Port city with pristine beaches, hot springs, whale watching opportunities, and the famous Koneswaram Temple.",
    coordinates: { lat: 8.5874, lng: 81.2152 },
    touristPlaces: [
      {
        id: 801,
        name: "Koneswaram Temple",
        description:
          "Ancient Hindu temple perched on Swami Rock cliff with breathtaking ocean views and religious significance.",
        category: "Religious",
        coordinates: { lat: 8.5778, lng: 81.2344 },
        googleMapsLink:
          "https://maps.google.com/?q=Koneswaram+Temple+Trincomalee",
        images: [
          "https://www.ceylonexpeditions.com/medias/destination_places/big/78/thirukoneswaram-temple-trincomalee-sri-lanka-ramayana-tour-ceylon-expeditions-8.jpg",
        ],
        bestTimeToVisit: "March to October",
        duration: "1-2 hours",
        entranceFee: "Free",
      },
      {
        id: 802,
        name: "Nilaveli Beach",
        description:
          "One of Sri Lanka's finest beaches with powdery white sand, crystal-clear waters, and excellent snorkeling.",
        category: "Beach",
        coordinates: { lat: 8.6833, lng: 81.1833 },
        googleMapsLink: "https://maps.google.com/?q=Nilaveli+Beach",
        images: ["https://1001beach.com/img/posts/2125/1200/nilaveli-1.webp"],
        bestTimeToVisit: "March to October",
        duration: "Half day to full day",
        entranceFee: "Free",
      },
      {
        id: 803,
        name: "Pigeon Island National Park",
        description:
          "Marine national park perfect for snorkeling and diving with coral reefs, diverse fish species, and nesting pigeons.",
        category: "Wildlife",
        coordinates: { lat: 8.7111, lng: 81.1833 },
        googleMapsLink:
          "https://maps.google.com/?q=Pigeon+Island+National+Park",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/0c/b8/01/getlstd-property-photo.jpg?w=1000&h=600&s=1",
        ],
        bestTimeToVisit: "April to September",
        duration: "3-4 hours",
        entranceFee: "USD 15 + boat charges",
      },
    ],
  },
  {
    id: 9,
    name: "Hambantota",
    province: "Southern Province",
    description:
      "Coastal district known for Yala National Park, wildlife safaris, salt pans, and developing port infrastructure.",
    coordinates: { lat: 6.1429, lng: 81.1212 },
    touristPlaces: [
      {
        id: 901,
        name: "Yala National Park",
        description:
          "Most visited national park in Sri Lanka with highest density of leopards in the world, elephants, and diverse wildlife.",
        category: "Wildlife",
        coordinates: { lat: 6.3724, lng: 81.5103 },
        googleMapsLink: "https://maps.google.com/?q=Yala+National+Park",
        images: [
          "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/f2/0f/25.jpg",
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/5d/0a/0d/yala-national-park.jpg",
        ],
        bestTimeToVisit: "February to July",
        duration: "Half day safari (4-5 hours)",
        entranceFee: "USD 30 + vehicle charges",
      },
      {
        id: 902,
        name: "Bundala National Park",
        description:
          "Ramsar wetland sanctuary famous for migratory birds, especially flamingos, with elephants and crocodiles.",
        category: "Wildlife",
        coordinates: { lat: 6.1958, lng: 81.2028 },
        googleMapsLink: "https://maps.google.com/?q=Bundala+National+Park",
        images: [
          "https://nexttravelsrilanka.com/wp-content/uploads/2021/05/White-Greater-flamingos-in-a-swamp-by-a-lawn-at-Bundala-National-Park-the-Wonderful-Land-of-Birds-in-Sri-Lanka.jpg",
        ],
        bestTimeToVisit: "September to March",
        duration: "Half day",
        entranceFee: "USD 15 + vehicle charges",
      },
      {
        id: 903,
        name: "Tangalle Beach",
        description:
          "Pristine beach with golden sand, calm waters, and laid-back atmosphere perfect for relaxation and swimming.",
        category: "Beach",
        coordinates: { lat: 6.0244, lng: 80.7969 },
        googleMapsLink: "https://maps.google.com/?q=Tangalle+Beach",
        images: [
          "https://nexttravelsrilanka.com/wp-content/uploads/2023/02/Tangalle.jpg",
        ],
        bestTimeToVisit: "November to April",
        duration: "Half day to full day",
        entranceFee: "Free",
      },
    ],
  },
  {
    id: 10,
    name: "Ratnapura",
    province: "Sabaragamuwa Province",
    description:
      "City of Gems, famous for gem mining, gateway to Adam's Peak pilgrimage, and Sinharaja Forest Reserve.",
    coordinates: { lat: 6.6828, lng: 80.4017 },
    touristPlaces: [
      {
        id: 1001,
        name: "Adam's Peak (Sri Pada)",
        description:
          "Sacred mountain with pilgrimage site marked by 'Sacred Footprint', offering spectacular sunrise views after night climb.",
        category: "Religious",
        coordinates: { lat: 6.8095, lng: 80.4989 },
        googleMapsLink: "https://maps.google.com/?q=Adams+Peak+Sri+Lanka",
        images: [
          "https://www.ceylonexpeditions.com/medias/media/big/884/whatsapp-image-2024-12-25-at-06-40-53-2.jpeg",
        ],
        bestTimeToVisit: "December to May",
        duration: "6-8 hours (round trip climb)",
        entranceFee: "Free",
      },
      {
        id: 1002,
        name: "Sinharaja Forest Reserve",
        description:
          "UNESCO World Heritage rainforest with incredible biodiversity, endemic species, and guided nature trails.",
        category: "Nature",
        coordinates: { lat: 6.4007, lng: 80.4006 },
        googleMapsLink: "https://maps.google.com/?q=Sinharaja+Forest+Reserve",
        images: [
          "https://www.greenholidaytravels.com/wp-content/uploads/2024/07/Si2.jpg",
        ],
        bestTimeToVisit: "January to April, August to September",
        duration: "Full day",
        entranceFee: "USD 15 + guide charges",
      },
      {
        id: 1003,
        name: "Gem Mines and Museums",
        description:
          "Visit traditional gem mining sites and museums showcasing Sri Lanka's famous sapphires, rubies, and precious stones.",
        category: "Cultural",
        coordinates: { lat: 6.6828, lng: 80.4017 },
        googleMapsLink: "https://maps.google.com/?q=Gem+Museum+Ratnapura",
        images: [
          "https://soulsrilanka.com/image/experiences/visit-a-gem-mine/01.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "2-3 hours",
        entranceFee: "Varies by location",
      },
    ],
  },
  {
    id: 11,
    name: "Matale",
    province: "Central Province",
    description:
      "Spice garden capital with ancient rock temples, scenic mountain ranges, and aromatic spice plantations.",
    coordinates: { lat: 7.4675, lng: 80.6234 },
    touristPlaces: [
      {
        id: 1101,
        name: "Aluvihara Rock Temple",
        description:
          "Historic cave temple where Buddhist scriptures were first written down. Features ancient murals and meditation caves.",
        category: "Religious",
        coordinates: { lat: 7.5561, lng: 80.6156 },
        googleMapsLink: "https://maps.google.com/?q=Aluvihara+Rock+Temple",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/8/8b/Matale_aluviharaya.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1-2 hours",
        entranceFee: "LKR 300",
      },
      {
        id: 1102,
        name: "Knuckles Mountain Range",
        description:
          "UNESCO World Heritage Site with stunning hiking trails, waterfalls, diverse flora and fauna, and panoramic views.",
        category: "Nature",
        coordinates: { lat: 7.45, lng: 80.7833 },
        googleMapsLink: "https://maps.google.com/?q=Knuckles+Mountain+Range",
        images: ["https://cdn.lakpura.com/images/LK94009828-01-E.JPG"],
        bestTimeToVisit: "January to April",
        duration: "Full day or multi-day trek",
        entranceFee: "LKR 1000 + guide charges",
      },
      {
        id: 1103,
        name: "Sembuwatta Lake",
        description:
          "Artificial lake surrounded by pine forest and tea plantations, offering boating and picturesque mountain scenery.",
        category: "Nature",
        coordinates: { lat: 7.2833, lng: 80.75 },
        googleMapsLink: "https://maps.google.com/?q=Sembuwatta+Lake",
        images: ["https://cdn.lakpura.com/images/LK94009697-01-E.JPG"],
        bestTimeToVisit: "Year-round",
        duration: "2-3 hours",
        entranceFee: "LKR 500",
      },
    ],
  },
  {
    id: 12,
    name: "Gampaha",
    province: "Western Province",
    description:
      "District with Buddhist temples, botanical gardens, beach resorts in Negombo, and proximity to Colombo.",
    coordinates: { lat: 7.0873, lng: 80.0142 },
    touristPlaces: [
      {
        id: 1201,
        name: "Negombo Beach",
        description:
          "Popular beach resort town close to the airport with golden sand, fishing boats, and vibrant nightlife.",
        category: "Beach",
        coordinates: { lat: 7.2333, lng: 79.85 },
        googleMapsLink: "https://maps.google.com/?q=Negombo+Beach",
        images: [
          "https://www.talesofceylon.com/wp-content/uploads/2019/10/Negombo_1920x700.jpg",
        ],
        bestTimeToVisit: "November to April",
        duration: "Half day to full day",
        entranceFee: "Free",
      },
      {
        id: 1202,
        name: "Kelaniya Raja Maha Vihara",
        description:
          "Sacred Buddhist temple believed to have been visited by Buddha, with beautiful murals and annual Duruthu Perahera.",
        category: "Religious",
        coordinates: { lat: 6.9553, lng: 79.9219 },
        googleMapsLink: "https://maps.google.com/?q=Kelaniya+Temple",
        images: [
          "https://www.srilankanexpeditions.co.uk/images/main_slider/sri-lanka-guide-destinations/kelaniya-raja-maha-vihara/01.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1-2 hours",
        entranceFee: "Free (donations welcome)",
      },
      {
        id: 1203,
        name: "Henarathgoda Botanical Garden",
        description:
          "First botanical garden in Sri Lanka with rich plant collection including the first rubber tree planted in Asia.",
        category: "Nature",
        coordinates: { lat: 7.0667, lng: 80.0167 },
        googleMapsLink:
          "https://maps.google.com/?q=Henarathgoda+Botanical+Garden",
        images: [
          "https://www.ceylonexpeditions.com/medias/destination_places/big/35/gampaha-henarathgoda-botanical-garden-5c7a2-1.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "2-3 hours",
        entranceFee: "LKR 200",
      },
    ],
  },
  {
    id: 13,
    name: "Kalutara",
    province: "Western Province",
    description:
      "Coastal district known for beaches, Buddhist temples, colonial mansions, and spice gardens along the Kalu Ganga river.",
    coordinates: { lat: 6.5854, lng: 79.9607 },
    touristPlaces: [
      {
        id: 1301,
        name: "Kalutara Bodhiya",
        description:
          "Sacred Buddhist temple with unique hollow stupa that visitors can walk inside, located on the Colombo-Galle road.",
        category: "Religious",
        coordinates: { lat: 6.5833, lng: 79.9667 },
        googleMapsLink: "https://maps.google.com/?q=Kalutara+Bodhiya",
        images: [
          "https://www.travelmapsrilanka.com/destinations/destinationimages/kalutara-bodhiya-in-sri-lanka.webp",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1 hour",
        entranceFee: "Free",
      },
      {
        id: 1302,
        name: "Richmond Castle",
        description:
          "Stunning Edwardian mansion built in 1900 with intricate architecture, teak carvings, and beautiful gardens.",
        category: "Historical",
        coordinates: { lat: 6.6, lng: 80.0167 },
        googleMapsLink: "https://maps.google.com/?q=Richmond+Castle+Kalutara",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/f9/7e/66/richmond-castle-at-palatota.jpg?w=1000&h=600&s=1",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1-2 hours",
        entranceFee: "LKR 500",
      },
      {
        id: 1303,
        name: "Brief Garden",
        description:
          "Landscaped garden estate of renowned landscape architect Bevis Bawa, featuring sculptures and lush tropical plants.",
        category: "Nature",
        coordinates: { lat: 6.65, lng: 80.05 },
        googleMapsLink: "https://maps.google.com/?q=Brief+Garden+Kalutara",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/67/23/4d/imag1109-largejpg.jpg?w=2000&h=-1&s=1",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1-2 hours",
        entranceFee: "LKR 1000",
      },
    ],
  },
  {
    id: 14,
    name: "Matara",
    province: "Southern Province",
    description:
      "Southern coastal city with historic forts, beautiful beaches, and the southernmost point of Sri Lanka.",
    coordinates: { lat: 5.9549, lng: 80.555 },
    touristPlaces: [
      {
        id: 1401,
        name: "Dondra Head Lighthouse",
        description:
          "Sri Lanka's southernmost point with tall lighthouse offering panoramic ocean views and historical significance.",
        category: "Historical",
        coordinates: { lat: 5.9239, lng: 80.5881 },
        googleMapsLink: "https://maps.google.com/?q=Dondra+Head+Lighthouse",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/e6/c3/91/dondra-light-house-sri.jpg?w=800&h=400&s=1",
        ],
        bestTimeToVisit: "November to April",
        duration: "1-2 hours",
        entranceFee: "LKR 200",
      },
      {
        id: 1402,
        name: "Polhena Beach",
        description:
          "Sheltered beach with natural reef protecting calm waters, ideal for swimming and snorkeling with sea turtles.",
        category: "Beach",
        coordinates: { lat: 5.945, lng: 80.5489 },
        googleMapsLink: "https://maps.google.com/?q=Polhena+Beach+Matara",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/81/88/25/img-20190215-103150-largejpg.jpg?w=700&h=400&s=1",
        ],
        bestTimeToVisit: "November to April",
        duration: "Half day",
        entranceFee: "Free",
      },
      {
        id: 1403,
        name: "Weherahena Temple",
        description:
          "Buddhist temple complex featuring massive Buddha statue, intricate murals depicting Buddhist stories, and meditation caves.",
        category: "Religious",
        coordinates: { lat: 5.9667, lng: 80.5333 },
        googleMapsLink: "https://maps.google.com/?q=Weherahena+Temple+Matara",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/9b/df/40/caption.jpg?w=1400&h=800&s=1",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1-2 hours",
        entranceFee: "Free (donations welcome)",
      },
    ],
  },
  {
    id: 15,
    name: "Batticaloa",
    province: "Eastern Province",
    description:
      "Eastern coastal city known for singing fish phenomenon, lagoons, beaches, and diverse cultural heritage.",
    coordinates: { lat: 7.731, lng: 81.6747 },
    touristPlaces: [
      {
        id: 1501,
        name: "Batticaloa Fort",
        description:
          "Dutch colonial fort built in 1628 on an island in the lagoon, now housing government offices with historical significance.",
        category: "Historical",
        coordinates: { lat: 7.7167, lng: 81.7 },
        googleMapsLink: "https://maps.google.com/?q=Batticaloa+Fort",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/10/93/3c/batticaloa-fort.jpg?w=1400&h=800&s=1",
        ],
        bestTimeToVisit: "April to September",
        duration: "1 hour",
        entranceFee: "Free",
      },
      {
        id: 1502,
        name: "Kallady Beach",
        description:
          "Popular beach destination with golden sand, calm waters, and famous singing fish in the lagoon during full moon nights.",
        category: "Beach",
        coordinates: { lat: 7.7333, lng: 81.7167 },
        googleMapsLink: "https://maps.google.com/?q=Kallady+Beach+Batticaloa",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/37/6f/13/kallady-beach.jpg?w=1400&h=800&s=1",
        ],
        bestTimeToVisit: "April to September",
        duration: "2-4 hours",
        entranceFee: "Free",
      },
      {
        id: 1503,
        name: "Pasikudah Beach",
        description:
          "One of Sri Lanka's finest beaches with shallow bay extending 1km into the ocean, perfect for safe swimming.",
        category: "Beach",
        coordinates: { lat: 7.9333, lng: 81.55 },
        googleMapsLink: "https://maps.google.com/?q=Pasikudah+Beach",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/cb/d8/d8/pasikudah-beach-you-would.jpg?w=1400&h=800&s=1",
        ],
        bestTimeToVisit: "April to September",
        duration: "Half day to full day",
        entranceFee: "Free",
      },
    ],
  },
  {
    id: 16,
    name: "Ampara",
    province: "Eastern Province",
    description:
      "Diverse district with surfing paradise Arugam Bay, wildlife sanctuaries, ancient Buddhist sites, and lagoons.",
    coordinates: { lat: 7.2914, lng: 81.6747 },
    touristPlaces: [
      {
        id: 1601,
        name: "Arugam Bay",
        description:
          "World-renowned surfing destination with consistent waves, laid-back atmosphere, and beautiful crescent-shaped beach.",
        category: "Beach",
        coordinates: { lat: 6.8417, lng: 81.8361 },
        googleMapsLink: "https://maps.google.com/?q=Arugam+Bay",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/f8/5f/0f/beach.jpg?w=700&h=400&s=1",
        ],
        bestTimeToVisit: "May to September (surfing season)",
        duration: "Full day or multi-day",
        entranceFee: "Free",
      },
      {
        id: 1602,
        name: "Kumana National Park",
        description:
          "Bird sanctuary and wildlife reserve famous for water birds, elephants, and leopards with scenic lagoons.",
        category: "Wildlife",
        coordinates: { lat: 6.5667, lng: 81.6833 },
        googleMapsLink: "https://maps.google.com/?q=Kumana+National+Park",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/51/3a/2e/birds-at-kumana.jpg?w=1400&h=800&s=1",
        ],
        bestTimeToVisit: "April to July",
        duration: "Half day safari",
        entranceFee: "USD 15 + vehicle charges",
      },
      {
        id: 1603,
        name: "Deegavapi Stupa",
        description:
          "Ancient Buddhist stupa dating back to 2nd century BC, one of the 16 sacred places in Sri Lanka.",
        category: "Religious",
        coordinates: { lat: 7.1667, lng: 81.6833 },
        googleMapsLink: "https://maps.google.com/?q=Deegavapi+Stupa",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/b2/60/8c/img-20180419-161303-largejpg.jpg?w=1100&h=600&s=1",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1 hour",
        entranceFee: "Free",
      },
    ],
  },
  {
    id: 17,
    name: "Kurunegala",
    province: "North Western Province",
    description:
      "Historical city surrounded by rocky outcrops, ancient kingdoms, and home to the famous Elephant Rock formation.",
    coordinates: { lat: 7.4818, lng: 80.3609 },
    touristPlaces: [
      {
        id: 1701,
        name: "Elephant Rock (Ethagala)",
        description:
          "Massive rock formation resembling an elephant, offering challenging climb and panoramic views of Kurunegala city.",
        category: "Nature",
        coordinates: { lat: 7.4833, lng: 80.3667 },
        googleMapsLink: "https://maps.google.com/?q=Elephant+Rock+Kurunegala",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/2c/5f/1a/elephant-rock.jpg",
        ],
        bestTimeToVisit: "Year-round (early morning recommended)",
        duration: "2-3 hours",
        entranceFee: "Free",
      },
      {
        id: 1702,
        name: "Ridi Vihara (Silver Temple)",
        description:
          "Ancient Buddhist temple complex with caves containing silver ore, beautiful murals, and historical significance.",
        category: "Religious",
        coordinates: { lat: 7.3333, lng: 80.4167 },
        googleMapsLink: "https://maps.google.com/?q=Ridi+Vihara+Kurunegala",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Ridi_Viharaya.jpg/1200px-Ridi_Viharaya.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1-2 hours",
        entranceFee: "Free (donations welcome)",
      },
      {
        id: 1703,
        name: "Yapahuwa Rock Fortress",
        description:
          "13th-century rock fortress and former capital with impressive stone stairway, similar to Sigiriya but less crowded.",
        category: "Historical",
        coordinates: { lat: 7.8167, lng: 80.3167 },
        googleMapsLink: "https://maps.google.com/?q=Yapahuwa+Rock+Fortress",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Yapahuwa_Rock_Fortress.jpg/1200px-Yapahuwa_Rock_Fortress.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "2-3 hours",
        entranceFee: "LKR 500",
      },
    ],
  },
  {
    id: 18,
    name: "Puttalam",
    province: "North Western Province",
    description:
      "Coastal district famous for Kalpitiya kite-surfing, dolphin watching, Wilpattu National Park, and salt production.",
    coordinates: { lat: 8.0362, lng: 79.8283 },
    touristPlaces: [
      {
        id: 1801,
        name: "Kalpitiya",
        description:
          "Peninsula paradise for kite-surfing, dolphin/whale watching, pristine beaches, and water sports with stunning lagoons.",
        category: "Beach",
        coordinates: { lat: 8.2333, lng: 79.7667 },
        googleMapsLink: "https://maps.google.com/?q=Kalpitiya+Sri+Lanka",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/6d/4c/2a/kalpitiya-beach.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Kalpitiya_dolphins.jpg/1200px-Kalpitiya_dolphins.jpg",
        ],
        bestTimeToVisit:
          "May to October (kitesurfing), November to April (dolphin watching)",
        duration: "Full day or multi-day",
        entranceFee: "Free (activities charged separately)",
      },
      {
        id: 1802,
        name: "Wilpattu National Park",
        description:
          "Sri Lanka's largest national park with leopards, elephants, sloth bears, and unique 'willus' (natural lakes).",
        category: "Wildlife",
        coordinates: { lat: 8.4833, lng: 80.0167 },
        googleMapsLink: "https://maps.google.com/?q=Wilpattu+National+Park",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Wilpattu_National_Park_Leopard.jpg/1200px-Wilpattu_National_Park_Leopard.jpg",
        ],
        bestTimeToVisit: "February to October",
        duration: "Half day safari",
        entranceFee: "USD 25 + vehicle charges",
      },
      {
        id: 1803,
        name: "Dutch Fort, Kalpitiya",
        description:
          "Historic 17th-century Dutch fort overlooking the sea, now partially in ruins but offering historical insights.",
        category: "Historical",
        coordinates: { lat: 8.2333, lng: 79.7667 },
        googleMapsLink: "https://maps.google.com/?q=Dutch+Fort+Kalpitiya",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/3d/2f/1a/dutch-fort-kalpitiya.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1 hour",
        entranceFee: "Free",
      },
    ],
  },
  {
    id: 19,
    name: "Badulla",
    province: "Uva Province",
    description:
      "Hill country district with waterfalls, ancient temples, tea estates, and gateway to Ella and Haputale.",
    coordinates: { lat: 6.9934, lng: 81.055 },
    touristPlaces: [
      {
        id: 1901,
        name: "Dunhinda Falls",
        description:
          "Spectacular 64-meter waterfall surrounded by lush greenery, accessible via scenic hiking trail through the forest.",
        category: "Nature",
        coordinates: { lat: 7.0333, lng: 81.05 },
        googleMapsLink: "https://maps.google.com/?q=Dunhinda+Falls",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Dunhinda_Falls.jpg/1200px-Dunhinda_Falls.jpg",
        ],
        bestTimeToVisit: "October to January",
        duration: "2-3 hours",
        entranceFee: "LKR 300",
      },
      {
        id: 1902,
        name: "Muthiyangana Temple",
        description:
          "Ancient Buddhist temple believed to be visited by Buddha, one of the 16 holiest Buddhist sites in Sri Lanka.",
        category: "Religious",
        coordinates: { lat: 6.9833, lng: 81.05 },
        googleMapsLink: "https://maps.google.com/?q=Muthiyangana+Temple",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1c/4f/2a/muthiyangana-temple.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1 hour",
        entranceFee: "Free",
      },
      {
        id: 1903,
        name: "Dhowa Rock Temple",
        description:
          "Ancient rock temple with unfinished 38-foot Buddha statue carved into rock face, dating back to 1st century BC.",
        category: "Historical",
        coordinates: { lat: 6.8667, lng: 81.1167 },
        googleMapsLink: "https://maps.google.com/?q=Dhowa+Rock+Temple",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Dhowa_Temple.jpg/1200px-Dhowa_Temple.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1 hour",
        entranceFee: "LKR 200",
      },
    ],
  },
  {
    id: 20,
    name: "Monaragala",
    province: "Uva Province",
    description:
      "Dry zone district with wildlife parks, ancient Buddhist sites, waterfalls, and agricultural landscapes.",
    coordinates: { lat: 6.8728, lng: 81.3507 },
    touristPlaces: [
      {
        id: 2001,
        name: "Yala National Park (Block III)",
        description:
          "Less crowded section of Yala with excellent wildlife viewing including leopards, elephants, and birds.",
        category: "Wildlife",
        coordinates: { lat: 6.4667, lng: 81.6167 },
        googleMapsLink: "https://maps.google.com/?q=Yala+National+Park+Block+3",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/5c/3d/1a/yala-block-3.jpg",
        ],
        bestTimeToVisit: "February to July",
        duration: "Half day safari",
        entranceFee: "USD 30 + vehicle charges",
      },
      {
        id: 2002,
        name: "Galabedda Falls",
        description:
          "Beautiful waterfall cascading from 15 meters in serene natural surroundings, ideal for picnics and nature walks.",
        category: "Nature",
        coordinates: { lat: 6.8333, lng: 81.35 },
        googleMapsLink: "https://maps.google.com/?q=Galabedda+Falls",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/2d/4f/1a/galabedda-falls.jpg",
        ],
        bestTimeToVisit: "November to February",
        duration: "2 hours",
        entranceFee: "Free",
      },
      {
        id: 2003,
        name: "Maligawila Buddha Statue",
        description:
          "Standing Buddha statue carved from limestone, 37 feet tall, dating back to 7th century AD.",
        category: "Historical",
        coordinates: { lat: 6.3833, lng: 81.4833 },
        googleMapsLink: "https://maps.google.com/?q=Maligawila+Buddha+Statue",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Maligawila_Buddha.jpg/1200px-Maligawila_Buddha.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1 hour",
        entranceFee: "Free",
      },
    ],
  },
  {
    id: 21,
    name: "Kegalle",
    province: "Sabaragamuwa Province",
    description:
      "Scenic district famous for Pinnawala Elephant Orphanage, rubber plantations, and mountainous landscapes.",
    coordinates: { lat: 7.2513, lng: 80.3464 },
    touristPlaces: [
      {
        id: 2101,
        name: "Pinnawala Elephant Orphanage",
        description:
          "World-famous elephant orphanage housing over 80 elephants. Watch feeding and river bathing sessions daily.",
        category: "Wildlife",
        coordinates: { lat: 7.3, lng: 80.3833 },
        googleMapsLink:
          "https://maps.google.com/?q=Pinnawala+Elephant+Orphanage",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Pinnawala_Elephant_Orphanage.jpg/1200px-Pinnawala_Elephant_Orphanage.jpg",
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/3c/1d/2a/elephants-bathing.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "2-4 hours",
        entranceFee: "LKR 3000",
      },
      {
        id: 2102,
        name: "Ambuluwawa Tower",
        description:
          "Unique multi-religious sanctuary on mountain peak with spiral tower offering 360-degree panoramic views.",
        category: "Nature",
        coordinates: { lat: 7.25, lng: 80.6167 },
        googleMapsLink: "https://maps.google.com/?q=Ambuluwawa+Tower",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/8d/5c/2a/ambuluwawa-tower.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "2-3 hours",
        entranceFee: "LKR 300",
      },
      {
        id: 2103,
        name: "Utuwankanda",
        description:
          "Mountain offering challenging hiking trail with stunning views, Buddhist temple, and peaceful natural environment.",
        category: "Nature",
        coordinates: { lat: 7.2667, lng: 80.3167 },
        googleMapsLink: "https://maps.google.com/?q=Utuwankanda+Kegalle",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/4c/3f/1a/utuwankanda.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "3-4 hours",
        entranceFee: "Free",
      },
    ],
  },
  {
    id: 22,
    name: "Mannar",
    province: "Northern Province",
    description:
      "Historic coastal district with a strong fishing heritage and unique island landscapes.",
    coordinates: { lat: 8.981, lng: 79.9044 },
    touristPlaces: [
      {
        id: 2201,
        name: "Adam's Bridge (Rama Setu)",
        description:
          "Chain of limestone shoals connecting Sri Lanka to India, mentioned in Hindu epic Ramayana with religious significance.",
        category: "Nature",
        coordinates: { lat: 9.1667, lng: 79.5 },
        googleMapsLink: "https://maps.google.com/?q=Adams+Bridge+Mannar",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Adam%27s_Bridge.jpg/1200px-Adam%27s_Bridge.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "2-3 hours",
        entranceFee: "Free",
      },
      {
        id: 2202,
        name: "Mannar Fort",
        description:
          "Portuguese fort built in 1560, later modified by Dutch, offering historical insights and coastal views.",
        category: "Historical",
        coordinates: { lat: 8.9833, lng: 79.9167 },
        googleMapsLink: "https://maps.google.com/?q=Mannar+Fort",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/5c/2f/1a/mannar-fort.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1 hour",
        entranceFee: "Free",
      },
      {
        id: 2203,
        name: "Baobab Tree",
        description:
          "Ancient African baobab trees over 700 years old, unique to this region with massive trunks.",
        category: "Nature",
        coordinates: { lat: 9.0, lng: 79.9 },
        googleMapsLink: "https://maps.google.com/?q=Baobab+Tree+Mannar",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/4d/3f/1a/baobab-tree.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1 hour",
        entranceFee: "Free",
      },
      {
        id: 2204,
        name: "Thiruketheeswaram Temple",
        description:
          "Ancient Hindu temple dedicated to Lord Shiva, one of the Pancha Ishwarams.",
        category: "Religious",
        coordinates: { lat: 8.9167, lng: 79.8333 },
        googleMapsLink: "https://maps.google.com/?q=Thiruketheeswaram+Temple",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/2c/4f/2a/thiruketheeswaram.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1-2 hours",
        entranceFee: "Free",
      },
    ],
  },
  {
    id: 23,
    name: "Kilinochchi",
    province: "Northern Province",
    description:
      "Northern district with war memorials, ancient irrigation tanks, and agricultural landscapes.",
    coordinates: { lat: 9.3961, lng: 80.3981 },
    touristPlaces: [
      {
        id: 2301,
        name: "Iranamadu Tank",
        description:
          "Large ancient reservoir providing irrigation, scenic views, and birdwatching.",
        category: "Nature",
        coordinates: { lat: 9.5333, lng: 80.4167 },
        googleMapsLink: "https://maps.google.com/?q=Iranamadu+Tank",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/5d/2f/1a/iranamadu-tank.jpg",
        ],
        bestTimeToVisit: "November to March",
        duration: "1-2 hours",
        entranceFee: "Free",
      },
      {
        id: 2302,
        name: "War Memorials",
        description:
          "Various memorials commemorating the civil war and historical context.",
        category: "Historical",
        coordinates: { lat: 9.3961, lng: 80.3981 },
        googleMapsLink: "https://maps.google.com/?q=Kilinochchi+War+Memorial",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/3c/2f/1a/war-memorial.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1 hour",
        entranceFee: "Free",
      },
    ],
  },
  {
    id: 24,
    name: "Vavuniya",
    province: "Northern Province",
    description:
      "Gateway to the north with archaeological sites and ancient tanks.",
    coordinates: { lat: 8.7514, lng: 80.4971 },
    touristPlaces: [
      {
        id: 2401,
        name: "Vavuniya Archaeological Museum",
        description:
          "Museum showcasing artifacts from ancient kingdoms and archaeological findings.",
        category: "Cultural",
        coordinates: { lat: 8.7514, lng: 80.4971 },
        googleMapsLink:
          "https://maps.google.com/?q=Vavuniya+Archaeological+Museum",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/4d/2f/1a/archaeological-museum.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1-2 hours",
        entranceFee: "LKR 300",
      },
      {
        id: 2402,
        name: "Ancient Tanks",
        description:
          "Ancient irrigation tanks showcasing hydraulic engineering of ancient civilizations.",
        category: "Historical",
        coordinates: { lat: 8.75, lng: 80.5 },
        googleMapsLink: "https://maps.google.com/?q=Vavuniya+Ancient+Tanks",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1c/3f/1a/ancient-tanks.jpg",
        ],
        bestTimeToVisit: "Year-round",
        duration: "1-2 hours",
        entranceFee: "Free",
      },
    ],
  },
  {
    id: 25,
    name: "Mullaitivu",
    province: "Northern Province",
    description:
      "Northeastern coastal district with pristine beaches and lagoons.",
    coordinates: { lat: 9.2671, lng: 80.8142 },
    touristPlaces: [
      {
        id: 2501,
        name: "Nanthikadal Lagoon",
        description:
          "Scenic coastal lagoon with fishing villages and mangroves.",
        category: "Nature",
        coordinates: { lat: 9.25, lng: 80.8333 },
        googleMapsLink: "https://maps.google.com/?q=Nanthikadal+Lagoon",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/5c/3f/1a/nanthikadal-lagoon.jpg",
        ],
        bestTimeToVisit: "November to March",
        duration: "2-3 hours",
        entranceFee: "Free",
      },
      {
        id: 2502,
        name: "Mullaitivu Beach",
        description:
          "Pristine undeveloped beach with golden sand and clear waters.",
        category: "Beach",
        coordinates: { lat: 9.2667, lng: 80.8167 },
        googleMapsLink: "https://maps.google.com/?q=Mullaitivu+Beach",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/6d/2f/1a/mullaitivu-beach.jpg",
        ],
        bestTimeToVisit: "April to September",
        duration: "Half day",
        entranceFee: "Free",
      },
    ],
  },
];

// Sample Itinerary Plans
export const itineraryPlans = [
  {
    id: 1,
    name: "3-Day Cultural Triangle Tour",
    description: "Explore ancient kingdoms and UNESCO World Heritage Sites",
    duration: "3 days / 2 nights",
    difficulty: "Easy",
    category: "Cultural & Historical",
    bestSeason: "Year-round",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Gal_Vihara_1.jpg/1200px-Gal_Vihara_1.jpg",
    districts: ["Anuradhapura", "Polonnaruwa"],
    estimatedCost: {
      budget: "USD 200-300",
      midRange: "USD 400-600",
      luxury: "USD 800-1200",
    },
    itinerary: [
      {
        day: 1,
        title: "Colombo to Anuradhapura",
        description:
          "Travel to ancient capital and explore sacred Buddhist sites",
        places: ["Sri Maha Bodhi", "Ruwanwelisaya", "Jetavanaramaya"],
        activities: [
          "Visit sacred Bodhi tree",
          "Explore ancient stupas",
          "Evening at Isurumuniya Temple",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Anuradhapura hotels",
        travelTime: "4.5 hours from Colombo",
      },
      {
        day: 2,
        title: "Anuradhapura to Polonnaruwa",
        description: "Visit medieval capital with well-preserved ruins",
        places: ["Gal Vihara", "Parakrama Samudra", "Royal Palace"],
        activities: [
          "Explore Polonnaruwa ruins",
          "Bicycle tour of ancient city",
          "Photography at sunset",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Polonnaruwa/Sigiriya hotels",
        travelTime: "1.5 hours",
      },
      {
        day: 3,
        title: "Return to Colombo via Dambulla",
        description: "Visit cave temple and return",
        places: ["Dambulla Cave Temple", "Spice Garden"],
        activities: [
          "Explore cave temple",
          "Spice garden tour",
          "Shopping for souvenirs",
        ],
        meals: "Breakfast, Lunch",
        accommodation: "N/A",
        travelTime: "4 hours to Colombo",
      },
    ],
    included: [
      "Accommodation (2 nights)",
      "Transportation with driver",
      "Entrance fees to sites",
      "Breakfast daily",
    ],
    notIncluded: [
      "Lunch and dinner",
      "Personal expenses",
      "Tips and gratuities",
    ],
  },
  {
    id: 2,
    name: "5-Day Hill Country Tour",
    description: "Cool climate, tea plantations, and scenic train rides",
    duration: "5 days / 4 nights",
    difficulty: "Moderate",
    category: "Nature & Scenery",
    bestSeason: "December to March",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/World%27s_End_Horton_Plains.jpg/1200px-World%27s_End_Horton_Plains.jpg",
    districts: ["Kandy", "Nuwara Eliya"],
    estimatedCost: {
      budget: "USD 350-500",
      midRange: "USD 700-1000",
      luxury: "USD 1500-2200",
    },
    itinerary: [
      {
        day: 1,
        title: "Colombo to Kandy",
        description: "Journey to cultural capital in the hills",
        places: ["Temple of the Tooth", "Kandy Lake"],
        activities: [
          "Visit sacred temple",
          "Walk around Kandy Lake",
          "Cultural dance show",
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Kandy hotels",
        travelTime: "3 hours from Colombo",
      },
      {
        day: 2,
        title: "Kandy Exploration",
        description: "Explore botanical gardens and surroundings",
        places: ["Peradeniya Botanical Gardens", "Bahirawakanda"],
        activities: [
          "Botanical garden tour",
          "Tea museum visit",
          "Panoramic city views",
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Kandy hotels",
        travelTime: "Local sightseeing",
      },
      {
        day: 3,
        title: "Kandy to Nuwara Eliya",
        description: "Journey through tea country to Little England",
        places: ["Gregory Lake", "Pedro Tea Estate"],
        activities: [
          "Scenic drive through tea plantations",
          "Boat ride on Gregory Lake",
          "Tea factory tour",
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Nuwara Eliya hotels",
        travelTime: "2.5 hours",
      },
      {
        day: 4,
        title: "Horton Plains Excursion",
        description: "Early morning trek to World's End",
        places: ["Horton Plains", "World's End", "Baker's Falls"],
        activities: [
          "Trek to World's End",
          "Visit Baker's Falls",
          "Wildlife spotting",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Nuwara Eliya hotels",
        travelTime: "1 hour to Horton Plains",
      },
      {
        day: 5,
        title: "Return Journey",
        description: "Scenic return to Colombo",
        places: ["Victoria Park"],
        activities: [
          "Morning walk in Victoria Park",
          "Last-minute shopping",
          "Return journey",
        ],
        meals: "Breakfast",
        accommodation: "N/A",
        travelTime: "5 hours to Colombo",
      },
    ],
    included: [
      "Accommodation (4 nights)",
      "Transportation",
      "Entrance fees",
      "Breakfast daily",
    ],
    notIncluded: [
      "Lunch (except Day 4)",
      "Dinner on Day 5",
      "Personal expenses",
    ],
  },
  {
    id: 3,
    name: "4-Day Southern Beach Tour",
    description: "Beaches, Galle Fort, and water sports",
    duration: "4 days / 3 nights",
    difficulty: "Easy",
    category: "Beach & Relaxation",
    bestSeason: "November to April",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Galle_Fort_-_panoramio.jpg/1200px-Galle_Fort_-_panoramio.jpg",
    districts: ["Galle", "Matara"],
    estimatedCost: {
      budget: "USD 250-400",
      midRange: "USD 550-800",
      luxury: "USD 1200-1800",
    },
    itinerary: [
      {
        day: 1,
        title: "Colombo to Galle",
        description: "Coastal drive to historic Galle",
        places: ["Galle Fort", "Lighthouse"],
        activities: [
          "Explore Galle Fort",
          "Walk on fort ramparts",
          "Sunset at lighthouse",
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Galle hotels",
        travelTime: "2.5 hours",
      },
      {
        day: 2,
        title: "Unawatuna Beach Day",
        description: "Beach relaxation and water activities",
        places: ["Unawatuna Beach", "Japanese Peace Pagoda"],
        activities: [
          "Swimming and snorkeling",
          "Visit peace pagoda",
          "Beach hopping",
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Unawatuna hotels",
        travelTime: "15 minutes",
      },
      {
        day: 3,
        title: "Mirissa & Whale Watching",
        description: "Whale watching and beach",
        places: ["Mirissa Beach"],
        activities: ["Whale watching tour", "Surfing lessons", "Beach sunset"],
        meals: "Breakfast, Dinner",
        accommodation: "Mirissa hotels",
        travelTime: "1 hour",
      },
      {
        day: 4,
        title: "Tangalle & Return",
        description: "Southern beaches and return",
        places: ["Tangalle Beach", "Dondra Lighthouse"],
        activities: [
          "Turtle watching",
          "Visit southernmost point",
          "Beach relaxation",
        ],
        meals: "Breakfast",
        accommodation: "N/A",
        travelTime: "Return journey",
      },
    ],
    included: [
      "Accommodation (3 nights)",
      "Transportation",
      "Whale watching tour",
      "Breakfast daily",
    ],
    notIncluded: [
      "Lunch and dinner (except included)",
      "Water sports equipment",
      "Personal expenses",
    ],
  },
  {
    id: 4,
    name: "7-Day Complete Sri Lanka Tour",
    description: "Cultural sites, hill country, wildlife, and beaches",
    duration: "7 days / 6 nights",
    difficulty: "Moderate",
    category: "Complete Experience",
    bestSeason: "December to March",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Temple_of_the_Tooth.jpg/1200px-Temple_of_the_Tooth.jpg",
    districts: ["Colombo", "Kandy", "Nuwara Eliya", "Hambantota", "Galle"],
    estimatedCost: {
      budget: "USD 600-900",
      midRange: "USD 1200-1800",
      luxury: "USD 2500-4000",
    },
    itinerary: [
      {
        day: 1,
        title: "Arrive Colombo",
        description: "City tour of commercial capital",
        places: ["Galle Face Green", "Gangaramaya Temple"],
        activities: ["City sightseeing", "Temple visit", "Shopping"],
        meals: "Dinner",
        accommodation: "Colombo hotels",
        travelTime: "Airport transfer",
      },
      {
        day: 2,
        title: "Colombo to Kandy",
        description: "Cultural capital exploration",
        places: ["Pinnawala Elephant Orphanage", "Temple of the Tooth"],
        activities: [
          "Elephant bathing",
          "Sacred temple visit",
          "Cultural show",
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Kandy hotels",
        travelTime: "4 hours",
      },
      {
        day: 3,
        title: "Kandy to Nuwara Eliya",
        description: "Hill country journey",
        places: ["Tea Plantation", "Gregory Lake"],
        activities: ["Tea factory tour", "Scenic drive", "Boat ride"],
        meals: "Breakfast, Dinner",
        accommodation: "Nuwara Eliya hotels",
        travelTime: "2.5 hours",
      },
      {
        day: 4,
        title: "Nuwara Eliya to Yala",
        description: "Travel to wildlife zone",
        places: ["Yala area"],
        activities: [
          "Scenic viewpoints",
          "Waterfall visit",
          "Prepare for safari",
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Yala hotels",
        travelTime: "4 hours",
      },
      {
        day: 5,
        title: "Yala Safari",
        description: "Wildlife safari experience",
        places: ["Yala National Park"],
        activities: [
          "Early morning safari",
          "Leopard spotting",
          "Wildlife photography",
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Beach hotels",
        travelTime: "Safari + travel",
      },
      {
        day: 6,
        title: "Galle Fort",
        description: "Historic fort and beaches",
        places: ["Galle Fort", "Unawatuna Beach"],
        activities: ["Fort walking tour", "Beach relaxation", "Shopping"],
        meals: "Breakfast, Dinner",
        accommodation: "Galle hotels",
        travelTime: "2 hours",
      },
      {
        day: 7,
        title: "Return to Colombo",
        description: "Coastal drive back",
        places: ["Turtle Hatchery"],
        activities: ["Turtle hatchery visit", "Last shopping", "Departure"],
        meals: "Breakfast",
        accommodation: "N/A",
        travelTime: "2.5 hours",
      },
    ],
    included: [
      "Accommodation (6 nights)",
      "All transportation",
      "Yala safari",
      "Entrance fees",
      "Breakfast daily",
      "Airport transfers",
    ],
    notIncluded: ["Lunch daily", "Dinner on Day 7", "Optional activities"],
  },
  {
    id: 5,
    name: "3-Day Jaffna Cultural Tour",
    description: "Explore Tamil culture, Hindu temples, and northern heritage",
    duration: "3 days / 2 nights",
    difficulty: "Easy",
    category: "Cultural & Heritage",
    bestSeason: "November to March",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Nallur_Temple.jpg/1200px-Nallur_Temple.jpg",
    districts: ["Jaffna"],
    estimatedCost: {
      budget: "USD 180-250",
      midRange: "USD 350-500",
      luxury: "USD 700-1000",
    },
    itinerary: [
      {
        day: 1,
        title: "Arrive Jaffna",
        description: "Explore Jaffna city and fort",
        places: ["Jaffna Fort", "Jaffna Library"],
        activities: ["Fort exploration", "Library visit", "Local market tour"],
        meals: "Lunch, Dinner",
        accommodation: "Jaffna hotels",
        travelTime: "Flight/drive from Colombo",
      },
      {
        day: 2,
        title: "Temple & Culture",
        description: "Hindu temples and cultural sites",
        places: ["Nallur Kandaswamy Temple", "Nagadeepa Temple"],
        activities: [
          "Temple visits",
          "Traditional food tasting",
          "Cultural performances",
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Jaffna hotels",
        travelTime: "Local sightseeing",
      },
      {
        day: 3,
        title: "Casuarina Beach & Return",
        description: "Beach visit and departure",
        places: ["Casuarina Beach", "Keerimalai Hot Springs"],
        activities: [
          "Beach relaxation",
          "Hot springs visit",
          "Souvenir shopping",
        ],
        meals: "Breakfast",
        accommodation: "N/A",
        travelTime: "Return journey",
      },
    ],
    included: [
      "Accommodation (2 nights)",
      "Transportation",
      "Local guide",
      "Breakfast daily",
    ],
    notIncluded: ["Flights", "Some meals", "Personal expenses"],
  },
];

export const tourGuides = [
  {
    id: 1,
    name: "Nimal Perera",
    photo: "https://i.pravatar.cc/150?img=12",
    languages: ["English", "Sinhala", "German"],
    specialization: ["Cultural Sites", "Historical Tours", "Photography"],
    experience: "15 years",
    districts: ["Colombo", "Kandy", "Anuradhapura", "Polonnaruwa"],
    rating: 4.9,
    reviewsCount: 247,
    pricePerDay: "USD 50-80",
    contact: {
      phone: "+94 77 123 4567",
      email: "nimal.guide@example.com",
      whatsapp: "+94771234567",
    },
    availability: "Available",
    certified: true,
    description:
      "Expert in Cultural Triangle with deep knowledge of ancient Sri Lankan history.",
  },
  {
    id: 2,
    name: "Amara Silva",
    photo: "https://i.pravatar.cc/150?img=5",
    languages: ["English", "Sinhala", "French"],
    specialization: ["Wildlife Safaris", "Nature Tours", "Bird Watching"],
    experience: "12 years",
    districts: ["Yala", "Wilpattu", "Udawalawe", "Bundala"],
    rating: 4.8,
    reviewsCount: 189,
    pricePerDay: "USD 60-90",
    contact: {
      phone: "+94 77 234 5678",
      email: "amara.wildlife@example.com",
      whatsapp: "+94772345678",
    },
    availability: "Available",
    certified: true,
    description:
      "Wildlife expert specialized in leopard tracking and bird watching.",
  },
  {
    id: 3,
    name: "Kumar Jayasinghe",
    photo: "https://i.pravatar.cc/150?img=33",
    languages: ["English", "Sinhala", "Japanese"],
    specialization: ["Hill Country", "Tea Plantations", "Trekking"],
    experience: "10 years",
    districts: ["Nuwara Eliya", "Ella", "Kandy", "Badulla"],
    rating: 4.7,
    reviewsCount: 156,
    pricePerDay: "USD 45-70",
    contact: {
      phone: "+94 77 345 6789",
      email: "kumar.hillcountry@example.com",
      whatsapp: "+94773456789",
    },
    availability: "Booked until Feb 15",
    certified: true,
    description:
      "Hill country specialist with expertise in tea culture and trekking.",
  },
  {
    id: 4,
    name: "Priya Fernando",
    photo: "https://i.pravatar.cc/150?img=47",
    languages: ["English", "Sinhala", "Spanish", "Italian"],
    specialization: ["Beach Tours", "Water Sports", "Coastal Culture"],
    experience: "8 years",
    districts: ["Galle", "Matara", "Hambantota", "Trincomalee"],
    rating: 4.9,
    reviewsCount: 203,
    pricePerDay: "USD 55-85",
    contact: {
      phone: "+94 77 456 7890",
      email: "priya.coastal@example.com",
      whatsapp: "+94774567890",
    },
    availability: "Available",
    certified: true,
    description:
      "Coastal expert specializing in southern beaches and Galle Fort.",
  },
  {
    id: 5,
    name: "Rajesh Muthu",
    photo: "https://i.pravatar.cc/150?img=68",
    languages: ["English", "Tamil", "Sinhala", "Hindi"],
    specialization: ["Northern Tours", "Hindu Temples", "Cultural Heritage"],
    experience: "14 years",
    districts: ["Jaffna", "Mannar", "Trincomalee"],
    rating: 4.8,
    reviewsCount: 134,
    pricePerDay: "USD 50-75",
    contact: {
      phone: "+94 77 567 8901",
      email: "rajesh.northern@example.com",
      whatsapp: "+94775678901",
    },
    availability: "Available",
    certified: true,
    description: "Northern region specialist with Tamil culture expertise.",
  },
];
