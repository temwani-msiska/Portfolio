// types/posts.ts

export interface TextBlock {
  __component: "content.text-block";
  id: number;
  body: string;
}

export interface ImageBlock {
  __component: "content.image";
  id: number;
  caption?: string | null;
  image?: {
    id: number;
    url: string;
    formats?: any;
  };
}


export interface Post {
  id: number;
  documentId: string;
  Title: string;
  Slug: string;
  PostStatus: string;
  PublishDate: string;
  Content: Array<TextBlock | ImageBlock>;
  CoverImage?: {
    id: number;
    url: string; 
    formats?: any;
  };
}
