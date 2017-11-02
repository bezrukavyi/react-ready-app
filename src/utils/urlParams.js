import { transform, snakeCase } from 'lodash'

export const fetchUrlParam = (name) => {
  const url = new URL(window.location.href)
  const value = url.searchParams.get(name) || url.searchParams.get(snakeCase(name))
  return value
}

const urlParams = (names, remove) =>
  transform(names, (result, name) => result[name] = fetchUrlParam(name, remove), {})

export default urlParams
