import React from 'react';

export default function Form(props) {
    const {
        values,
        submit,
        change,
       
        errors,
    } = props
    const { name, email, password, terms } = props.values;
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox ' ? checked : value;
        change(name, valueToUse)
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <p>{errors.name}</p>
            <label>Name:&nbsp;
                <input
                    value={name}
                    onChange={onChange}
                    name='name'
                    type='text'
                />
            </label>
            <label>Email:&nbsp;
                <input
                    value={email}
                    onChange={onChange}
                    name='email'
                    type='email'
                />
            </label>
            <label>Password:&nbsp;
                <input
                    value={password}
                    onChange={onChange}
                    name='password'
                    type='password'
                />
            </label>
            <label>Accept Terms:&nbsp;
                <input
                    checked={terms}
                    onChange={onChange}
                    name='terms'
                    type='checkbox'
                />
            </label>
            <button >submit</button>

        </form>

    )
}