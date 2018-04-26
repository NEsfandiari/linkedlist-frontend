import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';
import Navbar from '../molecules/Navbar';

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { logout })(Navbar);
