import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(3, 'must be at least 3 characters'),
    email: yup
        .string()
        .required('email required'),
    password: yup
        .string()
        .required('password required')
        .min(5),
    terms: yup
        .boolean()
        .oneOf([true], 'must accept terms')
})

export default formSchema;