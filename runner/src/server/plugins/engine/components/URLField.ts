import { URLFieldComponent } from "@xgovformbuilder/model";
import joi, { Schema } from "joi";

import { FormModel } from "../models"; // something to do with the PageController
import { FormData, FormSubmissionErrors } from "../types"; // doesn't the FormData already have the FormSubmissionError?

import { addClassOptionIfNone, getStateSchemaKeys } from "./helpers";
import { FormComponent } from "server/plugins/engine/components/FormComponent";

export class URLField extends FormComponent {
  constructor(def: URLFieldComponent, model: FormModel) {
    super(def, model);
    let schema = joi.string();

    if (def.options.required != false) {
      schema = schema.required();
    } else {
      schema = schema.allow(null).allow("");
    }

    this.formSchema = schema;
    this.stateSchema = schema;

    addClassOptionIfNone(this.options, "govuk-input--width-20");
  }

  getFormSchemaKeys() {
    return { [this.name]: this.formSchema as Schema };
  }
  getStateSchemaKeys() {
    return { [this.name]: this.stateSchema as Schema };
  }

  getViewModel(formData: FormData, errors: FormSubmissionErrors) {
    const viewModel = super.getViewModel(formData, errors);
    viewModel.type = "URL";

    return viewModel;
  }
}
