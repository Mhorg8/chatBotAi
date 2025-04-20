export interface NavLink {
  id: number;
  title: string;
  path: string;
}

export interface Session {
  _id: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
