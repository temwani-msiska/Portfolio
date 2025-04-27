// types/posts.ts

/** Rich-text paragraph block */
export interface TextBlock {
  __component: "content.text-block";
  body: string; // HTML string
}

/** Strapi v5 “relation to media” shape */
export interface StrapiMedia {
  data?: {
    attributes?: {
      url: string;
    };
  };
}

/** Image block: UID must match your component’s actual __component value */
export interface ImageBlock {
  __component: "content.image" | "content.content-image";
  image: StrapiMedia;
  caption?: string;
}

export type ContentBlock = TextBlock | ImageBlock;

export interface Post {
  id: number;
  Title: string;
  Slug: string;
  Content: ContentBlock[];
  CoverImage?: StrapiMedia;
  PostStatus: "draft" | "published";
  PublishDate: string;
}
