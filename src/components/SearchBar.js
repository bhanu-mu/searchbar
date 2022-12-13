import React,{ useState } from "react";
import "./search.css";
import  SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({placeholder,data}){
 const[filteredData,setFilteredData] =useState([]);
 const[wordEntered,setWordEntered] = useState("");

 const handleFilter=(event) =>{
  const searchWord= event.target.value
  setWordEntered(searchWord);
  const newFilter = data.filter((value)=>{
    return value.name.includes(searchWord);
});


 if(searchWord ===""){
    setFilteredData([]);
 }else{
 setFilteredData(newFilter);
 }
 };

 const clearInput=()=>
 setFilteredData([]);
 
    return(
        <div className="Search">
            <div className="SearchInputs"> 
                <input
                 type="text"
                 placeholder={placeholder} 
                 onChange={handleFilter} />
                <div class="SearchIcon">
                    {filteredData.length=== 0 ?
                    (<SearchIcon/>) :
                    (<CloseIcon id="clearBtn" onClick={clearInput} />
                    )}
                  </div>
             </div>
                  { filteredData.length !=0 && ( 
                   <div className="dataResults">
                    {filteredData.slice(0,15).map((value,key)=>{
                      return(
                     <a className="dataItem" href={value.url} target="_blank">
                      <p>{value.name}</p>
                      </a>
           );
           })}
        </div>
         )} 
        </div>
    );
}

export default SearchBar;