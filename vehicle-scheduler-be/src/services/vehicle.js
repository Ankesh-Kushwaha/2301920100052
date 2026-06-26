import api from "../config/axios.js";

export default getVehicles=async(req,id)=>{

const {data}=await api.get(`/evaluation-service/vehicles/${id}`,
{
  headers:req.headers
}
  );
  
return data.vehicles;
};