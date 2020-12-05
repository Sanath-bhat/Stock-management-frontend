import axios from 'axios';

const   COMPANY_API_BASE_URL = "http://localhost:8080/getcompany";
const   COMPANY_API_BASE_URL2 = "http://localhost:8080/addcompany";
const   COMPANY_API_BASE_URL3 = "http://localhost:8080/updatecompany";
const   COMPANY_API_BASE_URL5 = "http://localhost:8080/deletecompany";
const   COMPANY_API_BASE_URL6 = "http://localhost:8080/getbycompany";

class CompanyService {

    getCompany(){
        return axios.get(COMPANY_API_BASE_URL);
    }

    createCompany(company){
        return axios.post(COMPANY_API_BASE_URL2, company);
    }

    getByCompany(companyId){
        return axios.get(COMPANY_API_BASE_URL6 + '/' + companyId);
    }

    updateCompany(company, companyId){
        return axios.put(COMPANY_API_BASE_URL3 + '/' + companyId, company);
    }

    deleteCompany(companyId){
        return axios.delete(COMPANY_API_BASE_URL5 + '/' + companyId);
    }
}

export default new CompanyService()