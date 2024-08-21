import s from "./PageTitle.module.css";

const PageTitle = ({ children }) => {
  return <h1 className={s.heading}>{children}</h1>;
};

export default PageTitle;
