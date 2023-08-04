import React, { useEffect, useState } from 'react'
import axiosInstance from "./baseurl";

function Addpoll() {
  const [Addpoll,setAddpoll]=useState({
    question:"",
    option1:"",
    option2:"",
    option3:"",
    option4:""
  })
  const onchangehandle=(a)=>{
    setAddpoll({...Addpoll,[a.target.name]:a.target.value})
  }
  useEffect(()=>{
    console.log(Addpoll)
  })
  const onchangesubmitt=(e)=>{
    e.preventDefault()
    console.log("submit button worked")
    axiosInstance.post("/addpoll",Addpoll)
    .then((result)=>{
      if(result.status===200){
        console.log(result)
        alert("data added")
      }
    })
    .catch((error)=>{
      console.log('error',error)
      alert("something problem")
    })

  }
  return (
      <form onSubmit={onchangesubmitt}>
    <div className='main_div_addpoll'>
      <div className='second_main_div shadow'>
        <label className='label_heading_addpoll'>Enter The Qustions</label>
        <textarea className="textarea_div" placeholder="Enter the question for the poll" name='question' onChange={onchangehandle}></textarea>
        <label className='label_heading_addpoll'>Options</label>
        <div className='options_div_addpoll'>
            <div><input type="text" name="option1" placeholder='Option 1'  onChange={onchangehandle}/></div>
            <div><input type="text" name="option2" placeholder='Option 2'  onChange={onchangehandle}/></div>
            <div><input type="text" name="option3" placeholder='Option 3'  onChange={onchangehandle}/></div>
            <div><input type="text" name="option4" placeholder='Option 4'  onChange={onchangehandle}/></div>
        </div>
        <div>
          <input type='submit' className='submit_addpoll'/>
        </div>
      </div>
        
    </div>
      </form>
  )
}

export default Addpoll
