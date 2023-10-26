import { PATH } from './Constant';

export const Navigations = Object.values(PATH).reduce((acc, portalName) => {
    acc[portalName] = Object.values(PATH[portalName].children)
        .filter(x => x.sidebar)
        .map((pageData, index) => ({
            id: index + 1,
            path: pageData.path,
            pageName: pageData.sidebar.name || pageData.pageName
        }))
    return acc
}, {})