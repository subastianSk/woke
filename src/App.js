import './App.css';
import Login from './components/login';
import Register from './components/register'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Landingpage from './components/Landingpage'
import StartQuiz from './components/quiz/StartQuiz';
import Soal from './components/quiz/Soal'
import Layanan from './components/layanan/Layanan'
import FormLayananA from './components/layanan/FormLayananA';
import QuizResult from './components/quiz/QuizResult'
import Footer from './components/Footer';
import Admin from './components/admin/Admin';
import Artikel from './components/admin/Artikel';
import Konten from './components/Konten/Konten';
import DeskKonten from './components/Konten/DeskKonten';
import afterForm from './components/layanan/afterForm';


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Landingpage}/>
        <Route exact path="/login" component = {Login}/>
        <Route exact path="/register" component={Register} />
        <Route exact path="/quiz" component={StartQuiz} />
        <Route exact path="/soal" component={Soal} />
        <Route exact path='/result' component={QuizResult} />
        <Route exact path="/layanan" component={Layanan} />
        <Route exact path="/layananA" component ={FormLayananA}/>
        <Route exact path="/hubungi" components = {Footer}/>
        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/artikel" component={Artikel}/>
        <Route exact path="/konten" component={Konten}/>
        <Route exact path="/deskkonten" component={DeskKonten}/>
        <Route exact path="/after" component ={afterForm}/>
      </div>

    </Router>
  );
}

export default App;