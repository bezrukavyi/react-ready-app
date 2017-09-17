import { get } from 'dot-prop-immutable'
import { store } from 'store'

export const isLoaded = (entities) => get(store.getState().loader, entities) === false
