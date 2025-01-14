import React from 'react';
import { useFormikContext } from 'formik';
import AppTextInput from '../AppTextInput';
import ErrorMesage from './ErrorMesage';

function AppFormField({name, ...otherProps}) {
    const {setFieldTouched,handleChange,errors,touched} = useFormikContext();
    return (
        <>
          <AppTextInput
                
                onChangeText={handleChange(name)}
                onBlur={()=>setFieldTouched(name)}
                {...otherProps}
                
            />
            <ErrorMesage error={errors[name]} visible={touched[name]} />  
        </>
    );
}

export default AppFormField;