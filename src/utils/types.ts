interface UserInterface {
  email: string;
  id: string;
  username: string;
}

export type User = UserInterface | null;

export interface Meal {
  name?: string;
  description?: string;
  price?: number;
  id?: string;
  quantity?: number;
}
