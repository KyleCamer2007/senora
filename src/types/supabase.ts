export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          discord_id: string;
          username: string;
          avatar_url: string | null;
          email: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          discord_id: string;
          username: string;
          avatar_url?: string | null;
          email?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          discord_id?: string;
          username?: string;
          avatar_url?: string | null;
          email?: string | null;
          created_at?: string;
        };
      };
    };
  };
};