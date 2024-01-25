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

import { AccountPolicyRuleResponse } from '../models/AccountPolicyRuleResponse';
import { ContractNotificationTriggerResponseContract } from '../models/ContractNotificationTriggerResponseContract';
import { ContractPolicyRuleResponse } from '../models/ContractPolicyRuleResponse';
import { CountPerIntervalLimitPolicyRuleResponse } from '../models/CountPerIntervalLimitPolicyRuleResponse';
import { EntityTypePOLICYRULE } from '../models/EntityTypePOLICYRULE';
import { GasPerIntervalLimitPolicyRuleResponse } from '../models/GasPerIntervalLimitPolicyRuleResponse';
import { GasPerTransactionLimitPolicyRuleResponse } from '../models/GasPerTransactionLimitPolicyRuleResponse';
import { PolicyRateLimitCOUNTPERINTERVAL } from '../models/PolicyRateLimitCOUNTPERINTERVAL';
import { PolicyRuleTypeRATELIMIT } from '../models/PolicyRuleTypeRATELIMIT';
import { TimeIntervalType } from '../models/TimeIntervalType';
import { HttpFile } from '../http/http';

export class PolicyRuleResponse {
    'id': string;
    'object': EntityTypePOLICYRULE;
    'createdAt': number;
    'type': PolicyRuleTypeRATELIMIT;
    'contract': ContractNotificationTriggerResponseContract;
    'functionName': PolicyRateLimitCOUNTPERINTERVAL;
    'gasLimit': string;
    'timeIntervalType': TimeIntervalType;
    'timeIntervalValue': number;
    'countLimit': number;

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
            "name": "contract",
            "baseName": "contract",
            "type": "ContractNotificationTriggerResponseContract",
            "format": ""
        },
        {
            "name": "functionName",
            "baseName": "functionName",
            "type": "PolicyRateLimitCOUNTPERINTERVAL",
            "format": ""
        },
        {
            "name": "gasLimit",
            "baseName": "gasLimit",
            "type": "string",
            "format": ""
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
        },
        {
            "name": "countLimit",
            "baseName": "countLimit",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return PolicyRuleResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



