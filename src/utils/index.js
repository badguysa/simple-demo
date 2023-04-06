import storage from 'store'

export function getToken() {
  return storage.get(process.env.AUTHTOKEN)
}

export function setToken(token) {
  storage.set(process.env.AUTHTOKEN, token)
}

// 删除空值
function deleteEmptyKey (obj) {
  for (const key in obj) {
    const value = obj[key]
    if (value === '' || value === null || value === undefined) {
      delete obj[key]
    }
  }
}

export function interceptorRequest(req) {
  const token = getToken()
  if (token) {
    if (req.headers) {
      req.headers[process.env.AUTHTOKEN] = token
    }
  }
  if (req.params) {
    deleteEmptyKey(req.params)
  }
  if (req.data) {
    deleteEmptyKey(req.data)
  }
  
  return req
}

export function downfileByUrl (url) {
  const a = document.createElement('a')
  a.href = url
  a.target = "__blank";
  a.click()
}

export function removeLoginInfo() {
  storage.clearAll()
  location.reload()
}