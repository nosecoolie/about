import React from 'react'

class Profile extends React.Component {
    render () {
        return (
            <div className='card'>
                <div
                    style={{
                        position: 'absolute',
                        top: '-60px',
                        left: '50%',
                        width: '120px',
                        height: '120px',
                        marginLeft: '-60px',
                        borderRadius: '100%',
                        backgroundImage: 'url(\'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-0/p206x206/13346532_1348349691847420_1153889197217343765_n.jpg?oh=c44337c1db1cbf04190ae80a0d2afe46&oe=58D757FB\')',
                        backgroundSize: 'cover',
                        backgroundPosition: '-11px 50%'
                    }}
                />
                <div style={{ paddingTop: '56px', textAlign: 'center' }}>
                    <h2 className='name' style={{margin: '8px 0', color: '#222'}}>陳驥</h2>
                    <h4 className='title' style={{margin: '8px 0', color: '#666'}}>Front-End Developer</h4>
                    <p style={{fontSize: '1˙px', lineHeight: '1.3', color: '#666', textAlign: 'justify'}}>
                        嗨，我是陳驥，這裡是一個用來簡單介紹我自己的網站，主要是用了 React, Webpack, 另外也有使用一些 CI 的工具像是 ESLint, Mocha & Travis 方便我開發佈屬，以及測試，
                        關於我使用的 Dependencies 和我用它們來做什麼事，我都寫在了 readme 裡。
                        或是你偏好直接先看我的履歷，我也準備了 PDF 的版本。<a href='https://drive.google.com/file/d/0B4e-iZ8o90hWa2RhQjFWdVF0c2c/view?usp=sharing' target='_blank' style={{color: '#2196F3'}}>在這裡。</a>
                    </p>
                    <a href='https://drive.google.com/file/d/0B4e-iZ8o90hWa2RhQjFWdVF0c2c/view?usp=sharing' target='_blank' className='skill-tag' style={{height: '36px', lineHeight: '36px', padding: '0 20px', backgroundColor: '#2196F3', fontSize: '16px', cursor: 'pointer'}} >我的履歷</a>
                </div>
            </div>
        )
    }
}

export default Profile
