import { IonList, IonItem, IonButton } from '@ionic/react';
import './SubmitButton.css';

interface ContainerProps {
    submit: () => void;
}

const SubmitButton: React.FC<ContainerProps> = ({ submit: submitFunction }) => {
    return (
        <IonButton onClick={submitFunction}>Submit</IonButton>
    );
};



export default SubmitButton;

