import { clientsData } from '../data/clients/clientsData';

export const getClientInfo = (slug:string) => {
    const data = clientsData.filter(client => client.slug === slug);
    
    return data[0] ? data[0] : null;
}