export default function Experience() {
  const experience = {
    exp2: {
      type: 'Web Development',
      num_years: 4
    },
    exp3: {
      type: 'Project Management',
      num_years: 4
    },
    exp1: {
      type: 'Development',
      num_years: 6
    }
  }

  return (
    <section className="special_section">
      <div className="pc_row pc_space_evenly">
        {Object.values(experience).map((key, index) => {
          return (
            <div className="special_number_wrapper">
              <div className="special_number">{key['num_years']}+</div>
              <div className="special_number_text">
                Years of professional <br /> {key['type']}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}