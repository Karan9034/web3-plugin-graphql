import Web3, { Web3Eth, core } from "web3";
import { SubgraphPlugin } from "../src";

const SUBGRAPH_URL = "https://gateway-arbitrum.network.thegraph.com/api/344d17813d0efa14bbdb243d75427985/subgraphs/id/Sxx812XgeKyzQPaBpR5YZWmGV5fZuBaPdh7DFhzSwiQ";
const SAMPLE_QUERY = `
{
  lidoConfigs(first: 5) {
    id
    insuranceFund
    oracle
    treasury
  }
  lidoTransfers(first: 5) {
    id
    from
    to
    value
  }
}
`

describe("SubgraphPlugin Tests", () => {
    it("should register SubgraphPlugin on Web3Context instance", () => {
        const web3Context = new core.Web3Context("http://127.0.0.1:8545");
        web3Context.registerPlugin(new SubgraphPlugin());
        expect(web3Context.Subgraph).toBeDefined();
    });
    it("should register SubgraphPlugin on Web3Eth instance", () => {
        const web3Eth = new Web3Eth("http://127.0.0.1:8545");
        web3Eth.registerPlugin(new SubgraphPlugin());
        expect(web3Eth.Subgraph).toBeDefined();
    });
    
    describe("SubgraphPlugin method tests", () => {
        let web3Context: Web3;
        // let consoleSpy: jest.SpiedFunction<typeof global.console.log>;

        beforeAll(() => {
            web3Context = new Web3("http://127.0.0.1:8545");
            web3Context.registerPlugin(new SubgraphPlugin());
            // consoleSpy = jest.spyOn(global.console, "log").mockImplementation();
        });

        afterAll(() => {
            // consoleSpy.mockRestore();
        });


        it("subgraphURL should be empty", () => {
            const url = web3Context.Subgraph.getURL();
            expect(url).toBe("");
        })
        it("should set subgraphURL correctly", () => {
            web3Context.Subgraph.setURL(SUBGRAPH_URL);
            const url = web3Context.Subgraph.getURL();
            expect(url).toBe(SUBGRAPH_URL);
        })

        it("should send query successfully", async () => {
            const result = await web3Context.Subgraph.sendQuery(SAMPLE_QUERY)
            console.log(result.data)
        })
    });
});