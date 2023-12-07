import axios from 'axios';
import {SERVER_IP} from '../../Component/apiIP'

export function getCompanyInfo(companyId) {
  return axios.get(`http://${SERVER_IP}:3305/companies/info`, {
    params: {
      companyId: companyId
    }
  });
}
