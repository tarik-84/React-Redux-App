import React from 'react'
import { connect } from 'react-redux';
import { getPictures } from '../actions/doggActions'



const Dogg = ({ getPictures, dogg, isFetching, error }) => {
    if (error !== "")
      return (
        <div>
        <h2>{error}</h2>
        <button onClick={getPictures}>Load New Dogs Pictures</button>
      </div>
      );
  
    if (isFetching) {
      return <h2>Fetching the pictures now :)</h2>;
    } else {
      return (
        <div className='dog'>
          <button className='button' onClick={getPictures}>Load New Dogs Pictures</button>
          <img className='image' src={dogg} alt='' />
        </div>
      );
    }
  };

  const mapStateToProps = state => {
    return {
      dogg: state.dogg,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { getPictures }
  )(Dogg);