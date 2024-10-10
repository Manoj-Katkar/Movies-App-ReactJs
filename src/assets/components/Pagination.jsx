// import React from 'react'

// const Pagination = (props) => {
//     // now lets destructure the props 
//     let {pageNo , handleNext , handlePrevious} = props;
//   return (
//     <div className="bg-gray-400 p-4 h-[50px] w-full mt-8  flex justify-center gap-2">
//             <div
//             onClick={handlePrevious}
//             className="px-8"
//             >
//             <i className="fa-solid fa-arrow-left"></i>
//             </div>

//             <div>{pageNo}</div>

//             <div
//             onClick={handleNext}
//             className="px-8"

//             >

//             <i className="fa-solid fa-arrow-right"></i>
//             </div>
//     </div>
//   )
// }

// export default Pagination



import React from 'react'

const Pagination = (props) => {
    // Destructure the props
    let { pageNo, handleNext, handlePrevious } = props;
    
    return (
        <div className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-500 p-4 h-[60px] w-full mt-8 flex justify-center items-center gap-6 shadow-lg rounded-md">
            <div
                onClick={handlePrevious}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-all duration-300 cursor-pointer flex items-center justify-center"
            >
                <i className="fa-solid fa-arrow-left"></i>
            </div>

            <div className="text-black-500 text-xl font-semibold">
                {pageNo}
            </div>

            <div
                onClick={handleNext}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-all duration-300 cursor-pointer flex items-center justify-center"
            >
                <i className="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    )
}

export default Pagination;
