import requests from './requests'
import { interceptorRequest, removeLoginInfo } from './index';

const instance = new requests({
  timeout: 60 * 1000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  baseURL: process.env.VUE_APP_API_BASE_URL,
}, interceptorRequest)

const _request = instance.request.bind(instance)
// Auth-Token
export default async function (config, configObj) {
  const {error, result} = await _request(config, configObj)
  if (error) {
    if (error.code === -1000) {
      removeLoginInfo()
    }
  }
  return {error, result}
}