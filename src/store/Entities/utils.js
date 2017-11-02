import { normalize } from 'normalize-json-api'
import { transform, pickBy, keys, forIn, filter, uniq, isEmpty } from 'lodash'
import dotProp from 'dot-prop-immutable'

const initialState = {
  byId: [],
  allIds: [],
}

const transformEntities = (state, data, callback) => {
  const normalizedData = normalize(data)

  const transformedEntities = transform(normalizedData.entities, (result, entities, name) => {
    return result[name] = callback(state, entities, name)
  }, {})

  return { ...state, ...transformedEntities }
}

const complementEntities = (state, entities, name) => {
  const stateEntities = state[name] || initialState

  return {
    ...stateEntities,
    byId: {...stateEntities.byId, ...complementGroupEntities(state, entities) },
    allIds: uniq([ ...stateEntities.allIds, ...keys(entities) ])
  }
}

const complementGroupEntities = (state, entities) => {
  return transform(entities, (result, entity, id) => {
    return result[id] = {
      ...dotProp.get(state, `${entity.type}.'byId'.${id}`),
      ...entity
    }
  }, {})
}

const sliceEnities = (state, entities, name) => {
  const stateEntities = state[name] || initialState

  return {
    ...stateEntities,
    byId: pickBy(stateEntities.byId, ({ id }) => !keys(entities).map(Number).includes(Number(id))),
    allIds: uniq(filter(stateEntities.allIds, (id) => !keys(entities).map(Number).includes(Number(id)))),
  }
}

export const complement = (state, data) => transformEntities(state, data, complementEntities)
export const slice = (state, data) => transformEntities(state, data, sliceEnities)
