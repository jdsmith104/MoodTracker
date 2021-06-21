import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect } from "react";
import ExploreContainer from '../components/ExploreContainer';
import UserId from '../components/UserId';
import SubmitButton from '../components/SubmitButton';
import Chart from '../components/Chart';
import './Tab2.css';

const Tab2: React.FC = () => {

  const [mood, setMood] = useState(0);
  const [userId, setUserId] = useState("");

  const [updateChart, setUpdateChart] = useState(false);

  function refresh() {
    setUpdateChart(true);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <UserId setUserId={setUserId} userId={userId}></UserId>
        <Chart userId={userId} updateChart={updateChart} setUpdateChart={setUpdateChart}></Chart>
        <div className="buttonArea">
          <SubmitButton submit={refresh} value="Refresh"></SubmitButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
