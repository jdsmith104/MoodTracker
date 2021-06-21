import { IonList, IonItem, IonButton } from '@ionic/react';
import './SubmitButton.css';

interface ContainerProps {
    submit: () => void;
    value: string;
}

const SubmitButton: React.FC<ContainerProps> = ({ submit: submitFunction, value: value }) => {
    function updateValue() {
        value = value + "1";
        console.log(value);
    }
    return (
        <IonButton onClick={submitFunction}>{value}</IonButton>
    );
};



export default SubmitButton;

