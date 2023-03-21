export interface Tweet {
   profileName: string;
   profileImage: string;
   profileAccountName: string;
   time: string;
   text: string;
   attachments?: string[];
   likes: number;
   retweets: number;
   comments: number;
   views: number;
}
