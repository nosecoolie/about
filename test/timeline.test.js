import React from 'react'
import { shallow } from 'enzyme'
import Timeline from '../src/component/timeline.js'
import { expect } from 'chai'

/*
    Timeline Spec:
        Title should be Experience.
        Section's title should be correct.
*/

const myHistoryTitles = ['EZTABLE 簡單桌', 'ilinke', '資策會全方位 Java 程式設計師養成班', '第17屆全國資訊服務競賽雙冠軍', '長庚大學 資訊管理學系畢業']

describe('Timeline Test', () => {
    const timeline = shallow(<Timeline />)
    it('The title should be Experience.', () => {
        expect(timeline.find('.section-title').text()).to.equal('Experience')
    })
    describe('Section\'s Test', () => {
        const titles = timeline.find('.cd-timeline-block').map((section) => section.find('.content-title').text())
        it('Section\'s title should be correct.', () => {
            expect(titles).to.eql(myHistoryTitles)
        })
    })
})
