import React, { Component } from 'react';
import './style/timerDisplay.css';

class TimerDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='timer-display-container'>
                00:00:00
            </div>
        );
    }
}

export default TimerDisplay;