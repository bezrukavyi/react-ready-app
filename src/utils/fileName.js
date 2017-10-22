import { get } from 'dot-prop-immutable';
import { isArray, map, join } from 'lodash'

const fileName = (files) => isArray(files) ? join(map(files, (file) => get(file, 'name')), ', ') : get(files, 'name')

export default fileName
