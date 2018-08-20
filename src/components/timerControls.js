import React, { Component } from 'react';
import './style/timerControls.css';

class TimerControls extends Component {
    constructor(props) {
        super(props);

        this.playImages = {
            'play': {
                name: 'play',
                path: './images/play.svg',
            },

            'pause': {
                name: 'pause',
                path: './images/pause.svg'
            }
        };

        this.state = {
            playState: this.playImages['play']
        };

        this.onPlayToggle = this.onPlayToggle.bind(this);
    }

    onPlayToggle(e) {
        e.preventDefault();
        const playState = this.state.playState.name === 'play'
                        ? this.playImages['pause'] : this.playImages['play'];

        this.setState({ playState });
    }

    render() {
        return (
            <div id='timer-controls-container'>
                <span className='control-icon-container'>
                    <img className='control-icon' src='./images/repeat.svg' alt='failed to load repeat icon' />
                </span>
                
                <span className='control-icon-container' onClick={this.onPlayToggle}>
                    <img className='control-icon' src={this.state.playState.path} alt='failed to load play/pause icon' />
                </span>
            </div>
        );
    }
}

export default TimerControls;