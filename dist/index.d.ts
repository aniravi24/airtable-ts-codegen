export type Config = {
    apiKey: string;
    baseId: string;
    viewIds?: string[];
    endpointUrl?: string;
    requestTimeout?: number;
    customHeaders?: Record<string, string | number | boolean>;
    /**
     * Type to use for multipleAttachments fields.
     * - 'string': generates `string[]` (array of URLs only)
     * - 'Attachment': generates `Attachment[]` (full metadata including id, filename, size, etc.)
     * @default 'string'
     */
    attachmentType?: 'string' | 'Attachment';
};
export declare const main: (config: Config) => Promise<string>;
