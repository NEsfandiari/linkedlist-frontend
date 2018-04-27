import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';
import Navbar from '../molecules/Navbar';
import { fetchUsersRequest } from '../store/actions/users';

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    users: state.users
  };
}

export default connect(mapStateToProps, { logout, fetchUsersRequest })(Navbar);
