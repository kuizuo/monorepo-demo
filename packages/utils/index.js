import _ from 'lodash'

export function uniqWith(objects) {
  return _.uniqWith(objects, _.isEqual)
}