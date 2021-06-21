import { IonInput } from '@ionic/react';
import './UserId.css';

interface ContainerProps {
    setUserId: Function; userId: string
}

const UserId: React.FC<ContainerProps> = ({ setUserId, userId }) => {
    function updateUserId(e: any) {
        // current user name
        const userId = e.detail.value;
        console.log(userId);
        // Updates the value of IonInput component
        setUserId(userId);
    }

    return (
        <div className="UserId">
            <strong> Username</strong>
            <IonInput type={"text"} id="test" name="UserId" value={userId} onIonChange={e => updateUserId(e)}></IonInput>
        </div>
    );
};

export default UserId;

