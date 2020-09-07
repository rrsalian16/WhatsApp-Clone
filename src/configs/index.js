import ROUTES from './routes';
import API_MAP from './url-api';

export const API_URL = 'https://api_base_url';

export const API_SETTINGS = {
    API_URL,
};

export const config = {
    ROUTES,
    API_SETTINGS,
    API_MAP,
    API_URL,
};

export default function ConfigStorage() {
    return config;
}
