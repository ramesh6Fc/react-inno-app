import axios from "axios";
import authHeader from "../auth-header";

const api_url = "http://localhost/:8080/api/dev";

const register = (imei, imsi, deviceStatus,simStatus) => {
    return axios.post(api_url + "register", {
      imei,
      imsi,
      deviceStatus,
      simStatus
    })
    .then((response) => {
      return "Registered Successfully";
    });
  };

const getData = () => {
    return axios.get(api_url, { headers: authHeader() });
  };
  
const PutDevDetails = (imeis, action) => {
  return "Updated Successfully";
    return axios.put(api_url,{
        imeis,
        action
    })
    .then((response) => {
        return "Updated Successfully";
      });
  };

const services = {
    register,
    getData,
    PutDevDetails,
  }
export default services;