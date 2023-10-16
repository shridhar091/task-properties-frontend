
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetProperties, startGetSearchedProperties,setGetFilterPurchase,setGetFilterProperty,startSortProperty } from "../actions/propertiesAction";
import '../style.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [search, setSearch] = useState('');
  const [value,setValue] = useState('')
  const [category1,setCategory1] = useState('')
  const[select,setSelect]=useState('')

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetProperties());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(startGetSearchedProperties(e.target.value));
  };

  const properties = useSelector((state) => state.properties.data);
  
  const options = ['Buy','Rent','PG/Co-Living']

  const category = ['Flat','Apartment','Independent House','Pent House','Villa','Office Space','Warehouse','Commercial Land','Commercial Space']

  const sort=['Amount-Low to High','Amount-High to Low']

  const handleButton=(e)=>{
    setValue(e.target.value)
    dispatch(setGetFilterPurchase(e.target.value))
  }

  const handleValue=(e)=>{
    setCategory1(e.target.value)
    dispatch(setGetFilterProperty(e.target.value,value))
  }

  const handleSort=(e)=>{
    setSelect(e.target.value)
    if(e.target.value.length){ 
        dispatch(startSortProperty(e.target.value))
    }
   
}
 
  const handleClick = (e) =>{
    window.location.reload(false);
  }

  return (
    <div className="dashboard-container">
      <div className="search-bar">

        <div className="heading1">
        <h2>Filters</h2>
        <h2 onClick={handleClick} style={{cursor:'pointer'}}><FontAwesomeIcon icon={faSync}/></h2>
        </div>

        <hr/>

        <h4>Location</h4>
        <input type="text" value={search} onChange={handleSearch} placeholder="Search location" />
        
        <hr/>

        <h2>I want to</h2>
        {options.map((ele)=>{
            return (
                <button type='radio' name='options' value={ele} onClick={handleButton}>{ele}</button>
            )
        })}

        <hr/>

        <h2>Property Type</h2>
        {category.map((ele,i)=>{
            return (
                <button key={i} type='radio' name='category' value={ele} onClick={handleValue}>{ele}</button>
            )
        })}
      </div>

      <div className="properties-list">
        {value && category1 ? <h4>{properties?.length} - {value} for {category1}</h4>:undefined}
        
        <div className="selecttag">
         <select value={select} onChange={handleSort} >
              <option value="" > Sort By </option>
              {sort.map((ele)=>{
                return <option key={ele._id} value={ele._id}>{ele}</option>
              })}  
         </select>
        </div>

        {properties?.map((ele, index) => (
          <div key={index} className="property-item">

             <div className="image">
             <img src={`http://127.0.0.1:3090/${ele.image}`} alt="Property" style={{width:'100%',height:'100%'}}/>
             </div>

            <ul>
                <div className="listclass">
                 <li className="list1">₹ - {ele.amount}</li>

                 <div className="fontawesome">
                  <FontAwesomeIcon icon={faPlus} style={{marginRight:'10px'}}/>
                  <FontAwesomeIcon icon={faShare}/>
                 </div>

                </div>

                <li className="list2">{ele.description}</li> 
                <li className="list3">{ele.location}</li>
              
                <hr/>

              <div className="fontawesome2">
                <li className="list4">{ele.project}</li>
              <div>
                <FontAwesomeIcon icon={faHeart} style={{marginRight:'10px'}}/>
                <FontAwesomeIcon icon={faPhone} style={{marginRight:'10px'}}/>
                <FontAwesomeIcon icon={faComment}/>
              </div>
              </div>
            </ul>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;







