import heroBanner from '../public/images/fulls_stack_devleoper.webp'

export default function Hero() {
  return (
    <section className="hero-img pc_box_shadow" style={{
      backgroundImage: `url(${heroBanner.src})`
    }}>
      <div className="pc_row">
        <div className="pc_col-8 pc_white">
          <div className="pc_hero_text typewriter">
            <h1>Kyle Huffling</h1>
            <div className="special_text">
              <>{'<code>'}</>
              <div class="typewriter_l1">I am a client-focused developer who</div>
              <div class="typewriter_l2">builds fully optimized and easily</div>
              <div class="typewriter_l3 animation_delay">maintained websites.</div>
              <>{'</code>'}</>
            </div>
            <div className="button_container hero_button"><a className="pc_button" href="images/resume.pdf" traget="_blank">Download Resume</a></div>
          </div>
        </div>
      </div>
    </section>
  )
}