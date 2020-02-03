import React, { Component } from 'react';

class SearchResult extends Component {

  
   render() {
    const {fname, lname, email, title, country, State, DOJ} = this.props
       console.log(this.props);
       return (
        <div class="row">
        <div class="col-xs-10 col-sm-10 col-md-10">
            <div class="well well-sm">
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <img src="http://placehold.it/380x500" alt="" class="img-rounded img-responsive" />
                    </div>
                    <div class="col-sm-6 col-md-8">
                        <h4>{fname + ' '+ lname}</h4>
                        
                        <h5>{title}</h5>
                        <small>
                          <cite title="San Francisco, USA">
                          {State + ',' + country} 
                              <i class="glyphicon glyphicon-map-marker"></i>
                          </cite>
                        </small>
                        <p>
                            <i class="glyphicon glyphicon-envelope"></i>{email}
                            <br />
                            <i class="glyphicon glyphicon-gift"></i>{DOJ}
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
       )
   }
}
export default SearchResult