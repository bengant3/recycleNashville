import React, { Component, useState } from 'react';
import Header from "../Components/Header.js"
import Navbar from "../Components/Navbar/Navbar.js"
import Footer from "../Components/Footer/index.js"

const Quiz = (callBack) => {

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
    const [numQuestions, setNumQuestions] = useState(0);
    const [numCorrect, setNumCorrect] = useState(0);
    const [currentCorrect, setCurrentCorrect] = useState(false);
    const [quizVisible, setQuizVisible] = useState(true);

    const mixUpAnswers = (answers) => {

    }

    const answerClick = (isCorrect) => {
        setNumQuestions(1+numQuestions);
        setCurrentCorrect(isCorrect);
        if(isCorrect) {setNumCorrect(1+numCorrect)};
        //problem

        if(numQuestions >= 9) {
            setQuizVisible(false);
        }

        setPopUpVisible(true);
    }

    return (
        <div>
            <div style={quizContainer}>
                <text style={questionStyle}>{"This is a question?"}</text>
                <div style={{display: "flex", width: "100%"}}>
                    {numQuestions > 0 && <canvas style={{height: 10, flexGrow: numQuestions, backgroundColor: "green"}} />}
                    {numQuestions < 10 && <canvas style = {{height: 10, flexGrow: 10-numQuestions, backgroundColor: "lightgray"}}/>}
                </div>
                {quizVisible && 
                <div style={{height: 400, display: "flex", flexDirection: "column"}}>
                    <AnswerButton 
                        number = {1} 
                        text = {"This is one answer choice"}
                        isCorrect = {true}
                        callBack = {answerClick}
                        />
                    <AnswerButton 
                        number = {2} 
                        text = {"This is another answer choice"}
                        isCorrect = {false}
                        callBack = {answerClick}
                        />
                    {!twoAnswers && 
                        <AnswerButton 
                        number = {3} 
                        text = {"This is yet another answer choice"}
                        isCorrect = {false}
                        callBack = {answerClick}
                        />}
                    {!twoAnswers &&
                        <AnswerButton 
                        number = {4} 
                        text = {"This is the last answer choice"}
                        isCorrect = {false}
                        callBack = {answerClick}
                        />}
                </div>}
                {!quizVisible &&
                <div>
                    <text>{"Coongrats! You got "+numCorrect+" questions correct."}</text>
                    <button>Hello</button>
                </div>
                }
            </div>
            {popUpVisible &&
                <PopUp 
                initMessage = {"messsssage"} 
                callBack = {setPopUpVisible}
                correct = {currentCorrect}
                numCorrect = {numCorrect}
                numQuestions = {numQuestions}/>}
        </div>
    );
}

const PopUp = ({initMessage, callBack, isCorrect, numCorrect, numQuestions}) => {
    const [message, setMessage] = useState(initMessage);

    return(
        <div 
        style={{height: 600, width: 600, display: "none", position: "fixed"}}
        onClick = {() => callBack(false)}>
            <div style={popUp}>
                <text>{isCorrect ? "Correct!" : "Incorrect"}</text>
                <text>{message}</text>
            </div>
            
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
            callBack(isCorrect);
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
    const [quizVisible, setQuizVisible] = useState(true);

    const quizEnd = (numCorrect, numQuestions) => {
        setQuizVisible(false);
    }

    return(
        <div>
            <Navbar />
            <br />
            <Quiz />
            <br/>
            <Footer />
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
    backgroundColor: "#efefef",
    border: "2px solid gray",
    borderRadius: 20,
    flexGrow: 1,
    flexBasis: 1,
    margin: 10,
    padding: 30,
    //height: 400,
}

const answerButtonHovered = {
    backgroundColor: "lightgray",
    border: "2px solid gray",
    borderRadius: 20,
    flexGrow: 1,
    flexBasis: 1,
    margin: 10,
    padding: 30,
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
    backgroundColor: "#efefef",
    border: "2px solid gray",
    borderRadius: 20,
    //marginTop: -300,
    padding: 30,
    display: "none",
    flexDirection: "column",
    position: "fixed",
    
 }