import axios from 'axios'

export default function ajax (url = '', data = {}, method = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise
    if (method === 'GET') {
      let dataUrl = ''
      Object.keys(data).forEach(key => {
        dataUrl += key + '=' + data[key] + '&'
      })
      if (dataUrl) {
        dataUrl = dataUrl.substring(0, dataUrl.length - 1)
        url = dataUrl + '?'
      }
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    }
    )
  })
}
