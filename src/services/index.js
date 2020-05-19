import axios from 'axios';

function get(url) {
	const baseURL = process.env.REACT_APP_BASEURL;
	const instance = axios.create({ baseURL });
	return instance.get(url);
}

const services = {
	get,
};

export default services;
