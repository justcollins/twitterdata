import * as React from 'react';
import createChart from './lineChart'
let EnglishWords1000 = require("./1000WordsEnglish");

class Wordcount extends React.Component<{wordList:Object}, {wordList:Object}>{
    constructor(props){
        super(props);
        this.state = {
            wordList: props.wordList,
        };
    }
    componentWillMount(){
        let listified = Object.keys(this.state.wordList).map((key)=>{
            return { word: key, values: this.state.wordList[key]};
        });
        let FilterArray1000 = EnglishWords1000.words.split(" ");
        let filteredOn1000 = listified.filter((item)=>{
            return (!(FilterArray1000.includes(item.word.toLowerCase() ))) && item.word.length>3
        });
        let sorted = filteredOn1000.sort( (a,b) =>{
            return(b.values - a.values)
        })
        console.log(sorted);
        this.state = {
            wordList: sorted,
        }
        console.log(EnglishWords1000.words.split(" "));
        console.log(listified)
        
    }
    componentDidMount(){
        createChart(this.state.wordList);
    }
    render(){
        return(
            <div></div>
        )
    }
}

export default Wordcount;