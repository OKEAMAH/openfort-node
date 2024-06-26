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

import { OAuthInitRequestOptions } from '../models/OAuthInitRequestOptions';
import { OAuthProvider } from '../models/OAuthProvider';
import { HttpFile } from '../http/http';

export class OAuthInitRequest {
    'options'?: OAuthInitRequestOptions;
    /**
    * Use Pooling for the OAuth flow  This option is for the flow that requires the user can\'t be redirected from the authorization page to the application. The client should poll the server to check if the user has authorized the application.
    */
    'usePooling'?: boolean;
    'provider': OAuthProvider;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "options",
            "baseName": "options",
            "type": "OAuthInitRequestOptions",
            "format": ""
        },
        {
            "name": "usePooling",
            "baseName": "usePooling",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "OAuthProvider",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OAuthInitRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



