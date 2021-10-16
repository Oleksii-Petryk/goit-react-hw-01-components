import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

function TransactionHistory ({ items }) {
    return (
        <table className={styles.transactionHistory}>
            <thead className={styles.tableHead}>
                <tr>
                    <th className={styles.type}>Type</th>
                    <th className={styles.amount}>Amount</th>
                    <th className={styles.currency}>Currency</th>
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
            {items.map(({ id, type, amount, currency }) => {
                return (
                        <tr className={styles.tableRows} key={id}>
                            <td className={styles.type}>{type}</td>
                            <td className={styles.amount}>{amount}</td>
                            <td className={styles.currency}>{currency}</td>
                        </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default TransactionHistory;

TransactionHistory.defaultProps = {
    items: [{id:'id', type:'type of transaction', amount:'no data', currency: 'no data'}]
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string
        }))
}