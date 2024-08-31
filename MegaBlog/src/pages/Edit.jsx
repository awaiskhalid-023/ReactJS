import React, {useEffect, useState} from 'react'
import {PostForm, Container} from '../components'
import appwriteService from '../appwrite/configuration'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
    const [editPost, setEditPost]= useState(null)
    const {slug}= useParams
    const navigate= useNavigate()

    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((editPost)=>{
                if(editPost){
                    setEditPost(editPost)
                }
                else navigate('/')
            })
        }
    },[slug, navigate])

    return editPost ? (
        <div className='py-8'>
            <Container>
                <PostForm editPost={editPost} />
            </Container>
        </div>
      ) : null
}

export default Edit
