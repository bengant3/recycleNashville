// Recycling, recycling paper, clipboard icons made by Freepik from www.flaticon.com
// Location, Apple icons made by Good Ware from www.flaticon.com

// More recycling icons:
// https://www.flaticon.com/search?author_id=1&style_id=15&type=standard&word=recycle

// Alternative icons:
// https://www.flaticon.com/premium-icon/paper-recycle_2681423
// https://www.flaticon.com/free-icon/placeholder_684908
// https://www.flaticon.com/premium-icon/apple_257623
import React from 'react';

class HomePageButton extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     label: "My Button"
        // }
    }
    render() {
        return (
            <button>
                <img src = {this.props.image} width="100" height="100"/>
                {this.props.label}
            </button>
        )
    }
}


function Homepage(props) {
  return (
    <div stylehomeButtons>
        <HomePageButton
            label={"Learn about recycling"}
            image={"https://cdn-icons.flaticon.com/png/512/3658/premium/3658345.png?token=exp=1635273840~hmac=edc8565e2afefbdcfb8231d760848ab8"}/>
        <HomePageButton
            label={"Recycling Quiz"}
            image={"../images/clipboard.png"}/>
        <HomePageButton
            label={"Find me a Recycling Center"}
            image={"../images/location.png"}/>
    </div>
  );
}

export default Homepage;

const homeButtonsContainerStyle = {
    //display: flex,
    //justifyContent: spaceBetween,

}