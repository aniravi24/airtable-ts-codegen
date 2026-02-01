import { type FieldSchema } from './getBaseSchema';
export type JsTypeOptions = {
    /** Type to use for multipleAttachments fields */
    attachmentType?: 'string' | 'Attachment' | undefined;
};
/**
 * Returns the corresponding Typescript type for the given Airtable field type.
 *
 * Unsupported fields return `null` and will be filtered out by the caller.
 */
export declare const jsTypeForAirtableType: (field: FieldSchema, options?: JsTypeOptions) => string | null;
