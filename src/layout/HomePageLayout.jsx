import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function MainContent(props) {
  return <div id="main-content">{props.children}</div>;
}

function HomePageLayout(props) {
  return (
    <>
      <Header {...props} />
      <MainContent {...props} />
      <Footer {...props} />
    </>
  );
}

export default HomePageLayout;
