import { Client, Account, ID } from "appwrite";



export default class authService {
    constructor() { 

        this.client = new Client();
        this.client.setEndpoint(import.meta.env.VITE_appwrite_URL)
        .setProject(import.meta.env.VITE_project_ID);

        this.account = new Account(this.client);
    }

    async getUser() {
        try {
            const res = await this.account.get();
            console.log(res)
            return res;
        } catch (error) {
            console.error("appwrite/auth/getUser",error);   
            return false;
        }
    }

    async signup(username, email, password) {
        try {
            const res = await this.account.create(ID.unique(), email, password, username);
            return res
        } catch (error) {
            console.error("appwrite/auth/signup",error);   
            return false;
        }
    }

    async signin(email, password){
        try {
           await this.account.createEmailPasswordSession(email, password);
           let user = await this.getUser()
           return user;
        } catch (error) {
            console.error("appwrite/auth/signin",error);
            return false;
        }
    }

    async logout(){
        const deleteAllCookies = () => {
            const cookies = document.cookie.split(";");
            console.log("deleteAllCookies",cookies);
            for (let i = 0; i < cookies.length; i++) {

              const cookie = cookies[i];
              const eqPos = cookie.indexOf("=");
              const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
              document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
              if (name.match(/^a_session_\d+/)) 
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
          };
        try {
             await this.account.deleteSession('current');
             deleteAllCookies()
             localStorage.removeItem('cookieFallback');
             return true
        } catch (error) {
            console.error("appwrite/auth/signout",error);
            return false
        }

    }
}