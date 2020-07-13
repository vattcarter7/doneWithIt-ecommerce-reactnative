import React, { Fragment } from 'react';
import { useFormikContext } from 'formik';

import Picker from '../Picker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <Fragment>
      <Picker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </Fragment>
  );
}

export default AppFormPicker;
