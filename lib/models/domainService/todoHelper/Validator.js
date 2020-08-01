export default class TodoValidator {
    validateStatus({ status }) {
        const errors = {};
        const allowedStatus = [ 'ACTIVE', 'FINISHED' ];

        if (!allowedStatus.includes(status)) {
            errors.status = `STATUS_${status}_NOT_ALLOWED`;
        }

        return errors;
    }

    validateValue({ value, minLength, maxLength }) {
        const errors = {};

        if (typeof value !== 'string') {
            errors.value = 'VALUE_NOT_STRING';
        }
        if (value.length > maxLength) {
            errors.value = 'TOO_HIGH';
        }
        if (value.length < minLength) {
            errors.value = 'TOO_LOW';
        }

        return errors;
    }
}
