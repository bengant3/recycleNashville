import React, { useEffect, useState } from 'react';
import Navbar from "../Components/Navbar/Navbar.js"
import quizTextArr from "../text/QuizText.js"

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

    //const [isVisible, setVisibility] = useState(false);

    const [content, setContent] = useState(() => {return generateQuestions()});

    const [numQuestions, setNumQuestions] = useState(0);
    const [numCorrect, setNumCorrect] = useState(0);

    const [started, setStarted] = useState(false);
    const [ended, setEnded] = useState(false);
    const [quizVisible, setQuizVisible] = useState(true);
    const [popUpVisible, setPopUpVisible] = useState(false);

    const [questionText, setQuestionText] = useState("Welcome");
    const [answerTexts, setAnswerTexts] = useState([]);
    const [feedbackText, setFeedbackText] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState(1)

    const [twoAnswers, setTwoAnswers] = useState(false);
    const [currentCorrect, setCurrentCorrect] = useState(false);

    useEffect(() => {
        console.log("in empy array useeffect");
        //setContent(generateQuestions());
    }, [])

    useEffect(() => {
        console.log("in content useeffect (no op rn)");
    }, [content]);

    useEffect(() => {
        console.log("in useffect started");
        console.log(started);
    } ,[started])

    useEffect(() => {
        console.log("in useffect numquestions");
        if(numQuestions > 9) {
            console.log("more than 10 questions now");
            setQuizVisible(false);
            setEnded(true);
        } else {
            console.log(numQuestions.toString() + " numQuestions");
            updateText();
        }
        //if(started && numQuestions <= 9) updateText();
    }, [numQuestions])

    function generateQuestions() {
        console.log("in generate questions");
        console.log(quizTextArr);
        let questions = [];
        //get ten random ints
        let qIndices = new Set();
        while(qIndices.size < 10) qIndices.add(Math.floor(20*Math.random()));
        console.log(Array.from(qIndices.values()));
        //for each question, generate array
        qIndices.forEach((qi) => {
            let question = quizTextArr[qi];
            //console.log(qi);
            let toAdd = question.slice(0,3).concat([0,'','','','']);
            //get 1-4 in a random order and store correct answer index
            let aIndices = new Set();
            while(aIndices.size < question[0]) {
                let i = Math.floor(question[0]*Math.random());
                if(aIndices.size === 0) toAdd[3] = i;
                aIndices.add(i);
            }
            //console.log(Array.from(aIndices.values()));
            //store answer choices
            let i = 0;
            aIndices.forEach((value) => {
                toAdd[4+value] = question[3+i];
                ++i;
            })
            console.log(toAdd);
            questions.push(toAdd);
        })
        console.log(questions);
        //setContent(questions);
        //console.log(content);
        console.log("leaving generate questions");
        return questions;
    }

    function start() {
        setStarted(true);
        //setNumCorrect(0);
        //setNumQuestions(0);
        console.log("in start");
        setQuizVisible(true);
    }

    // function restart() {
    //     setNumCorrect(0);
    //     setNumQuestions(0);
    //     setStarted(true);
    //     generateQuestions();
    //     setQuizVisible(true);
    // }

    const updateText = () => {
        console.log(numQuestions.toString() + content[numQuestions]);
        if(numQuestions <=9) {
            setQuestionText(content[numQuestions][1]);
            setAnswerTexts(content[numQuestions].slice(4).concat(['','']));
            setFeedbackText(content[numQuestions][2])
            setTwoAnswers(content[numQuestions][0] === 2)
            setCorrectAnswer(content[numQuestions][3]);
        }
    }

    const answerClick = (isCorrect) => {
        setCurrentCorrect(isCorrect);
        setPopUpVisible(true);
    }

    const closePopUp = () => {
        setNumQuestions(numQuestions + 1);
        if(currentCorrect) {setNumCorrect(1+numCorrect)};
        setPopUpVisible(false);
        
    }

    return (
        <div>
            <div style={quizContainer}>
                <div style={{width: "75%", height: 170, textAlign: 'center'}}>
                    {started && !ended && <p style={questionStyle}>{questionText}</p>}
                    {!started && <p style={questionStyle}>Welcome</p>}
                    {ended && <p style={questionStyle}>Results</p>}
                </div>
                <div style={{display: "flex", width: "50%", marginBottom: 40}}>
                    {numQuestions > 0 && <canvas style={{height: 10, flexGrow: numQuestions, backgroundColor: "green"}} />}
                    {numQuestions < 10 && <canvas style = {{height: 10, flexGrow: 10-numQuestions, backgroundColor: "lightgray"}}/>}
                </div>
                {started && quizVisible && !popUpVisible &&
                <div style={{height: 400, display: "flex", flexDirection: "column", alignItems: "stretch"}}>
                    <AnswerButton 
                        number = {1} 
                        text = {answerTexts[0]}
                        isCorrect = {(0===correctAnswer)}
                        callBack = {answerClick}
                        />
                    <AnswerButton 
                        number = {2} 
                        text = {answerTexts[1]}
                        isCorrect = {(1===correctAnswer)}
                        callBack = {answerClick}
                        />
                    {!twoAnswers && 
                        <AnswerButton 
                        number = {3} 
                        text = {answerTexts[2]}
                        isCorrect = {(2===correctAnswer)}
                        callBack = {answerClick}
                        />}
                    {!twoAnswers &&
                        <AnswerButton 
                        number = {4} 
                        text = {answerTexts[3]}
                        isCorrect = {(3===correctAnswer)}
                        callBack = {answerClick}
                        />}
                </div>}
                {!started && !ended &&
                    <StartQuiz
                    start = {start}
                    />}
                {ended && !popUpVisible &&
                    <EndQuiz 
                    restart = {() => {window.location.reload()}}
                    numCorrect = {numCorrect}/>}
            </div>
            {popUpVisible &&
            <div>
                <PopUp 
                initMessage = {feedbackText} 
                callBack = {closePopUp}
                isCorrect = {currentCorrect}
                numCorrect = {numCorrect}
                numQuestions = {numQuestions}/>
            </div>}
        </div>
    );
}

