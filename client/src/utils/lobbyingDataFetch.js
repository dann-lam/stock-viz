import { opensecretsKey } from "../temp_apikey";
import overviewFetch from "./overviewFetch";
const lobbyingDataFetch = async (search, setLobbyingData) => {
  try {
    //fetch our API call.
    let orgName = await overviewFetch(search);
    console.log("Orgname: ", orgName);
    // const fetched = fetch();
    // return fetched;
  } catch (err) {
    console.error(err);
  }
};

export default lobbyingDataFetch;
