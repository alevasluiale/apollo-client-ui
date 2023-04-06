interface UserInterface {
  email: string;
  id: string;
  username: string;
  accessToken: string;
}

export type User = UserInterface | null;

export interface Meal {
  name?: string;
  description?: string;
  price?: number;
  id?: string;
  quantity?: number;
}

export interface Restaurant {
  name?: string;
  description?: string;
  id?: string;
  meals?: Array<Meal>;
}
