import { IonList, IonItem, IonInput } from '@ionic/react';
import './UserId.css';

interface ContainerProps {
    setUserId: Function; userId: string
}

const UserId: React.FC<ContainerProps> = ({ setUserId: setUserId, userId: userId }) => {
    function updateUserId(e: any) {
        // current user name
        const userId = e.detail.value;
        console.log(userId);
        setUserId(userId);
    }

    return (
        <div className="UserId">
            <strong> Username</strong>
            <IonInput type={"text"} id="test" name="UserId" onIonChange={e => updateUserId(e)}></IonInput>
        </div>
    );
};

export default UserId;

