import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { deleteHistory, getAllHistory } from '../services/allAPI';
import Button from 'react-bootstrap/Button'

function WatchHistory() {

  const [history ,setHistory] =useState([])
  
  const getHistory = async()=>{
    const {data} = await getAllHistory()
    console.log(data);
    setHistory(data)
  }
  console.log(history);

  // function to delete history
  const handleDelete = async(id)=>{
    await deleteHistory(id)
    getHistory()
  }
  useEffect(()=>{
    getHistory()
  },[])
  return (
    <div>
      <h3>Watch History</h3>
      <Link to={'/home'} style={{float:'right',marginRight:'170px',marginLeft:'-150px',textDecoration:'none',color:'white'}}>
        <i class="fa-solid fa-arrow-left me-2"></i>
        Back to Home
      </Link>
     
      <div className='ms-5 ps-5'>
        <Table responsive className='mt-5 align-item-center justify-content-center' >
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {history.length>0?
            history.map((item)=>(<tr>
              <td>{item.id}</td>
              <td>{item.caption}</td>
              <td><a href={item.embedLink} target='_blank'>{item.embedLink}</a></td>
              <td>{item.timeStamp}</td>
              <td><Button onClick={()=>handleDelete(item?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></Button></td>
            </tr>))
            :
            <p>Nothing to display</p>
            } 
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default WatchHistory