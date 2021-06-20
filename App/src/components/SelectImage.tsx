import './SelectImage.css';
import { IonImg } from '@ionic/react';
import sad from './moods/mood1.png';
import middle from './moods/mood2.png';
import happy from './moods/mood3.png';
import error from './moods/error.png';

const moods = [sad, middle, happy];

interface ContainerProps {
  moodRef: number;
}

const SelectImage: React.FC<ContainerProps> = ({ moodRef: moodIndex }) => {
  let icon;
  if (moodIndex < 3) {
    icon = moods[moodIndex];
  } else {
    icon = error;
  }
  return (
    <div className="moodContainer">
      <IonImg className="mood" src={icon}></IonImg>
    </div>
  );
};

export default SelectImage;
