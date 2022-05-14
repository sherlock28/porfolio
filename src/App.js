import AppContainer from "components/AppContainer";
import Profile from "components/Profile";
import Grid from "components/Grid";
import ContactMe from "components/ContactMe";
import Footer from "components/Footer";
import Skills from "components/Skills";

export default function App() {
  return (
    <AppContainer>
      <Profile />
      <Grid />
      <Skills />
      <ContactMe />
      <Footer />
    </AppContainer>
  );
}
