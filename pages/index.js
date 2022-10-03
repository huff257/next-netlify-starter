import Head from 'next/head'
import Mobile_Menu from '@components/Mobile-menu'

import profilePic from '../public/images/kyle_huffling_headshot.webp'
import heroBanner from '../public/images/fulls_stack_devleoper.webp'
import favicon from '../public/images/icons8-developer-64.png'
import wordPress from '../public/images/WordPress-logo.png'
import hubSpot from '../public/images/hubspot_logo.png'


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
                        <div className="sidebar">
                            <div className="fixed pc_box_shadow">
                                <div className="fixed_col pc_center_align bg_white neg_margin intro">
                                    <div className="pc_img_wrapper">
                                        <img src={profilePic.src} />
                                        <span className="pulse"></span>
                                    </div>
                                    <h5 className="name">Kyle Huffling</h5>
                                    <p>Web Developer</p>
                                    <p>Project Manager</p>
                                </div>
                                <div className="pc_scroll_content">
                                    <div className="fixed_col contact">
                                        <div className="pc_contact-child">
                                            <h5>Email:</h5>
                                            <div>
                                                <p><a href="mailto: huff257@gmail.com">huff257@gmail.com</a></p>
                                            </div>
                                        </div>
                                        <div className="pc_contact-child">
                                            <h5>Phone:</h5>
                                            <div>
                                                <p><a href="8643604227">(864) 360-4227</a></p>
                                            </div>
                                        </div>
                                        <div className="pc_contact-child">
                                            <h5>City:</h5>
                                            <div>
                                                <p>Marietta</p>
                                            </div>
                                        </div>
                                        <div className="pc_contact-child">
                                            <h5>State:</h5>
                                            <div>
                                                <p>Georgia</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fixed_col">
                                        <h5 className="side_col_heading">CMSs</h5>
                                        <div className="pc_contact-child pc_space_evenly">
                                            <div className="pc_logo-child">
                                                <img src={wordPress.src} />
                                                <h6>WordPress</h6>
                                            </div>
                                            <div className="pc_logo-child">
                                                <img src={hubSpot.src} />
                                                <h6>Hubspot</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fixed_col contact">
                                        <h5 className="side_col_heading">Languages</h5>
                                        <div className="pc_row">
                                            <div className="pc_col-6">
                                                <div className="pc_contact-child pc_flex_col center_text_col">
                                                    <h6>sql</h6>
                                                    <h6>r</h6>
                                                    <h6>php</h6>
                                                    <h6>javascript</h6>
                                                </div>
                                            </div>
                                            <div className="pc_col-6">
                                                <div className="pc_contact-child pc_flex_col center_text_col">
                                                    <h6>hubl</h6>
                                                    <h6>html</h6>
                                                    <h6>bash</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fixed_col" >
                                            <h5 className="side_col_heading">Technologies</h5>
                                            <div className="pc_row">
                                                <div className="pc_col-12">
                                                    <h6>bootstrap, sass, grid, flexbox</h6>
                                                </div>
                                            </div>
                                            <div className="pc_row">
                                                <div className="pc_col-12">
                                                    <h6>jquery, ajax, json </h6>
                                                </div>
                                                <div className="pc_col-12">
                                                    <h6>nuxt, vue, github</h6>
                                                </div>
                                                <div className="pc_col-12">
                                                    <h6>woocommerce, wpbakery</h6>
                                                </div>
                                                <div className="pc_col-12">
                                                    <h6>excel, vba</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fixed_col pc_white neg_margin fixed_bottom">
                                    <div className="pc_contact-child pc_space_evenly">
                                        <div className="pc_logo-child">
                                            <h6><a href="https://www.linkedin.com/in/kyle-huffling-619b9511a/" target="_blank">Linkedin</a></h6>
                                        </div>
                                        <div className="pc_logo-child">
                                            <h6><a href="/assets/resume.pdf" target="_blank">Resume PDF</a></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main_content">
                            <section className="hero-img pc_box_shadow" style={{
                                backgroundImage: `url(${heroBanner.src})`
                            }}>
                                <div className="pc_row">
                                    <div className="pc_col-8 pc_white">
                                        <div className="pc_hero_text typewriter">
                                            <h1>Kyle Huffling</h1>
                                            <div className="special_text">
                                                <>{'<code>'}</>
                                                <div className="typewriter_l1">I am a front end web developer
                                                </div>
                                                <div className="typewriter_l2 animation_delay">specializing in WordPress and Hubspot.
                                                </div>
                                                <>{'</code>'}</>
                                            </div>
                                            <div className="button_container hero_button"><a className="pc_button" href="images/resume.pdf" traget="_blank">Download Resume</a></div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="special_section">
                                <div className="pc_row pc_space_evenly">
                                    <div className="special_number_wrapper">
                                        <div className="special_number">3+</div>
                                        <div className="special_number_text">
                                            Years of professional <br /> Web Development
                                        </div>
                                    </div>
                                    <div className="special_number_wrapper">
                                        <div className="special_number">3+</div>
                                        <div className="special_number_text">
                                            Years of professional <br /> Web Development
                                        </div>
                                    </div>
                                    <div className="special_number_wrapper">
                                        <div className="special_number">3+</div>
                                        <div className="special_number_text">
                                            Years of professional <br /> Web Development
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="skills_section">
                                <h2>My Skills</h2>
                                <div className="pc_row_ed">
                                    <div className="skills_card bg_white pc_box_shadow">
                                        <div className="skills_text_wrapper">
                                            <h3>
                                                Theme Development
                                            </h3>
                                            <p>
                                                I build custom themes in WordPress and HubSpot CMS. My themes are optimized for site speed and are made to be easily edited by non-technical users such as marketers and site owners.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="skills_card bg_white pc_box_shadow">
                                        <div className="skills_text_wrapper">
                                            <h3>
                                                Theme Development
                                            </h3>
                                            <p>
                                                I build custom themes in WordPress and HubSpot CMS. My themes are optimized for site speed and are made to be easily edited by non-technical users such as marketers and site owners.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="skills_card bg_white pc_box_shadow">
                                        <div className="skills_text_wrapper">
                                            <h3>
                                                Theme Development
                                            </h3>
                                            <p>
                                                I build custom themes in WordPress and HubSpot CMS. My themes are optimized for site speed and are made to be easily edited by non-technical users such as marketers and site owners.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="skills_card bg_white pc_box_shadow">
                                        <div className="skills_text_wrapper">
                                            <h3>
                                                Theme Development
                                            </h3>
                                            <p>
                                                I build custom themes in WordPress and HubSpot CMS. My themes are optimized for site speed and are made to be easily edited by non-technical users such as marketers and site owners.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="skills_card bg_white pc_box_shadow">
                                        <div className="skills_text_wrapper">
                                            <h3>
                                                Theme Development
                                            </h3>
                                            <p>
                                                I build custom themes in WordPress and HubSpot CMS. My themes are optimized for site speed and are made to be easily edited by non-technical users such as marketers and site owners.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="skills_card bg_white pc_box_shadow">
                                        <div className="skills_text_wrapper">
                                            <h3>
                                                Theme Development
                                            </h3>
                                            <p>
                                                I build custom themes in WordPress and HubSpot CMS. My themes are optimized for site speed and are made to be easily edited by non-technical users such as marketers and site owners.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
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
