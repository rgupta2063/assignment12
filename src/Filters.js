import React ,{Component} from 'react';

class Filters extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        const value = e.target.value
        const name = e.target.name

        this.props.onFilter({
            [name] : value
        });
    }
    render(){
    return(
            <div style={{marginTop: 25}}  className="searchform">                
                <input size='50' name="filterText" onChange={this.handleChange} type="text" id="filter" 
                    placeholder="Search for.."/>
            </div>
        )   
    }
}


export default Filters

