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

import { EntityIdResponse } from '../models/EntityIdResponse';
import { EntityTypePOLICY } from '../models/EntityTypePOLICY';
import { Policy } from '../models/Policy';
import { PolicyStrategy } from '../models/PolicyStrategy';
import { HttpFile } from '../http/http';

/**
* The policy ID (starts with pol_).
*/
export class TransactionIntentResponsePolicy {
    'id': string;
    'object': EntityTypePOLICY;
    'createdAt': number;
    'name': string | null;
    'deleted': boolean;
    'enabled': boolean;
    /**
    * The chain ID.
    */
    'chainId': number;
    'paymaster'?: EntityIdResponse;
    'strategy': PolicyStrategy;
    'transactionIntents': Array<EntityIdResponse>;
    'policyRules': Array<EntityIdResponse>;

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
            "type": "EntityTypePOLICY",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "paymaster",
            "baseName": "paymaster",
            "type": "EntityIdResponse",
            "format": ""
        },
        {
            "name": "strategy",
            "baseName": "strategy",
            "type": "PolicyStrategy",
            "format": ""
        },
        {
            "name": "transactionIntents",
            "baseName": "transactionIntents",
            "type": "Array<EntityIdResponse>",
            "format": ""
        },
        {
            "name": "policyRules",
            "baseName": "policyRules",
            "type": "Array<EntityIdResponse>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransactionIntentResponsePolicy.attributeTypeMap;
    }

    public constructor() {
    }
}



