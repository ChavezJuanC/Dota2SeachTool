import { useEffect, useState } from "react";
import PlayerPeerCard from "./PlayerPeerCard";
import type {
    PeerInterface,
    PlayerCardInterface,
} from "../../../interfaces/PlayerInterfaces";
import { getPlayersPeers } from "../../../modules/api_interactions/main";

function PlayerPeerFeed({ id }: PlayerCardInterface) {
    //fetching peers
    const [allPeers, setAllPeers] = useState<Array<PeerInterface>>();

    function createPeerCards(peerData: Array<PeerInterface>) {
        const cards = peerData.map((peer) => (
            <PlayerPeerCard peerData={peer} key={peer.account_id} />
        ));
        return cards;
    }

    useEffect(() => {
        async function getPeers() {
            const data = await getPlayersPeers(id);
            setAllPeers(data);
        }

        getPeers();
    }, []);

    return <div>{allPeers && createPeerCards(allPeers)}</div>;
}

export default PlayerPeerFeed;
