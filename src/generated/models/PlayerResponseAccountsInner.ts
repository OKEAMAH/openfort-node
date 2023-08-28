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

import { Account } from '../models/Account';
import { EntityIdResponse } from '../models/EntityIdResponse';
import { EntityTypeACCOUNT } from '../models/EntityTypeACCOUNT';
import { HttpFile } from '../http/http';

export class PlayerResponseAccountsInner {
    'id': string;
    'object': EntityTypeACCOUNT;
    'createdAt': number;
    'address': string;
    'ownerAddress': string;
    'deployed': boolean;
    'custodial': boolean;
    'chainId': number;
    'accountType': string;
    'pendingOwnerAddress'?: string;
    'transactionIntents'?: Array<EntityIdResponse>;

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
            "type": "EntityTypeACCOUNT",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "ownerAddress",
            "baseName": "ownerAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "deployed",
            "baseName": "deployed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "custodial",
            "baseName": "custodial",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "number",
            "format": "double"
        },
        {
            "name": "accountType",
            "baseName": "accountType",
            "type": "string",
            "format": ""
        },
        {
            "name": "pendingOwnerAddress",
            "baseName": "pendingOwnerAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "transactionIntents",
            "baseName": "transactionIntents",
            "type": "Array<EntityIdResponse>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PlayerResponseAccountsInner.attributeTypeMap;
    }

    public constructor() {
    }
}



