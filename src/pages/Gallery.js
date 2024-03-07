import Card from '../components/card';
import Profile from '../components/profile';

const Gallery = () => {
    return (
      <div>
        <Card>
          <Profile
            imageSource='szV5sdG'
            name='Maria Skłodowska-Curie'
            profession='physicist and chemist'
            awards='4'
            awarddesc='(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)'
            discovered='polonium (chemical element)'
            />
        </Card>
  
        <Card>
          <Profile
            imageSource='YfeOqp2'
            name='Katsuko Saruhashi'
            profession='geochemist'
            awards='2'
            awarddesc='(Miyake Prize for geochemistry, Tanaka Prize)'
            discovered='a method for measuring carbon dioxide in seawater'
            />
        </Card>
      </div>
    );
}

export default Gallery;