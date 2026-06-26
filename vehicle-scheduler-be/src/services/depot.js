import api from "../config/axios.js";

export default getDepots=async(req)=>{
const {data}=await api.get("/evaluation-service/depots",{
  headers:req.headers
  }
);
return data.depots;
};