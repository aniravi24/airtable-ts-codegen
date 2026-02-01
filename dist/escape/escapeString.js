"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeString = void 0;
/** Used for single-quoted strings. */
const escapeString = (str) => str.replace(/'/g, '\\\'').replace(/\n/g, '\\n');
exports.escapeString = escapeString;
