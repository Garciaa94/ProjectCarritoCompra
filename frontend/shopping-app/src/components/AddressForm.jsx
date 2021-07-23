import { ErrorMessage, Field } from "formik";

const AddressForm = () => {
  return (
    <>
      <fieldset className="form-group">
        <label>Address*</label>
        <Field
          className="form-control"
          type="text"
          name="address"
          placeholder="Esmeraldas-Ecuador"
        />
      </fieldset>
      <ErrorMessage name="address" component="p" className="text-danger" />
      <fieldset className="form-group">
        <label>Street Name*</label>
        <Field
          className="form-control"
          type="text"
          name="street"
          placeholder="Esmeraldas Street"
        />
      </fieldset>
      <ErrorMessage name="street" component="p" className="text-danger" />
      <div className="row">
        <div className="col-md-5 mb-3">
          <fieldset className="form-group">
            <label>Country*</label>
            <Field
              className="form-control"
              type="text"
              name="country"
              placeholder="Ecuador"
            />
          </fieldset>
          <ErrorMessage name="country" component="p" className="text-danger" />
        </div>
        <div className="col-md-4 mb-3">
          <fieldset className="form-group">
            <label>State*</label>
            <Field
              className="form-control"
              type="text"
              name="stateName"
              placeholder="Esmeraldas"
            />
          </fieldset>
          <ErrorMessage
            name="stateName"
            component="p"
            className="text-danger"
          />
        </div>
        <div className="col-md-3 mb-3">
          <fieldset className="form-group">
            <label>Zip Code*</label>
            <Field
              className="form-control"
              type="number"
              name="zipCode"
              placeholder="080103"
            />
          </fieldset>
          <ErrorMessage name="zipCode" component="p" className="text-danger" />
        </div>
      </div>
    </>
  );
};

export default AddressForm;
