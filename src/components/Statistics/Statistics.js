import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics ({title, stats}) {
    return (
<section className={styles.statistics}>
{title !== undefined && (<h2 className={styles.title}>{title.toUpperCase()}</h2>)}
    <ul className={styles.list}>
        {stats.map(({id, label, percentage}) => {
            return (<li className={styles.item} key={id}>
                <span
                    className={styles.label}
                    >
                    {label}
                </span>
                <span
                    className={styles.percentage}
                   >
                    {percentage}%
                </span>
            </li>)
        })}
  </ul>
</section> 
    )
};

export default Statistics;

Statistics.defaultProps = {
    title: 'Upload stats',
    stats: [{id:'id', label:'type of files', percentage:'...'}]
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number
        })
    )
}