import conf from "../config/config";

import { Client, Databases, Query, Storage , ID } from "appwrite";

export class Service{
    client =new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appWriteURL)
            .setProject(conf.appWriteProjectId)
        //console.log(conf.appWriteProjectId);
            
        this.databases=new Databases(this.client)
        this.bucket=new Storage(this.client)
    }
    
    async createPost({title, content, featuredImg, slug, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status,
                    userId
                }    
            )
            } catch (error) {
            throw error;
            }
        }
    
    async updatePost(slug, {title, content, featuredImg, status})
    {
        try {
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status
                }
            )
        } catch (error) {
            throw error;  
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            throw error;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
        } catch (error) {
            throw error
        }

    }

    async getPosts(queries= [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries
            )
        } catch (error) {
            throw error;
        }
    }
    
    //FILE UPLOAD METHODS/SERVICES
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file,
                //document.getElementById('uploader').file(0)
            )
        } catch (error) {
            console.log("Appwrite Service :: Upload File :: Error", error);
            return false
        }
    }

    async delFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: Delete file :: Error", error);
            return false
        }
    }

    filePreview(fileId){
        this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        )
    }
}
const service = new Service();

export default service;