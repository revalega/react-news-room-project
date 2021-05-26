import { connect } from 'react-redux'
import { getCategory } from '../actions'
import Menu from '../components/Menu'


const mapDispatchToProps = (dispatch, ownProps) => ({
  onGetCategory: (category) => dispatch(getCategory(category)),
})

export default connect(
  null,
  mapDispatchToProps
)(Menu)
