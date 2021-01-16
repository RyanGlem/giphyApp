import React, {Component} from 'react'
import GifDisplay from './gifDisplay'


class GifSearch extends Component {

    constructor (props) {

        super (props)
        this.state = {
            
            searchTerm: "",
            urls: [],
            match: false,
            key: 'AyuSIWGMSt6cQ5wox8Kp661mPyQzLONo'
        }
        
        console.log (this.state.urls)
    }

    componentDidMount () {
      
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=AyuSIWGMSt6cQ5wox8Kp661mPyQzLONo`)
        .then((response) => response.json())
        .then((response) => {this.setState({urls: response.data})})
        .catch ((error) => console.error(error))
      } 

   gifSearch = () => {

        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=AyuSIWGMSt6cQ5wox8Kp661mPyQzLONo`)
        .then((response) => response.json())
        .then((response) => {this.setState({urls: response.data})})
        .catch ((error) => console.error(error))
   }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value 
        })
    }


    render () { 
        return (
            <div className="search">
                <div>
                    <div>
                    <label className="title">Welcome to the World of Giphy</label>
                   </div>
                    <label className="label">Search for: </label>
                    <input
                        className="text"
                        type="text"
                        onChange={this.handleChange}
                        value= {this.state.searchTerm}
                        >
                    </input>
                </div>   
                   
                    <button className="button" onClick={this.gifSearch} >Search</button>
                  
                <div>
                           
                            {this.state.urls.map((elem, index) => {
                                return (
                                <GifDisplay 
                                key={index} 
                                url = {elem.images.original.url}/>
                                )
                            })} 
                    
                </div>
            </div>
        )

    }

}



export default GifSearch