import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadAllVideo } from '../services/allAPI';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [video, setVideo] = useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })
/*   console.log(video); */
const embedVideoLink = (e)=>{
  const {value} = e.target
  console.log(value.slice(-11));
  const link = `https://www.youtube.com/embed/${value.slice(-11)}`
  setVideo({...video,embedLink:link})
}
   console.log(video);

   const handleUpload = async ()=>{
    const {id,caption,url,embedLink} = video
    if(!id || !caption || !url || !embedLink){
      toast.warning ('Please fill the form completely')
    }
    else{
      const response = await uploadAllVideo(video)
      /* console.log(response); */
      if(response.status>=200 && response.status<300){
        toast.success(`${response.data.caption} is successfully Uploaded`)

        // to change the value of uploadVideostatus
        setUploadVideoStatus(response.data)

        // making the state value none
        setVideo({
          id:"",
          caption:"",
          url:"",
          embedLink:""
        })

        
        // to close the modal
        handleClose()
      }
      else{
        console.log(response);
        toast.error('Something went wrong. Try again later')
      }
    }
   }
   
  return (
    <div>
    <div className='d-flex p-5 ms-5 mt-3 m-4 mb-4'>
          <h5 style={{marginLeft:'35px',fontSize:'24px'}}>Upload New Video</h5>
          <button onClick={handleShow} className='ms-2' style={{color:'grey',background:'black',border:'hidden',fontSize:"24px"}}><i class="fa-solid fa-cloud-arrow-up fs-5"></i></button>
      </div>
  
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film me-2 text-warning"></i>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the form completely</p>
          <form className='border border-secondary p-3 rounded '>
            
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control onChange={(e)=>setVideo({...video,id:e.target.value})} type="text" placeholder="Enter Video ID" />
          </Form.Group> 

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control onChange={(e)=>setVideo({...video,caption:e.target.value})} type="text" placeholder="Enter Video Caption" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control onChange={(e)=>setVideo({...video,url:e.target.value})} type="text" placeholder="Enter Image Url" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control onChange={embedVideoLink} type="text" placeholder="Enter Youtube Video Link" />
          </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </div>
  )
}
 
export default Add


//https://www.youtube.com/embed/_Z5-P9v3F8w

