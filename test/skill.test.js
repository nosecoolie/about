import React from 'react'
import { shallow } from 'enzyme'
import Skill from '../src/component/skill.js'
import { expect } from 'chai'

/*
    Skill Spec:
        Title should be Skills.
        Each column should be the right information.

        Javascript
            React, ES6, Angular1, Backbone, jQuery
        HTML & CSS
            HTML5, CSS3, RWD Layout, SASS
        Hybrid App
            Webview, Javascript Bridge, Cordova, Ionic
        Build Tool & CI Tool
            Webpack, Gulp, Travis, Mocha, Nightmares, ESLint
        Backend & Others
            Firebase, JAVA, SQL, Sketch, Basic UI design

*/

const mySkills = {
    Javascript: ['React', 'ES6', 'Angular1', 'Backbone', 'jQuery'],
    'HTML & CSS': ['HTML5', 'CSS3', 'RWD Layout', 'SASS'],
    'Hybrid App': ['Webview', 'Javascript Bridge', 'Cordova', 'Ionic'],
    'Build Tool & CI Tool': ['Webpack', 'Gulp', 'Travis', 'Mocha', 'Nightmares', 'ESLint'],
    'Backend & Others': ['Firebase', 'JAVA', 'SQL', 'Sketch', 'Basic UI design']
}

describe('Skill Test', () => {
    const skill = shallow(<Skill />)
    it('The title should be Experience.', () => {
        expect(skill.find('.section-title').text()).to.equal('Skills')
    })
    describe('Column\'s Test', () => {
        it('The Column should be the right information.', () => {
            skill.find('.skill-wrapper').forEach((skillRow) => {
                let skillTitle = skillRow.find('h4').text()
                let skills = skillRow.find('.skill-tag').map((skillContent) => skillContent.text())
                expect(skills).to.eql(mySkills[skillTitle])
                // expect(skillTitle).to.equal('Javascript')
            })
        })
    })
})
