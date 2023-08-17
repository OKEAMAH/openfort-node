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

import { Abi } from '../models/Abi';
import { ContractResponse } from '../models/ContractResponse';
import { EntityTypeCONTRACT } from '../models/EntityTypeCONTRACT';
import { PickContractResponseId } from '../models/PickContractResponseId';
import { HttpFile } from '../http/http';

export class PolicyRuleResponseContract {
    'id': string;
    'object': EntityTypeCONTRACT;
    'createdAt': number;
    'name': string | null;
    'chainId': number;
    'address': string;
    'deleted': boolean;
    'abi': Array<Abi>;
    'publicVerification': boolean;

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
            "type": "EntityTypeCONTRACT",
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
            "name": "chainId",
            "baseName": "chainId",
            "type": "number",
            "format": "double"
        },
        {
            "name": "address",
            "baseName": "address",
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
            "name": "abi",
            "baseName": "abi",
            "type": "Array<Abi>",
            "format": ""
        },
        {
            "name": "publicVerification",
            "baseName": "publicVerification",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PolicyRuleResponseContract.attributeTypeMap;
    }

    public constructor() {
    }
}


