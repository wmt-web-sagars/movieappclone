import axios from "axios";

const BASE_URL="https://www.themoviedb.org";
const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmJjMzdlN2M4ZGIzMjJjYmY4OWNkOWRjNGNkMTAyMSIsInN1YiI6IjY0YTUzNzczOGM0NGI5MDEwYzljZjc5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MbplYRLgUf4U0qN333sCOg-u8ZXBKPGuf0X5Oedg99Q"
//  const TMDB_TOKEN=import.meta.env.API_ACCESS_TOKEN


const headers={
    Authorization:"bearer"+TMDB_TOKEN,

}

export const fetchDataFromApi=async(url,params)=>{
        
    // try {
         
    //     const {data}=await axios.get( BASE_URL+url,{
    //         headers,
    //         params
    //     })
    //     return data;

    // }
    //     console.log(error);
    //     return error
    // }
try {

    const data=await axios.get(BASE_URL +url,{
        headers,
        params
    })
    return data;
    
} catch (error) {
    console.log(error);
        return error
}
}
