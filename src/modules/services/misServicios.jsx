import axios from "axios";
import { URL_BACKEND } from "../environments/environments";
import { authAxios } from "./axiosHelpers";

export const postCreateData = async (data, token) => {
    const rpta = await authAxios.post(`${URL_BACKEND}/troubleshooting/create`,
        JSON.stringify(data),
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    return rpta
}

export const getSuperIntendent = async (id) => {
    const rpta = await authAxios.get(`${URL_BACKEND}/troubleshooting/getUserTrobuleshooting?type=${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return rpta
}

export const getEquiment = async () => {
    const rpta = await axios.get(`${URL_BACKEND}/equipments/getAll`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return rpta
}