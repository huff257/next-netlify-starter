export default function SimpleCard({ size, title, subtitle, date, description }) {
if(subtitle){
  return (
              <div className="skills_card bg_white pc_box_shadow" style={{ flexGrow: 0, flexShrink: 0, flexBasis: size, maxWidth: size }}>
                <div className="skills_text_wrapper">
                  <div className="pc_row justify-spc-btwn">
                    <div className="skill_col-1">
                      <h3>{title}</h3>
                      <h4>{subtitle}</h4>
                    </div>
                    <div className="skill_col-2">
                      <div className="history_date">{date}</div>
                    </div>
                  </div>
                  <p>
                    {description}
                  </p>
                </div>
              </div>
  )
  }else{
    return(
      <div className="skills_card bg_white pc_box_shadow" style={{ flexGrow: 0, flexShrink: 0, flexBasis: size, maxWidth: size }}>
      <div className="skills_text_wrapper">
        <h3>
          {title}
        </h3>
        <p>
          {description}
        </p>
      </div>
    </div>     
    )
  }
}