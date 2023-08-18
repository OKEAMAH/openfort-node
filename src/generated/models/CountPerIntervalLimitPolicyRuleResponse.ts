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

import { EntityTypePOLICYRULE } from '../models/EntityTypePOLICYRULE';
import { PolicyRateLimitCOUNTPERINTERVAL } from '../models/PolicyRateLimitCOUNTPERINTERVAL';
import { PolicyRuleTypeRATELIMIT } from '../models/PolicyRuleTypeRATELIMIT';
import { TimeIntervalType } from '../models/TimeIntervalType';
import { HttpFile } from '../http/http';

export class CountPerIntervalLimitPolicyRuleResponse {
    'id': string;
    'object': EntityTypePOLICYRULE;
    'createdAt': number;
    'type': PolicyRuleTypeRATELIMIT;
    'functionName': PolicyRateLimitCOUNTPERINTERVAL;
    'countLimit': number;
    'timeIntervalType': TimeIntervalType;
    'timeIntervalValue': number;

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
            "type": "PolicyRuleTypeRATELIMIT",
            "format": ""
        },
        {
            "name": "functionName",
            "baseName": "functionName",
            "type": "PolicyRateLimitCOUNTPERINTERVAL",
            "format": ""
        },
        {
            "name": "countLimit",
            "baseName": "countLimit",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "timeIntervalType",
            "baseName": "timeIntervalType",
            "type": "TimeIntervalType",
            "format": ""
        },
        {
            "name": "timeIntervalValue",
            "baseName": "timeIntervalValue",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return CountPerIntervalLimitPolicyRuleResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


