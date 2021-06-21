import { IonList, IonItem, IonRadioGroup, IonRadio } from '@ionic/react';
import SelectImage from './SelectImage';

interface ContainerProps {
    setMood: Function;
    mood: number;
}

const InteractArea: React.FC<ContainerProps> = ({ setMood: setMoodFunc, mood }) => {
    function updateMood(e: any) {
        console.log(e);
        // get new value
        const ionRadioValue = e.detail.value;
        setMoodFunc(ionRadioValue);


    }
    return (
        <IonList className="moodList">
            <IonRadioGroup onIonChange={e => updateMood(e)}>
                <IonItem >
                    <SelectImage moodRef={0} />
                    <IonRadio value={0}></IonRadio>
                </IonItem>
                <IonItem >
                    <SelectImage moodRef={1} />
                    <IonRadio value={1}></IonRadio>
                </IonItem>
                <IonItem>
                    <SelectImage moodRef={2} />
                    <IonRadio value={2}></IonRadio>
                </IonItem>

            </IonRadioGroup>
        </IonList >
    );
};

export default InteractArea;
