import { combineReducers } from 'redux';

const loadingError = (state = false, action) => {
  switch (action.type) {
    case 'LOADING_ERROR':
      return action.hasErrored;
    default:
      return state;
  }
}

const loadingInProgress = (state = false, action) => {
  switch (action.type) {
    case 'LOADING_IN_PROGRESS':
      return action.isLoading;
    default:
      return state;
  }
}

const news = (state = [], action) => {
  switch (action.type) {
    case 'LOADING_SUCCESS':
      return action.news
    default:
      return state
  }
}

const category = (state = 0, action) => {
    switch (action.type){
        case 'SELECTED_CATEGORY':
            return action.category;
        default:
        return state
    }
}

export default combineReducers({
    category,
    news,
    loadingError,
    loadingInProgress
})
