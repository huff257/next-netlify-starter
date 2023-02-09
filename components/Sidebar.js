import profilePic from '../public/images/kyle_huffling_headshot.webp'
import wordPress from '../public/images/WordPress-logo.png'
import hubSpot from '../public/images/hubspot_logo.png'

export default function SideBar() {
  return (
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
  )
}