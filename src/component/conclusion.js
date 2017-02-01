import React from 'react'

class Conclusion extends React.Component {
    render () {
        return (
            <div id='conclusion'>
                <h2 className='section-title'>Conclusion</h2>
                <div className='card'>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{fontSize: '16px', lineHeight: '1.4', color: '#666', textAlign: 'justify', margin: 0}}>
                            總結要說的是我住台北，79年次，興趣是桌遊和 3C 產品，因為前端最貼近使用者，所以義無反顧的愛上前端。<br />
                            謝謝你將這份簡歷看完，如果你有興趣和我合作的話不論任何形式都歡迎聊聊，這邊是我的聯絡資訊。
                            <div>
                                電話：
                                <a href='tel:0919453898' target='_blank'>0919-453898</a>
                            </div>
                            <div>
                                信箱：
                                <a href='mailto:nosecoolie@gmail.com' target='_blank'>nosecoolie@gmail.com</a>
                            </div>
                            <div>
                                PDF 履歷：
                                <a href='https://drive.google.com/file/d/0B4e-iZ8o90hWa2RhQjFWdVF0c2c/view?usp=sharing' target='_blank'>我的履歷</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Conclusion
