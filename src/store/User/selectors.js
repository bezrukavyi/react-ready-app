import * as storage from 'storage'
import { get } from 'dot-prop-immutable'
import { store } from 'store'

export const accessHeaders = () => get(store.getState(), 'user.accessHeaders') || storage.get('authData')
export const entity = () => get(store.getState(), 'user.entity')
