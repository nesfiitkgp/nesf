import styles from './Teams.module.css';
import Team from './Team.js';
import Card from './Card';

const WebHead = () => {
    return ( 
        <div className={` ${styles.heads} ${styles.portfolio}`}>
            <h2>WEB HEADS</h2>
            <div className={styles.items}>
                {Team.webHead?.map(person=>(
                    <Card
                        name={person.name}
                        image={person.image}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default WebHead;