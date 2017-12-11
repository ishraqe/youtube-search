import React,{Component} from 'react';


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''}
    }

    render() {
        return (
            <input
                value={this.state.input}
                 onChange={ term => this.onInputChange(term.target.value)}
                placeholder={'Enter to search'}
            />
        );
    }
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchVideo(term);
    }
}

export default SearchBar;