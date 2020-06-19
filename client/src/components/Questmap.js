import React, { useEffect, useState } from "react";
import { Row, Col } from "react-materialize";
import World from './World';
import Dialogue from './Modals/Dialogue';
// import Citynav from './Modals/Citynav';
import { usePlayerContext } from '../contexts/PlayerContext';
import history from '../utils/history';
import backgroundDark from "../assets/dark-honeycomb.png";

const Questmap = () => {
  const [gameState] = usePlayerContext();
  const [state, dispatch] = usePlayerContext();
  const [isInteracting, setIsInteracting] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    setIsInteracting(state.isInteracting);
  }, [state.isInteracting]);

  let RowStyles;
  if (isInteracting || isAccepted) {
    RowStyles = {
      opacity: "0.25",
      display: "flex",
      justifyContent: "center",
    };
  } else {
    RowStyles = {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    };
  }

  const handleQuestAccept = () => {
    handleQuestDecline();
    setIsAccepted(true);
  };

  const handleQuestDecline = () => {
    setIsInteracting(!state.isInteracting);
    dispatch({
      type: "toggleIsInteracting",
      payload: !state.isInteracting,
    });
  };

  //   const handleLinkDecline = () => {
  //     setIsOpening(!state.isOpening);
  //     dispatch({
  //       type: "toggleIsOpening",
  //       payload: !state.isOpening,
  //     });
  //   };
  

    return (
      <>
        <div style={PageStyles}>
          <Row>
            <Col className="" s={9} style={GameBoxStyles}>
              <World path={history.location.pathname} />
            </Col>
          </Row>
        </div>

        {isInteracting && (
          <Dialogue
            handleDecline={handleQuestDecline}
            handleAccept={handleQuestAccept}
          />
        )}
      </>

    )
};

export default Questmap;

const PageStyles = {
  top: "0px",
  width: "100%",
  height: "90vh",
  backgroundImage: `url(${backgroundDark})`,
};

const GameBoxStyles = {
  display: "flex",
  justifyContent: "center",
};