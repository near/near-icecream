import React from "react";
import { utils } from "near-api-js";

export default ({ amount }) => {
  if (!amount) {
    throw new Error("amount property should not be null");
  }
  let amountShow = convertToShow(amount);

  return <span>{amountShow} Ⓝ</span>;
};

const convertToShow = (amount) => {
  if (amount === "0") {
    return "0";
  }
  return formatNEAR(amount);
};

const formatNEAR = (amount) => {
  let ret = utils.format.formatNearAmount(amount, 5);
  if (ret === "0" && amount > 0) {
    return "<0.00001";
  }
  return ret;
};

const formatPreciseNEAR = (amount) => {
  const REG = /(?=(\B)(\d{3})+$)/g;
  return amount.replace(REG, ",");
};
