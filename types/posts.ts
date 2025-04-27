// types/posts.ts

// Mirror Strapi v5 media shape
export interface StrapiMedia {
  data?: {
    attributes?: {
      url?: string;
    };
  };
}

export interface TextBlock {
  __component: "content.text-block";
  body: string;        // rich-text HTML
}

export interface ContentImageBlock {
  __component: "content.content-image";
  image: StrapiMedia;
  caption?: string;
}

export type ContentBlock = TextBlock | ContentImageBlock;

export interface Post {
  id: number;
  Title: string;
  Slug: string;
  Content: ContentBlock[];
  CoverImage?: StrapiMedia;
  PostStatus: "draft" | "published";
  PublishDate?: string;
}
