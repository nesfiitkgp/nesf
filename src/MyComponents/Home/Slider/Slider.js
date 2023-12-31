import Card from './Card.js';
import styles from './Slider.module.css';
import Testimonial from './Testimonial.js'
import {useState} from 'react';

const Slider = () => {

  const [ID,setID] =useState(1);
  const [currentTestimonial, setCurrentTestimonial] = useState(Testimonial.filter((testimonial) => testimonial.id===ID));



  const leftClick= () => {
      console.log("LEFT CLICKED");
      if (ID===1){
        setID(3)
      }
      else{
        setID(ID-1)
      }
      setCurrentTestimonial(Testimonial.filter((testimonial) => testimonial.id===ID));
    };

  const rightClick= () => {
    if (ID===3){
      setID(1)
    }
    else{
      setID(ID+1)
    }
      console.log("RIGHT CLICKED");
      setCurrentTestimonial(Testimonial.filter((testimonial) => testimonial.id===ID));
  };

  return ( 
    <div className={styles.slider}>
      <div className={`${styles.leftbutton}${styles.button}`}>
        <button onClick={leftClick}>&lt;</button>
      </div>
      <div className={styles.items}>
                {currentTestimonial?.map(person=>(
                    <Card
                        key={person.id}
                        testimonial={person.testimonial}
                    />
                ))}
            </div>
        <div  className={`${styles.rightbutton}${styles.button}`}>
          <button onClick={rightClick}>&gt;</button>
        </div>
    </div>
   );
}
 
export default Slider;