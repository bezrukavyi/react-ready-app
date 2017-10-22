import { storage } from 'utils'
import { get } from 'dot-prop-immutable'
import { store } from 'store'

export const accessHeaders = () => get(store.getState(), 'user.accessHeaders') || storage.get('authData')
export const entity = () => get(store.getState(), 'user.entity')
export const resetPasswordToken = () => get(store.getState(), 'user.accessHeaders.resetPasswordToken')
