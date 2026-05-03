import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addReview as addReviewAction,
  allReview,
  deleteReview,
  editReview,
} from "../../redux/reducers/reviewReducer";
import { User } from "lucide-react";

function AllReviews() {
  const dispatch = useDispatch();
  const { reviews = [] } = useSelector((state) => state.review);

  // ADD REVIEW STATE
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  // EDIT MODAL STATE
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [editComment, setEditComment] = useState("");
  const [editRating, setEditRating] = useState(5);

  // user
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // hostelId safe
  const hostelId =
    window.history.state?.usr?.hostelId ||
    window.location.pathname.split("/").pop();



  // FETCH ALL REVIEWS
  useEffect(() => {
    dispatch(allReview(hostelId));
  }, [dispatch, hostelId]);

  // ADD REVIEW
  const handleAddReview = () => {
    if (!comment.trim()) return;

    dispatch(
      addReviewAction({
        hostelId,
        userName: user?.name || "Anonymous",
        rating,
        comment,
      })
    );

    setComment("");
    setRating(5);
  };

  // OPEN EDIT MODAL
  const handleEditClick = (rev) => {
    setSelectedReview(rev);
    setEditComment(rev.comment);
    setEditRating(rev.rating);
    setEditModalOpen(true);
  };

  // UPDATE REVIEW
  const handleUpdateReview = () => {
    if (!selectedReview?._id) return;

    dispatch(
      editReview({
        reviewId: selectedReview._id,
        reviewData: {
          comment: editComment,
          rating: editRating,
        },
      })
    );

    setEditModalOpen(false);
    setSelectedReview(null);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 p-6">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Hostel Reviews
          </h1>
          <p className="text-gray-500 mt-1">
            Share your experience with others
          </p>
        </div>

        {/* ADD REVIEW BOX */}
        <div className="bg-white rounded-2xl shadow-lg p-5 mb-8">
          <h2 className="text-lg font-semibold mb-3">
            Write a Review
          </h2>

          {/* STAR RATING */}
          <div className="flex gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`text-2xl transition ${rating >= star ? "text-yellow-400" : "text-gray-300"
                  }`}
              >
                ★
              </button>
            ))}
          </div>

          {/* TEXTAREA */}
          <textarea
            rows="3"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review..."
            className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          {/* BUTTON */}
          <button
            onClick={handleAddReview}
            className="mt-3 bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition"
          >
            Submit Review
          </button>
        </div>

        {/* REVIEWS LIST */}
        <div className="space-y-4">
          {reviews.map((rev) => (
            <div
              key={rev._id}
              className="bg-white rounded-2xl shadow p-5 hover:shadow-md transition"
            >

              {/* TOP */}
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <span className="bg-gray-300 p-2 rounded-full"><User /></span>
                  <h3 className="font-semibold text-gray-800">

                    {rev.userName}
                  </h3>
                </div>

                <div className="text-yellow-500 text-sm">
                  {"★".repeat(rev.rating)}
                </div>
              </div>

              {/* COMMENT */}
              <p className="text-gray-600 mt-2">
                {rev.comment}
              </p>

              {/* ACTIONS */}
              <div className="flex gap-4 mt-4 text-sm">
                <button
                  onClick={() => dispatch(deleteReview(rev._id))}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>

                <button
                  onClick={() => handleEditClick(rev)}
                  className="text-green-500 hover:underline"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= EDIT MODAL ================= */}
        {editModalOpen && selectedReview && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white w-[90%] max-w-md p-6 rounded-2xl shadow-lg">

              <h2 className="text-xl font-bold mb-4">
                Edit Review
              </h2>

              {/* STAR RATING */}
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setEditRating(star)}
                    className={`text-2xl ${editRating >= star
                      ? "text-yellow-400"
                      : "text-gray-300"
                      }`}
                  >
                    ★
                  </button>
                ))}
              </div>

              {/* TEXTAREA */}
              <textarea
                value={editComment}
                onChange={(e) => setEditComment(e.target.value)}
                rows="4"
                className="w-full border p-3 rounded-lg focus:ring"
              />

              {/* BUTTONS */}
              <div className="flex justify-end gap-3 mt-4">

                <button
                  onClick={() => setEditModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                >
                  Cancel
                </button>

                <button
                  onClick={handleUpdateReview}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg"
                >
                  Update
                </button>

              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default AllReviews;