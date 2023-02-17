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
                <meta name="Description" content="Client-focused developer who builds well optimized and easily maintained websites."/>
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
                                        Description: 'As Google continues to improve its ranking algorithms I adhere to their recommended best practices. I pay attention to the details so that my sites meet and exceed performace standards, are mobile friendly, and are friendly to users of all different backgrounds and abilities.'
                                    },
                                    card3: {
                                        Title: 'Project Management',
                                        Description: 'I enjoy working with people and have demonstrated the ability to lead teams, meet deadlines, and keep clients happy. As a former Officer in the US Army I am an experienced and well-trained leader who is able to adapt to the people around me.'
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
                                        Description: 'Built and maintained over one hundred websites. Promoted to Director of Web Development after one year. Led a team of developers, content creators, and graphic designers. Overhauled the entire development process transitioning the company away from using prebuilt templates to building custom websites resulting in better site speed and performance. Implemented a structured client onboarding and communication process resulting in improved customer satisfaction and quicker project turnaround times.'
                                    },
                                    histCard2: {
                                        Title: 'Hughes Media',
                                        Subtitle: 'Web Developer',
                                        Date: 'November 2018 - July 2019',
                                        Description: 'Provided in house web development capabilities for a small marketing firm. Collaborated with graphic designers and project managers in order to deliver mobile responsive and SEO friendly websites to exact specifications.'
                                    },
                                    histCard3: {
                                        Title: 'Project Manager/Web Developer Developer',
                                        Subtitle: 'Rockhopper Tech',
                                        Date: 'January 2018 - July 2019',
                                        Description: 'Served primarily as project manager for a medium sized software development company with some duties as a developer. Responsible for ensuring application builds and software enhancements progress as quickly as possible while meeting customer requirements and budgetary constraints.'
                                    },
                                    histCard4: {
                                        Title: 'Lead Business Systems',
                                        Subtitle: 'Mississippi Department of Education (MDE)',
                                        Date: 'May 2016 - Aug 2018',
                                        Description: 'Tracked performance and success metrics for all Mississippi public school students. Created ad hoc reports for MDE Leadership, the federal government, and the public, describing statewide student assessment and demographic data. Rebuilt, expanded, and improved legacy reports and developed new reports in support of educators and decision makers. Merged two salaried positions into one by automating recurring tasks and requirements. Regularly wrote complex SQL queries and procedures using Oracle developer. Developed expertise in data cleaning, reformatting, and restructuring large data sets into easily comprehensible information. Promoted to Lead Business Systems Analyst after one year.'
                                    },
                                    histCard5: {
                                        Title: 'Transportation Officer ',
                                        Subtitle: 'United States Army Reserve',
                                        Date: 'March 2005 - August 2013',
                                        Description: 'Served in a variety of roles from ranks E-2 (Private 2nd Class) through O-2 (First Lieutenant) excelling in all positions. Deployed to Kandahar, Afghanistan from March 2011 to January 2012. Served as Container Management OIC within a Battalion forward Operations Cell. Led a team of seven transportation soldiers and was responsible for identification and reporting of frustrated cargo throughout Afghanistan.'
                                    },
                                }} />
                            <Cards
                                title="My Education"
                                size='48%'
                                addClass='education_section'
                                content={{
                                    edCard1: {
                                        Title: 'M.S. Cognitive And Behavioral Sciences',
                                        Subtitle: 'Auburn University ',
                                        Date: 'May 2015',
                                    },
                                    edCard2: {
                                        Title: 'B.S Pyschology',
                                        Subtitle: 'University of South Carolina Upstate',
                                        Date: 'December 2009',
                                    },
                                    edCard3: {
                                        Title: 'HubSpot CMS Developer Certification',
                                        Subtitle: 'HubSpot Academy',
                                        Date: 'July 2021',
                                    },
                                    edCard4: {
                                        Title: 'JavaScript Algorithms and Data Structures Certification',
                                        Subtitle: 'FreeCodeCamp',
                                        Date: 'November 2022',
                                    },
                                }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}