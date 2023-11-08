import {getImageUrl} from '../utils/utils';

type avatarProps = {
  name: string,
  imageSource: string
}

export default function Avatar({ name, imageSource }: avatarProps) {
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
  