import type { Config } from './index';
import { type BaseSchema } from './getBaseSchema';
/**
 * Filter base schema based on view IDs.
 * If viewIds are specified:
 * - Only include tables that have at least one matching view
 * - For grid views with visibleFieldIds, filter fields to only visible ones
 * - Throw error if any view ID doesn't match any table
 */
export declare const filterBaseSchemaByView: (baseSchema: BaseSchema, config: Config) => Promise<BaseSchema>;
