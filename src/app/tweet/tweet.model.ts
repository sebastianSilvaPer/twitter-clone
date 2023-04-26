export interface Tweet {
  id: number;
  profileName: string;
  profileImage: string;
  profileAccountName: string;
  time: number;
  text: string;
  attachments?: string[];
  likes: number;
  retweets: number;
  comments: number;
  views: number;
  parentId: number;
}
