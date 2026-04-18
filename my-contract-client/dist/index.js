import { Buffer } from "buffer";
import { Client as ContractClient, Spec as ContractSpec, } from "@stellar/stellar-sdk/contract";
export * from "@stellar/stellar-sdk";
export * as contract from "@stellar/stellar-sdk/contract";
export * as rpc from "@stellar/stellar-sdk/rpc";
if (typeof window !== "undefined") {
    //@ts-ignore Buffer exists
    window.Buffer = window.Buffer || Buffer;
}
export const networks = {
    testnet: {
        networkPassphrase: "Test SDF Network ; September 2015",
        contractId: "CAUX56NFO67OWPTC5E3N5SDRPXUQYDQJPHVLNB55PFMO5UKBGX26P6GM",
    }
};
export class Client extends ContractClient {
    options;
    static async deploy(
    /** Options for initializing a Client as well as for calling a method, with extras specific to deploying. */
    options) {
        return ContractClient.deploy(null, options);
    }
    constructor(options) {
        super(new ContractSpec(["AAAAAAAAAAAAAAAEZnVuZAAAAAMAAAAAAAAABmNsaWVudAAAAAAAEwAAAAAAAAAGYW1vdW50AAAAAAALAAAAAAAAAAh0b2tlbl9pZAAAABMAAAAA",
            "AAAAAAAAAAAAAAAHcmVsZWFzZQAAAAAEAAAAAAAAAAZjbGllbnQAAAAAABMAAAAAAAAACmZyZWVsYW5jZXIAAAAAABMAAAAAAAAABmFtb3VudAAAAAAACwAAAAAAAAAIdG9rZW5faWQAAAATAAAAAA=="]), options);
        this.options = options;
    }
    fromJSON = {
        fund: (this.txFromJSON),
        release: (this.txFromJSON)
    };
}
