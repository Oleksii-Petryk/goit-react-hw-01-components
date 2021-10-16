import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendList({ friends }) {
    return (
        <ul className={styles.list}>
            {friends.map(({avatar, name, isOnline, id}) => {
                return (
                    <li className={styles.item} key={id}>
                        { isOnline  === true ? (<span className={styles.statusOnline}>
                        </span>) : (<span className={styles.statusOffline}>
                        </span>)}
                        <img className={styles.avatar}
                            
                            src={avatar}
                            alt='Аватар пользователя'
                            width="48" />
                        <p className={styles.name}>
                            {name}
                        </p>
                    </li>
                )
            })}
        </ul>
    )
}

export default FriendList;

FriendList.defaultProps = {
    friends: [{ avatar: "https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png", name: 'Not found', id: 1 }]
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            id: PropTypes.number
        }))
}