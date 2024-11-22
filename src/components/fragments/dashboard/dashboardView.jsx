import Cards from "../../elements/card/card";
import CardDiagram from "../../elements/card/cardDiagram";
import CardItem from "../../elements/card/cardItem";
import CardNotification from "../../elements/card/cardNotif";
import Header from "../../elements/header/header";
import ProfileView from "./profileView";

function DashboardView() {
  return (
    <div className="absolute md:inset-0 md:left-[230px]">
      <Header title={"Dashboard"} />
      <ProfileView />
      <div className="flex flex-row">
        <div className="ml-4">
          <CardItem />
          <Cards />
        </div>
        <div>
          <CardNotification />
        </div>
      </div>
      <div className="ml-4">
        <CardDiagram />
      </div>
    </div>
  );
}

export default DashboardView;
