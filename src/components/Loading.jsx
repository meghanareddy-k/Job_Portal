import Spinner from "./Spinner";

function Loading({ className="loading" , children="Loading..."}) {
    return (

         <div className= {className}>
             <span>
             {children}
             <Spinner />
             </span>

         </div>
    );
}


export default Loading;