import useTheme from "../../lib/Hooks/useTheme";
import SideBar from "../SideBar/SideBar";

const Page = ({ children }) => {
  const { cssProperties } = useTheme();
  const styles = cssProperties();

  return (
    <div className={`${styles.background}`}>
      <div className={`pageContainer`}>
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
