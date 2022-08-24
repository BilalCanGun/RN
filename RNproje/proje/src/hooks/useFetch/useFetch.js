import { useEffect ,useState} from "react";
import axios from "axios";

function useFetch(url){
    
    const[error,seterror]=useState(null);
    const[loading,setloading]=useState(true);
    const[data,setData]=useState([]);

    const fetchdata = async () => {
        try{
      const {data: responseData}= await axios.get(url);
      setData(responseData);
      setloading(false);
        }
        catch(err){
            seterror(err.message)
            setloading(false);
        }
    };

    useEffect(()=>{
        fetchdata();
    },[]);

    return {error,loading,data}
}
export default useFetch;