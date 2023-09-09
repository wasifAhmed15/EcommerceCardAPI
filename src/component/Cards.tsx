import './card.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
type prosptype={
    Arr:any[]
}
export default function CardData(props:prosptype){
    let Navigate = useNavigate()

    let click = (a:string)=>{
    Navigate(`about/${a}`)
    }



    let {Arr}=props
    return <>
    <div className="container">
        <div className="row">

               
                    {
                        Arr.map((text:any,index:any)=>{
                            
                           return <div className="col-lg-4 col-md-6 col-sm-12"> 
                           <div className="card  my-3 "  onClick={()=>click(text.id)}>
                            <div className='text-center mt-3'>

                            <img src={text.image} className="card-img-top imagall" alt="..." ></img>
                            
            </div>
                            <div className="card-body text-center">
                                <p>{text.title}</p>
                                <p>{text.id}</p>
                                <p className='fs-4 fs-bold '>Rs{text.price}</p>
                                <p>{text.description}</p>
                                </div>    
                             
                            </div>  
                            </div>
            
                        })
                    }
    
                            </div>
            
  
</div>
    
    </>
}

