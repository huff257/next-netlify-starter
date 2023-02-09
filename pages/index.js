import Head from 'next/head'
import Mobile_Menu from '@components/Mobile-menu'
import Sidebar from '@components/Sidebar'
import Hero from '@components/Hero'
import Experience from '@components/Experience'
import Cards from '@components/Cards'

import favicon from '../public/images/icons8-developer-64.png'



export default function Home() {
    return (
        <div className="container-all">
            <Head>
                <title>Kyle Huffling - Portfolio</title>
                <link rel="icon" href={favicon.src} />
            </Head>
            <div className="content_wrapper">
                <Mobile_Menu />
                <div className="container">
                    <div className="pc_row">
                        <Sidebar />
                        <div className="main_content">
                            <Hero />
                            <Experience />
                            <Cards
                                title="My Skills"
                                size='31%'
                                addClass='skills_section'
                                content={{
                                    card1: {
                                        Title: 'Theme Development',
                                        Description: 'I build custom themes in WordPress and HubSpot CMS. My themes are optimized for site speed and are made to be easily edited by non-technical users such as marketers and site owners.'
                                    },
                                    card2: {
                                        Title: 'SEO',
                                        Description: 'I build custom themes in WordPress and HubSpot CMS. My themes are optimized for site speed and are made to be easily edited by non-technical users such as marketers and site owners.'
                                    },
                                    card3: {
                                        Title: 'Project Management',
                                        Description: 'I build custom themes in WordPress and HubSpot CMS. My themes are optimized for site speed and are made to be easily edited by non-technical users such as marketers and site owners.'
                                    }
                                }} />
                            <Cards
                                title="Work History"
                                size='100%'
                                addClass='history_section'
                                content={{
                                    histCard1: {
                                        Title: 'Precision creative',
                                        Subtitle: 'Director of Web Development',
                                        Date: 'July 2018 - Current',
                                        Description: 'I build custom themes in WordPress and HubSpot CMS. My themes are optimized for site speed and are made to be easily edited by non-technical users such as marketers and site owners.'
                                    },
                                    histCard2: {
                                        Title: 'Precision creative',
                                        Subtitle: 'Director of Web Development',
                                        Date: 'July 2018 - Current',
                                        Description: 'I build custom themes in WordPress and HubSpot CMS. My themes are optimized for site speed and are made to be easily edited by non-technical users such as marketers and site owners.'
                                    },
                                    histCard3: {
                                        Title: 'Precision creative',
                                        Subtitle: 'Director of Web Development',
                                        Date: 'July 2018 - Current',
                                        Description: 'I build custom themes in WordPress and HubSpot CMS. My themes are optimized for site speed and are made to be easily edited by non-technical users such as marketers and site owners.'
                                    },
                                }} />
                            <section className="history_title">
                                <h2>Work History</h2>
                            </section>
                            <section className="history_section">
                                <div className="pc_row">
                                    <div className="bg_white card_margin pc_box_shadow">
                                        <div className="history_card history_first">
                                            <div className="pc_row">
                                                <div className="history_col-1">
                                                    <h3>
                                                        Precision Creative
                                                    </h3>
                                                    <div className="job_title">Director of Web Development</div>
                                                </div>
                                                <div className="history_col-2">
                                                    <div className="history_date">July 2018 - Current</div>
                                                </div>
                                            </div>
                                            <p>
                                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                                                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="education_section">
                                <h2>My Education</h2>
                                <div className="pc_row_ed">
                                    <div className="bg_white card_margin pc_box_shadow">
                                        <div className="history_card">
                                            <div className="pc_row">
                                                <div className="history_col-1">
                                                    <h3>
                                                        Precision Creative
                                                    </h3>
                                                    <div className="job_title">Director of Web Development</div>
                                                </div>
                                                <div className="history_col-2">
                                                    <div className="history_date">July 2018 - Current</div>
                                                </div>
                                            </div>
                                            <p>
                                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                                                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                            </p>

                                        </div>
                                    </div>
                                    <div className="bg_white card_margin pc_box_shadow">
                                        <div className="history_card">
                                            <div className="pc_row">
                                                <div className="history_col-1">
                                                    <h3>
                                                        Precision Creative
                                                    </h3>
                                                    <div className="job_title">Director of Web Development</div>
                                                </div>
                                                <div className="history_col-2">
                                                    <div className="history_date">July 2018 - Current</div>
                                                </div>
                                            </div>
                                            <p>
                                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                                                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                            </p>

                                        </div>
                                    </div>
                                    <div className="bg_white card_margin pc_box_shadow">
                                        <div className="history_card">
                                            <div className="pc_row">
                                                <div className="history_col-1">
                                                    <h3>
                                                        Precision Creative
                                                    </h3>
                                                    <div className="job_title">Director of Web Development</div>
                                                </div>
                                                <div className="history_col-2">
                                                    <div className="history_date">July 2018 - Current</div>
                                                </div>
                                            </div>
                                            <p>
                                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                                                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
