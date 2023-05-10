
import { FaArrowRight } from 'react-icons/fa';
const ServiceCard = ({service}) => {
    const {title, img, price}=service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{title}</h2>

        <div className='flex'>   
        <p className="text-orange-600">Price: ${price}</p>
            <div>
            <p className='text-orange-600'><FaArrowRight/></p>
            </div>
        </div>
        </div>
      </div>
    );
};

export default ServiceCard;