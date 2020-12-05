import axios from 'axios';

const   USER_API_BASE_URL = "http://localhost:8080/adduser";
const   USER_API_BASE_URL2 = "http://localhost:8080/getuser";

const   USER_API_BASE_URL3 = "http://localhost:8080/updateuser";
const   USER_API_BASE_URL5 = "http://localhost:8080/deleteuser";
const   USER_API_BASE_URL6 = "http://localhost:8080/getbyuser";
class UserService {

    createUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }
     getUser(){
        return axios.get(USER_API_BASE_URL2);

    }
    getByUser(userId){
        return axios.get(USER_API_BASE_URL6 + '/' + userId);
    }

    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL3 + '/' + userId, user);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL5 + '/' + userId);
    }

}

export default new UserService()