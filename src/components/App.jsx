import {Component} from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notifications from './Notifications/Notifications';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export class App extends Component {
state = {
good: 0,
neutral: 0,
bad: 0,
};

updateCount = state => {
this.setState(prevState => ({[state]: prevState[state] + 1}));
};
countTotalFeedback = () => 
Object.values(this.state).reduce((acc, value) => acc + value, 0);

countPositiveFeedbackPercentage = () => {
return this.countTotalFeedback()
? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
: '0';
};

render () {
const {good, neutral, bad} = this.state;

return(
<>

<Section title='Please leave feedback'>
<FeedbackOptions 
options={this.state}
onLeaveFeedback={this.updateCount}
/>
</Section>

{this.countTotalFeedback() ? (
<Section title='Statistics'>
<Statistics 
good={good}
neutral={neutral}
bad={bad}
total={this.countTotalFeedback()}
positivePercentage={this.countPositiveFeedbackPercentage()}
/>
</Section>
) : (
<Notifications message='There is no feedback' />
)}
</>
);
}
}
