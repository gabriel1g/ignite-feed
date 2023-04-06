export type PostDTO = {
  id?: number;
  author: { avatarUrl: string; name: string; role: string };
  content: PostContentDTO[];
  publishedAt: Date;
};

type PostContentDTO =
  | {
      type: 'paragraph' | 'link';
      content: string;
    }
  | {
      type: 'hashtags';
      content: string[];
    };
