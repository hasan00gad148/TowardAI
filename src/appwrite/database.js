import { Client, Databases,ID ,Query, Storage ,Permission,Account ,Role} from "appwrite";



export default class databasesService {

    client = new Client();
    constructor(dispatcher){

        this.client.setEndpoint(import.meta.env.VITE_appwrite_URL)
        .setProject(import.meta.env.VITE_project_ID);

        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
        this.user = new Account(this.client).get();

        this.dispatcher = dispatcher;
    }


    async getBlogs(offset=0){
        try {
            let res = await this.databases.listDocuments(
                import.meta.env.VITE_database_ID,
                import.meta.env.VITE_collection_ID,
                [
                    Query.limit(10),
                    Query.offset(offset*10),
                ]
            );  
            return res;
        } catch (error) {
            console.error("appwrite/database/getBlogs",error);   
            return false;
        }
    }


    async getBlogById(id){
        try {
            let res = await this.databases.getDocument(
                import.meta.env.VITE_database_ID,
                import.meta.env.VITE_collection_ID,
                id
            );  
            return res;
        } catch (error) {
            console.error("appwrite/database/getBlogById",error);   
            return false;
        }
    }


    async getBLogsByTitle(title,offset=0){
        try {
            let res = await this.databases.listDocuments(
                import.meta.env.VITE_database_ID,
                import.meta.env.VITE_collection_ID,
                [
                    Query.equal('title', [title]),
                    Query.limit(10),
                    Query.offset(offset*10),
                ]
            );
            return res;  
        } catch (error) {
            console.error("appwrite/database/getBlogs",error);   
            return false;
        }
    }


    async addBlog(){
        try {
            let res = await this.databases.createDocument(
                import.meta.env.VITE_database_ID,
                import.meta.env.VITE_collection_ID,
                ID.unique(),
                [
                   Permission.read(Role.any()),
                   Permission.update(Role.user(this.user.$id)),
                   Permission.delete(Role.user(this.user.$id)),
                   Permission.write(Role.user(this.user.$id))
                ]
            );  
            return res;
        } catch (error) {
            console.error("appwrite/database/getBlogs",error);   
            return false;
        }
    }


    async editBlog(id,data){

        try {
            const res = await this.databases.updateDocument(
                import.meta.env.VITE_database_ID,
                import.meta.env.VITE_collection_ID,
                id, // documentId
                {...data}, // data (optional)
            );
            return res;  
        } catch (error) {
            console.error("appwrite/database/editBlog",error);   
            return false;
        }
    }


    async deleteBlog(id){
        try {
                await this.databases.deleteDocument(
                import.meta.env.VITE_database_ID,
                import.meta.env.VITE_collection_ID,
                id // documentId
            );
            return true;
        } catch (error) {
            console.error("appwrite/database/deleteBlog",error);   
            return false;
        }
    }


    async getImage(id){
        try {
            const result = await this.storage.getFile(
                import.meta.env.VITE_bucket_ID, // bucketId
                id// fileId
            );
            return
        } catch (error) {
            console.error("appwrite/database/getImage",error);   
            return false;
        }
    }


    async getImagePrivew(id , width, height, quality) { 
        
        try {
            const res = this.storage.getFilePreview(
                import.meta.env.VITE_bucket_ID, // bucketId
                id, // fileId
                width, // width (optional)
                height, // height (optional)
                null, // gravity (optional)
                quality, // quality (optional)
            );
            return res;
        } catch (error) {
            console.error("appwrite/database/getImagePrivew",error);   
            return false;
        }
    }


    async addImage(file){   
        try {
            const res = this.storage.createFile(
                import.meta.env.VITE_bucket_ID,
                ID.unique(),
                file
            );
            return res;
        } catch (error) {
            console.error("appwrite/database/addImage",error);   
            return false;
        }
    }


    async deleteImage(imageId){
        try {
            await this.storage.deleteFile(
                import.meta.env.VITE_bucket_ID, // bucketId
                imageId // fileId
            );
            return true;
        } catch (error) {
            console.error("appwrite/database/imageId",error);   
            return false;
        }
    }

    urlImage(imageId){
        return`https://cloud.appwrite.io/v1/storage/buckets/
        ${import.meta.env.VITE_bucket_ID}/files/${imageId}/
        view?project=${import.meta.env.VITE_project_ID}&mode=admin`
    }

}