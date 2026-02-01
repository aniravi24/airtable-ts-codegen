#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const _1 = require(".");
const escapeIdentifier_1 = require("./escape/escapeIdentifier");
const apiKey = process.env.AIRTABLE_API_KEY;
if (!apiKey) {
    throw new Error('No Airtable API key set. Make sure the AIRTABLE_API_KEY environment variable is set.');
}
const baseId = process.env.AIRTABLE_BASE_ID;
if (!baseId) {
    throw new Error('No Airtable base id set. Make sure the AIRTABLE_BASE_ID environment variable is set.');
}
const viewIds = process.env.AIRTABLE_VIEW_IDS;
const attachmentTypeEnv = process.env.AIRTABLE_ATTACHMENT_TYPE;
const attachmentType = attachmentTypeEnv === 'Attachment' ? 'Attachment' : 'string';
const config = {
    apiKey, baseId, ...(viewIds && { viewIds: viewIds.split(',') }), attachmentType,
};
const generateCode = async () => {
    console.log(`Generating TypeScript definitions for base ${baseId}${viewIds ? ` with views ${viewIds}` : ''}...`);
    return (0, _1.main)(config);
};
generateCode().then((result) => {
    const filename = `${(0, escapeIdentifier_1.escapeIdentifier)(baseId)}.ts`;
    (0, fs_1.writeFileSync)(filename, result);
    console.log(`Generated ${filename}`);
}).catch((err) => {
    console.error(err);
    process.exit(1);
});
