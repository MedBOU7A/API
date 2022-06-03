import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectContry = () => {
    const [data, setData] = useState([])
    const [filtData, setFiltData] = useState()
    const [loading, setLoading] = useState(true)
    const [choosedCountry, setChoosedCountry] = useState()
    const [citiesList, setCitiesList] = useState([])
useEffect(() => {
  const fetchCountry =async()=>{
   try {
       const {data} =await axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
        setData(data)
        // console.log(data.find(el=>el.country===data[0].country))
        setLoading(false)
        console.log(loading)
        setFiltData([...new Set(data.map(el =>el.country))])
        console.log(filtData)
        console.log(choosedCountry)
        setCitiesList( (data.filter(item=> item.country===choosedCountry)).map(el=>el.name)  ) 
        
   } catch (error) {
       console.log(error)
   }
  }
  fetchCountry()
}, [choosedCountry])
  const handelChange=(e)=>{
    setChoosedCountry(e.target.value)
  }

  
  console.log(citiesList)
      
  return (
    <div>
       <label>chose country</label>
       <select onChange={handelChange} >
         <option value="" > select country</option>
         {
           loading ?<h2>loading...</h2>
           : filtData.map(CountName=>
            <option value={CountName}> {CountName} </option>
            )
         }
       </select>

         <select name="" id="">
           <option value="">choose city</option>
           {
             citiesList.map(city=>
              <option value={city}>{city}</option>
              )
           }

         </select>

    </div>
  )
}

export default SelectContry