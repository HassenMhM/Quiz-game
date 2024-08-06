/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import brain from '../../assets/brain.png'
import *as styles from './Interface.css'
export const Interface=()=>{
    return(
        <>
        <div className="container">
            <div className="textAndBrain">
                <div>
                    <p className="title">
                        Welcome to quiz game !!
                    </p>
                    <p style={{color:'red'}}>Do you have a good brain ? let's discover this</p>
                </div>
                <div>
                    <img src={brain} alt="" style={{width:'150px',height:'150px',marginLeft:'100px'}}/>
                </div>
            </div>
            <a className='startButton' href='/Quiz-game/categories'>Get Started ...</a>
            <p style={{color:'var(--text-color)',borderBottom:'1px solid #8b000099'}}>We have many categories of qustions like :</p>
            <div className="buttomContainer">
                <p>Computer Science</p>
                <p>Mathematics</p>
                <p>General Knowledge</p>
                <p>History</p>
                <p>Vehicles</p>
                <p>...</p>
            </div>
        </div>
        </>
    )
}