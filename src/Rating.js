import React, {Component} from 'react';
import {IoIosStar, IoIosStarOutline} from 'react-icons/io';


class Rating extends Component {

    constructor(props) {
        super(props);
        this.state = {rating:this.props.rating};
    }

    handleClick(ratingValue) {
        this.setState({rating:ratingValue});
    }

    render() {
        var nums = [1,2,3,4,5];
        const styles = {
            starStyle: {
                color:'orange'
            }
        };
        return (
            <div>
                <h1>Rating: {this.state.rating}</h1>
                {nums.map(val => this.state.rating >= val ? (<IoIosStar style={styles.starStyle} onClick={this.handleClick.bind(this, val)}/>):(<IoIosStarOutline style={styles.starStyle} onClick={this.handleClick.bind(this, val)}/>))}
            </div>
        );
    };
}

export default Rating;