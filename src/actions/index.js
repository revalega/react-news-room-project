

export const loadingError = bool => (
    {
      type: 'LOADING_ERROR',
      hasErrored: bool
    }
  )
  
  export const loadingInProgress = bool => (
    {
      type: 'LOADING_IN_PROGRESS',
      isLoading: bool
    }
  )
  
  export const loadingSuccess = news => (
    {
      type: 'LOADING_SUCCESS',
      news
    }
  )

  export const selectedCategory = category => (
    {
      type: 'SELECTED_CATEGORY',
      category
    }
  )
  
  
  export const getNewsByCategory = (category) => {
    return dispatch => {
  
      dispatch(loadingError(false))
  
      dispatch(loadingInProgress(true))
  
      fetch(`http://api.canillitapp.com/news/category/${category}}`)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText)
          }
  
          dispatch(loadingInProgress(false))
  
          return response
        })
        .then((response) => response.json())
        .then((news) => dispatch(loadingSuccess(news)))
        .catch(() => dispatch(loadingError(true)))
    }
  }



   export const getLatestNews = (date) => {
    return dispatch => {
  
      dispatch(loadingError(false))
  
      dispatch(loadingInProgress(true))
  
      fetch(`https://api.canillitapp.com/latest/${date}`)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText)
          }
  
          dispatch(loadingInProgress(false))
  
          return response
        })
        .then((response) => response.json())
        .then((news) => dispatch(loadingSuccess(news)))
        .catch(() => dispatch(loadingError(true)))
    }
  }

  export const getCategory = category => {
    return dispatch => {
        dispatch(selectedCategory(category));
    }
}

