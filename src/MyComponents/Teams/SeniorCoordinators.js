import styles from './Teams.module.css';
import Team from './Team.js';
import Card from './Card.js';

const SeniorCoordinators = () => {
    return ( 
        <div className={` ${styles.seniorcoordinators} ${styles.portfolio}`}>
        <h2>SENIOR COORDINATORS</h2>
        <div className={styles.items}>
            {Team.SeniorCoordinator?.map(person=>(
                    <Card
                        name={person.name}
                        image={person.image}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default SeniorCoordinators;