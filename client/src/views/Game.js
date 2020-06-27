import React, { useEffect, useState } from "react";
import { Row, Col } from "react-materialize";

import Questmap from '../components/Questmap';
import CharBox from '../components/CharBox';
import { usePlayerContext } from '../contexts/PlayerContext';
import history from '../utils/history';

import backgroundDark from "../assets/dark-honeycomb.png";
import backgroundLight from "../assets/light_honeycomb.png";

const Game = () => {
  const [state, dispatch] = usePlayerContext();
  // const [isInteracting, setIsInteracting] = useState(false);
  // const [isAccepted, setIsAccepted] = useState(false);

  // useEffect(() => {
  //   setIsInteracting(state.isInteracting);
  // }, [state.isInteracting]);

  // let RowStyles;
  // if (isInteracting || isAccepted) {
  //   RowStyles = {
  //     opacity: "0.25",
  //     display: "flex",
  //     justifyContent: "center",
  //   };
  // } else {
  //   RowStyles = {
  //     width: "100%",
  //     display: "flex",
  //     justifyContent: "center",
  //   };
  // }

  // const handleQuestAccept = () => {
  //   handleQuestDecline();
  //   setIsAccepted(true);
  // };

  // const handleQuestDecline = () => {
  //   setIsInteracting(!state.isInteracting);
  //   dispatch({
  //     type: "toggleIsInteracting",
  //     payload: !state.isInteracting,
  //   });
  // };

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
        <Col s={1} />

          <Col s={10} style={GameBoxStyles}>
            <Questmap />
          </Col>
          <Col s={1} />

        </Row>
      </div>
    </>
  );
};

export default Game;

const PageStyles = {
  paddingTop: "100px",
  paddingBottom: "150px",
  width: "100%",
  height: "100%",
  backgroundImage: `url(${backgroundDark})`,
};

const GameBoxStyles = {
  display: "flex",
  justifyContent: "center",
};
