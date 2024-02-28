
import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";
// api to upload video

export const uploadAllVideo = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}

// api to get all video

export const getAllvideos = async()=>{
    return await commonAPI('GET',`${serverURL}/videos`,"")
}

// api to delete a video

export const deleteVideos = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

// api to add watch history

export const addToHistory = async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}/History`,videoDetails)
}

// to get data from the history

export const getAllHistory = async()=>{
    return await commonAPI('GET',`${serverURL}/History`,"")
}


// api to delete watch history

export const deleteHistory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/History/${id}`,{})
}

// api to add category

export const addToCategory = async(body)=>{
    return await commonAPI('POST',`${serverURL}/Category`,body)
 }

// api to get all categories

export const getCategories = async()=>{
    return await commonAPI('GET',`${serverURL}/Category`,"")
}

// api to get a video

export const getAVideo = async(id)=>{
    return await commonAPI('GET',`${serverURL}/Videos/${id}`,"")
}

// api call to update the category

export const updateCategory = async(id, body)=>{
    return await commonAPI('PUT',`${serverURL}/Category/${id}`,body)
}
