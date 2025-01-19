import styles from './Teams.module.css';
import Team from './Team.js';
import Card from './Card';

const StudentsWelfareHead = () => {
    return ( 
        <div className={` ${styles.heads} ${styles.portfolio}`}>
        <h2>STUDENTS' WELFARE HEAD</h2>
        <div className={styles.items}>
            {Team.studentsWelfareHead?.map(person=>(
                <Card
                    name={person.name}
                    image={person.image}
                />
            ))}
        </div>
    </div>
     );
}
 
export default StudentsWelfareHead;