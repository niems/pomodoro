import React, { Component } from 'react';
import './style/activityList.css';

function ActivityToItem(item) {
    return (
        <li className='activity-item'>{item.name}</li>
    );
}

function DisplayActivityList({ activities }) {

    const items = activities.map(item => (
        <ActivityToItem key={item.name} id={item.name} item={item} />
    ));

    return (
        <ul id='activity-list'>{items}</ul>
    )
}

class ActivityList extends Component {
    constructor(props) {
        super(props);

        this.testList = [
            {
                name: 'default pomodoro',
                duration: {
                    hr: 0,
                    min: 25,
                    sec: 0
                },
                note: ''
            },
            {
                 name: 'coding',
                 duration: {
                     hr: 1,
                     min: 0,
                     sec: 0
                 },
                 note: 'getting shit done :D'
             },
             {
                name: 'coding3',
                duration: {
                    hr: 1,
                    min: 0,
                    sec: 0
                },
                note: 'getting shit done :D'
            },
            {
                name: 'coding2',
                duration: {
                    hr: 1,
                    min: 0,
                    sec: 0
                },
                note: 'getting shit done :D'
            },
         ];
    }

    render() {
        return (
            <div id='activity-list-container'>
                <DisplayActivityList activities={this.testList} />
            </div>
        );
    }
}

export default ActivityList;