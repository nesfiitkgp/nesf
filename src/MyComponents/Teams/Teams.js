import styles from './Teams.module.css';
// import Trenure from './Trenure.js'
import President from './President.js';
import SSCOM from './SSCOM.js';
import SeniorCoordinators from './SeniorCoordinators.js';
import Governors from './Governor.js';
import ExecutiveHeads from './ExecutiveHead.js';
import MediaPublicityHead from './MediaPublicityHead.js';
import FinanceHead from './FinanceHead.js';
import StudentsWelfareHead from './StudentsWelfareHead.js';
import EventsHead from './EventsHead.js';
import LogisticsHead from './LogisticsHead.js';
import WebHead from './WebHead.js';
import SEM from './SEM.js';
import JEM from './JEM.js';

const Teams = () => {
    return ( 
        <div className={styles.teams}>
            <div className={styles.title}>
                <h2>Tenure 24-25</h2>
            </div>
            {/* <div className={styles.trenure}>
                <Trenure/>
            </div> */}
                <President/>
                <SSCOM/>
                <Governors/>
                {/* <SeniorCoordinators/> */}
                <ExecutiveHeads/>
                <MediaPublicityHead/>
                <FinanceHead/>
                <StudentsWelfareHead/>
                <EventsHead/>
                <LogisticsHead/>
                <WebHead/>
                <SEM/>
                <JEM/>
        </div>
     );
}
 
export default Teams;