import React from 'react'
import { shallow } from 'enzyme'
import Profile from '../src/component/profile.js'
import { expect } from 'chai'

/*
    Profile Spec:
        The name should be the right name.
        The title should be my faviorite job.

*/

describe('Profile Test', () => {
    const profile = shallow(<Profile />)
    it('The profile name should be my name.', () => {
        expect(profile.find('.name').text()).to.equal('陳驥')
    })
    it('The profile titile should be Front-End Developer.', function () {
        expect(profile.find('.title').text()).to.equal('Front-End Developer')
    })
})
