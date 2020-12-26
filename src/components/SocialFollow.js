import React, { useState } from "react";
import "./SocialFollow.css";
import { IconContext } from "react-icons";
import {
  FaBehance,
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaUserFriends,
} from "react-icons/fa";
import { TiBackspace } from "react-icons/ti";

function SocialFollow() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="social-container">
      <div className="social-menu-icon" onClick={handleClick}>
        {click ? (
          <IconContext.Provider value={{ className: "back-btn" }}>
            <div>
              <TiBackspace />
            </div>
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ className: "social-btn" }}>
            <div>
              <FaUserFriends />
            </div>
          </IconContext.Provider>
        )}
      </div>
      <ul className={click ? "social-menu active" : "social-menu"}>
        <li className="social-item">
          <a href="https://www.youtube.com/" className="behance social">
            <IconContext.Provider value={{ className: "social-icon" }}>
              <div>
                <FaBehance />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li className="social-item">
          <a href="https://www.youtube.com/" className="behance social">
            <IconContext.Provider value={{ className: "social-icon" }}>
              <div>
                <FaInstagram />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li className="social-item">
          <a href="https://www.youtube.com/" className="behance social">
            <IconContext.Provider value={{ className: "social-icon" }}>
              <div>
                <FaFacebook />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li className="social-item">
          <a href="https://www.youtube.com/" className="behance social">
            <IconContext.Provider value={{ className: "social-icon" }}>
              <div>
                <FaPinterest />
              </div>
            </IconContext.Provider>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialFollow;

// {
//   show && (
//     <div className="s-menu-icon" onClick={handleClick}>
//       {buttonIcon ? (
//         <IconContext.Provider value={{ className: "fa-bars" }}>
//           <div>
//             <TiBackspace />
//           </div>
//         </IconContext.Provider>
//       ) : (
//         <IconContext.Provider value={{ className: "fa-times" }}>
//           <div>
//             <FaUserFriends />
//           </div>
//         </IconContext.Provider>
//       )}
//     </div>
//   );
// }
// <div className="social-links">
//   <a href="https://www.youtube.com/" className="behance social">
//     <IconContext.Provider value={{ className: "social-icon" }}>
//       <div>
//         <FaBehance />
//       </div>
//     </IconContext.Provider>
//   </a>
//   <a href="https://www.youtube.com/" className="instagram social">
//     <IconContext.Provider value={{ className: "social-icon" }}>
//       <div>
//         <FaInstagram />
//       </div>
//     </IconContext.Provider>
//   </a>
//   <a href="https://www.youtube.com/" className="facebook social">
//     <IconContext.Provider value={{ className: "social-icon" }}>
//       <div>
//         <FaFacebook />
//       </div>
//     </IconContext.Provider>
//   </a>
//   <a href="https://www.youtube.com/" className="pinterest social">
//     <IconContext.Provider value={{ className: "social-icon" }}>
//       <div>
//         <FaPinterest />
//       </div>
//     </IconContext.Provider>
//   </a>
// </div>;
