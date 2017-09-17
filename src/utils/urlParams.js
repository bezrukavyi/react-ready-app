import { transform } from 'lodash'

export const fetchUrlParam = (name, remove) => {
  const url = new URL(window.location.href)
  const value = url.searchParams.get(name)
  if (remove) {
    const newUrl = window.location.href.replace(`${name}=${encodeURIComponent(value)}`, '')
    window.history.pushState(null, null, newUrl.replace(/\?$/, ''))
  }
  return value
}

const urlParams = (names, remove) => 
  transform(names, (result, name) => result[name] = fetchUrlParam(name, remove), {})

export default urlParams
