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

import { EntityTypeNOTIFICATION } from '../models/EntityTypeNOTIFICATION';
import { HttpFile } from '../http/http';

export class NotificationDeleteResponse {
    'id': string;
    'object': EntityTypeNOTIFICATION;
    'deleted': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "EntityTypeNOTIFICATION",
            "format": ""
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NotificationDeleteResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



