import React from 'react'
import ReactDOM from 'react-dom'

import Profile from './component/profile'
import Skill from './component/skill'
import Timeline from './component/timeline'
import Conclusion from './component/conclusion'

import './assets/app.css'

class App extends React.Component {
    render () {
        return (
            <div className='page-wrapper' style={{ padding: '100px 30px 30px 30px', backgroundColor: '#eee' }} >
                <Profile />
                <Skill />
                <Timeline />
                <Conclusion />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
