import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import axiosInstance from "./baseurl";
import { BsFilterLeft,BsFilterRight } from "react-icons/bs";



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
    const [storedata,setstoredata]=useState({
        pollOption:""
    })
    const onchangeradio=(e)=>{
        setstoredata({[e.target.name]:e.target.value})
    }
    // useEffect(()=>{
    //     console.log(storedata)
    // })
    const [count,setcount]=useState({
        option1:0,
        option2:0,
        option3:0,
        option4:0
    })
    const percentage=(qid,option1,option2,option3,option4)=>{
        axiosInstance.post(`/viewoption/${qid}`)
        .then((result)=>{
          if(result.status===200){
            console.log(result.data.data)
            const p1=result.data.data.filter((a)=>a.pollOption===option1)
            const p2=result.data.data.filter((a)=>a.pollOption===option2)
            const p3=result.data.data.filter((a)=>a.pollOption===option3)
            const p4=result.data.data.filter((a)=>a.pollOption===option4)
            // console.log(result.data.data.length)
            const w = Math.floor((p1.length / result.data.data.length) * 100);
            const x=Math.floor((p2.length/result.data.data.length)*100)
            const y=Math.floor((p3.length/result.data.data.length)*100)
            const z=Math.floor((p4.length/result.data.data.length)*100)
            setcount({
                option1:w,
                option2:x,
                option3:y,
                option4:z
            })

          }
        })
        .catch((error)=>{
          console.log('error',error)
          alert("something problem")
        })


    }

    const [display,setdisplay]=useState(false)

    const onsubmitt=(e,idpoll,option1,option2,option3,option4)=>{
        e.preventDefault()
        console.log("data eneterd",idpoll,storedata)
        axiosInstance.post(`/radiovalue/${idpoll}`,storedata)
        .then((result)=>{
          if(result.status===200){
            console.log(result)
            alert("data added")
            percentage(idpoll,option1,option2,option3,option4)//to function
            setdisplay(true)
          }
        })
        .catch((error)=>{
          console.log('error',error)
          alert("something problem")
        })

    }
    return (
      <div className='main_div_polllist'>
          <div className='second_main_div_pollist'>
            <label className='poll_head'><BsFilterRight/>POLLING LIST<BsFilterLeft/></label>
          <Accordion defaultActiveKey="0" className='accordion_div_pollist'>
                {viewpoll.map((p,index)=>{
                    return (
                        <div key={index}>
                            <Accordion.Item eventKey={index} onClick={()=>{setdisplay(false)}}>
                            <Accordion.Header><label className='fw-bold'>{p.question}</label></Accordion.Header>
                            <Accordion.Body>
                            <form className='input_field_polllist' onSubmit={(e)=>{onsubmitt(e,p._id,p.option1,p.option2,p.option3,p.option4)}}>
                                <div className='input_poll_list_div'>
                                    <div className='radio_sub_main_div'>
                                    <input type="radio" name="pollOption" className='input_poll_list' value={p.option1} checked={storedata.pollOption === p.option1} onChange={onchangeradio}/>
                                    <label className='label_pollist'>{p.option1}</label>
                                    </div>
                                    <div className={`range_div ${display? '':'d-none'}`}>
                                        <input type="range" min="0" max="100" value={count.option1}/>{count.option1}%
                                    </div>
                                </div>
                                <div className='input_poll_list_div'>
                                    <div className='radio_sub_main_div'>
                                        <input type="radio" name="pollOption" className='input_poll_list' value={p.option2} checked={storedata.pollOption === p.option2} onChange={onchangeradio}/>
                                        <label className='label_pollist'>{p.option2}</label>
                                    </div>
                                    <div className={`range_div ${display? '':'d-none'}`}>
                                        <input type="range" min="0" max="100" value={count.option2}/>{count.option2}%
                                    </div>
                                </div>
                                
                                <div className='input_poll_list_div'>
                                    <div className='radio_sub_main_div'>
                                        <input type="radio" name="pollOption" className='input_poll_list' value={p.option3} checked={storedata.pollOption === p.option3} onChange={onchangeradio}/>
                                        <label className='label_pollist'>{p.option3}</label>
                                    </div>
                                    <div className={`range_div ${display? '':'d-none'}`}>
                                        <input type="range" min="0" max="100" value={count.option3}/>{count.option3}%
                                    </div>
                                </div>
                                <div className='input_poll_list_div'>
                                    <div className='radio_sub_main_div'>
                                        <input type="radio" name="pollOption" className='input_poll_list' value={p.option4} checked={storedata.pollOption === p.option4} onChange={onchangeradio}/>
                                        <label className='label_pollist'>{p.option4}</label>
                                    </div>
                                    <div className={`range_div ${display? '':'d-none'}`}>
                                        <input type="range" min="0" max="100" value={count.option4}/>{count.option4}%
                                    </div>                                </div>
                                <div><input type='submit' value="Vote Here" className='submit_div'/></div>
                            </form>
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
  