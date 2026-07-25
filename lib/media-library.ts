import { readdir } from "fs/promises"
import path from "path"

const PUBLIC_DIR = path.join(process.cwd(), "public")

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"])
const videoExtensions = new Set([".mp4", ".webm", ".mov"])

export type MediaKind = "image" | "video"
export type CollectionSlug = "aso-ebi" | "wedding" | "prom" | "custom-dresses" | "cultural"

export interface CollectionMediaItem {
  fileName: string
  src: string
  title: string
  kind: MediaKind
  mimeType: string
}

export interface FashionCollection {
  slug: CollectionSlug
  title: string
  eyebrow: string
  description: string
  emotionalReason: string
  logicalReason: string
  featuredImage: CollectionMediaItem | null
  featuredVideo: CollectionMediaItem
  items: CollectionMediaItem[]
}

interface RawAsset {
  fileName: string
  src: string
  kind: MediaKind
  mimeType: string
}

interface CollectionConfig {
  slug: CollectionSlug
  title: string
  eyebrow: string
  description: string
  emotionalReason: string
  logicalReason: string
  featuredImageFile?: string
  featuredVideoFile: string
  titlePool: string[]
  matchAsset: (fileName: string) => boolean
}

const collectionConfigs: CollectionConfig[] = [
  {
    slug: "aso-ebi",
    title: "The Aso Ebi Edit",
    eyebrow: "Celebration Dressing",
    description: "A polished collection of social silhouettes made for entrances, photographs, and unforgettable presence.",
    emotionalReason: "For the woman who wants to feel seen, celebrated, and beautifully remembered.",
    logicalReason: "Designed for event impact, movement, and a silhouette that reads beautifully in person and on camera.",
    featuredImageFile: "DO Asoebi 10.jpg",
    featuredVideoFile: "DO Asoebi 10.mp4",
    titlePool: [
      "Rosewater Entrance",
      "Golden Hour Guest",
      "Velvet Promise",
      "Champagne Curve",
      "Soft Power",
      "Evening Bloom",
      "Afterglow Muse",
      "Silk Poise",
      "Radiant Company",
      "Moonlit Entrance",
      "Garden Toast",
      "Candlelit Confidence",
      "Pearled Presence",
      "Grace at Dusk",
      "The Main Table Look",
      "Orchid Hour",
      "Refined Desire",
      "Quiet Opulence",
    ],
    matchAsset: (fileName) => fileName.toLowerCase().includes("aso"),
  },
  {
    slug: "wedding",
    title: "The Bridal Reverie",
    eyebrow: "Wedding Collection",
    description: "Sculpted bridal pieces for vows, aisle moments, and the kind of elegance that feels timeless in memory.",
    emotionalReason: "For the woman who wants her dress to hold both softness and significance.",
    logicalReason: "Built around structure, balance, and finish so the gown feels beautiful from fitting to final photograph.",
    featuredImageFile: "DO Bridal White wedding 1.jpg",
    featuredVideoFile: "DO White Wedding.mp4",
    titlePool: [
      "Ivory Vow",
      "Quiet Devotion",
      "First Light Bride",
      "Veil of Grace",
      "The Vow Dress",
      "Cathedral Softness",
      "Pearl Promise",
      "Bridal Stillness",
      "Aisle Poetry",
      "After the Yes",
    ],
    matchAsset: (fileName) => {
      const normalized = fileName.toLowerCase()
      return normalized.includes("bridal") || normalized.includes("wedding")
    },
  },
  {
    slug: "prom",
    title: "Prom Dresses",
    eyebrow: "Prom Collection",
    description: "A confident prom edit for women who want glamour, polish, and a silhouette that stands out with ease.",
    emotionalReason: "For the woman who wants to feel beautiful, assured, and impossible to ignore on her special night.",
    logicalReason: "Designed to photograph beautifully, flatter the body, and carry dramatic detail without losing elegance.",
    featuredImageFile: "DO Prom 2.jpg",
    featuredVideoFile: "DO Prom Very Important.mp4",
    titlePool: [
      "Golden Staircase",
      "Silver Arrival",
      "Midnight Spark",
      "Promenade Glow",
      "Velvet Arrival",
      "Star of the Night",
      "After Dark Elegance",
    ],
    matchAsset: (fileName) => {
      const normalized = fileName.toLowerCase()
      return (
        normalized.includes("prom") ||
        normalized === "do 6.mp4" ||
        normalized === "do 8.mp4" ||
        normalized === "do 9.mp4"
      )
    },
  },
  {
    slug: "custom-dresses",
    title: "Custom Dresses",
    eyebrow: "Custom Occasion Wear",
    description: "An evening-focused collection of reception, celebration, and statement looks made for women who dress with intention.",
    emotionalReason: "For moments when a woman wants the room to feel different because she entered it.",
    logicalReason: "Tailored for body confidence, event appropriateness, and a finish that carries through long hours beautifully.",
    featuredImageFile: "Custom Reception dress 1.jpg",
    featuredVideoFile: "DO Custom - Reception dress.mp4",
    titlePool: [
      "Reception Glow",
      "The Grand Entrance",
      "Birthday Romance",
      "Evening Signature",
      "Promise in Silk",
      "Celebration Sculpt",
      "Velvet Toast",
      "Midnight Hostess",
      "The Last Dance Look",
      "Occasion Muse",
    ],
    matchAsset: (fileName) => {
      const normalized = fileName.toLowerCase()
      return normalized.includes("custom") || normalized.includes("reception") || normalized.includes("birthday") || normalized.includes("engagement")
    },
  },
  {
    slug: "cultural",
    title: "Heritage in Motion",
    eyebrow: "Cultural Collection",
    description: "A cultural edit that balances legacy, color, identity, and modern finishing with unmistakable grace.",
    emotionalReason: "For the woman who wants tradition to feel proud, feminine, and fully alive on her body.",
    logicalReason: "Blends cultural reference with clean structure so heritage dressing feels elevated and contemporary.",
    featuredImageFile: "DO Cultural Mali.jpg",
    featuredVideoFile: "DO cultural Igbo 2.mp4",
    titlePool: [
      "Heritage Flame",
      "Royal Thread",
      "Ancestral Bloom",
      "Ceremony Grace",
      "The Heirloom Edit",
      "Cultural Radiance",
      "Modern Lineage",
      "Rooted Elegance",
    ],
    matchAsset: (fileName) => {
      const normalized = fileName.toLowerCase()
      return normalized.includes("cultural") || normalized.includes("igbo") || normalized.includes("mali")
    },
  },
]

