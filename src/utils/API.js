import axios from "axios";

const search = async (query) => axios.get(`https://randomuser.me/api/?results=200&nat=u`);

export default { search };
