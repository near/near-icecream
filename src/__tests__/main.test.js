import "regenerator-runtime/runtime";
/* global nearlib, nearConfig */

let near;
let contract;
let accountId;

beforeAll(async function () {
  // NOTE: nearlib and nearConfig are made available by near-shell/test_environment
  near = await nearlib.connect(nearConfig);
  accountId = nearConfig.contractName;
  contract = await near.loadContract(nearConfig.contractName, {
    viewMethods: ["getIcecreamsByOwner", "displayGolbalOrders"],
    changeMethods: ["setOrder"],
    sender: accountId,
  });
});

it("test for display orders", async () => {
  const orders = await contract.displayGolbalOrders();
  expect(orders.length).toEqual(0);
});
