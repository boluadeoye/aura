import type { AssetMeta, MaterialSpec, SpecItem } from "../types";

export const ALL_ASSETS: AssetMeta[] = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1788353200/blog_assets/vphfky0jyiay2jbrpx6r.png",
    title: "Stratospheric Horizon",
    subtitle: "First-Light Cruising Elevation",
    category: "atmosphere",
    description: "Cruising at 45,000 feet above weather systems in complete stillness."
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1788353215/blog_assets/czsjhplntcnrpzcyddga.png",
    title: "Planar Titanium Spar Joint",
    subtitle: "Airframe Structural Interface",
    category: "engineering",
    description: "Milled from Grade-5 titanium billets to sub-millimeter aerospace tolerances."
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1788353226/blog_assets/pifx5myuy2hjjrtwjury.png",
    title: "Hand-Spun Raw Cashmere",
    subtitle: "Bespoke Bulkhead Upholstery",
    category: "atelier",
    description: "Sourced from alpine fleece, spun unbleached to preserve organic fiber loft."
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1788353236/blog_assets/d4d4fibx1e0dtpto1ixp.png",
    title: "The Sanctuary Cabin",
    subtitle: "Full-Length Monolithic Salon",
    category: "ritual",
    description: "A continuous sweep of neutral silk carpet and custom modular seating."
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1788353249/blog_assets/kjqwsev7capor5bdqf2h.png",
    title: "Prismatic Crystal Refraction",
    subtitle: "Custom Table Appointments",
    category: "ritual",
    description: "Hand-cut crystal glassware calibrated to catch low-angle sunlight."
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1788353259/blog_assets/twrqrixdh1wjaxn2y5u8.png",
    title: "Cumulus Cloud Matrix",
    subtitle: "Atmospheric Horizon Survey",
    category: "atmosphere",
    description: "Soft volumetric sea of cloud layers passing beneath the fuselage."
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1788353269/blog_assets/dgjvwonivvxpghfjripl.png",
    title: "Vertical Stabilizer",
    subtitle: "Aerodynamic Fin Geometry",
    category: "fleet",
    description: "Swept empennage coated in pearlescent Champagne reflective enamel."
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1788353281/blog_assets/exaxa84hrtmwyn6jvlbl.png",
    title: "Laminar Flow Leading Edge",
    subtitle: "Wing-Root Aerodynamic Blend",
    category: "fleet",
    description: "Seamless composite skin transition designed for zero-drag laminar flow."
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1788353293/blog_assets/w1kqw6bxzyyzlyt0yin3.png",
    title: "Turbofan Nacelle Intake",
    subtitle: "High-Bypass Acoustic Housing",
    category: "fleet",
    description: "Acoustically treated intake cowl suppressing engine noise to 42 decibels."
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1788353308/blog_assets/jlqchwaiugpwflr7efjn.png",
    title: "Silk & Alpaca Blend Weave",
    subtitle: "Custom Loom Textile",
    category: "atelier",
    description: "Woven in Piedmont on century-old wooden looms for tactile cabin partitions."
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1788331525/blog_assets/mrq663vel9y27jgm3i5s.png",
    title: "Knurled Environmental Rotary",
    subtitle: "Machined Console Hardware",
    category: "atelier",
    description: "Tactile rotary dial with diamond knurling controlling cabin climate and light."
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1788353325/blog_assets/szqg5qilaeclojuhijh9.png",
    title: "Open-Pore Burled Walnut",
    subtitle: "Solid Timber Inlay Veneer",
    category: "atelier",
    description: "Sustainably harvested walnut root finished with raw beeswax and sterling silver line."
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1788353336/blog_assets/hc2jjdz9r56kgiwvvww9.png",
    title: "French Saddle-Stitch Seam",
    subtitle: "Full-Grain Saddlehide Joinery",
    category: "atelier",
    description: "Stitched with waxed linen cord at nine stitches per inch by master saddle-makers."
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1788353347/blog_assets/xyipwcyjy3u8xlfer0rb.png",
    title: "Morning Sunbeam Ingress",
    subtitle: "Acoustic Horizon Sanctuary",
    category: "ritual",
    description: "Natural sunlight filtered through multi-pane acoustic cabin glass."
  }
];

export const FLIGHT_TELEMETRY: SpecItem[] = [
  { label: "Service Ceiling", value: "45,000", unit: "FT", detail: "Above 98% of civil air traffic" },
  { label: "High-Speed Cruise", value: "0.925", unit: "MACH", detail: "Non-stop transcontinental range" },
  { label: "Cabin Acoustic Level", value: "42", unit: "dBA", detail: "Quieter than an open library" },
  { label: "Sea-Level Pressure", value: "3,200", unit: "FT", detail: "Zero fatigue upon arrival" }
];

export const ATELIER_MATERIALS: MaterialSpec[] = [
  {
    id: "cashmere",
    title: "Unbleached Raw Cashmere",
    material: "100% Mongolian Alpine Wool",
    origin: "Biella, Northern Italy",
    image: ALL_ASSETS[2].src,
    description: "Organic fiber loft preserved without synthetic chemical washes for quiet softness."
  },
  {
    id: "silk-weave",
    title: "Textured Silk & Alpaca",
    material: "Hand-Loomed Silk Blend",
    origin: "Como, Italy",
    image: ALL_ASSETS[9].src,
    description: "Woven on narrow shuttle looms creating dynamic surface depth in natural light."
  },
  {
    id: "titanium-dial",
    title: "Milled Grade-5 Titanium",
    material: "Aerospace Structural Alloy",
    origin: "Biel / Bienne, Switzerland",
    image: ALL_ASSETS[10].src,
    description: "Diamond-knurled dials delivering weighted mechanical clicks with zero free-play."
  },
  {
    id: "burled-walnut",
    title: "Open-Pore Burled Walnut",
    material: "Hand-Selected Root Veneer",
    origin: "Black Forest, Germany",
    image: ALL_ASSETS[11].src,
    description: "Infused with organic beeswax and accented with laser-milled sterling silver seams."
  },
  {
    id: "french-seam",
    title: "Saddle-Stitched Calfskin",
    material: "Full-Grain Vegetable Tanned Leather",
    origin: "Limoges, France",
    image: ALL_ASSETS[12].src,
    description: "Double-needle hand stitched with waxed thread for lifetime structural permanence."
  }
];
