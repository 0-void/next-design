import useTheme from "../lib/Hooks/useTheme";
import Page from "../components/Page/Page";

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Page>
      <div></div>
    </Page>
  );
};

export default Home;
