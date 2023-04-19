import PropTypes from 'prop-types';
import css from './Notifications.module.css';

const Notifications = ({message}) => {
return message && <p className={css.p}>{message}</p>;
};

Notifications.propTypes = {
message: PropTypes.string.isRequired,
};

export default Notifications;
