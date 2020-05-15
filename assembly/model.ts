import { context, u128, PersistentMap, PersistentVector } from "near-sdk-as";

@nearBindgen
export class OrderList {
  constructor(public postNumber: Array<string>) {}
}

@nearBindgen
export class PostOrder {
  premium: boolean;
  sender: string;
  constructor(
    public species: Array<string>,
    public sides: string,
    public price: u32,
    public id: string
  ) {
    this.premium =
      context.attachedDeposit >= u128.from("10000000000000000000000");
    this.sender = context.sender;
  }
}

export const orders = new PersistentMap<string, PostOrder>("Orders");
export const ordersByOwner = new PersistentMap<string, OrderList>(
  "iceCreamByOwner"
);
export const displayOrders = new PersistentVector<PostOrder>("display");
