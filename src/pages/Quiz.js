import React, { Component, useState } from 'react';
import Header from "../Components/Header.js"
import Navbar from "../Components/Navbar/Navbar.js"

const Quiz = () => {

    /** Plan of Attack
     * 
     * Shows 10 questions sequentially, with feedback (right/wrong/message) after each
     * Pool of ~20ish questions
     * Redux
     * 
     * Components:
     *  - Frame that holds questions, 4 options/buttons
     *  - Button
     *  - Feedback Modal
     * 
     * State:
     *  - question number
     *  - number correct
     * 
     * 
     */

    const [isVisible, setVisibility] = useState(false);
    const [twoAnswers, setTwoAnswers] = useState(false);
    const [popUpVisible, setPopUpVisible] = useState(false);

    const mixUpAnswers = (answers) => {

    }

    return (
        <div style={quizContainer}>
            <text style={questionStyle}>{"This is a question?"}</text>
            <div style={{height: 1, backgroundColor: "darkgray"}} />
            <div style={{height: 400, display: "flex", flexDirection: "column"}}>
                <AnswerButton 
                    number = {1} 
                    text = {"This is one answer choice"}
                    isCorrect = {true}
                    callBack = {setPopUpVisible}
                    />
                <AnswerButton 
                    number = {2} 
                    text = {"This is another answer choice"}
                    isCorrect = {false}
                    callBack = {setPopUpVisible}
                    />
                {!twoAnswers && 
                    <AnswerButton 
                    number = {3} 
                    text = {"This is yet another answer choice"}
                    isCorrect = {false}
                    callBack = {setPopUpVisible}
                    />}
                {!twoAnswers &&
                    <AnswerButton 
                    number = {4} 
                    text = {"This is the last answer choice"}
                    isCorrect = {false}
                    callBack = {setPopUpVisible}
                    />}
            </div>
            {popUpVisible &&
                <PopUp initMessage = {"messsssage"} callBack = {setPopUpVisible}/>}
        </div>
    );
}

const PopUp = ({initMessage, callBack}) => {
    const [message, setMessage] = useState(initMessage);

    return(
        <div 
        style={popUp}
        onClick = {() => callBack(false)}>
            <text>{message}</text>
        </div>
    );
}

const AnswerButton = ({number, text, isCorrect, callBack}) => {
    const [hovered, setHovered] = useState(false);

    return(
        <button
        style = {hovered ? answerButtonHovered : answerButton}
        onMouseEnter = {() => setHovered(true)}
        onMouseLeave = {() => setHovered(false)}
        onClick = {() => {
            callBack(true);
            //alert("clicked");
        }}>
            <div
            style = {answerContentContainer} >
                <text style = {answerIndex} >{number}</text>
                <text style = {answerText} >{text}</text>
            </div>
        </button>
    )
}



const QuizPage = (props) => {
    return(
        <div>
            <Navbar />
            <br />
            <Quiz />
        </div>
    );
}

export default QuizPage;

// styles
const answerIndex = {
    fontFamily: "Trebuchet MS, sans serif",
    fontWeight: "bold",
    color: "black",
    fontSize: 18,
}

const answerText = {
    fontFamily: "Trebuchet MS, sans serif",
    color: "darkgray",
    fontSize: 14,
    marginLeft: 30,
}

const answerButton = {
    border: 10,
    borderRadius: 20,
    flexGrow: 1,
    flexBasis: 1,
    margin: 10,
    padding: 30,
    //height: 400,
}

const answerButtonHovered = {
    backgroundColor: "lightgray",
    border: 10,
    borderRadius: 20,
    flexGrow: 1,
    flexBasis: 1,
    margin: 10,
    padding: 30,
    //margin: 10,
    //height: 400,
}

const answerContentContainer = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "spaceBetween",
}

 const questionStyle = {
    fontFamily: "Trebuchet MS, sans serif",
    fontSize: 32,
    fontWeight: "bold",
    color: "gray",

 }

 const quizContainer = {
    backgroundColor: "lightblue",
    height: "90%",
    width: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
 }

 const popUp = {
    width: "60%",
    height: 200,
    backgroundColor: "goldenrod",
    marginTop: -300,
    
 }