import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import SummaryTable from './components/SummaryTable/SummaryTable';
import user from './components/data/user.json';
import statisticalData from './components/data/statistical-data.json';
import friends from './components/data/friends.json';
import transactions from './components/data/transaction-history.json';
import summaryTable from './components/data/summary-table.json';

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
        items={transactions} /> */}
      
      <SummaryTable
        title='Сводка'
        data={summaryTable} />
    </div>
  )
}

export default App;
