import React from 'react'

class Card extends React.Component {
    // state = {
    //     count: 0
    // }

    // OR USING CONSTRUCTOR
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increament = () => {
        const {count} = this.state
        // debugger
        this.setState({
            count: count + 1
        })
    }

    decreament = () => {
        const {count} = this.state

        if (count === 0) {
            alert('Cannot Continue this Operation !')
        }
        else{
            this.setState({
                count: count - 1
            })
        }
    }

    // SHORTEND TEXT
    shorten = (text, maxLength) => {
        if (text && text.length > maxLength) {
            return text.substr(0, maxLength) + '...'
        }
        
        return text
    }
    
    render(){
        // debugger
        const {data} = this.props
        return (
            <React.Fragment>
            <div className="col-lg-12 col-md-12 col-12 mx-auto my-3">
                <label>Using Class Base Function</label>
                <button className="btn btn-primary mx-1 mb-3" onClick={this.increament}>Increament Number</button>
                <button className="btn btn-danger mx-1 mb-3" onClick={this.decreament}>Decreament Number</button>
                <h1>{'Count : '+ this.state.count}</h1>
            </div>
            {
                data.map(movie => (
                    <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
                        <div className="card h-100">
                            <a href="#">
                                <img className="card-img-top" src={movie.image} alt={movie.name} />
                            </a>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href="#">{movie.name}</a>
                                </h4>
                                <h5>$24.99</h5>
                                <p className="card-text">{this.shorten(movie.description, 200)}</p>
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            </div>
                        </div>
                    </div>
                ))
            }
            </React.Fragment>
        )
    }
}

export default Card
