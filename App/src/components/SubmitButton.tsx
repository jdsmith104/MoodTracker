import { IonButton } from '@ionic/react';
import './SubmitButton.css';

interface ContainerProps {
    submit: () => void;
    value: string;
}

const SubmitButton: React.FC<ContainerProps> = ({ submit: submitFunction, value }) => {
    return (
        <IonButton onClick={submitFunction}>{value}</IonButton>
    );
};



export default SubmitButton;

