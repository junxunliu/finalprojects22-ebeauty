import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/components.css';
import Signup from './components/SignUp';
import Login from './components/Login';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import FindJob from './pages/FindJob';
import SearchPage from './components/SearchPage';
import SignUpProvider from './pages/SignUpProvider';
import SignUpProviderTwo from './pages/SignUpProviderTwo';
import SignUpProviderThree from './pages/SignUpProviderThree';
import ProfileProvider from './components/ProfileProvider';
import ViewProfileProvider from './components/ViewProfileProvider';
import AddressPage from './components/AddressPage';
import Review from './pages/Review';
//react-notifications-component
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <Router>
      <div className="App" >
        <ReactNotifications />
        <ScrollToTop>
          <div className="content">
            <Navbar />
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route exact path="/" element={<Home />} />
              <Route path="/reviews" element={<Review />} />
              <Route path="/searchpage" element={<SearchPage />} />
              <Route path="/page/:pageNumber" element={<SearchPage />} />
              <Route path="/searchpage/:keyword" element={<SearchPage />} />
              <Route
                path="/searchpage/:keyword/page/:pageNumber"
                element={<SearchPage />}
              />
              <Route path="/findjob" element={<FindJob />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signupproviderone" element={<SignUpProvider />} />
              <Route path="/signupprovidertwo" element={<SignUpProviderTwo />} />
              <Route path="/signupproviderthree" element={<SignUpProviderThree />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profileprovider" element={<ProfileProvider />} />
              <Route
                path="/taskprovider/:id"
                element={<ViewProfileProvider />}
              />
              <Route path="/addresspage" element={<AddressPage />} />
            </Routes>
            <Footer />
          </div>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
