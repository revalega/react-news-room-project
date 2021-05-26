import { connect } from 'react-redux';
import { getNewsByCategory, getLatestNews  } from '../actions'
import NewsList from '../components/NewsList';


const mapStateToProps = state => ({
  news: state.news.slice(0,10),
  categoryId: state.category,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGetNewsByCategory: (category) => dispatch(getNewsByCategory(category)),
    onGetNewsByDate: (date) => dispatch(getLatestNews(date)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList)
