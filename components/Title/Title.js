import useTheme from "../../lib/Hooks/useTheme";

const Title = ({ title }) => {
  const { cssProperties } = useTheme();
  const styles = cssProperties();

  return (
    <h1
      className={`font-bold text-5xl my-6 leading-relaxed font-sans tracking-tighter text-left w-full`}
      style={{ color: styles.color }}
    >
      {title}
    </h1>
  );
};

export default Title;
