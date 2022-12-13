import { React, useEffect, useState } from 'react';
import './search.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import data from './airports.json';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Searchbar() {
    const [filterData, setfilterData] = useState([]);
    const [Enteredword, setEnteredword] = useState('');
    const [userdata,setuserdata]=useState([]);
    // const [query, setquery]= useState('');

    const handlefilter = (event) => {
        const searchword = event.target.value;
        setEnteredword(searchword);
        const newfilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchword.toLowerCase());
        });
        if (searchword.length === 0) {
            setfilterData([]);
        }
         else if(searchword.length === 3){
            const searchword = event.target.value;
            const searchdata=filterData.filter((item)=>item.name.toLowerCase().includes(searchword));
            setfilterData(searchdata);
            setfilterData(newfilter);
        }
    }
    const clear = () => {
        setfilterData([]);
        setEnteredword("")
    }
    const onsearch = (searchword)=>{
        setEnteredword(searchword);
    }
    useEffect(()=>{
        const getUserdata= async()=>{
            const reqData = await fetch('./airports.json');
            const resData = await reqData.json();
            // console.log(resData,"hai")
            setfilterData(resData);
            setuserdata(resData)
        }
        getUserdata();
    },[]);
    return (
        <div className='page'>
            <h1>AIRPORT SEARCHBAR</h1>
            <div className='search'>
                <div className='searchInputs'>
                    <input type='text' placeholder='Search here .....' onChange={handlefilter} value={Enteredword} />
                    <div className='searchIcon'>
                        {filterData.length === 0 ? <SearchIcon /> : <CloseIcon id="cbutton" onClick={clear} />}
                    </div>
                </div>
                {filterData.length != 0 && (
                    <div className='dataresult'>
                        {filterData.slice(0, 15).map((value, key) => {
                            return <div className='dataitem' onClick={()=>onsearch(value.name)}>{value.name}</div>
                        })}
                    </div>
                )}
            </div>
            <div className='tablestyle'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
            <TableCell>country</TableCell>
            <TableCell>Woeid</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterData.slice(0,1).map((getUserdata, name) => (
            <TableRow
              key={name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{getUserdata.name}</TableCell>
              <TableCell>{getUserdata.city}</TableCell>
              <TableCell>{getUserdata.state}</TableCell>
              <TableCell>{getUserdata.country}</TableCell>
              <TableCell>{getUserdata.woeid}</TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
    {/* Table */}
            </div>
        </div>
    )
} export default Searchbar;