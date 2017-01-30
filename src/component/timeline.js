import React from 'react'

class MyTimeline extends React.Component {
    render () {
        return (
            <div id='my-experience'>
                <h2 className='section-title'>Experience</h2>
                <section id='cd-timeline' className='cd-container'>
                    <div className='cd-timeline-block'>
                        <div className='cd-timeline-img cd-location'>
                            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg' alt='Location' />
                        </div>
                        <div className='cd-timeline-content'>
                            <h2 className='content-title'>EZTABLE 簡單桌</h2>
                            <h2>Frontend Developer</h2>
                            <p>
                                EZTABLE 是一間致力於線上餐廳訂位的 O2O 網路公司，同時上站人數最高曾經達到 3000 人，每月的流量平均也都在 80 萬人次左右。
                                在這裡我除了使用 Backbone & Angular 維護舊網站以外，多數的時間是用 React 建置一個全新架構的網站，或是編寫 Webview 和 Bridge 讓 IOS & Android 兩邊平台的 App 可以共用頁面並與 App 做事件傳遞。<br />
                                EZTABLE 的產品上線多年，也有一套完整的開發流程，讓我學習到了很多，尤其前端 Web Team 只有兩名成員(包含我)，雖然工作時程緊湊，壓力也不小，但是實際參與產品的開發，對新功能的流程提出自己的見解與意見，這種種都讓我忙得非常開心。尤其是看著自己辛苦打造全新的網站(tw.eztable.com)正式上線時的當下真的非常感動。
                            </p>
                            <a href='https://tw.eztable.com' target='_blank' className='cd-read-more'>check EZTABLE out</a>
                            <span className='cd-date'>2015/9/16 ~ 2017/2/28</span>
                        </div>
                    </div>

                    <div className='cd-timeline-block'>
                        <div className='cd-timeline-img cd-location'>
                            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg' alt='Location' />
                        </div>
                        <div className='cd-timeline-content'>
                            <h2 className='content-title'>ilinke</h2>
                            <h2>Full-stack Developer</h2>
                            <p>
                                ilinke 聯成數網是一間擁有自己產品 Cupoy，同時也有接案的小型公司，我在這裡是扮演的角色是全端工程師兼小小設計，主要的工作內容是用 Java 及 Structs 撰寫後端 API ，並且自己在前端用 Angular 串接起來，有趣的是，因為聯成數網是小型公司，成員只有五人，所以有的時候我會客串 UI designer 的角色，替一些專案拉拉 sketch 做簡單的設計，曾經有個案子就是從設計到前端到後端都是由我完成的。<br />
                                也因此我在這邊養成了對 UI 的敏感度，在拿到 UI 稿切版前，會先去省思 UI 元件的 Layout 是否合理才動手切版，若是發現有疑慮的地方，會和 PM 與設計師討論原因和是否能有更好的結論，也讓我決定往前端工程師這條路前進。
                            </p>
                            <a href='https://www.cupoy.com/introduction' target='_blank' className='cd-read-more'>check Cupoy out</a>
                            <span className='cd-date'>2015/2 ~ 2015/9</span>
                        </div>
                    </div>

                    <div className='cd-timeline-block'>
                        <div className='cd-timeline-img cd-movie'>
                            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg' alt='Movie' />
                        </div>

                        <div className='cd-timeline-content'>
                            <h2 className='content-title'>資策會全方位 Java 程式設計師養成班</h2>
                            <p style={{marginBottom: 0}}>
                                退伍後的我想加強自己對 WEB 全端的相關知識，以及業界會使用的 solution，所以選擇了進入資策會充實自己在這方面的能力。<br />
                                在資策會中，我學到了 Spring Structs 等業界常用的 Java 後端 Framework，讓自己對於業界後端的樣貌更清析明確了，也利用了這些 Framework 做出了一個訂便當平台的專題。
                            </p>
                            <span className='cd-date'>2014/8 ~ 2015/1</span>
                        </div>
                    </div>

                    <div className='cd-timeline-block'>
                        <div className='cd-timeline-img cd-picture'>
                            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg' alt='Picture' />
                        </div>
                        <div className='cd-timeline-content'>
                            <h2 className='content-title'>第17屆全國資訊服務競賽雙冠軍</h2>
                            <p style={{marginBottom: 0}}>
                                我在學校的畢業專題 KinHealth 互動復健平台，是結合了我們學校長庚大學的復健資源，以及體感視訊的復健軟體。<br />
                                而 KinHealth 也在全國資訊服務創新競賽中的亞太區交流組以及資訊技術應用組都拿到了第一名。
                            </p>
                            <span className='cd-date'>2012/11/10</span>
                        </div>
                    </div>

                    <div className='cd-timeline-block'>
                        <div className='cd-timeline-img cd-location'>
                            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg' alt='Location' />
                        </div>
                        <div className='cd-timeline-content'>
                            <h2 className='content-title'>長庚大學 資訊管理學系畢業</h2>
                            <span className='cd-date'>2009/9 ~ 2013/6</span>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

// <Card>
//     <Timeline
//         style={{
//             margin: '30px auto',
//             maxWidth: '300px'
//         }}
//         pending={
//             <a href='#'>See more</a>
//         }
//     >
//         <Timeline.Item>2012/11/10 第17屆全國資訊服務競賽雙冠軍</Timeline.Item>
//         <Timeline.Item>2013/6 長庚大學 資訊管理學系畢業</Timeline.Item>
//         <Timeline.Item>2014/8 ~ 2015/1 資策會全方位 java 程式設計師養成班</Timeline.Item>
//         <Timeline.Item>2015/2 ~ 2015/8 ilinke 前端工程師</Timeline.Item>
//         <Timeline.Item>2015/9 ~ 2017/2 EZTABLE 簡單桌 前端工程師</Timeline.Item>
//     </Timeline>
// </Card>

export default MyTimeline
