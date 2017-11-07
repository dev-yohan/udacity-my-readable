import * as ContentApi from '../util/api'

import {
  RECEIVE_CATEGORIES
} from './action_types'

export function fetchCategories (dispatch) {
  ContentApi
    .getCategories()
    .then(categories => dispatch(receiveCategories(categories)))
}

export function receiveCategories (categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}