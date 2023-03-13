import { GET_AIRPORT } from "./types"
import data from '../data.json'


export const getAirports = () => async dispatch => {

    try {
        //const res = await axios.get('http://api.aviationstack.com/v1/airports', {params})
        dispatch({
            type: GET_AIRPORT,
            payload: data.data
        })
    } catch (err) {
       console.log(err)
    }
}