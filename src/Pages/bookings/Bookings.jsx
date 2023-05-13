import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate()

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url,{
      method:'GET',
      headers:{
        authorization:`Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if(!data.error){
          setBookings(data)
        }
        else{
          // if token !valid to logout and then navigate home route 
          navigate('/')
        }
       
       
      
      
      });
  }, [url,navigate]);

  const handleDelate = id =>{
    const proceed = confirm('Are you sure you want to be a delate')
    if(proceed){
    fetch(`http://localhost:5000/bookings/${id}`,{
        method:'DELETE',
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.deletedCount>0){
            alert('delate SuccessFull')
              const remaining = bookings.filter(booking => booking._id!==id);
              setBookings(remaining)
        }
    })
    }
    }

    const handleBookingConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'PATCH',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify({status: 'Confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                // update State
                const remaining = bookings.filter(booking=>booking._id !== id);

                const updated = bookings.find(booking=>booking._id === id);
                updated.status='confirm'
            
                const newBookings = [updated, ...remaining];
                setBookings(newBookings)
            }
        })
    }

  return (
    <div className="mb-20 mt-5">
      <h2 className="text-center mt-5 mb-5 text-3xl font-bold text-orange-500">Your Bookings {bookings.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
        {
            bookings.map(booking=><BookingRow 
            key={booking._id}
            booking={booking}
            handleDelate={handleDelate}
            handleBookingConfirm={handleBookingConfirm}
            ></BookingRow>)
        }
        
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
