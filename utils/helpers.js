import { errorType } from './constants';

function getErrorCode(errorName) {
    return errorType[errorName];
}

export default {
    getErrorCode
};
