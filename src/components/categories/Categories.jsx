/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import *as styles from './Categories.css'
export const Categories=()=>{
    return(
    <>
    <div className='chooseCategories'>
            <p className='title'>Choose your interested category :</p>
            <div className="categoriesContainer" id='categoriesContainer'>
                <p >Computer Science <img src="/src/assets/Icons/cs.png" style={{width:'50px',height:'50px',transform:'translateY(25%)'}} /></p>
                <p >Mathematics <img src="/src/assets/Icons/math.png" style={{width:'50px',height:'50px',transform:'translateY(25%)'}} /></p>
                <p >General Knowledge <img src="/src/assets/Icons/knowledge.png" style={{width:'50px',height:'50px',transform:'translateY(25%)'}} /></p>
                <p >History <img src="/src/assets/Icons/history.png" style={{width:'50px',height:'50px',transform:'translateY(25%)'}}/></p>
                <p >Vehicles <img src="/src/assets/Icons/vehicles.png" style={{width:'50px',height:'50px',transform:'translateY(25%)'}}/></p>
            </div>
        </div>
        <div className="chooseDiffuclty">
            <p className="title">Choose diffuclty :</p>
            <div className="diffucltyContainer" id='diffucltyContainer'>
                <p onClick>Easy</p>
                <p onClick>Medium</p>
                <p onClick>Hard</p>
                <p onClick>Expert</p>
            </div>
        </div>
        <div className='submitButton'>
            <Link to="/categories/" className='submit'>Let's Go</Link>
        </div>
    </>
    )
}