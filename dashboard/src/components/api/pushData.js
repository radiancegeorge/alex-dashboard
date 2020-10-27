import axios from 'axios';
import url from '../data/urls'

const push = async (data)=>{
    const status = await (await axios.post(url.postUrl, data)).status;
    console.log(status)
    return status
}
export default push