import PropTypes from 'prop-types'
import { FaTrash } from 'react-icons/fa';

const CartProduct = ({product, products, setProducts}) => {
    const {name, img, price, _id} = product || {};

    const handleDelete = id => {
        
    }

    return (
        <div className='p-4 bg-base-100 rounded-xl shadow-xl'>
            <img src={img} alt={name} className='w-[60%] block mx-auto mb-3' />
            <h2 className='text-center text-[#0b0b0b] text-lg font-semibold'>{name}</h2>
            <div className="flex justify-evenly items-center mt-2">
            <p className='text-gray-500 font-medium'>{price}</p>
            <button onClick={()=>{handleDelete(_id)}} className='btn btn-sm bg-[#EA4744]'>
                <FaTrash className='text-white'></FaTrash>
            </button>
            </div>
        </div>
    );
};

CartProduct.propTypes = {
    product: PropTypes.object,
    products: PropTypes.array,
    setProducts: PropTypes.func
}

export default CartProduct;