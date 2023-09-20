require('dotenv').config()
import axios from "axios"
import PromiseHelper from "../utils/promise"
import { getAccessToken } from "./gcp-auth"

export async function answerPrompt(
        project:string,
        sessionId:string,
        prompt:string,
        language='en'){
        const BASE_URL = 'https://dialogflow.googleapis.com'
        const PROJECT_PATH = `/v2/projects/${project}`
        const SESSION_PATH = `/agent/sessions/${sessionId}:detectIntent`

        const [token, errToken] = await PromiseHelper(getAccessToken())

        if(errToken) if(errToken) throw new Error(errToken)
    
        const options = {
            method: "POST",
            url: `${BASE_URL}${PROJECT_PATH}${SESSION_PATH}`,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body:{
                queryInput: {
                    text: {
                        text: prompt,
                        languageCode: language,
                    },
                }
            }
        }
    
        const [response, err] = await PromiseHelper(axios(options))
    
        if(err) Promise.reject(err)
    
        console.log(response.data)
    
        return response.data
    }

export default {
    answerPrompt
}