import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';
import Navbar from '../molecules/Navbar';
import { fetchUsersRequest } from '../store/actions/users';
import { withRouter } from 'react-router-dom';

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    users: state.users
  };
}

export default withRouter(connect(mapStateToProps, { logout, fetchUsersRequest })(Navbar));
