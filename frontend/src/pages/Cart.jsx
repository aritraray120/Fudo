// // import { useContext } from 'react';
// // import { StoreContext } from '../../context/StoreContext';
// import { useNavigate } from 'react-router-dom';

// function Cart() {
//     const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
//     const navigate = useNavigate();

//     return (
//         <div className="mt-24 p-4">
//             <div className="border-b pb-4">
//                 <div className="grid grid-cols-6 text-gray-500 text-sm font-medium">
//                     <p>Items</p><p>Title</p><p>Price</p><p>Quantity</p><p>Total</p><p>Remove</p>
//                 </div>
//             </div>

//             {food_list.map((item) => cartItems[item._id] > 0 && (
//                 <div key={item._id} className="grid grid-cols-6 items-center text-sm py-2 border-b">
//                     <img src={item.image} alt="" className="w-12" />
//                     <p>{item.name}</p>
//                     <p>${item.price}</p>
//                     <p>{cartItems[item._id]}</p>
//                     <p>${item.price * cartItems[item._id]}</p>
//                     <p 
//                         onClick={() => removeFromCart(item._id)} 
//                         className="cursor-pointer text-[#EB5757] font-bold"
//                     >x</p>
//                 </div>
//             ))}

//             <div className="mt-10 flex flex-col sm:flex-row justify-between gap-8">
//                 <div className="flex-1">
//                     <h2 className="text-lg font-semibold">Cart Totals</h2>
//                     <div className="mt-4 space-y-2 text-gray-600">
//                         <div className="flex justify-between"><p>Subtotal</p><p>${getTotalCartAmount()}</p></div>
//                         <div className="flex justify-between"><p>Delivery Fee</p><p>${getTotalCartAmount() === 0 ? 0 : 2}</p></div>
//                         <div className="flex justify-between font-semibold"><p>Total</p><p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p></div>
//                     </div>
//                     <button 
//                         onClick={() => navigate('/order')} 
//                         className="mt-4 w-full bg-[#EB5757] text-white py-2 rounded"
//                     >
//                         PROCEED TO CHECKOUT
//                     </button>
//                 </div>

//                 <div className="flex-1">
//                     <p className="text-gray-600">If you have a promo code, enter it here</p>
//                     <div className="mt-2 flex bg-gray-200 rounded overflow-hidden">
//                         <input 
//                             type="text" 
//                             placeholder="Promo code" 
//                             className="flex-1 bg-transparent p-2 outline-none"
//                         />
//                         <button className="bg-black text-white px-4 py-2">Submit</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Cart;
