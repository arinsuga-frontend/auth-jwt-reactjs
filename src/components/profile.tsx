import Avatar from './avatar';

type profileProps = {
    imageSource:string,
    name:string,
    profession:string,
    awards:string,
    awarddesc:string,
    discovered:string
  }

export default function Profile({
    imageSource, name,
    profession, awards,
    awarddesc, discovered
  }:profileProps) {
    return (
        <section className="profile">
          <h2>{ name }</h2>
          <Avatar
          name={name}
          imageSource={imageSource}
          />
          <ul>
            <li>
              <b>Profession: </b> 
              { profession }
            </li>
            <li>
              <b>Awards: { awards } </b> 
              { awarddesc }
            </li>
            <li>
              <b>Discovered: </b>
              { discovered }
            </li>
          </ul>
        </section>
    );
}
  