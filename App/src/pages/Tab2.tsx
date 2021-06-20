import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect } from "react";
import ExploreContainer from '../components/ExploreContainer';
import UserId from '../components/UserId';
import SubmitButton from '../components/SubmitButton';
import InteractArea from '../components/InteractArea'
import './Tab2.css';

const Tab2: React.FC = () => {

  const [mood, setMood] = useState(0);
  const [userId, setUserId] = useState("-");


  function refresh() {
    // Get state of Interact area
    console.log("Mood:", mood);
    //post mood value
    console.log("User", userId);
    //make post request
    //change tab
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
        <p>TEST</p>
        <div className="buttonArea">
          <SubmitButton submit={refresh}></SubmitButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
