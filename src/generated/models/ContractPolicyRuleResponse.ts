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

import { ContractPolicyRuleResponseContract } from '../models/ContractPolicyRuleResponseContract';
import { EntityTypePOLICYRULE } from '../models/EntityTypePOLICYRULE';
import { PolicyRuleTypeCONTRACT } from '../models/PolicyRuleTypeCONTRACT';
import { HttpFile } from '../http/http';

export class ContractPolicyRuleResponse {
    'id': string;
    'object': EntityTypePOLICYRULE;
    'createdAt': number;
    'type': PolicyRuleTypeCONTRACT;
    'contract': ContractPolicyRuleResponseContract;
    'functionName': string;

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
            "type": "EntityTypePOLICYRULE",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PolicyRuleTypeCONTRACT",
            "format": ""
        },
        {
            "name": "contract",
            "baseName": "contract",
            "type": "ContractPolicyRuleResponseContract",
            "format": ""
        },
        {
            "name": "functionName",
            "baseName": "functionName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ContractPolicyRuleResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


