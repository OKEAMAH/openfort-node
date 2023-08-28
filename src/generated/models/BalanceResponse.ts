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

import { Money } from '../models/Money';
import { HttpFile } from '../http/http';

export class BalanceResponse {
    'balance': Money;
    'expenses': Money;
    'payments': Money;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "balance",
            "baseName": "balance",
            "type": "Money",
            "format": ""
        },
        {
            "name": "expenses",
            "baseName": "expenses",
            "type": "Money",
            "format": ""
        },
        {
            "name": "payments",
            "baseName": "payments",
            "type": "Money",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BalanceResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

