// import React, { useState } from "react";
// import './index.css'
// import 'react-date-range/dist/styles.css'; 
// import 'react-date-range/dist/theme/default.css'; 
// import { DateRangePicker } from 'react-date-range';
// import Nav from "./Nav";

// function Search (){
//     const [startDate, SetStartDate] =useState (new Date());
//     const [endDate, setEndDate] =useState (new Date());
//     const [ showSearch, setShowSearch] = useState (false);
    
//     const selectionRange = {
//         startDate:startDate,
//         endDate:endDate,
//         key:"selection",
//     };

// function handleSelect(ranges){
//     SetStartDate (ranges.selection.startDate);
//     setEndDate (ranges.selection.endDate);
// }


//     return (
//         <div> 
//             <Nav/>
// < DateRangePicker ranges= {
//     [selectionRange]} onChange= {handleSelect}/>

//         <div><h2 className="flex align-center justify-between p-1 w-559 bg-slate-700">
//         Number of Guests
//     </h2>  <input min={0} defaultValue={2} type="number"/>
//     <button className=" mb-2  mt-2 bg-red-600 hover-bg-red-700 text-white font-semibold px-44 py-2 rounded-lg "> Search House</button></div>
//             </div>
  
//   {showSearch && <Search />}
//   <button className="bg-red-500 text-white px-4 py-2 mx-auto block justify-center" onClick={() => setShowSearch(!showSearch)}>
//   Search
//   </button>
            

//     )
// }
// export default Search