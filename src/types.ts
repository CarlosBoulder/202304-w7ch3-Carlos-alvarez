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
