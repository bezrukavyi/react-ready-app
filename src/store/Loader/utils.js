import { get } from 'dot-prop-immutable'

const set = (state, name, payload, loaderState) => {
  const id = get(payload, 'data.id') || get(payload, 'id')
  if (id) {
    return { state, [name]: { ...state.name, [id]: { ...get(state, `${name}.${id}`), loading: true } } }
  } else {
    return { state, [name]: { ...state.name, loading: true } }
  }
}
