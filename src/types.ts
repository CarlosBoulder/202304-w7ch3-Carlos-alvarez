import { type Request } from "express";

export interface UserCredentialsStructure {
  username: string;
  password: string;
}

export interface ItemsStructure {
  name: string;
  price: string;
  quantity: string;
  user: {
    $oid: string;
  };
}

export interface ItemRequest extends Request {
  userId: string;
}
