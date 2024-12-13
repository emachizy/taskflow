import PropTypes from "prop-types";

const Dashboard = (props) => {
  return <div>Dashboard</div>;
};

Dashboard.propTypes = {
  tasks: PropTypes.array,
  logout: PropTypes.func,
  username: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default Dashboard;
