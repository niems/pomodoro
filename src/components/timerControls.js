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
        this.onRestart = this.onRestart.bind(this);
    }

    onPlayToggle(e) {
        e.preventDefault();
        let playState = null;

        if( this.state.playState.name === 'play' ) {
            playState = this.playImages['pause'];
            this.props.onPlay();
        }

        else if ( this.state.playState.name === 'pause' ) {
            playState = this.playImages['play'];
            this.props.onPause();
        }

        this.setState({ playState });
    }

    onRestart(e) {
        e.preventDefault();

        if ( this.state.playState.name !== 'play' ) { //only updates icon if it's in different state
            this.setState({ playState: this.playImages['play'] }); //resets icon to paused state
        }

        this.props.onRestart(); //resets elapsed time to initial state
    }

    render() {
        return (
            <div id='timer-controls-container'>
                <span className='control-icon-container' onClick={this.onRestart}>
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