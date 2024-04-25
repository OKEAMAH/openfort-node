/**
 * Openfort API
 * Complete Openfort API references and guides can be found at: https://openfort.xyz/docs
 *
 * OpenAPI spec version: 1.0.0
 * Contact: founders@openfort.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SortOrder } from '../models/SortOrder';
import { HttpFile } from '../http/http';

export class PagingQueries {
    /**
    * Specifies the maximum number of records to return.
    */
    'limit'?: number;
    /**
    * Specifies the offset for the first records to return.
    */
    'skip'?: number;
    'order'?: SortOrder;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "skip",
            "baseName": "skip",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "SortOrder",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PagingQueries.attributeTypeMap;
    }

    public constructor() {
    }
}



