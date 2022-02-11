import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import ReportsBalance from './components/ReportsBalance/TotalExpensesIncome';
import Modal from './components/Multipurpose-modal/Multipurpose-modal';
import user from './components/data/user.json';
import statisticalData from './components/data/statistical-data.json';
import friends from './components/data/friends.json';
import transactions from './components/data/transaction-history.json'


function App() {
  return (
    <div className="App">
      {/* <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      
      <Statistics
        title="Upload stats"
        stats={statisticalData} />
      
      <FriendList
        friends={friends} />
      
      <TransactionHistory
        items={transactions} />
      
      <ReportsBalance/> */}

      <Modal/>
    </div>
  )
}

export default App;
