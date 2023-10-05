import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_SPACE_MISSION } from "./queries";

export const apolloClient = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});
class SpaceService {
  async getSpaceMission(limit = 10) {
    try {
      const response = await apolloClient.query({
        query: GET_SPACE_MISSION,
        variables: { limit },
      });

      if (!response || !response.data) throw new Error("canot");

      return response.data;
    } catch (e) {}
  }
}

export default new SpaceService();
