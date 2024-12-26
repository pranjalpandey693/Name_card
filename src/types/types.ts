export interface IUser {
  name: {
    title: string;
    first: string;
    last: string;
  };
  gender: string;
  phone: number;
  picture: {
    large: string;
  };
}
