import React from 'react';
import { useState } from 'react';

function Cart({state,setState}){

 


    const [cart, setCart] = useState([
    { imageURL:'https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?cs=srgb&dl=pexels-alex-azabache-3766111.jpg&fm=jpg',
    name:'fancy product',
     price:'$8-$10',
     id :1
   },
   {
    imageURL:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQgy_6m3wcS5Lx5IpMOQ2rDc_g_FJmYkuFXhyhPRvK7SaKSaORLFmyO-Z0ome81zwWFhJnJe6CHivZgRyPPF0xqWBYMRQaKnIQPjOB48yjgH6PqqU08CiUk',
     name:'special item',
     price:'$8-$10',
     id :2
   },
   {
    imageURL:'https://rukminim2.flixcart.com/image/850/1000/jhgl5e80/doll-doll-house/p/f/g/barbie-birthday-wishes-doll-barbie-original-imaf5hbvhm4qyxnh.jpeg?q=20&crop=false',
     name:'Sale item',
     price:'$8-$10',
     id :3
   },
   {
     imageURL:'https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg',
     name:'Popular item',
     price:'$8-$10',
     id:4
     
   },
   {
     imageURL:'https://img.freepik.com/free-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708128000&semt=sph',
     name:'fancy product',
     price:'$8-$10',
     id:5
   }
   ])
 
   



   const addToCart = (item) => {
    if(!state.includes(item.id)){
        setState([...state,item.id])
    }
          
   }
   
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-5">

                            
                                                {cart.map(item=> (
                                                    <div  className='outerbox'   key={item.id}>

                                                     <div style={{height:"250px"}}>
                                                     <img className='picture' src={item.imageURL} alt={item.name}  style={{height:"200px" ,width:"250px"}}/>
                                                    </div>
                                                        <p className='content'>{item.name}</p>
                                                        <p className='content'>Price: {item.price}</p>
                                                        <p className='content'>Quantity: {item.quantity}</p>
                                                        <button className='add-btn' onClick={() => addToCart(item)}>Add to Cart</button>
                                                   </div>
                                                ))};

                                            </div>                                          
                                        

                                            
                                        </div>
                                
     );
}
export default Cart;