import { Web3PluginBase } from "web3";
import { Client, cacheExchange, fetchExchange, DocumentInput, AnyVariables } from '@urql/core';

export class SubgraphPlugin extends Web3PluginBase {
    public pluginNamespace = "Subgraph";
    private subgraphURL = "";
    private urqlClient: Client | null = null;


    public getURL = (): string => {
        return this.subgraphURL;
    }

    public setURL = (url:string) : void => {
        this.subgraphURL = url;
        this.urqlClient = new Client({
            url: url,
            exchanges: [cacheExchange, fetchExchange]
        })
    }

    public sendQuery = async (query: DocumentInput<any, AnyVariables>, variables: AnyVariables) => {
        if(this.urqlClient == null) throw "Subgraph URL Missing";
        const result = await this.urqlClient.query(query, variables)
        return result;
    }
}


declare module "web3" {
    interface Web3Context {
        Subgraph: SubgraphPlugin;
    }
}