import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect } from "react";
import ExploreContainer from '../components/ExploreContainer';
import UserId from '../components/UserId';
import SubmitButton from '../components/SubmitButton';
import MoodChart from '../components/MoodChart';
import './Tab2.css';

interface ContainerProps {
  user: string;
  setUser: Function;
}

const Tab2: React.FC<ContainerProps> = ({ user: userId, setUser: setUserId }) => {

  const [mood, setMood] = useState(0);

  const [updateChart, setUpdateChart] = useState(false);

  // Function used SubmitButton to modularise the component
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
            <IonTitle size="large">Results</IonTitle>
          </IonToolbar>
        </IonHeader>
        <UserId setUserId={setUserId} userId={userId}></UserId>
        <MoodChart userId={userId} updateChart={updateChart} setUpdateChart={setUpdateChart}></MoodChart>
        <div className="buttonArea">
          <SubmitButton submit={refresh} value="Refresh"></SubmitButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
