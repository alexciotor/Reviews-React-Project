import {useState, useEffect} from 'react'
import {AiOutlineLeft}  from 'react-icons/ai';
import {AiOutlineRight} from 'react-icons/ai';
import data from "./data"
console.log(data[0]);
 

const Review =()=>{   
    let [index,setIndex]= useState(0)
    const {id,name,job,text,image}=data[index]
    const checkNumber=(number)=>{
        if(number> data.length-1){
            number = 0
        }
        if(number<0){
            number = data.length-1
        }
        return number
    }
const nextPerson = ()=>{
    setIndex((index)=>{
        let newIndex = index+1
        return checkNumber(newIndex)
    })
}
const prevPerson = ()=>{
    setIndex((index)=>{
        let newIndex = index-1
        return checkNumber(newIndex)
    })
}
return(
   <article className="article-content">
   <div className="img">
  <img className='image' src= {image} alt=""/>
  </div>
  <h4>{name}</h4>
  <h4>{job}</h4>
  <div  className='review' >
  <p>{text}</p>
  </div>
  <div className="arrow">
 <AiOutlineLeft onClick={prevPerson} />
 <AiOutlineRight onClick={nextPerson} />
 </div>
<button className="btn" onClick={()=>{
    const abc = Math.floor(Math.random()*data.length)
setIndex(abc)
}} >Surprise Me</button>
  </article>
)
 }

export default Review