import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;


export const getAllBanner = async () => {
    try {
        const url = BASE_URL + "/getBanners"
        console.log('url: ', url);
        const result = await axios.get(url);
        console.log('result: ', result);

        return result.data.data

    } catch (error) {
        console.log('error: ', error);

    }
}

export const getTrendingHouses = async (type) => {
    try {
        const url = BASE_URL + "/getTrendingHouses"
        console.log('url: ', url);
        const result = await axios.post(url, {type:type});
        console.log('result: ', result);
        return result.data.data
    } catch (error) {
        console.log('error: ', error);
    }
}

// export const getHouseElevations = async () => {
//     try {
//         const url = BASE_URL + "/getHouseElevation"
//         const result = await axios.get(url);
//         return result.data.data
//     } catch (error) {
//         console.log('error: ', error);
//     }
// }