import React from 'react'
import FeaturesGrid from './GridLayout'

const Features = () => {
  return (
      <section className="py-20 w-[1728px] bg-[#FAFAFA] mt-10 mx-auto">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mauline mb-6 relative inline-block leading-tight">
                  Designed with You and Your
                  <br />
                  Guests <span className="text-[#D81159]">in Mind</span>
              </h2>

              <p className="font-maiandra text-[#0D0D0D] text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto pt-5 leading-relaxed">
                  Explore the features that will bring your big day to life, making
                  your wedding celebration unforgettable
              </p>
          </div>

          <div>
              {/* <FeaturesGrid/> */}
          </div>
      </section>
  )
}

export default Features