import axios, { AxiosRequestConfig } from 'axios'
import PromiseHelper from '../utils/promise'
import { Model } from '../types/model'
import { Lang } from '../types/lang'

export async function createSession(model:Model = "GPT", lang:Lang='es-AR'){
    const req:AxiosRequestConfig = {
        method: 'POST',
        url: `${_getBaseUrl()}/chat/session`,
        headers:{
            "Content-Type": "application/json",
        },
        data:{
            lang,
            model
        }
    } 

    const [response, err] = await PromiseHelper(axios(req))

    if(err)
        Promise.reject(err)

    return response.data
}

export async function answerPrompt(sessionId:string, prompt:string){
    const req:AxiosRequestConfig = {
        method: 'POST',
        url: `${_getBaseUrl()}/chat/${sessionId}/prompt`,
        headers:{
            "Content-Type": "application/json",
        },
        data:{
            prompt,
        }
    } 

    const [response, err] = await PromiseHelper(axios(req))

    if(err)
        Promise.reject(err)

    return response.data
}

export async function getSessions(){
    const req:AxiosRequestConfig = {
        method: 'GET',
        url: `${_getBaseUrl()}/chat/session`,
    } 

    const [response, err] = await PromiseHelper(axios(req))

    if(err)
        Promise.reject(err)

    return response.data
}

function _getBaseUrl():string{
    const href = window.location.href

    if(href.includes('localhost') || href.includes('127.0.0.1'))
        return 'http://localhost:5000'

    return 'https://api-parcial1-ciu.lglab.com.ar'
}

export default {
    getSessions,
    answerPrompt,
    createSession,
}