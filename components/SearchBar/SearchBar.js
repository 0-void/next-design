import useTheme from "../../lib/Hooks/useTheme";

const SearchBar = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`container ${
        theme === "light" ? "bg-white" : "bg-black lightBorder"
      }`}
    >
      <span className="px-3 search">
        <svg width="13px" height="13px" viewBox="0 0 13 13">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-30, -87)" fill="#ccc">
              <g transform="translate(30, 84)">
                <path d="M8.87147266,11.1643659 L12.1213203,14.4142136 L11.4142136,15.1213203 L8.16436588,11.8714727 C7.30243059,12.5768174 6.2006351,13 5,13 C2.23857625,13 0,10.7614237 0,8 C0,5.23857625 2.23857625,3 5,3 C7.76142375,3 10,5.23857625 10,8 C10,9.2006351 9.57681735,10.3024306 8.87147266,11.1643659 Z M5,12 C7.209139,12 9,10.209139 9,8 C9,5.790861 7.209139,4 5,4 C2.790861,4 1,5.790861 1,8 C1,10.209139 2.790861,12 5,12 Z"></path>
              </g>
            </g>
          </g>
        </svg>
      </span>
      <input
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        placeholder="Search..."
        type="text"
        title="Search..."
        className={`input ${
          theme === "light" ? "text-gray-600" : "text-gray-300"
        }`}
        // value=""
      />
      <style jsx>{`
        .container {
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          border-radius: 5px;
          border: 1px solid #ccc;
          display: inline-flex;
          position: relative;
          -webkit-transition: border 0.2s ease, color 0.2s ease;
          transition: border 0.2s ease, color 0.2s ease;
          width: 100%;
          height: 2.5rem;
        }
        .search {
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          height: 100%;
          vertical-align: middle;
        }
        input {
          border-radius: 0;
          border: none;
          box-shadow: none;
          box-sizing: border-box;
          display: block;
          padding-right: 15px;
          font-size: 14px;
          line-height: 26px;
          outline: 0;
          width: 95%;
          background-color: transparent;
          caret-color: white;
          text-overflow: ellipsis;
          -webkit-appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        .lightBorder {
          border: 1px solid #333;
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
