import Navbar from './components/Navbar';
import ProviderNavbar from './components/ProviderNavbar';
import CustomerNavbar from './components/CustomerNavbar';
import Footer from './components/Footer';
import Home from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/components.css';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import FindJob from './pages/FindJob';
import SearchPage from './pages/SearchPage';
import SignUpProvider from './pages/SignUpProvider';
import SignUpProviderTwo from './pages/SignUpProviderTwo';
import SignUpProviderThree from './pages/SignUpProviderThree';
import ProfileProvider from './pages/ProfileProvider';
import ViewProfileProvider from './pages/ViewProfileProvider';
import AddressPage from './pages/AddressPage';
import Review from './pages/ReviewPage';
import ContactUs from './pages/ContactPage';
import CheckoutAddressPage from './pages/CheckoutAddressPage';
import CheckoutPaymentPage from './pages/CheckoutPaymentPage';
import CheckoutReviewPage from './pages/CheckoutReviewPage';
import ProviderScheduleing from './pages/ProviderScheduling';
import ReservationCustomer from './pages/ReservationCustomer';
import CheckoutPaypalPage from './pages/CheckoutPaypalPage';
import OrderHistoryPage from './pages/OrderHistoryPage';

import OnlyProviderView from './pages/OnlyProviderView';

// auth of login
import RequireAuth from './Authentication/RequireAuth';
import useAuth from './Authentication/useAuth';

//react-notifications-component
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

function App() {
  const { auth } = useAuth();
  return (
    <Router>
      <div className="App">
        <ReactNotifications />
        <ScrollToTop>
          <div className="content">
              {Object.keys(auth).length === 0 ? (
                  <Navbar />
                ):(
                  auth?.role[0] == 1?
                    <ProviderNavbar/>
                  :
                    <CustomerNavbar/>
              )}

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
                <Route
                  path="/signupprovidertwo"
                  element={<SignUpProviderTwo />}
                />
                <Route
                  path="/signupproviderthree"
                  element={<SignUpProviderThree />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/profileprovider" element={<ProfileProvider />} />
                <Route
                  path="/reservationCustomer"
                  element={<ReservationCustomer />}
                />
                <Route path="/provider/:id" element={<ViewProfileProvider />} />
                <Route path="/addresspage" element={<AddressPage />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route
                  path="/checkout-address"
                  element={<CheckoutAddressPage />}
                />
                <Route
                  path="/checkout-payment"
                  element={<CheckoutPaymentPage />}
                />
                <Route path="/checkout-review" element={<CheckoutReviewPage />} />
                <Route path="/checkout-paypal" element={<CheckoutPaypalPage />} />

                {/* testing auth here */}
                <Route element={<RequireAuth allowedRoles={[1]}/>}>
                  <Route path="/providerschedule" element={<ProviderScheduleing />} />
                  <Route path="/onlyproviderview" element={<OnlyProviderView />} />
                </Route>
                <Route path="/orderhistory" element={<OrderHistoryPage />} />
              </Routes>
            <Footer />
          </div>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
