import { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, spritesFront, spritesBack }) {
  const [isFront, setIsFront] = useState(true);

  return (
    <Card>
      <div onClick={() => setIsFront(!isFront)}>
        <div className="image">
          <img alt="oh no!" src={isFront ? spritesFront : spritesBack} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
