import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import plusIcon from '../images/plus.png';
import minusIcon from '../images/minus.png';
import resetIcon from '../images/reset.png';



const Counter = ({ counter, inc, dec, reset }) => {
  return (
    <main className="main">
      <div className="container">
        <div className="counter d-flex-center">
          <h1>{counter}</h1>
        </div>
      </div>
      <div className="container buttons-block">
        <button
          className="button-block plus d-flex-center"
          onClick={inc}
        >
          <img className='button-content' src={plusIcon} alt="plus"/>
        </button>
        <button
          className="button-block minus d-flex-center"
          onClick={dec}
        >
          <img className='button-content' src={minusIcon} alt="minus" />
        </button>
        <button
          className="button-block reset d-flex-center"
          onClick={reset}
        >
          <img className='button-content' src={resetIcon} alt="reset" />
        </button>
      </div>
    </main>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}
export default connect(mapStateToProps, actions)(Counter);