import profilePic from '../public/images/kyle_huffling_headshot.webp'

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
                <p><a href="tel: 8643604227">(864) 360-4227</a></p>
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
            <div className="fixed_col" >
              <h5 className="side_col_heading">Technologies</h5>
              <div className="pc_row">
                <div className="pc_col-12">
                  <h6>Javascript, PHP, SQL, HTML, CSS</h6>
                </div>
              </div>
              <div className="pc_row">
                <div className="pc_col-12">
                  <h6>Bootstrap, Sass, Grid, Flexbox</h6>
                </div>
              </div>
              <div className="pc_row">
                <div className="pc_col-12">
                  <h6>jQuery, Ajax, JSON</h6>
                </div>
                <div className="pc_col-12">
                  <h6>React, Nuxt, Vue, Github</h6>
                </div>
                <div className="pc_col-12">
                  <h6>Hubl</h6>
                </div>
                <div className="pc_col-12">
                  <h6>excel, vba</h6>
                </div>
              </div>
            </div>
            <div className="fixed_col">
            <h5 className="side_col_heading">CMSs/Frameworks</h5>
            <div className="pc_contact-child pc_space_evenly">
              <div className="pc_row">
                <div className="pc_col-12">
                  <h6>React, WordPress, HubSpot</h6>
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
                  <h6><a href="/public/images/STEVENKYLE_HUFFLING.pdf" target="_blank">Resume PDF</a></h6>
                </div>
            </div>
          </div>
        </div>
      </div>
  )
}