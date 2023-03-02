import deviceMockup from '../public/images/desktop_device.webp'


export default function Work({ title, size, addClass, content }) {

    return (
      <section className={addClass}>
        <h2>{title}</h2>
        <div className="pc_row">
          {Object.values(content).map((key, index) => {
              return (
                <div className="skills_card bg_white pc_box_shadow" style={{ flexGrow: 0, flexShrink: 0, flexBasis: size, maxWidth: size }}>
                  <div className="skills_text_wrapper">
                    <div className="pc_row justify-spc-btwn">
                      <div className="work-wrapper">
                        <img className="static-hover" src={deviceMockup.src}></img>
                        <div class="static_wrapper">
                          <img width="auto" height="auto" className="static" src={key['Placeholder']}></img>
                        </div>
                        <div className="gif_wrapper">
                          <video
                            autoPlay loop muted playsInline>
                            <source src={key['Mp4']} type="video/mp4" />                         
                          </video>
                        </div>
                      </div>
                    </div>
                    <h3>{key['Title']}</h3>
                    <p>{key['Description']}</p>
                  </div>
                </div>
              )
          })}
        </div>
      </section>
    )
  }