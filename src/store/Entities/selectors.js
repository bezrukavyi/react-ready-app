import { get } from 'dot-prop-immutable'
import { values, map } from 'lodash'
import { store } from 'store'

const getEntities = () => store.getState().entities

export const all = (type) => {
  return values(get(getEntities(), `${type}.byId`))
}

export const allIds = (type) => {
  return values(get(getEntities(), `${type}.allIds`))
}

export const byId = (type, id) => {
  return get(getEntities(), `${type}.byId.${id}`)
}
