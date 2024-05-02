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

import { ThirdPartyOAuthProvider } from '../models/ThirdPartyOAuthProvider';
import { HttpFile } from '../http/http';

export class CreateAuthPlayerRequest {
    /**
    * The third party user id.
    */
    'thirdPartyUserId': string;
    'thirdPartyProvider': ThirdPartyOAuthProvider;
    /**
    * Pre generate embedded account.
    */
    'preGenerateEmbeddedAccount': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "thirdPartyUserId",
            "baseName": "thirdPartyUserId",
            "type": "string",
            "format": ""
        },
        {
            "name": "thirdPartyProvider",
            "baseName": "thirdPartyProvider",
            "type": "ThirdPartyOAuthProvider",
            "format": ""
        },
        {
            "name": "preGenerateEmbeddedAccount",
            "baseName": "preGenerateEmbeddedAccount",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateAuthPlayerRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



