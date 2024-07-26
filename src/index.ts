import { Web3PluginBase } from "web3";
import { Client, cacheExchange, fetchExchange, DocumentInput, AnyVariables } from '@urql/core';

export class GraphQLPlugin extends Web3PluginBase {
    public pluginNamespace = "GraphQL";
    private graphqlURL = "";
    private urqlClient: Client | null = null;


    public getURL = (): string => {
        return this.graphqlURL;
    }

    public setURL = (url:string) : void => {
        this.graphqlURL = url;
        this.urqlClient = new Client({
            url: url,
            exchanges: [cacheExchange, fetchExchange]
        })
    }

    public sendQuery = async (query: DocumentInput<any, AnyVariables>, variables: AnyVariables) => {
        if(this.urqlClient == null) throw "GraphQL URL Missing";
        const result = await this.urqlClient.query(query, variables)
        return result;
    }
}


declare module "web3" {
    interface Web3Context {
        GraphQL: GraphQLPlugin;
    }
}