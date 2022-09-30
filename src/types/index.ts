export interface Users {
  data: UserItem[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export interface UserItem {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}
