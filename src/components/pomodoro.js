import React, { Component } from 'react';
import TimerDisplay from './timerDisplay';
import ActivityList from './activityList';
import './style/pomodoro.css';

class Pomodoro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timers: [
                /*
                {
                    name (optional. defaults to "task 1/2/3"):
                    duration(total duration; does NOT keep track of elapsed time):
                    note (optional): '' 
                }
                */
            ]
        };
    }

    render() {
        return (
            <div id='pomodoro-container'>
                <TimerDisplay />
                <ActivityList />
            </div>
        );
    }
}

export default Pomodoro;