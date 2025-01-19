import styles from './Teams.module.css';
import Team from './Team.js';
import Card from './Card';

const LogisticsHead = () => {
    return ( 
        <div className={` ${styles.heads} ${styles.portfolio}`}>
            <h2>LOGISTICS HEADS</h2>
            <div className={styles.items}>
                {Team.logisticsHead?.map(person=>(
                    <Card
                        name={person.name}
                        image={person.image}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default LogisticsHead;