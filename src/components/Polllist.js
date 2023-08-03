import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import axiosInstance from "./baseurl";


function Polllist() {
    const[viewpoll,setViewpoll]=useState([])
    useEffect(()=>{
        axiosInstance.post("/viewpoll")
        .then((result)=>{
            console.log(result,"datacome")
            setViewpoll(result.data.data)
        })
        .catch((res) => {
            console.log(res);
          });
    },[])
    const onsubmitt=(e)=>{

    }
    return (
      <div>
          <div>
          <Accordion defaultActiveKey="0">
                {viewpoll.map((p,index)=>{
                    return (
                        <div>
                            <Accordion.Item eventKey="index">
                            <Accordion.Header>{p.question}</Accordion.Header>
                            <Accordion.Body>
                            <div>
                                <input type="radio" name="option1"/><label>{p.option1}</label>
                                <input type="radio" name="option2"/><label>{p.option1}</label>
                                <input type="radio" name="option3"/><label>{p.option3}</label>
                                <input type="radio" name="option4"/><label>{p.option4}</label>
                                <input type='submit' onClick={onsubmitt}/>
                            </div>
                            </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        )
                })}        
       </Accordion>
          </div>
      </div>
    )
  }
  
  export default Polllist
  