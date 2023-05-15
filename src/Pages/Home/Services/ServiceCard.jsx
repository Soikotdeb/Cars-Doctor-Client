
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {title, img, price, _id}=service

    return (
       <div>
         <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{title}</h2>

        <div className='flex'>   
        <p className="text-orange-600">Price: ${price}</p>
            <div>
            <Link to={`checkout/${_id}`} className='text-orange-600'><FaArrowRight/></Link>
            </div>
        </div>
        </div>
      </div>
       </div>
    );
};

export default ServiceCard;