const PopUp = ({initMessage, callBack, isCorrect, numCorrect, numQuestions}) => {
    const [message, setMessage] = useState(initMessage);

    return(
        <div 
        style = {{margin: "auto", width: "45%"}}
        onClick = {() => callBack(false)}>
            <div style={popUp}>
                <h2>{isCorrect ? "Correct!" : "Incorrect"}</h2>
                <p>{message}</p>
                <p style={{textAlign: "center", color: 'darkgray'}}>Click to Continue</p>
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
                <p style = {answerIndex} >{number}</p>
                <p style = {answerText} >{text}</p>
            </div>
        </button>
    )
}

const StartQuiz = ({start}) => {
    const [startHovered, setStartHovered] = useState(false);
    return(
        <div style = {{width: 400}}>
            <h2>{"Recycling Quiz"}</h2>
            <p> {"See how well you understand recycling! Check out the Information page to learn more about the Do's and Don't's of recycling. "}</p>
            <button 
                style = {startHovered ? answerButtonHovered : answerButton}
                onMouseEnter = {() => setStartHovered(true)}
                onMouseLeave = {() => setStartHovered(false)}
                onClick={start} >
                    <p style = {buttonText} >Start</p>
                </button>
        </div>
    )
}

const EndQuiz = ({numCorrect, restart}) => {
    const [endHovered, setEndHovered] = useState(false);
    return(
        <div style = {{width: 400}}>
            <h2>{numCorrect > 5 ? "Congrats!": "Better Luck Next Time."}</h2>
            <p> {"You got "+numCorrect+" questions correct out of 10. Take this quiz another time to see if you can do even better! you can also review the Information page to review."}</p>
            <button 
                style = {endHovered ? answerButtonHovered : answerButton}
                onMouseEnter = {() => setEndHovered(true)}
                onMouseLeave = {() => setEndHovered(false)}
                onClick={restart}>
                <p style = {buttonText} >Restart</p>
            </button>
        </div>
    )
}

const QuizPage = () => {
    const [quizVisible, setQuizVisible] = useState(true);

    const quizEnd = (numCorrect, numQuestions) => {
        setQuizVisible(false);
    }

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
    fontWeight: "bold",
    color: "black",
    fontSize: 24,
}

const answerText = {
    color: "darkgray",
    fontSize: 18,
    marginLeft: 30,
}

const buttonText = {
    marginTop: 0,
    color: "darkgray",
    fontSize: 18,
}

const answerButton = {
    backgroundColor: "#efefef",
    border: 0,
    //border: "2px solid gray",
    borderRadius: 30,
    //flexGrow: 1,
    //flexBasis: 1,
    marginBottom: 20,
    padding: 30,
    width: 400,
    height: 80,
}

const answerButtonHovered = {
    backgroundColor: "lightgray",
    border: 0,
    //border: "2px solid gray",
    borderRadius: 30,
    //flexGrow: 1,
    //flexBasis: 1,
    marginBottom: 20,
    padding: 30,
    width: 400,
    height: 80,
}

const answerContentContainer = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "spaceBetween",
    height: 25,
}

 const questionStyle = {
    fontSize: 32,
    fontWeight: "bold",
    color: "gray",
    margin: 30,
 }

 const quizContainer = {
    //backgroundColor: "lightblue",
    margin: "auto",
    fontFamily: "Trebuchet MS, sans serif",
    borderRadius: 40,
    //padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "80%",
    width: "50%",
 }

 const popUp = {
    fontFamily: "Trebuchet MS, sans serif",
    margin: "auto",
    width: "50%",
    height: "25%",
    //left: "20%",
    //top: "35%",
    backgroundColor: "#efefef",
    //border: "2px solid gray",
    borderRadius: 20,
    //marginTop: -300,
    padding: 30,
    //paddingLeft: 35,
    //display: "none",
    //flexDirection: "column",
    //position: "fixed",
 }