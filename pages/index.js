import Head from 'next/head'
import Mobile_Menu from '@components/Mobile-menu'
import Sidebar from '@components/Sidebar'
import Hero from '@components/Hero'
import Experience from '@components/Experience'
import Cards from '@components/Cards'
import Work from '@components/Work'

import favicon from '../public/images/icons8-developer-64.png'

import portfolio_placeholder1 from '../public/images/portfolio_placeholder_1.webp'
import mockupGif2 from '../public/gifs/portfolio_2.gif'
import portfolio_placeholder2 from '../public/images/portfolio-2-ph.webp'

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
                                        Description: 'As a developer, I specialize in crafting bespoke WordPress and HubSpot CMS themes. My deliverables prioritize site speed optimization while ensuring accessibility to non-technical users such as marketing professionals and website owners, who require uncomplicated editing capabilities.'
                                    },
                                    card2: {
                                        Title: 'SEO',
                                        Description: `In light of Google's ongoing efforts to refine its ranking algorithms, I conscientiously abide by their prescribed best practices. I diligently attend to particulars in order to ensure that my websites not only meet, but surpass performance standards. Additionally, I strive to make them compatible with mobile devices and accessible to users from all walks of life, regardless of background or ability.`
                                    },
                                    card3: {
                                        Title: 'Project Management',
                                        Description: 'Collaborating with individuals is one of the joys of my career, as I relish the challenge of leading teams, ensuring timely project delivery, and satisfying clients. My tenure as an Officer in the US Army has honed my leadership skills, allowing me to expertly adjust my style to connect with various personalities. My experience and training have transformed me into a versatile leader who can effortlessly navigate diverse teams and environments.'
                                    }
                                }} />
                            <Work 
                              title="Samples Of My Work"
                              size="48%"
                              addClass='work_section'
                              content={{
                                card1: {
                                    Title: 'Custom Functionality',
                                    Description: `I had the opportunity to collaborate with a graphic designer and another 
                                    developer in building a website for our client, who operates a unique business and caters 
                                    to a highly diverse user base, ranging from 7 to 77 years of age. Our client had specific requirements, 
                                    including multiple login methods such as IP authentication and URL-based automatic logins, as well as 
                                    the ability to link multiple subscriber accounts to a single administrator account.`,
                                    Placeholder: portfolio_placeholder1.src,
                                    Mp4: '/movies/portfolio-1.mp4',
                                    Webm: '/movies/portfolio-1.webm'   
                                },
                                card2: {
                                        Title: 'Brochure Website',
                                        Description: `Here is an example of a simple brochure site built in WordPress. 
                                        This project was in collaboration with a graphic designer and is a pixel perfect rendering of a mockup built in Figma.`,
                                        Placeholder: portfolio_placeholder2.src,
                                        Mp4: '/movies/portfolio-2.mp4',
                                    }
                                }}
                            />
                            <Cards
                                title="Work History"
                                size='100%'
                                addClass='history_section'
                                content={{
                                    histCard1: {
                                        Title: 'Precision creative',
                                        Subtitle: 'Director of Web Development',
                                        Date: 'July 2019 - Current',
                                        Description: `As Director of Web Development, I successfully built and maintained a portfolio of over one hundred custom and scalable websites. In my first year, I was promoted to this position and led a team of developers, content creators, and graphic designers. As part of my duties, I overhauled the entire development process, transitioning the company away from prebuilt templates to custom website design resulting in improved site speed, performance, and maintainability. Additionally, I implemented a structured client onboarding and communication process, resulting in improved customer satisfaction and quicker project turnaround times.
                                        In designing websites, I adhered to SEO best practices and developed user-friendly web forms with validation and error handling. I reviewed code to ensure that structures were valid, assessed security, and verified browser, device, and operating system compatibility. To increase site traffic, I developed user-oriented visuals and features using front-end languages such as HTML, CSS, JavaScript, and jQuery. I also delivered user support to clients to train, educate, and answer questions, and discussed site requirements to produce actionable development plans.`
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
                                        Description: 'Served in various roles from ranks E-2 (Private 2nd Class) through O-2 (First Lieutenant) excelling in all positions. Deployed to Kandahar, Afghanistan from March 2011 to January 2012. Served as Container Management OIC within a Battalion forward Operations Cell. Led a team of seven transportation soldiers and was responsible for identification and reporting of frustrated cargo throughout Afghanistan.'
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
                                        Description: `Studied human judgment and decision making. TA'd and taught labs for Intro to Psychology, Research Methods, and Game Theory Courses. Conducted various research projects and developed a deep understanding of best research practices.`
                                    },
                                    edCard2: {
                                        Title: 'B.S Pyschology',
                                        Subtitle: 'University of South Carolina Upstate',
                                        Date: 'December 2009',
                                        Description: 'Was awarded a full ROTC Scholarship. Maintained a 3.9+ GPA during my Junior and Senior years while participating in ROTC, serving in the Army Reserve, and holding a part-time job.'
                                    },
                                    edCard3: {
                                        Title: 'HubSpot CMS Developer Certification',
                                        Subtitle: 'HubSpot Academy',
                                        Date: 'July 2021',
                                        Description: `Since becoming HubSpot CMS Certified I've developed two websites in HubSpot professionally and many more landing pages, blog templates, and blog posts.`
                                    },
                                    edCard4: {
                                        Title: 'JavaScript Algorithms and Data Structures Certification',
                                        Subtitle: 'FreeCodeCamp',
                                        Date: 'November 2022',
                                        Description: `In an effort to broaden my skillset I took a course in javascript and have since put that skill to use on this site which was built in Next.js.`
                                    },
                                }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}