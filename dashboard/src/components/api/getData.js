import axios from 'axios';
import urls from '../data/urls'
const getData = async (cat)=>{
    const response = await axios.get(`${urls.getUrl}${cat}`);
    const data = response.data;
    const status = response.status;
    return {
        data, status
    }
}
export default getData