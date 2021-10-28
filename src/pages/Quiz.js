import React from 'react';

class Quiz extends React.Component {
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
