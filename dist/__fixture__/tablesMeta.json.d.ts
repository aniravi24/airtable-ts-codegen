/**
 * Dump of an airtable table containing all field types.
 */
export declare const tablesMeta: {
    tables: {
        id: string;
        name: string;
        primaryFieldId: string;
        fields: ({
            type: string;
            id: string;
            name: string;
            options?: never;
            description?: never;
        } | {
            type: string;
            options: {
                choices: {
                    id: string;
                    name: string;
                    color: string;
                }[];
                isReversed?: never;
                referencedFieldIds?: never;
                prompt?: never;
                icon?: never;
                color?: never;
                dateFormat?: never;
                timeFormat?: never;
                timeZone?: never;
                precision?: never;
                symbol?: never;
                durationFormat?: never;
                max?: never;
                isValid?: never;
                formula?: never;
                result?: never;
                recordLinkFieldId?: never;
                fieldIdInLinkedTable?: never;
            };
            id: string;
            name: string;
            description?: never;
        } | {
            type: string;
            options: {
                isReversed: boolean;
                choices?: never;
                referencedFieldIds?: never;
                prompt?: never;
                icon?: never;
                color?: never;
                dateFormat?: never;
                timeFormat?: never;
                timeZone?: never;
                precision?: never;
                symbol?: never;
                durationFormat?: never;
                max?: never;
                isValid?: never;
                formula?: never;
                result?: never;
                recordLinkFieldId?: never;
                fieldIdInLinkedTable?: never;
            };
            id: string;
            name: string;
            description?: never;
        } | {
            type: string;
            options: {
                referencedFieldIds: string[];
                prompt: (string | {
                    field: {
                        fieldId: string;
                    };
                })[];
                choices?: never;
                isReversed?: never;
                icon?: never;
                color?: never;
                dateFormat?: never;
                timeFormat?: never;
                timeZone?: never;
                precision?: never;
                symbol?: never;
                durationFormat?: never;
                max?: never;
                isValid?: never;
                formula?: never;
                result?: never;
                recordLinkFieldId?: never;
                fieldIdInLinkedTable?: never;
            };
            id: string;
            name: string;
            description: string;
        } | {
            type: string;
            options: {
                icon: string;
                color: string;
                choices?: never;
                isReversed?: never;
                referencedFieldIds?: never;
                prompt?: never;
                dateFormat?: never;
                timeFormat?: never;
                timeZone?: never;
                precision?: never;
                symbol?: never;
                durationFormat?: never;
                max?: never;
                isValid?: never;
                formula?: never;
                result?: never;
                recordLinkFieldId?: never;
                fieldIdInLinkedTable?: never;
            };
            id: string;
            name: string;
            description?: never;
        } | {
            type: string;
            options: {
                dateFormat: {
                    name: string;
                    format: string;
                };
                choices?: never;
                isReversed?: never;
                referencedFieldIds?: never;
                prompt?: never;
                icon?: never;
                color?: never;
                timeFormat?: never;
                timeZone?: never;
                precision?: never;
                symbol?: never;
                durationFormat?: never;
                max?: never;
                isValid?: never;
                formula?: never;
                result?: never;
                recordLinkFieldId?: never;
                fieldIdInLinkedTable?: never;
            };
            id: string;
            name: string;
            description?: never;
        } | {
            type: string;
            options: {
                dateFormat: {
                    name: string;
                    format: string;
                };
                timeFormat: {
                    name: string;
                    format: string;
                };
                timeZone: string;
                choices?: never;
                isReversed?: never;
                referencedFieldIds?: never;
                prompt?: never;
                icon?: never;
                color?: never;
                precision?: never;
                symbol?: never;
                durationFormat?: never;
                max?: never;
                isValid?: never;
                formula?: never;
                result?: never;
                recordLinkFieldId?: never;
                fieldIdInLinkedTable?: never;
            };
            id: string;
            name: string;
            description?: never;
        } | {
            type: string;
            options: {
                precision: number;
                choices?: never;
                isReversed?: never;
                referencedFieldIds?: never;
                prompt?: never;
                icon?: never;
                color?: never;
                dateFormat?: never;
                timeFormat?: never;
                timeZone?: never;
                symbol?: never;
                durationFormat?: never;
                max?: never;
                isValid?: never;
                formula?: never;
                result?: never;
                recordLinkFieldId?: never;
                fieldIdInLinkedTable?: never;
            };
            id: string;
            name: string;
            description?: never;
        } | {
            type: string;
            options: {
                precision: number;
                symbol: string;
                choices?: never;
                isReversed?: never;
                referencedFieldIds?: never;
                prompt?: never;
                icon?: never;
                color?: never;
                dateFormat?: never;
                timeFormat?: never;
                timeZone?: never;
                durationFormat?: never;
                max?: never;
                isValid?: never;
                formula?: never;
                result?: never;
                recordLinkFieldId?: never;
                fieldIdInLinkedTable?: never;
            };
            id: string;
            name: string;
            description?: never;
        } | {
            type: string;
            options: {
                durationFormat: string;
                choices?: never;
                isReversed?: never;
                referencedFieldIds?: never;
                prompt?: never;
                icon?: never;
                color?: never;
                dateFormat?: never;
                timeFormat?: never;
                timeZone?: never;
                precision?: never;
                symbol?: never;
                max?: never;
                isValid?: never;
                formula?: never;
                result?: never;
                recordLinkFieldId?: never;
                fieldIdInLinkedTable?: never;
            };
            id: string;
            name: string;
            description?: never;
        } | {
            type: string;
            options: {
                icon: string;
                max: number;
                color: string;
                choices?: never;
                isReversed?: never;
                referencedFieldIds?: never;
                prompt?: never;
                dateFormat?: never;
                timeFormat?: never;
                timeZone?: never;
                precision?: never;
                symbol?: never;
                durationFormat?: never;
                isValid?: never;
                formula?: never;
                result?: never;
                recordLinkFieldId?: never;
                fieldIdInLinkedTable?: never;
            };
            id: string;
            name: string;
            description?: never;
        } | {
            type: string;
            options: {
                isValid: boolean;
                formula: string;
                referencedFieldIds: string[];
                result: {
                    type: string;
                    options?: never;
                };
                choices?: never;
                isReversed?: never;
                prompt?: never;
                icon?: never;
                color?: never;
                dateFormat?: never;
                timeFormat?: never;
                timeZone?: never;
                precision?: never;
                symbol?: never;
                durationFormat?: never;
                max?: never;
                recordLinkFieldId?: never;
                fieldIdInLinkedTable?: never;
            };
            id: string;
            name: string;
            description?: never;
        } | {
            type: string;
            options: {
                result: {
                    type: string;
                    options: {
                        dateFormat: {
                            name: string;
                            format: string;
                        };
                        timeFormat: {
                            name: string;
                            format: string;
                        };
                        timeZone: string;
                        precision?: never;
                        choices?: never;
                    };
                };
                choices?: never;
                isReversed?: never;
                referencedFieldIds?: never;
                prompt?: never;
                icon?: never;
                color?: never;
                dateFormat?: never;
                timeFormat?: never;
                timeZone?: never;
                precision?: never;
                symbol?: never;
                durationFormat?: never;
                max?: never;
                isValid?: never;
                formula?: never;
                recordLinkFieldId?: never;
                fieldIdInLinkedTable?: never;
            };
            id: string;
            name: string;
            description?: never;
        } | {
            type: string;
            options: {
                isValid: boolean;
                referencedFieldIds: never[];
                result: {
                    type: string;
                    options: {
                        dateFormat: {
                            name: string;
                            format: string;
                        };
                        timeFormat: {
                            name: string;
                            format: string;
                        };
                        timeZone: string;
                        precision?: never;
                        choices?: never;
                    };
                };
                choices?: never;
                isReversed?: never;
                prompt?: never;
                icon?: never;
                color?: never;
                dateFormat?: never;
                timeFormat?: never;
                timeZone?: never;
                precision?: never;
                symbol?: never;
                durationFormat?: never;
                max?: never;
                formula?: never;
                recordLinkFieldId?: never;
                fieldIdInLinkedTable?: never;
            };
            id: string;
            name: string;
            description?: never;
        } | {
            type: string;
            options: {
                isValid: boolean;
                recordLinkFieldId: string;
                fieldIdInLinkedTable: string;
                result: {
                    type: string;
                    options?: never;
                };
                choices?: never;
                isReversed?: never;
                referencedFieldIds?: never;
                prompt?: never;
                icon?: never;
                color?: never;
                dateFormat?: never;
                timeFormat?: never;
                timeZone?: never;
                precision?: never;
                symbol?: never;
                durationFormat?: never;
                max?: never;
                formula?: never;
            };
            id: string;
            name: string;
            description?: never;
        } | {
            type: string;
            options: {
                isValid: boolean;
                recordLinkFieldId: string;
                fieldIdInLinkedTable: string;
                result: {
                    type: string;
                    options: {
                        precision: number;
                        dateFormat?: never;
                        timeFormat?: never;
                        timeZone?: never;
                        choices?: never;
                    };
                };
                choices?: never;
                isReversed?: never;
                referencedFieldIds?: never;
                prompt?: never;
                icon?: never;
                color?: never;
                dateFormat?: never;
                timeFormat?: never;
                timeZone?: never;
                precision?: never;
                symbol?: never;
                durationFormat?: never;
                max?: never;
                formula?: never;
            };
            id: string;
            name: string;
            description?: never;
        } | {
            type: string;
            options: {
                isValid: boolean;
                recordLinkFieldId: string;
                fieldIdInLinkedTable: string;
                result: {
                    type: string;
                    options: {
                        choices: never[];
                        dateFormat?: never;
                        timeFormat?: never;
                        timeZone?: never;
                        precision?: never;
                    };
                };
                choices?: never;
                isReversed?: never;
                referencedFieldIds?: never;
                prompt?: never;
                icon?: never;
                color?: never;
                dateFormat?: never;
                timeFormat?: never;
                timeZone?: never;
                precision?: never;
                symbol?: never;
                durationFormat?: never;
                max?: never;
                formula?: never;
            };
            id: string;
            name: string;
            description?: never;
        })[];
        views: never[];
    }[];
};
