"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseSchema = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * Get the schemas from the cache or Airtable API for the tables in the given base.
 * @see https://airtable.com/developers/web/api/get-base-schema
 * @param baseId The base id to get the schemas for
 */
const getBaseSchema = async (baseId, options) => {
    const res = await (0, axios_1.default)({
        baseURL: options.endpointUrl ?? 'https://api.airtable.com',
        url: `/v0/meta/bases/${baseId}/tables`,
        params: {
            include: ['visibleFieldIds'],
        },
        ...(options.requestTimeout ? { timeout: options.requestTimeout } : {}),
        headers: {
            Authorization: `Bearer ${options.apiKey}`,
            ...options.customHeaders,
        },
    });
    return res.data.tables;
};
exports.getBaseSchema = getBaseSchema;
