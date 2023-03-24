export interface User {
  accessToken: string;
  email: string;
  id: string;
  roles?: Array<string> | null;
  username: string;
}
