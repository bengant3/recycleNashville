import React from 'react';

class Quiz extends React.Component {

    /** Plan of Attack
     * 
     * Shows 10 questions sequentially, with feedback (right/wrong/message) after each
     * Pool of ~20ish questions
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
     * Redux?
     * 
     */

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
    };

    render() {
        return (
            <div>

            </div>
        )
    };
}

function QuizPage(props) {
    return(
        <div>
            <Quiz />
        </div>
    );
}

export default QuizPage;

// styles
const title= {
    color: "green",
};

const header= {
    color: "green",
};

const text= {
    color: "darkgreen",
};
