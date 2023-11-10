interface Guid {
  rendered: string
}

interface Title {
  rendered: string
}

interface Content {
  rendered: string
  protected: boolean
}

interface Excerpt {
  rendered: string
  protected: boolean
}

interface Author {
  id: number
  name: string
  url: string
  description: string
  link: string
  slug: string
  avatar_urls: {
    '24': string
    '48': string
    '96': string
  }
  acf: any[]
  _links: {
    self: { href: string }[]
    collection: { href: string }[]
  }
}

interface FeaturedMedia {
  id: number
  date: string
  slug: string
  type: string
  link: string
  title: { rendered: string }
  author: number
  acf: any[]
  caption: { rendered: string }
  alt_text: string
  media_type: string
  mime_type: string
  media_details: {
    width: number
    height: number
    file: string
    sizes: {
      [key: string]: {
        file: string
        width: number
        height: number
        mime_type: string
        source_url: string
      }
    }
    image_meta: {
      aperture: string
      credit: string
      camera: string
      caption: string
      created_timestamp: string
      copyright: string
      focal_length: string
      iso: string
      shutter_speed: string
      title: string
      orientation: string
      keywords: string[]
    }
  }
  source_url: string
  _links: {
    self: { href: string }[]
    collection: { href: string }[]
    about: { href: string }[]
    author: { embeddable: boolean; href: string }[]
    replies: { embeddable: boolean; href: string }[]
  }
}

interface Term {
  id: number
  link: string
  name: string
  slug: string
  taxonomy: string
  acf: any[]
  _links: {
    self: { href: string }[]
    collection: { href: string }[]
    about: { href: string }[]
    'wp:post_type': { href: string }[]
    curies: { name: string; href: string; templated: boolean }[]
  }
}

interface Links {
  self: { href: string }[]
  collection: { href: string }[]
  about: { href: string }[]
  author: { embeddable: boolean; href: string }[]
  replies: { embeddable: boolean; href: string }[]
  versionHistory: { count: number; href: string }[]
  predecessorVersion: { id: number; href: string }[]
  'wp:featuredmedia': { embeddable: boolean; href: string }[]
  'wp:attachment': { href: string }[]
  'wp:term': Term[][]
  curies: { name: string; href: string; templated: boolean }[]
}

interface Embedded {
  author: Author[]
  'wp:featuredmedia': FeaturedMedia[]
  'wp:term': Term[][]
}

export interface GetPostsProps {
  id: number
  date: string
  date_gmt: string
  guid: Guid
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: Title
  content: Content
  excerpt: Excerpt
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta: any[]
  categories: number[]
  tags: any[]
  acf: any[]
  _links: Links
  _embedded: Embedded
}
