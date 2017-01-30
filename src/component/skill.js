import React from 'react'

class Protfolio extends React.Component {
    render () {
        return (
            <div id='my-skill'>
                <h2 className='section-title'>Skills</h2>
                <div className='card'>
                    <div className='skill-wrapper indigo'>
                        <h4>Javascript</h4>
                        <div className='skill-tag'>React</div>
                        <div className='skill-tag'>ES6</div>
                        <div className='skill-tag'>Angular1</div>
                        <div className='skill-tag'>Backbone</div>
                        <div className='skill-tag'>jQuery</div>
                    </div>
                    <div className='skill-wrapper green'>
                        <h4>HTML & CSS</h4>
                        <div className='skill-tag'>HTML5</div>
                        <div className='skill-tag'>CSS3</div>
                        <div className='skill-tag'>RWD Layout</div>
                        <div className='skill-tag'>SASS</div>
                    </div>
                    <div className='skill-wrapper red'>
                        <h4>Hybrid App</h4>
                        <div className='skill-tag'>Webview</div>
                        <div className='skill-tag'>Javascript Bridge</div>
                        <div className='skill-tag'>Cordova</div>
                        <div className='skill-tag'>Ionic</div>
                    </div>
                    <div className='skill-wrapper orange'>
                        <h4>Build Tool & CI Tool</h4>
                        <div className='skill-tag'>Webpack</div>
                        <div className='skill-tag'>Gulp</div>
                        <div className='skill-tag'>Travis</div>
                        <div className='skill-tag'>Mocha</div>
                        <div className='skill-tag'>Nightmares</div>
                        <div className='skill-tag'>ESLint</div>
                    </div>
                    <div className='skill-wrapper lime'>
                        <h4>Backend & Others</h4>
                        <div className='skill-tag'>Firebase</div>
                        <div className='skill-tag'>JAVA</div>
                        <div className='skill-tag'>SQL</div>
                        <div className='skill-tag'>Sketch</div>
                        <div className='skill-tag'>Basic UI design</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Protfolio
