import { combineReducers } from 'redux'
import posts      from './posts'
import post      from './post'
import comments   from './comments'
import categories from './categories'

const rootReducer = combineReducers({
  posts,
  post,
  comments, 
  categories,
})

export default rootReducer