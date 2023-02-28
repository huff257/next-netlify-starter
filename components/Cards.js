export default function Cards({ title, size, addClass, content }) {

  return (
    <section className={addClass}>
      <h2>{title}</h2>
      <div className="pc_row">
        {Object.values(content).map((key, index) => {

          if (key['Subtitle']) {
            return (
              <div className="skills_card bg_white pc_box_shadow" style={{ flexGrow: 0, flexShrink: 0, flexBasis: size, maxWidth: size }}>
                <div className="skills_text_wrapper">
                  <div className="pc_row justify-spc-btwn">
                    <div className="skill_col-1">
                      <h3>{key['Title']}</h3>
                      <h4>{key['Subtitle']}</h4>
                    </div>
                    <div className="skill_col-2">
                      <div className="history_date">{key['Date']}</div>
                    </div>
                  </div>
                  <p>
                    {key['Description']}
                  </p>
                </div>
              </div>
            )
          }

          return (
            <div className="skills_card bg_white pc_box_shadow" style={{ flexGrow: 0, flexShrink: 0, flexBasis: size, maxWidth: size }}>
              <div className="skills_text_wrapper">
                <h3>
                  {key['Title']}
                </h3>
                <p>
                  {key['Description']}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}