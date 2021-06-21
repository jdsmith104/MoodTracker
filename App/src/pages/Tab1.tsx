import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect } from "react";
import UserId from '../components/UserId';
import SubmitButton from '../components/SubmitButton';
import InteractArea from '../components/InteractArea'
import './Tab1.css';
import { test } from '../backend/database'

interface ContainerProps {
  user: string;
  setUser: Function;
}

const Tab1: React.FC<ContainerProps> = ({ user: userId, setUser: setUserId }) => {

  const [mood, setMood] = useState(0);
  // const [userId, setUserId] = useState("-");

  function submit() {
    // Get state of Interact area
    console.log("Mood:", mood);
    //post mood value
    console.log("User", userId);
    //make post request
    const dateTime = Date();
    console.log(dateTime);
    test();
  }

  // To access the most updated value of mood
  useEffect(() => { console.log(mood); }, [mood]);

  // To access the most updated value of mood
  useEffect(() => { console.log(userId); }, [userId]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <UserId setUserId={setUserId} userId={userId}></UserId>
        <InteractArea setMood={setMood} mood={mood}></InteractArea>
        <div className="buttonArea">
          <SubmitButton submit={submit} value={"Submit"}></SubmitButton>
        </div>
      </IonContent>
    </IonPage >
  );
};


export default Tab1;
