import { get } from 'dot-prop-immutable'
import { values, map } from 'lodash'
import { store } from 'store'

const getEntities = () => store.getState().entities

export const all = (type) => values(get(getEntities(), `${type}.byId`))

export const allIds = (type) => values(get(getEntities(), `${type}.allIds`))

export const byId = (type, id) => get(getEntities(), `${type}.byId.${id}`)
