import React from 'react';
import Navbar from "../Components/Navbar/Navbar.js"

function Info(props) {
    return(
        <div>
            <Navbar/>
            
            <div style = {pageStyles}>
                
                <h1>Helpful Resources</h1>
                <p>If you want to find more information about recycling in Nashville, we found the following sources helpful.</p>
                <br/>
                <h1>Podcast:</h1>
                <h2>
                    <a href="https://wpln.org/post/curious-nashville-happens-wrong-stuff-gets-recycling-bin/#stream/0">Curious Nashville: What Happens When The Wrong Stuff Gets In the Recycling Bin?</a>
                </h2>
                <p>This 15 minute podcast has great information about the process of recycling an object, and what you can do to help your recyclables make it through.</p>
                <br/>
                <h1>The following websites provide helpful insight on common recycling mistakes:</h1> 
                <h2>
                    <a href="https://www.globalcitizen.org/en/content/biggest-recycling-mistakes/">The 9 Biggest Recycling Mistakes You're Probably Making</a>
                </h2>
                <h2>
                    <a href="https://www.openaccessgovernment.org/10-common-recycling-mistakes-we-make-at-home/96193/">10 Common Recycling Mistakes We Make at Home</a>
                </h2>
                <h2>
                    <a href="https://brightly.eco/5-surprisingly-common-recycling-mistakes-you-may-be-making/">5 Surprising Common Recycling Mistakes You May Be Making</a>
                </h2>
                <br/>
                <h1>The next sources provide specific information on what can and can not be recycled:</h1>
                <h2>
                    <a href="https://www.ecoscraps.com/blogs/sustainable-living/76411652-a-simple-list-of-what-can-and-cannot-be-recycled">A Simple List of What Can and Cannot be Recycled</a>
                </h2>
                <h2>
                    <a href="https://www.netwaste.com.au/recycle-it/what-can-be-recycled/">What Can be Recycled</a>
                </h2>
                <h2>
                    <a href="https://www.nashville.gov/departments/water/waste-and-recycling/recycling">Nashville Recycling</a>
                </h2>
                <br/>
                <h1>Resources on the benefits of recycling</h1>
                <h2>
                    <a href="https://www.epa.gov/recycle/recycling-basics">Recycling Basics</a>
                </h2>
                <h2>
                    <a href="https://lbre.stanford.edu/pssistanford-recycling/frequently-asked-questions/frequently-asked-questions-benefits-recycling">Frequently Asked Questions on the Benefits of Recycling</a>
                </h2>
            </div>
        </div>
    );
}

export default Info;

// styles
const pageStyles = {
    color: "darkgreen",
    height: 500,
    width: "60%",
    marginTop: "10%",
    marginLeft: "20%",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const title= {
    color: "green",
    fontSize: 32,
};

const header= {
    color: "green",
    fontSize: 18,
};

const term = {
    color: "green"
}

const infoText= {
    color: "black",
};
