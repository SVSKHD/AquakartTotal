import Axios from "axios";
import API from "./constants";

let CRM = API.appApis.CRM;

const createStock = (data) => (
  Axios.post(`${CRM}/create-stock`, data)
);

const getStock = () => Axios.get(`${CRM}/get-allstocks`);

const StockOperations = () => {
  return { createStock, getStock };
};

export default StockOperations;
