import Link from "next/link";

import useTheme from "../../lib/Hooks/useTheme";

const DesignList = () => {
  const { theme, cssProperties } = useTheme();
  const styles = cssProperties();

  return (
    <div>
      <div className="flex items-center justify-start mt-10 text-xl font-medium">
        <span className="transform rotate-90 p-1 mr-2">
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            stroke={`${theme === "dark" ? "white" : "#333"}`}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
            className={`${styles.textColor} `}
          >
            <path d="M9 18l6-6-6-6"></path>
          </svg>
        </span>
        <small className={styles.textColor}>Components</small>
      </div>
      <ul
        className={`${styles.textColor} ml-3 pl-6 my-3 border-l ${styles.borderColor}`}
      >
        <Link href="/toast">
          <a>
            <li>Toast</li>
          </a>
        </Link>
      </ul>
    </div>
  );
};

export default DesignList;
