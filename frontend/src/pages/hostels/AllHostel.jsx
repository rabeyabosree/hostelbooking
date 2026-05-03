import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllHostel } from '../../redux/reducers/hostelreducer';
import HostelCard from '../../component/common/HostelCard';

function AllHostel() {

  const { hostels = [], loading } = useSelector((state) => state.hostel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHostel())
  }, [dispatch]);

  return (
    <section className="bg-gray-100 min-h-screen pt-32 px-8">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-green-800">
              Explore All Hostels 
            </h1>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto md:mx-0">
              Find the perfect place to stay from our wide range of hostels. Filter, compare, and book easily.
            </p>
          </div>

          <div className='mt-2'>
            search availabilty
          </div>
        </div>

        {/*  Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* Loading */}
          {loading ? (
            <p className="col-span-full text-center text-gray-500">
              Loading hostels...
            </p>
          ) : hostels.length > 0 ? (
            hostels.map((hostel) => (
              <HostelCard
                key={hostel._id}
                hostel={hostel}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No hostels found
            </p>
          )}

        </div>

      </div>

    </section>
  )
}

export default AllHostel