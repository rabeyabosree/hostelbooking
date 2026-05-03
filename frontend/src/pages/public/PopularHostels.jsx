import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllHostel } from '../../redux/reducers/hostelreducer';
import HostelCard from '../../component/common/HostelCard';
import { useNavigate } from 'react-router-dom';

function PopularHostels() {
  const { hostels = [], loading } = useSelector((state) => state.hostel);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllHostel())
  }, [dispatch]);

  const popularHostels = hostels.filter((hostel) => hostel?.rating >= 4.5);
  const topHostels = popularHostels.slice(0, 6);

  return (
    <section className="bg-linear-to-b from-gray-50 to-gray-100 py-16 px-8">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">

          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Top Rated Hostels 
            </h2>
            <p className="text-gray-500 mt-2 max-w-lg">
              Discover the best-rated hostels with top comfort, quality service, and amazing experiences.
            </p>
          </div>

          {/* small CTA */}
          {!loading && topHostels.length > 0 && (
            <button
              onClick={() => navigate("/hostels")}
              className="hidden md:block bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              View All
            </button>
          )}

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Loading Skeleton */}
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-4 animate-pulse space-y-3"
              >
                <div className="h-40 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            ))
          ) : topHostels.length > 0 ? (
            topHostels.map((hostel) => (
              <div
                key={hostel._id}
                className="transform hover:-translate-y-1 hover:shadow-lg transition"
              >
                <HostelCard hostel={hostel} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500 text-lg">
                No top-rated hostels found 😔
              </p>
            </div>
          )}

        </div>

        {/* Mobile View All */}
        {!loading && topHostels.length > 0 && (
          <button
            onClick={() => navigate("/hostels")}
            className="mt-4 md:hidden block   text-green-600 px-6 py-3 underline hover:scale-105 transition"
          >
            View All Hostels
          </button>
        )}

      </div>
    </section>
  )
}

export default PopularHostels;