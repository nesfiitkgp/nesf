import styles from './Footer.module.css';

const footerLinks = {
    quickLinks: [
        {name: "About Us", link: "/", disabled: false},
        {name: "Events", link: "/events", disabled: false},
        {name: "Photo Gallery", link: "/", disabled: true},
        {name: "Partnerships", link: "/partnerships", disabled: false},
        {name: "Alumni", link: "/", disabled: true},
        {name: "Constitution", link: "/", disabled: true}
    ],
    events: [
        {name: "North East Festival", link: "/north-east-festival", disabled: false},
        {name: "Foundation Day", link: "/foundation-day", disabled: false},
        {name: "Food Stall", link: "/food-stall", disabled: false},
        {name: "Career Counselling Session", link: "/career-counselling-session", disabled: false},
        {name: "Career Counselling Workshop", link: "/career-counselling-workshop", disabled: false},
        {name: "Farewell", link: "/farewell", disabled: false},
        {name: "Freshers", link: "/freshers", disabled: false}
    ],
    teams: [
        {name: "Core Team", link: "/core-team", disabled: true},
        {name: "Events Team", link: "/events-team", disabled: true},
        {name: "Logistics Team", link: "/logistics-team", disabled: true},
        {name: "Media Team", link: "/media-team", disabled: true},
        {name: "Web Team", link: "/web-team", disabled: true},
        {name: "Sponsorship Team", link: "/sponsorship-team", disabled: true}
    ],
    contactDetails: [
        {name: "Phone", link: "+91-6002407523", disabled: false},
        {name: "Email", link: "mailto:nesciitkgp@gmail.com", disabled: false},
        {name: "Address", link: "IIT Kharagpur, Kharagpur, West Bengal, India", disabled: false},
        {name: "Facebook", link: "https://www.facebook.com/yourpage", disabled: false},
        {name: "LinkedIn", link: "https://www.linkedin.com/yourpage", disabled: false},
        {name: "Instagram", link: "https://www.instagram.com/yourpage", disabled: false},
        {name: "Twitter", link: "https://www.twitter.com/yourpage", disabled: false},
        {name: "Instagram", link: "https://www.instagram.com/yourpage", disabled: false}
    ]
};

const Footer = () => {
    return ( 
        <div className={styles.footer}>
            <div className={styles.links}>
                <div className={styles.quickLinks}>
                    <h2>Quick Links</h2>
                    <div className={styles.linksGroup}>
                        {footerLinks.quickLinks.map((link, index) => (
                            <a href={link.link} key={index}>{link.name}</a>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.contacts}>
                <h2>Contact Us</h2>
                <div className={styles.linksGroup}>
                    <p>+91-6002407523</p>
                    <a href='mailto:nesciitkgp@gmail.com'>nesciitkgp@gmail.com</a>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;