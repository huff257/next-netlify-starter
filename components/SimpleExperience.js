export default function SimpleExperience({num_years, type}) {

          return (
            <div className="special_number_wrapper">
              <div className="special_number">{num_years}+</div>
              <div className="special_number_text">
                Years of Professional <br /> {type}
              </div>
            </div>
          )
}