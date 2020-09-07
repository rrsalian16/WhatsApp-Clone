import { URL_MAP } from '../constants/urls';
import { generatePath } from 'react-router';

const { BASE_URL, LOGIN, SAMPLE } = URL_MAP;

export const buildRoute = (...args) => {
    return (
        args.reduce((prevRoute, item) => {
            return prevRoute + (typeof item === 'number' || item.indexOf('(') === -1 ? `/${item}` : item);
        }, '')
    );
};

export const applyRouteParams = (path, params) => {
    return generatePath(path, params);
};

const ROUTES = {
    ROOT: `/${BASE_URL}`,
    LOGIN: buildRoute(LOGIN),
    SAMPLE: buildRoute(SAMPLE),
}

export default ROUTES;