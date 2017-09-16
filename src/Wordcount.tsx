import * as React from 'react';




class Wordcount extends React.Component<{wordList:any}, {wordList:any}>{
    constructor(props){
        super(props);
        this.state = {
            wordList: props.wordList,
        };
    }
    componentDidMount(){
        console.log(this.state.wordList);
    }
    render(){
        return(
            <p>CraySaySomethingNormal</p>
        ) 
    }
}

export default Wordcount;