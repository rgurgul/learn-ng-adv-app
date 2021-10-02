import { Validators } from "@angular/forms";

export enum FieldTypes {
  input = 'input',
  password = 'password',
  contenteditable = 'contenteditable',
  textarea = 'textarea',
  select = 'select',
  radio = 'radio',
  button = 'button'
}

export interface FieldConfig {
  name: string;
  type: FieldTypes;
  label?: string;
  value?: string;
  placeholder?: string;
  options?: string[];
  direction?: 'horizontal' | 'vertical',
  validators?: FieldValidator[];
  id?: string;
  cssClass?: string;
}

export interface FieldValidator {
  name: keyof typeof Validators;
  param?: any;
  message: string;
}

export enum FormEvents {
  submit = 'submit',
  update = 'update'
}

export interface FormValue {
  type: FormEvents,
  payload: {},
  errors?: any[] | null;
}

export function createFieldConfig(
  name: string,
  type: FieldTypes,
  label?: string,
  value?: string,
  placeholder?: string,
  cssClass?: string,
  validators?: FieldValidator[],
  options?: string[],
  id?: string): FieldConfig {
  return { type, name, label, value, placeholder, cssClass, validators, options, id }
}
