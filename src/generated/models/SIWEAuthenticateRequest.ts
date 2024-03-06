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

import { HttpFile } from '../http/http';

export class SIWEAuthenticateRequest {
    /**
    * Signature of the EIP-712 message with the user\'s wallet.
    */
    'signature': string;
    /**
    * The EIP-712 message to sign.
    */
    'message': string;
    /**
    * The wallet client of the user
    */
    'walletClientType': string;
    /**
    * The connector type of the user
    */
    'connectorType': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "signature",
            "baseName": "signature",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "walletClientType",
            "baseName": "walletClientType",
            "type": "string",
            "format": ""
        },
        {
            "name": "connectorType",
            "baseName": "connectorType",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SIWEAuthenticateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
