import React, {useState} from "react";
import classes from "./Navbar.module.css";
import User from "../../../assets/user.png";
import SideMenu from "../SideMenu/SideMenu";

const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const toggleHandler = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="136"
            height="30"
            viewBox="0 0 136 30"
            fill="none"
          >
            <path
              d="M25.8213 27V1.79998H30.6453L45.5133 19.944H43.1733V1.79998H48.9333V27H44.1453L29.2413 8.85598H31.5813V27H25.8213Z"
              fill="white"
            />
            <path
              d="M64.7956 27.288C62.7316 27.288 60.8956 26.856 59.2876 25.992C57.7036 25.128 56.4436 23.952 55.5076 22.464C54.5956 20.952 54.1396 19.236 54.1396 17.316C54.1396 15.372 54.5956 13.656 55.5076 12.168C56.4436 10.656 57.7036 9.47998 59.2876 8.63998C60.8956 7.77598 62.7316 7.34398 64.7956 7.34398C66.8356 7.34398 68.6596 7.77598 70.2676 8.63998C71.8756 9.47998 73.1356 10.644 74.0476 12.132C74.9596 13.62 75.4156 15.348 75.4156 17.316C75.4156 19.236 74.9596 20.952 74.0476 22.464C73.1356 23.952 71.8756 25.128 70.2676 25.992C68.6596 26.856 66.8356 27.288 64.7956 27.288ZM64.7956 22.68C65.7316 22.68 66.5715 22.464 67.3156 22.032C68.0596 21.6 68.6476 20.988 69.0796 20.196C69.5116 19.38 69.7276 18.42 69.7276 17.316C69.7276 16.188 69.5116 15.228 69.0796 14.436C68.6476 13.644 68.0596 13.032 67.3156 12.6C66.5715 12.168 65.7316 11.952 64.7956 11.952C63.8596 11.952 63.0196 12.168 62.2756 12.6C61.5316 13.032 60.9316 13.644 60.4756 14.436C60.0436 15.228 59.8276 16.188 59.8276 17.316C59.8276 18.42 60.0436 19.38 60.4756 20.196C60.9316 20.988 61.5316 21.6 62.2756 22.032C63.0196 22.464 63.8596 22.68 64.7956 22.68Z"
              fill="white"
            />
            <path
              d="M88.1694 27.288C85.8894 27.288 84.1134 26.712 82.8414 25.56C81.5694 24.384 80.9334 22.644 80.9334 20.34V3.34798H86.5494V20.268C86.5494 21.084 86.7654 21.72 87.1974 22.176C87.6294 22.608 88.2174 22.824 88.9614 22.824C89.8494 22.824 90.6054 22.584 91.2294 22.104L92.7414 26.064C92.1654 26.472 91.4694 26.784 90.6534 27C89.8614 27.192 89.0334 27.288 88.1694 27.288ZM77.9454 12.384V8.06398H91.3734V12.384H77.9454Z"
              fill="white"
            />
            <path
              d="M105.988 27.288C103.78 27.288 101.836 26.856 100.156 25.992C98.5003 25.128 97.2163 23.952 96.3043 22.464C95.3923 20.952 94.9363 19.236 94.9363 17.316C94.9363 15.372 95.3803 13.656 96.2683 12.168C97.1803 10.656 98.4163 9.47998 99.9763 8.63998C101.536 7.77598 103.3 7.34398 105.268 7.34398C107.164 7.34398 108.868 7.75198 110.38 8.56798C111.916 9.35998 113.128 10.512 114.016 12.024C114.904 13.512 115.348 15.3 115.348 17.388C115.348 17.604 115.336 17.856 115.312 18.144C115.288 18.408 115.264 18.66 115.24 18.9H99.5083V15.624H112.288L110.128 16.596C110.128 15.588 109.924 14.712 109.516 13.968C109.108 13.224 108.544 12.648 107.824 12.24C107.104 11.808 106.264 11.592 105.304 11.592C104.344 11.592 103.492 11.808 102.748 12.24C102.028 12.648 101.464 13.236 101.056 14.004C100.648 14.748 100.444 15.636 100.444 16.668V17.532C100.444 18.588 100.672 19.524 101.128 20.34C101.608 21.132 102.268 21.744 103.108 22.176C103.972 22.584 104.98 22.788 106.132 22.788C107.164 22.788 108.064 22.632 108.832 22.32C109.624 22.008 110.344 21.54 110.992 20.916L113.98 24.156C113.092 25.164 111.976 25.944 110.632 26.496C109.288 27.024 107.74 27.288 105.988 27.288Z"
              fill="white"
            />
            <path
              d="M126.683 27.288C125.027 27.288 123.431 27.096 121.895 26.712C120.383 26.304 119.183 25.8 118.295 25.2L120.167 21.168C121.055 21.72 122.099 22.176 123.299 22.536C124.523 22.872 125.723 23.04 126.899 23.04C128.195 23.04 129.107 22.884 129.635 22.572C130.187 22.26 130.463 21.828 130.463 21.276C130.463 20.82 130.247 20.484 129.815 20.268C129.407 20.028 128.855 19.848 128.159 19.728C127.463 19.608 126.695 19.488 125.855 19.368C125.039 19.248 124.211 19.092 123.371 18.9C122.531 18.684 121.763 18.372 121.067 17.964C120.371 17.556 119.807 17.004 119.375 16.308C118.967 15.612 118.763 14.712 118.763 13.608C118.763 12.384 119.111 11.304 119.807 10.368C120.527 9.43198 121.559 8.69998 122.903 8.17198C124.247 7.61998 125.855 7.34398 127.727 7.34398C129.047 7.34398 130.391 7.48798 131.759 7.77598C133.127 8.06398 134.267 8.48398 135.179 9.03598L133.307 13.032C132.371 12.48 131.423 12.108 130.463 11.916C129.527 11.7 128.615 11.592 127.727 11.592C126.479 11.592 125.567 11.76 124.991 12.096C124.415 12.432 124.127 12.864 124.127 13.392C124.127 13.872 124.331 14.232 124.739 14.472C125.171 14.712 125.735 14.904 126.431 15.048C127.127 15.192 127.883 15.324 128.699 15.444C129.539 15.54 130.379 15.696 131.219 15.912C132.059 16.128 132.815 16.44 133.487 16.848C134.183 17.232 134.747 17.772 135.179 18.468C135.611 19.14 135.827 20.028 135.827 21.132C135.827 22.332 135.467 23.4 134.747 24.336C134.027 25.248 132.983 25.968 131.615 26.496C130.271 27.024 128.627 27.288 126.683 27.288Z"
              fill="white"
            />
            <path
              d="M3.62524 0.000854492C1.63985 0.000854492 0 1.90228 0 4.20789V28.5009C0.000283273 28.7634 0.0599093 29.0213 0.172918 29.2487C0.285927 29.4762 0.44836 29.6652 0.643981 29.7969C0.839602 29.9286 1.06156 29.9983 1.28767 29.9991C1.51377 30 1.73611 29.9319 1.93245 29.8016L10.3333 24.2264L18.7342 29.8016C18.9306 29.9319 19.1529 30 19.379 29.9991C19.6051 29.9983 19.8271 29.9286 20.0227 29.7969C20.2183 29.6652 20.3807 29.4762 20.4937 29.2487C20.6068 29.0213 20.6664 28.7634 20.6667 28.5009V4.20789C20.6667 1.90228 19.0268 0.000854492 17.0414 0.000854492H3.62524ZM3.62524 3.00085H17.0414C17.6403 3.00085 18.0833 3.51241 18.0833 4.20789V25.9139L10.9741 21.1971C10.779 21.0677 10.5581 20.9996 10.3333 20.9996C10.1086 20.9996 9.88771 21.0677 9.69255 21.1971L2.58333 25.9139V4.20789C2.58333 3.51241 3.02635 3.00085 3.62524 3.00085Z"
              fill="white"
            />
          </svg>
        </div>

        <div className={classes.infocontainer}>
          <div className={classes.info}>
            <img src={User} alt="" />
            <h4>Karan</h4>
          </div>
          <div onClick={toggleHandler} style={{cursor: "pointer"}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M24 39C22.344 39 21 37.656 21 36V12C21 10.344 22.344 9 24 9C25.656 9 27 10.344 27 12V36C27 37.656 25.656 39 24 39Z"
                fill="white"
              />
              <path
                d="M36 39C34.344 39 33 37.656 33 36V12C33 10.344 34.344 9 36 9C37.656 9 39 10.344 39 12V36C39 37.656 37.656 39 36 39Z"
                fill="white"
              />
              <path
                d="M12 39C10.344 39 9 37.656 9 36V12C9 10.344 10.344 9 12 9C13.656 9 15 10.344 15 12V36C15 37.656 13.656 39 12 39Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </nav>
      {toggleSidebar && <SideMenu />}
    </>
  );
};

export default Navbar;
