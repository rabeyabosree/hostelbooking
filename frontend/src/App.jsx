import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/public/Home';
import ComponentLayout from './component/common/ComponentLayout';
import PaymenSuccess from './pages/payment/PaymenSuccess';
import PaymentFailed from './pages/payment/PaymentFailed';
import PaymentCancel from './pages/payment/PaymentCancel';
import SingleRoom from './pages/rooms/SingleRoom';
import HostelDetails from './pages/hostels/HostelDetails';
import AllHostel from './pages/hostels/AllHostel';
import AllReviews from './pages/review/AllReviews';
import MyBooking from './pages/auth/MyBooking';
import AdminLogin from './pages/auth/AdminLogin';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import Dashboard from './pages/admin/Dashboard';
import Hostels from './pages/admin/sidebar/Hostels';
import User from './pages/admin/sidebar/User';
import Payment from './pages/admin/sidebar/Payment';
import BookingsData from './pages/admin/sidebar/BookingsData';
import BookingPage from './pages/booking/BookingPage';

function App() {

  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          {/* public Routes */}

          <Route element={<ComponentLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminLogin />} />

            <Route path="/bookings" element={<BookingPage/>} />
            <Route path="/my-booking" element={<MyBooking />} />
            <Route path="/reviews" element={<AllReviews />} />

            <Route path="/hostels" element={<AllHostel />} />
            <Route path="/hostels/:id" element={<HostelDetails />} />
            <Route path="/room/:id" element={<SingleRoom />} />

            <Route path="/destinations" element={<Home/>} />

            <Route path="/payment/success/:bookingId" element={<PaymenSuccess />} />
            <Route path="/payment/failed/:bookingId" element={<PaymentFailed />} />
            <Route path="/payment/cancel/:bookingId" element={<PaymentCancel />} />



          </Route>

          {/* admin routes */}
          <Route path='/admin' element={<AdminDashboard />}>
            <Route index element={<Dashboard />} />
            <Route path="hostels" element={<Hostels />} />
            <Route path="bookings" element={<BookingsData />} />
            <Route path="users" element={<User />} />
            <Route path="payments" element={<Payment />} />

          </Route>
        </Routes>

      </Router>

    </>
  )
}

export default App
