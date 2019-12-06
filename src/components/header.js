import React from 'react';
import iconNet from '../icons/network.png';
import iconUser from '../icons/user-4.png';


function Header() {
  return (
    <nav className="mainNavbar">
      <div className="mainHeader">
        <img id="mainHeaderLogo" alt={iconNet} src={iconNet} />

        <div className="mainHeaderTitle">
          Talkabout
        </div>

        <div className="mainHeaderProfile">

          <div className="mainHeaderElements">
          Profile
          </div>

          <div className="mainHeaderElements">
            <img width="20" height="20" alt={iconUser} src={iconUser} />
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Header;
