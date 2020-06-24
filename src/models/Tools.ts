import { validate, ValidatorOptions } from 'class-validator';

/** Tools Class to create and convert Data for an easier use of Api */
export class Tools {
    /**
     * VERIFY DATA |
     * @param {any} data - Object created with one of the model classes
     * @returns {any} - New object with all errors informations or a string validation
     */
    static verify = (data: any): any => {
        const validatorOptions: ValidatorOptions = {
            forbidUnknownValues: true,
        };
        return validate(
            data,
            { validationError: { target: false } },
            validatorOptions,
        ).then((errors) => {
            if (errors.length > 0) {
                return errors;
            } else {
                return 'Validation succeed';
            }
        });
    };
}