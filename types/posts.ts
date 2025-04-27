// types/posts.ts
export interface TextBlock {
    __component: "content.text-block";
    body: string;        // rich-text HTML
  }
  
  export interface ImageBlock {
    __component: "content.image";
    image: { url: string };
    caption?: string;
  }
  
  export type ContentBlock = TextBlock | ImageBlock;
  
  export interface Post {
    id: number;
    Title: string;
    Slug: string;
    Content: ContentBlock[];
    CoverImage?: { url: string };
    PostStatus: "draft" | "published";
    PublishDate: string;
  }
  