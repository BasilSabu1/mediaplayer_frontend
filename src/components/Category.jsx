import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { addToCategory, getAVideo, getCategories, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import {Row,Col} from 'react-bootstrap';
import VideoCard from '../components/VideoCard'

function Category() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categoryName , setCategoryName] = useState({})

  const [allCategory, setAllcategory] = useState([]);

  // function to get all category
  const getallCategory = async () => {
    const {data} = await getCategories();
    console.log(data);
    setAllcategory(data);
  };
  console.log(allCategory);

  useEffect(() => {
    getallCategory();
  },[]);

  // function to add category
  const handleCategory = async()=>{
    console.log(categoryName);
    if(categoryName){
      let body= {
        categoryName,
        allVideos : []
      }
      // make api call
      const response = await addToCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success('Category Successfully Added');
        // to make the state null after successfully added
        setCategoryName("")
        // to close modal
        handleClose()
      }
      else{
        console.log(response);
        toast.error('Something went wrong. Please try again later')
      }
    }
    else{
      toast.warning('Please fill the form completly')
    }
  }

  // dragover eventListener
  const dragOver =(e)=>{
    // this will prevent reload so that the data that we send from videocard.jsx won't be lost
    e.preventDefault()
    console.log('inside dragover');
  }

  const videoDrop = async(e, categoryId)=>{
    console.log(`dropped inside the categoryid ${categoryId}`);
    // to get the videoid that is send from videoCard component
   const videoid = e.dataTransfer.getData("videoID")
   console.log(videoid);

    // api to get the particular video that is dragged
  const {data} = await getAVideo(videoid)
  console.log(data);
  
  // to find a particular category with the specified id
  let selectedCategory = allCategory?.find(item=>item.id===categoryId)
  console.log(selectedCategory);
  // data is added to allVideos array in the particular category with the specified id
  selectedCategory.allVideos.push(data)
  console.log(selectedCategory);

  await updateCategory(categoryId,selectedCategory)
  getallCategory()
}
  

 



  return (
  <>
      <div className='d-grid '>
          <button onClick={handleShow} className='btn btn-warning'>Add New Category</button>
      </div>

        { allCategory?.length>0?
          allCategory?.map((item)=>( <div className='m-5 border border-success rounded p-3'>
            <div className='d-flex justify-content-between align-items-center' droppable onDragOver={(e)=>dragOver(e)}
            onDrop={(e)=>videoDrop(e, item?.id)}>
              <h6>{item.categoryName}</h6>
              <Button variant="btn btn-danger">
              <i className="fa-solid fa-trash-can"></i>
            </Button>
            </div>
            <Row>
              <Col sm={12}>
                {
                  item.allVideos?.length>0?
                  item.allVideos.map(card=>(<VideoCard displayVideo={card}/>))
                  :<p>Nothing to display</p>
                }
              </Col>
            </Row>
          </div>))
          :<p>Nothing to display</p>
        }
  
      <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      >
      <Modal.Header closeButton>
        <Modal.Title>Add Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form className='border border-secondary p-3 rounded '>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>category Name</Form.Label>
        <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
      </Form.Group>
    </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleCategory}>Add </Button>
      </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
      
  </>
  )
}

export default Category