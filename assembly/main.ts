import {
  iceCream,
  PostOrder,
  orders,
  OrderList,
  ordersByOwner,
  displayOrders,
} from "./model";
import { logging } from "near-sdk-as";

// --- contract code goes below

// The maximum number of latest orders the contract returns.
const ORDER_LIMIT = 10;

// method for collections
export function setOrder(
  owner: string,
  postNumber: string,
  iceCream: iceCream
): void {
  // Creating a new message and populating fields with our data
  const newiceCream = new PostOrder(iceCream);
  // Adding the message to end of the the persistent collection
  orders.set(postNumber, newiceCream);
  displayOrders.push(newiceCream);
  setOrderByOwner(owner, postNumber);
}

export function displayGolbalOrders(): PostOrder[] {
  const numMessages = min(ORDER_LIMIT, displayOrders.length);
  const startIndex = displayOrders.length - numMessages;
  const result = new Array<PostOrder>(numMessages);
  for (let i = 0; i < numMessages; i++) {
    result[i] = displayOrders[i + startIndex];
  }
  return result;
}

// method for owner
export function getOrderByOwner(owner: string): Array<string> {
  let orderList = ordersByOwner.get(owner);
  if (!orderList) {
    return new Array<string>();
  }
  return orderList.postNumber;
}

export function setOrderByOwner(owner: string, postNumber: string): void {
  let orderList = getOrderByOwner(owner);
  orderList.push(postNumber);
  let newOrderList = new OrderList(orderList);
  ordersByOwner.set(owner, newOrderList);
}

export function getIcecreamsByOwner(owner: string): PostOrder[] {
  logging.log("get icecream");
  let orderList = getOrderByOwner(owner);
  let iceCreamList = new Array<PostOrder>();
  for (let i = 0; i < orderList.length; i++) {
    if (orders.contains(orderList[i])) {
      let iceCream = orders.getSome(orderList[i]);
      iceCreamList.push(iceCream);
    }
  }
  return iceCreamList;
}
