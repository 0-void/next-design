import useTheme from "../../lib/Hooks/useTheme";
import SideBar from "../SideBar/SideBar";

const Page = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div className={`${theme === "light" ? "bg-white" : "bg-black"}`}>
      <div
        className={`pageContainer`}
      >
        <SideBar />
        <main>{children}</main>
        <style jsx>{`
          .pageContainer {
            min-height: 100vh;
            max-width: 1250px;
            margin: 0 auto;
            padding: 0 24px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Page;
