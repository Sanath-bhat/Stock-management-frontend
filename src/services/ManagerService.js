import axios from 'axios';

const   MANAGER_API_BASE_URL = "http://localhost:8080/getmanager";
const   MANAGER_API_BASE_URL2 = "http://localhost:8080/addmanager";
const   MANAGER_API_BASE_URL3 = "http://localhost:8080/updatemanager";
const   MANAGER_API_BASE_URL5 = "http://localhost:8080/deletemanager";
const   MANAGER_API_BASE_URL6 = "http://localhost:8080/getbymanager";

class ManagerService {

    getManager(){
        return axios.get(MANAGER_API_BASE_URL);
    }

    createManager(cmanager){
        return axios.post(MANAGER_API_BASE_URL2, cmanager);
    }

    getByManager(managerId){
        return axios.get(MANAGER_API_BASE_URL6 + '/' + managerId);
    }

    updateManager(cmanager, managerId){
        return axios.put(MANAGER_API_BASE_URL3 + '/' + managerId, cmanager);
    }

    deleteManager(managerId){
        return axios.delete(MANAGER_API_BASE_URL5 + '/' + managerId);
    }
}

export default new ManagerService()