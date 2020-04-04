import React from 'react';
// import Link from '../assets/Link.png';
// import M from "materialize-css";
import { usePlayerContext } from '../contexts/PlayerContext';
import 'materialize-css/dist/css/materialize.min.css';

// Dialogue box content needs to be replaced with dynamic content determined by props
const Chest = (props) => {
  const [state] = usePlayerContext();
  //   const imgStyle = {
  //     float: 'right',
  //     width: '100px'
  //   };
  const chestStyle = {
    color: 'white',
    backgroundColor: 'black',
    position: 'absolute',
    top: '33%',
    left: '33%',
    width: '400px',
    height: '400px',
    padding: '20px',
  };

  console.log(state);

  if (state.currentMap === 'dungeon') {
    return (
      <div className='modal-content' style={chestStyle}>
        <div style={{}}>
          <div className='row'>
            {/* <img style={imgStyle} src={Link} alt='Link' /> */}
            <h4>You Found a Link of Secivres Reerac!</h4>
          </div>
          <div className='row'>
            <p>Use this link to find helpful information for your quest!</p>
            <ul>
              <li>
                <a
                  className='modal-close'
                  href='https://www.smashingmagazine.com/2018/06/web-developer-resume/'
                  target='_blank'
                  rel='noopener noreferrer'
                  // onClick={e => {
                  //   e.preventDefault();
                  //   props.handleAccept();
                  // }}
                >
                  Sure!
                </a>
              </li>
              <li>
                <a
                  className='modal-close'
                  href='#!'
                  onClick={(e) => {
                    e.preventDefault();
                    props.handleDecline();
                  }}
                >
                  I'm good for now.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  if (state.currentMap === 'guild') {
    return (
      <div className='modal-content' style={chestStyle}>
        <div style={{}}>
          <div className='row'>
            {/* <img style={imgStyle} src={Link} alt='Link' /> */}
            <h4>You Found a Link of Namuh Secruoser!</h4>
          </div>
          <div className='row'>
            <p>Use this link to find helpful information for your quest!</p>
            <ul>
              <li>
                <a
                  className='modal-close'
                  href='https://www.themuse.com/advice/how-to-organize-track-job-search'
                  target='_blank'
                  rel='noopener noreferrer'
                  // onClick={e => {
                  //   e.preventDefault();
                  //   props.handleAccept();
                  // }}
                >
                  Sure!
                </a>
              </li>
              <li>
                <a
                  className='modal-close'
                  href='#!'
                  onClick={(e) => {
                    e.preventDefault();
                    props.handleDecline();
                  }}
                >
                  I'm good for now.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Chest;