import {getImageUrl} from '../utils/utils';

export default function Avatar({ name, imageSource }) {
    return (
          <img
            className="avatar"
            src={getImageUrl(imageSource)}
            alt="{ name }"
            width={70}
            height={70}
          />
      
    );
  }
  