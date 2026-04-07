import { connect } from 'react-redux'
import AddMessage from './index'
import { addMessage } from '../../actions'

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  addMessage: (message, author) => dispatch(addMessage(message, author)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddMessage)
