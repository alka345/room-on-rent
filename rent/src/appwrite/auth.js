import conf from "../conf/conf.js";
import {Client, Account, ID} from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor()
    {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
               
    }

    //new user register a new account 
    async createAccount({email,password,name}){
        try {
         const userAccount = await this.account.create(ID.unique(), email, password, name);
        
         if (userAccount) {
            return this.login({email,password});
         } else {
            return userAccount;
         }
        } catch (error) {
            throw error;
        }

    }

    //user login inti their account by providing a valid email and password combination
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
            // return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    //get the currently logged in user
        async getCurrentUser(){
            try {
               return await this.account.get();
            } catch (error) {
                console.log("Appwite service :: getCurrentUser::error",error);
            }
            return null;
        }

    //delete all sessions  from user account
        async logout(){
            try {
               await this.account.deleteSessions();
            } catch (error) {
                console.log("Appwrite service ::logout::error",error);
            }
        }
    }


const authService = new AuthService();

export default authService