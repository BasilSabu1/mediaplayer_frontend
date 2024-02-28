import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllvideos } from '../services/allAPI'

function View({uploadVideostatus}) {

    const [allVideo , setAllVideo] =useState([])

    const [deleteVideoStatus , setDeleteVideoStatus] = useState(false)

    const getAllUploadedVideos = async()=>{
    const response = await getAllvideos()
    /* console.log(response);  */
    const {data}= response
    /* console.log(data); */
     setAllVideo(data)
  }
  console.log(allVideo);

  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoStatus(false)
  },[uploadVideostatus , deleteVideoStatus])
  return (
    <>
      <Row>
        {allVideo.length>0?
        allVideo?.map((video)=>(
          <Col sm={12} md={6} lg={4} xl={3}>
            <VideoCard displayVideo = {video} setDeleteVideoStatus = {setDeleteVideoStatus}/>
        </Col>
        ))
        
        :
        <p>Nothing to display</p>
        }
      </Row>
    </>
  )
}

export default View