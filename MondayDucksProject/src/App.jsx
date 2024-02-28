import './App.css'
import CompanyInfoBox from './Components/CompanyInfo/CompanyInfoBox';
import DuckJokesBox from './Components/DuckJokes/DuckJokesBox';
import PeopleBox from './Components/People/PeopleBox';

const App = () => {
  return (
  <>
    <CompanyInfoBox/>
    <PeopleBox/>    
    <DuckJokesBox/>
  </>
  )
}

export default App;