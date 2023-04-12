import Head from 'next/head'
import Mobile_Menu from '@components/Mobile-menu'
import Sidebar from '@components/Sidebar'
import Hero from '@components/Hero'
import SimpleCard from '@components/SimpleCard'
import SimpleExperience from '@components/SimpleExperience'
import SimpleWork from '@components/SimpleWork'

import favicon from '../public/images/icons8-developer-64.png'

import portfolio_placeholder1 from '../public/images/portfolio_placeholder_1.webp'
import portfolio_placeholder2 from '../public/images/portfolio-2-ph.webp'
import portfolio_placeholder3 from '../public/images/Portfolio-site.webp'

import lazyLoad  from 'public/assets/js/lazy-load'

export default function Home() {
    
    return (
        <div className="container-all">
            <Head>
                <title>Kyle Huffling - Web Developer/Project Manager</title>
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
                            <section className="special_section">
                                <div className="pc_row pc_space_evenly">
                                    <SimpleExperience
                                        num_years='4'
                                        type="Web Development"
                                    />
                                    <SimpleExperience
                                        num_years='4'
                                        type="Project Management"
                                    />
                                    <SimpleExperience
                                        num_years='6'
                                        type="Database and Web Development"
                                    />
                                </div>
                            </section>
                            <section className='skills_section'>
                                <h2>My Skills</h2>
                                <div className="pc_row">
                                    <SimpleCard
                                    title= 'Theme Development'
                                    description= 'I create custom WordPress and HubSpot CMS themes. My deliverables prioritize site speed optimization while ensuring accessibility for non-technical users such as marketing professionals and website owners, who require uncomplicated editing capabilities.'
                                    size="31%"
                                    />
                                    <SimpleCard
                                     title= 'SEO'
                                     description= 'I stay up to date with Google’s best practices in order to achieve the highest rankings for my client’s sites. I attend to particulars in order to ensure that my websites not only meet, but surpass, performance standards. I consider factors such as mobile compatibility and user diversity when designing sites in order to create an optimal experience for the widest possible audience.'
                                     size="31%"
                                    />
                                    <SimpleCard
                                     title= 'Project Management'
                                     description= 'I’ve consistently led my teams to develop high quality products that exceed client expectations. My tenure as an Officer in the US Army has honed my leadership skills, allowing me to expertly adjust my style to connect with people from all walks of life. My experience and training have transformed me into a versatile leader who can navigate diverse teams and environments.'
                                     size="31%"
                                    />
                                </div>
                            </section>
                            <section className='work_section'>
                                <h2>Samples Of My Work</h2>
                                <div className="pc_row">
                                    <SimpleWork
                                    uniqueID='video1'
                                    title='Custom Functionality'
                                    description='I led a team that included a graphic designer and a junior developer in the development of a website featuring a high level of customization. This client’s unique business caters to a diverse user base, ranging from 7 to 77 years of age. To meet their business needs the client had a number of specific requirements, including multiple login methods (i.e., IP authentication and URL-based automatic logins) as well as the ability to link multiple subscriber accounts to a single administrator account.'
                                    placeholder={portfolio_placeholder1.src} 
                                    Mp4= '/movies/portfolio-1.mp4'
                                    Webm= '/movies/portfolio-1.webm'
                                    DesktopAlt= 'Portfolio 1 device background'                                        
                                    PosterAlt= 'Functionality Website thumbnail'
                                    Postertitle= 'Functionality Website Thumbnail'  
                                    size="480px"
                                    />
                                    <SimpleWork
                                    uniqueID='video2'
                                    title='Brochure Website'
                                    description='Here is an example of a simple brochure site built in WordPress. 
                                    This project was in collaboration with a graphic designer and is a pixel perfect rendering of a mockup built in Figma.'
                                    placeholder={portfolio_placeholder2.src} 
                                    Mp4= '/movies/portfolio-2.mp4'
                                    Webm= '/movies/portfolio-2.webm'
                                    DesktopAlt= 'Portfolio 2 device background'                                        
                                    PosterAlt= 'Brochure Website thumbnail'
                                    Postertitle= 'Brochure Website Thumbnail'  
                                    size="480px"
                                    />
                                    <SimpleWork
                                    uniqueID='video3'
                                    title='Portfolio Site'
                                    description='Is this cheating? Maybe a little, but why just tell when I can show? Attention to detail and a desire to optimize user experience underlie my overall approach to website development. Look around to see for yourself, and don’t hesitate to reach out if you’d like to see other examples of my websites.'
                                    placeholder={portfolio_placeholder3.src} 
                                    DesktopAlt= 'Portfolio 3 device background'                                        
                                    PosterAlt= 'Portfolio Website thumbnail'
                                    Postertitle= 'Portfolio Website Thumbnail'  
                                    size="480px"
                                    />
                                </div>
                            </section>
                            <section className='history_section'>
                                <h2>Work History</h2>
                                <div className="pc_row">
                                    <SimpleCard
                                        title= 'Precision creative'
                                        subtitle='Director of Web Development'
                                        size="100%"
                                        date='July 2019 - Current'
                                        description='As Director of Web Development, I successfully built and maintained a portfolio of over one hundred custom and scalable websites. In my first year, I was promoted to this position and led a team of developers, content creators, and graphic designers. As part of my duties, I overhauled the entire development process, transitioning the company away from prebuilt templates to custom website design resulting in improved site speed, performance, and maintainability. Additionally, I implemented a structured client onboarding and communication process, resulting in improved customer satisfaction and quicker project turnaround times. In designing websites, I adhered to SEO best practices and developed user-friendly web forms with validation and error-handling. I reviewed code to ensure that structures were valid. I assessed security, and verified browser, device, and operating system compatibility. To increase site traffic, I developed user-oriented visuals and features using front-end languages such as HTML, CSS, JavaScript, and jQuery. I also delivered user support to clients to train, educate, and answer questions, and discussed site requirements to produce actionable development plans.'
                                    />
                                    <SimpleCard
                                        title= 'Hughes Media'
                                        subtitle='Web Developer'
                                        size="100%"
                                        date='November 2018 - July 2019'
                                        description='Provided in house web development capabilities for a small marketing firm. Collaborated with graphic designers and project managers in order to deliver mobile responsive and SEO friendly websites to exact specifications.'
                                    />
                                    <SimpleCard
                                        title= 'Rockhopper Tech'
                                        subtitle='Project Manager/Web Developer'
                                        size="100%"
                                        date='January 2019 - July 2019'
                                        description='Served primarily as project manager for a medium sized software development company with some duties as a developer. Responsible for ensuring application builds and software enhancements progress as quickly as possible while meeting customer requirements and budgetary constraints.'
                                    />
                                    <SimpleCard
                                        title= 'Lead Business Systems Analyst'
                                        subtitle='Mississippi Department of Education (MDE)'
                                        size="100%"
                                        date='May 2016 - August 2018'
                                        description='Tracked performance and success metrics for all Mississippi public school students. Created ad hoc reports for MDE Leadership, the federal government, and the public, describing statewide student assessment and demographic data. Rebuilt, expanded, and improved legacy reports and developed new reports in support of educators and decision makers. Merged two salaried positions into one by automating recurring tasks and requirements. Regularly wrote complex SQL queries and procedures using Oracle developer. Developed expertise in data cleaning, reformatting, and restructuring large data sets into easily comprehensible information. Promoted to Lead Business Systems Analyst after one year.'
                                    />
                                    <SimpleCard
                                        title= 'Transportation Officer'
                                        subtitle='United States Army Reserve'
                                        size="100%"
                                        date='March 2005 - August 2013'
                                        description='Served in various roles from ranks E-2 (Private 2nd Class) through O-2 (First Lieutenant) excelling in all positions. Deployed to Kandahar, Afghanistan from March 2011 to January 2012. Served as Container Management OIC within a Battalion forward Operations Cell. Led a team of seven transportation soldiers and was responsible for identification and reporting of frustrated cargo throughout Afghanistan.'
                                    />
                                </div>
                            </section>
                            <section className="education_section">
                                <h2>My Education</h2>
                                <div className="pc_row">
                                <SimpleCard
                                        title= 'M.S. Cognitive And Behavioral Sciences'
                                        subtitle='Auburn University'
                                        size="48%"
                                        date='May 2015'
                                        description='Studied human judgment and decision making as a graduate student in the Laboratory for Integrated Decision Making. Established research informed understanding of human attentional biases/ preferences (e.g., using eye-tracking technology) and cognition. Conducted research projects and developed a deep understanding of best research practices. Mentored undergraduate research assistants serving in my lab. As a teaching assistant, taught labs for Intro to Psychology, Research Methods, and Game Theory Courses. '
                                    />
                                    <SimpleCard
                                        title= 'B.S Pyschology'
                                        subtitle='University of South Carolina Upstate'
                                        size="48%"
                                        date='December 2009'
                                        description=''
                                    />
                                    <SimpleCard
                                        title= 'JavaScript Algorithms and Data Structures Certification'
                                        subtitle='FreeCodeCamp'
                                        size="48%"
                                        date='November 2022'
                                        description='In an effort to broaden my skillset I took a course in javascript and have since put that skill to use on this site which was built in Next.js.'
                                    />
                                    <SimpleCard
                                        title= 'HubSpot CMS Developer Certification'
                                        subtitle='HubSpot Academy'
                                        size="48%"
                                        date='November 2022'
                                        description='Since becoming HubSpot CMS Certified I&apos;ve developed two websites in HubSpot professionally and many more landing pages, blog templates, and blog posts.'
                                    />
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}