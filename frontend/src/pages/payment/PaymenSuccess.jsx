import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getPayment } from "../../redux/reducers/paymentReducer";

function PaymentSuccess() {
  const { paymentInfo, loading, error } = useSelector(
    (state) => state.payment
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { bookingId } = useParams();

  // fetch payment
  useEffect(() => {
    if (bookingId) {
      dispatch(getPayment(bookingId));
    }
  }, [dispatch, bookingId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">

        {/* Loading */}
        {loading && (
          <p className="text-gray-600">Loading payment details...</p>
        )}

        {/* Error */}
        {error && (
          <p className="text-red-500">{error}</p>
        )}

        {/* Success Content */}
        {paymentInfo && (
          <>
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Payment Success 🎉
            </h2>

            <div className="text-left space-y-2">

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
                <span className="text-green-600">
                  {paymentInfo.status}
                </span>
              </p>

              <p>
                <span className="font-semibold">Email:</span>{" "}
                {paymentInfo.email}
              </p>

            </div>

            {/* Button */}
            <button
              onClick={() => navigate("/")}
              className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl"
            >
              Go Home
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default PaymentSuccess;