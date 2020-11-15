import useTheme from "../../lib/Hooks/useTheme";

import Moon from "../Icons/Icon/moon";
import Sun from "../Icons/Icon/sun";
import SearchBar from "../SearchBar/SearchBar";

const SideBar = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <aside
      className={`sidebarContainer ${
        theme === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <div className="flex justify-between items-center">
        <svg width="43" viewBox="0 0 114 100" fill="none">
          <g fill={`${theme === "light" ? "black" : "white"}`}>
            <path d="M62.7991 21.1559L67.9119 30.1784L65.6224 31.4758L60.5096 22.4533L62.7991 21.1559ZM42.6148 30.1784L47.7276 21.1559L50.0172 22.4533L44.9044 31.4758L42.6148 30.1784ZM71.7465 36.9453L76.8593 45.9679L74.5697 47.2653L69.457 38.2427L71.7465 36.9453ZM33.6675 45.9679L38.7803 36.9453L41.0698 38.2427L35.957 47.2653L33.6675 45.9679ZM24.7201 61.7574L29.8329 52.7348L32.1224 54.0322L27.0096 63.0548L24.7201 61.7574ZM80.6939 52.7348L85.8066 61.7574L83.5171 63.0548L78.4043 54.0322L80.6939 52.7348ZM15.7727 77.5468L20.8855 68.5243L23.1751 69.8217L18.0623 78.8442L15.7727 77.5468ZM89.6412 68.5243L94.754 77.5468L92.4645 78.8442L87.3517 69.8217L89.6412 68.5243ZM33.534 90.7895H23.3085V88.1579H33.534V90.7895ZM51.4288 90.7895H41.2032V88.1579H51.4288V90.7895ZM69.3235 90.7895H59.098V88.1579H69.3235V90.7895ZM87.2183 90.7895H76.9927V88.1579H87.2183V90.7895Z"></path>
            <path d="M55.2636 2.63158C50.9035 2.63158 47.3689 6.16617 47.3689 10.5263C47.3689 14.8865 50.9035 18.4211 55.2636 18.4211C59.6238 18.4211 63.1584 14.8865 63.1584 10.5263C63.1584 6.16617 59.6238 2.63158 55.2636 2.63158ZM44.7373 10.5263C44.7373 4.71279 49.4501 0 55.2636 0C61.0771 0 65.7899 4.71279 65.7899 10.5263C65.7899 16.3398 61.0771 21.0526 55.2636 21.0526C49.4501 21.0526 44.7373 16.3398 44.7373 10.5263Z"></path>
            <path d="M102.632 81.579C98.2716 81.579 94.737 85.1136 94.737 89.4737C94.737 93.8338 98.2716 97.3684 102.632 97.3684C106.992 97.3684 110.527 93.8338 110.527 89.4737C110.527 85.1136 106.992 81.579 102.632 81.579ZM92.1055 89.4737C92.1055 83.6602 96.8183 78.9474 102.632 78.9474C108.445 78.9474 113.158 83.6602 113.158 89.4737C113.158 95.2872 108.445 100 102.632 100C96.8183 100 92.1055 95.2872 92.1055 89.4737Z"></path>
            <path d="M10.5263 81.579C6.16617 81.579 2.63158 85.1136 2.63158 89.4737C2.63158 93.8338 6.16617 97.3684 10.5263 97.3684C14.8865 97.3684 18.4211 93.8338 18.4211 89.4737C18.4211 85.1136 14.8865 81.579 10.5263 81.579ZM0 89.4737C0 83.6602 4.71279 78.9474 10.5263 78.9474C16.3398 78.9474 21.0526 83.6602 21.0526 89.4737C21.0526 95.2872 16.3398 100 10.5263 100C4.71279 100 0 95.2872 0 89.4737Z"></path>
          </g>
        </svg>
        <button
          className={`rounded-lg flex items-center justify-end focus:outline-none ${
            theme === "light" ? "bg-gray-200" : "bg-black"
          }`}
          onClick={() => toggleTheme()}
        >
          {theme === "light" ? (
            <Moon size={30} key="icon-light" color="black" />
          ) : (
            <Sun size={30} key="icon-dark" color="white" />
          )}
        </button>
      </div>
      <div className="my-lg">
        <SearchBar />
      </div>
      <style jsx>{`
        .sidebarContainer {
          position: fixed;
          top: 0;
          padding-top: 3.25rem;
          height: 100vh;
          width: 200px;
          display: flex;
          flex-direction: column;
        }
        .toggleWrapper {
          display: inline-flex;
          padding: 3px 0;
          position: relative;
          vertical-align: middle;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          --checked-color: #0070f3;
          --unchecked-color: #333;
        }
        .toggleInput {
          border: 0;
          padding: 0;
          clip: rect(0 0 0 0);
          -webkit-clip-path: inset(100%);
          clip-path: inset(100%);
          height: 1px;
          width: 1px;
          margin: -1px;
          overflow: hidden;
          position: absolute;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          white-space: nowrap;
          word-wrap: normal;
        }
        .toggle {
          border-radius: 14px;
          cursor: pointer;
          display: inline-block;
          height: 14px;
          position: relative;
          transition-delay: 0.12s;
          transition-duration: 0.2s;
          transition-property: background, border;
          transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
          width: 28px;
        }
      `}</style>
    </aside>
  );
};

export default SideBar;
