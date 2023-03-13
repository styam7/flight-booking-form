import { GET_AIRPORT } from "../actions/types"

const initialState = {
    airports: []
}

export default function (state = initialState, actions) {
    const { type, payload } = actions

    switch (type) {
        case GET_AIRPORT:
            return {
                ...state,
                airports: payload
            }
        default:
            return state
    }
}