import PropTypes  from "prop-types";
import './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
const stateArr = Object.keys(options);

return (
<div>
    {stateArr.map(option => (
    <button
    key={option}
    type="button"
    name={option}
    onClick={() => onLeaveFeedback(option)}
    >
        {option}
    </button>
    ))}
</div>
);
};

FeedbackOptions.propTypes ={
options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;