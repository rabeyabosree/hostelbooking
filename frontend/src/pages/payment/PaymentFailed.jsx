import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getPayment } from "../../redux/reducers/paymentReducer";

function PaymentFailed() {
  const { paymentInfo, loading, error } = useSelector(
    (state) => state.payment
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bookingId } = useParams();

  useEffect(() => {
    if (bookingId) {
      dispatch(getPayment(bookingId));
    }
  }, [dispatch, bookingId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">

        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Payment Failed ❌
        </h2>

        {/* Loading */}
        {loading && (
          <p className="text-gray-600">Loading...</p>
        )}

        {/* Error */}
        {error && (
          <p className="text-red-500">{error}</p>
        )}

        {/* Optional Payment Info */}
        {paymentInfo && (
          <div className="text-left space-y-2 mb-4">
            <p>
              <span className="font-semibold">Transaction ID:</span>{" "}
              {paymentInfo.transactionId}
            </p>

            <p>
              <span className="font-semibold">Amount:</span> ৳
              {paymentInfo.amount}
            </p>

            <p>
              <span className="font-semibold">Status:</span>{" "}
              <span className="text-red-500">
                {paymentInfo.status}
              </span>
            </p>
          </div>
        )}

        {/* Buttons */}
        <button
          onClick={() => navigate("/checkout")}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl"
        >
          Try Again
        </button>

        <button
          onClick={() => navigate("/")}
          className="mt-2 w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-xl"
        >
          Go Home
        </button>

      </div>
    </div>
  );
}

export default PaymentFailed;