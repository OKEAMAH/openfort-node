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

import { NotificationTriggerResponse } from '../models/NotificationTriggerResponse';
import { ResponseTypeLIST } from '../models/ResponseTypeLIST';
import { HttpFile } from '../http/http';

export class NotificationTriggerListResponse {
    'object': ResponseTypeLIST;
    'url': string;
    'data': Array<NotificationTriggerResponse>;
    'start': number;
    'end': number;
    'total': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "ResponseTypeLIST",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<NotificationTriggerResponse>",
            "format": ""
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "end",
            "baseName": "end",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return NotificationTriggerListResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



