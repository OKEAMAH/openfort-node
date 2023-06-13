/**
 * Openfort API
 * Complete Openfort API references and guides can be found at: https://openfort.xyz/docs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: founders@openfort.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from "./models";
import { PlayerResponseAccounts } from "./playerResponseAccounts";
import { PolicyResponseTransactionIntents } from "./policyResponseTransactionIntents";

export class PlayerResponse {
  "id": string;
  "object": string;
  "createdAt": Date;
  "name": string | null;
  "livemode": boolean;
  "email": string | null;
  "description": string | null;
  "metadata": string;
  "transactionIntents"?: PolicyResponseTransactionIntents;
  "accounts"?: PlayerResponseAccounts;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "object",
      baseName: "object",
      type: "string",
    },
    {
      name: "createdAt",
      baseName: "created_at",
      type: "Date",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "livemode",
      baseName: "livemode",
      type: "boolean",
    },
    {
      name: "email",
      baseName: "email",
      type: "string",
    },
    {
      name: "description",
      baseName: "description",
      type: "string",
    },
    {
      name: "metadata",
      baseName: "metadata",
      type: "string",
    },
    {
      name: "transactionIntents",
      baseName: "transaction_intents",
      type: "PolicyResponseTransactionIntents",
    },
    {
      name: "accounts",
      baseName: "accounts",
      type: "PlayerResponseAccounts",
    },
  ];

  static getAttributeTypeMap() {
    return PlayerResponse.attributeTypeMap;
  }
}
