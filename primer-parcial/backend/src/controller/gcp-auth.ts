require('dotenv').config()
import axios from "axios"
import PromiseHelper from "../utils/promise"

export async function getAccessToken(): Promise<string>{
    const RAW_AUTH_JSON = process.env.GCP_AUTH_JSON
    const URL = ""
    
    const authInfo = JSON.parse(RAW_AUTH_JSON)

    if(!authInfo) throw new Error('Cannot parse auth json env')

    const options = {
        method: 'POST',
        url:'',
        headers:{
            Authentication: "Bearer ",
            "Content-Type":"application/json"
        },
        body:{

        }
    }

    const [ response, error ] = await PromiseHelper(axios(options))

    if(error) throw new Error(error)

    console.log({data:response.data})

    return response.data
}

export default {
    getAccessToken,
}