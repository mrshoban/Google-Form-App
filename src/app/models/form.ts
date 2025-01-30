export interface Field {
    id: string;
    label: string;
    type: 'text' | 'radio' | 'checkbox';
    ptions?: string[];
}

export interface Form {
    id: string;
    name: string;
    fields: Field[];
}

export interface FormResponse {
    formId: string;
    responses: { [fieldId: string]: string | string[] }
}