import React, { Component } from 'react';
import TimerControls from './timerControls';
import './style/timerDisplay.css';

class TimerDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timer: {
                hr: 0,
                min: 0,
                sec: 0
            }
        };
    }

    render() {
        return (
            <div id='timer-display-container'>
                <div id='elapsed-time'>
                    00:00:00
                </div>
                <TimerControls />
            </div>
        );
    }
}

export default TimerDisplay;