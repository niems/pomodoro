import React, { Component } from 'react';
import TimerControls from './timerControls';
import './style/timerDisplay.css';

//converts the current number to the '00' form for displaying as a timer
function numToStr(num) { 
    return ( (num < 10) ? `0${num.toString()}` : `${num.toString()}` );
}

//converts the current timer obj into the timer form '00:00:00'
function timeToStr(timer) {
    return `${numToStr(timer.hr)}:${numToStr(timer.min)}:${numToStr(timer.sec)}`;
}

//displays timer
function DisplayElapsedTime({ timer }) {
    return timeToStr(timer);
}

//determines if the timer has run based on if it's different than the initial duration
function hasTimerRun(base, curr) {
    return timeToStr(base) !== timeToStr(curr);
}

class TimerDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            baseDuration: {
                hr: 0,
                min: 25,
                sec: 0
            },
            timer: {
                hr: 0,
                min: 25,
                sec: 0
            }
        };

        this.createTimer = this.createTimer.bind(this);
        this.destroyTimer = this.destroyTimer.bind(this);
        this.restartTimer = this.restartTimer.bind(this);

        this.update = this.update.bind(this);
    }

    componentWillUnmount() {
        this.destroyTimer();
    }

    createTimer() {
        console.log('createTimer()');
        this.timerId = setInterval(this.update, 1000); //callback once per second
    }

    destroyTimer() {
        console.log('destroyTimer()');
        clearInterval( this.timerId );
    }

    restartTimer() {
        console.log('restartTimer()');
        this.destroyTimer(); //removes timer if it exists

        if ( hasTimerRun( this.state.baseDuration, this.state.timer ) ) { //only updates the timer if its run
            this.setState({ 
                timer: { //resets duration to the initial state
                    hr: this.state.baseDuration.hr,
                    min: this.state.baseDuration.min,
                    sec: this.state.baseDuration.sec
                }
            }); 
        }
    }

    update() {
        console.log(`update() timer`);
        const timer = this.state.timer;

        if ( timer.sec > 0 ) {
            timer.sec--;
        }

        else if ( timer.min > 0 ) {
            timer.min--;
            timer.sec = 59; //reset
        }

        else if ( timer.hr > 0 ) {
            timer.hr--;
            timer.min = 59; //reset
            timer.sec = 59; //reset
        }

        this.setState({ timer });
    }

    render() {
        return (
            <div id='timer-display-container'>
                <div id='elapsed-time'>
                    <DisplayElapsedTime timer={this.state.timer} />
                </div>
                <TimerControls onPlay={this.createTimer} onPause={this.destroyTimer} onRestart={this.restartTimer} />
            </div>
        );
    }
}

export default TimerDisplay;