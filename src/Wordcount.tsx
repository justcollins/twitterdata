import * as React from 'react';

class Wordcount extends React.Component<{wordList:Object}, {wordList:Object}>{
    constructor(props){
        super(props);
        this.state = {
            wordList: props.wordList,
        };
    }
    componentDidMount(){
        let listified = Object.keys(this.state.wordList).map((key)=>{
            return [key, this.state.wordList[key]];
        })
        console.log(listified);
    }
    render(){
        return(
            <p>CraySaySomethingNormal</p>
        ) 
    }
}

export default Wordcount;