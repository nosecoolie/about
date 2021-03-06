import React from 'react'
import { shallow } from 'enzyme'
import Conclusion from '../src/component/conclusion.js'
import { expect } from 'chai'

/*
    Conclusion Spec:
        Title should be Conclusion.
        The aTags should be same with my contact details.
*/

const myContactDetails = [
    '<a href="tel:0919453898" target="_blank">0919-453898</a>',
    '<a href="mailto:nosecoolie@gmail.com" target="_blank">nosecoolie@gmail.com</a>',
    '<a href="https://drive.google.com/file/d/0B4e-iZ8o90hWa2RhQjFWdVF0c2c/view?usp=sharing" target="_blank">我的履歷</a>'
]

describe('Conclusion Test', () => {
    const conclusion = shallow(<Conclusion />)
    it('The title should be Experience.', () => {
        expect(conclusion.find('.section-title').text()).to.equal('Conclusion')
    })
    it('The aTags should be correct.', () => {
        const aTags = conclusion.find('a').map(aTag => aTag.html())
        expect(aTags).to.eql(myContactDetails)
    })
})
