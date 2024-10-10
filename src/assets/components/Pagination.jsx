import React from 'react'

const Pagination = (props) => {
    // now lets destructure the props 
    let {pageNo , handleNext , handlePrevious} = props;
  return (
    <div className="bg-gray-400 p-4 h-[50px] w-full mt-8  flex justify-center gap-2">
            <div
            onClick={handlePrevious}
            className="px-8"
            >
            <i className="fa-solid fa-arrow-left"></i>
            </div>

            <div>{pageNo}</div>

            <div
            onClick={handleNext}
            className="px-8"

            >

            <i className="fa-solid fa-arrow-right"></i>
            </div>
    </div>
  )
}

export default Pagination