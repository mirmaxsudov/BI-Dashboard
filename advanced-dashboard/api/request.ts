import axios from "axios";
import BASE_URL from "./url";

const $api = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    timeout: 10000,
});

export default $api;