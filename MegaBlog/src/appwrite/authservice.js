import conf from "../config/config";

import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appWriteURL)
            .setProject(conf.appWriteProjectId)
        this.account=new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const userAccount=await this.account.create(ID.unique(),email,password,name)
            if (userAccount) {
                //call login method
                return this.login({email,password})
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error("AuthService :: login :: error", error);
            throw new Error(`Failed to log in: ${error.message}`);
        }
    }
    

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("Appwrite service :: getCurrentUser :: error", error);
            // Optional: You might want to handle the error differently here
            // e.g., show a user-friendly message or perform additional actions
        }
        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            throw error;
        }
    }

}

const authService= new AuthService();

export default authService;