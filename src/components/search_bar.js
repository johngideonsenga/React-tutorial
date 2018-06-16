import React, {Component} from 'react';

class SearchBar extends Component{
    
    //initialize state
    constructor(props){
        super(props);
        this.state={term:''};
    }
    
    render(){
        return (
            <div className="py-5 text-center">
                <input 
                    type="text" 
                    placeholder="Search"
                    className="px-2 w-50"
                    value = {this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

//export component
export default SearchBar;