const getMimeType = (extension: string, kind: MediaKind) =>
  kind === "image" ? `image/${extension.replace(".", "").replace("jpg", "jpeg")}` : `video/${extension.replace(".", "")}`

async function getRawAssets(): Promise<RawAsset[]> {
  const fileNames = await readdir(PUBLIC_DIR)

  return fileNames
    .map((fileName) => {
      const extension = path.extname(fileName).toLowerCase()
      const isImage = imageExtensions.has(extension)
      const isVideo = videoExtensions.has(extension)

      if (!isImage && !isVideo) return null

      const normalized = fileName.toLowerCase()
      if (normalized.includes("logo") || normalized.includes("damilola") || normalized.includes("hero")) {
        return null
      }

      const kind: MediaKind = isImage ? "image" : "video"

      return {
        fileName,
        src: `/${fileName}`,
        kind,
        mimeType: getMimeType(extension, kind),
      } satisfies RawAsset
    })
    .filter((asset): asset is RawAsset => Boolean(asset))
    .sort((left, right) => left.fileName.localeCompare(right.fileName))
}

function buildCollection(config: CollectionConfig, rawAssets: RawAsset[]): FashionCollection | null {
  const matchingAssets = rawAssets.filter((asset) => config.matchAsset(asset.fileName))
  const featuredImage = config.featuredImageFile
    ? matchingAssets.find((asset) => asset.fileName === config.featuredImageFile && asset.kind === "image")
    : null
  const featuredVideo = matchingAssets.find((asset) => asset.fileName === config.featuredVideoFile && asset.kind === "video")

  if (!featuredVideo) {
    return null
  }

  const titledItems = matchingAssets.map((asset, index) => ({
    ...asset,
    title: config.titlePool[index] ?? `${config.title} ${index + 1}`,
  }))

  return {
    slug: config.slug,
    title: config.title,
    eyebrow: config.eyebrow,
    description: config.description,
    emotionalReason: config.emotionalReason,
    logicalReason: config.logicalReason,
    featuredImage: featuredImage
      ? titledItems.find((asset) => asset.fileName === featuredImage.fileName) ?? {
          ...featuredImage,
          title: config.titlePool[0] ?? config.title,
        }
      : null,
    featuredVideo: titledItems.find((asset) => asset.fileName === featuredVideo.fileName) ?? {
      ...featuredVideo,
      title: config.titlePool[featuredImage ? 1 : 0] ?? config.title,
    },
    items: titledItems,
  }
}

export async function getCollectionsCatalog(): Promise<FashionCollection[]> {
  const rawAssets = await getRawAssets()

  return collectionConfigs
    .map((config) => buildCollection(config, rawAssets))
    .filter((collection): collection is FashionCollection => Boolean(collection))
}

export async function getCollectionBySlug(slug: string): Promise<FashionCollection | null> {
  const collections = await getCollectionsCatalog()
  return collections.find((collection) => collection.slug === slug) ?? null
}
