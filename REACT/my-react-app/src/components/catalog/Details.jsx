import Counter   from "./Counter";
const Details=(props)=>{
    return(
        <div>
            <img src={props.product.imageurl} width="100" height="100"/>
            <p>{props.product.title}</p>
            <p> ${props.product.unitprice}</p>    
            <p>Stock available: {props.product.quantity}</p>
            <Counter likes={props.product.likes}/>
     
        </div>
    );
}
 
export default Details;
 
 
//<p>{props.product.description}</p>