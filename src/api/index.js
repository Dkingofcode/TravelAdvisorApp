import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  method: 'GET',
  
};





export const getPlacesData = async (sw, ne) => {
   try{
      const {data: { data }} = await axios.get(URL, {
        params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '729f0bcfedmsh9d2f256f9f78b0dp1656f0jsn2b1d3639e9ac',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
      });
      return data; 
   } catch(error){
     console.log(error);
   }
}