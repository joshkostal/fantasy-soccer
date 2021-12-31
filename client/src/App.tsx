import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./styles/variables.css";
import "./styles/index.css";
import Team from "./pages/Team";
import Menu from "./components/Menu";
import Match from "./pages/Match";
import League from "./pages/League";
import Players from "./pages/Players";
import Home from "./pages/Home";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Menu />
    <IonReactRouter>
      <IonRouterOutlet id="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/team/:fantasyTeamId" component={Team} />
        <Route exact path="/match/:fantasyMatchId" component={Match} />
        <Route exact path="/players/:fantasyLeagueId" component={Players} />
        <Route exact path="/league/:fantasyLeagueId" component={League} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
