import { useNavigate } from "react-router-dom";
import type { PeerInterface } from "../../../interfaces/PlayerInterfaces";

interface PlayerPeerCardInterface {
    peerData: PeerInterface;
}

function PlayerPeerCard({ peerData }: PlayerPeerCardInterface) {
    const navigete = useNavigate();
    return (
        <div
            id="peer-card"
            className="basic-card"
            onClick={() => {
                navigete(`/player-profile/${peerData.account_id}`);
            }}
        >
            <img src={peerData.avatarfull} alt="" id="peer-image" />
            <h3 id="peer-name" className="banner-stats-text clickable-text">
                {peerData.personaname.slice(0, 15)}
            </h3>
            <h3 id="peer-win-ratio" className="banner-stats-text">
                {((peerData.with_win / peerData.with_games) * 100)
                    .toFixed(2)
                    .toString() + "%"}
            </h3>
        </div>
    );
}

export default PlayerPeerCard;
