import styles from './Teams.module.css';
import Team from './Team.js';
import Card from './Card';

const FinanceHead = () => {
    return ( 
            <div className={` ${styles.heads} ${styles.portfolio}`}>
            <h2>FINANCE HEAD</h2>
            <div className={styles.items}>
                {Team.financeHead?.map(person=>(
                        <Card
                            name={person.name}
                            image={person.image}
                        />
                    ))}
                </div>
            </div>
     );
}
 
export default FinanceHead;