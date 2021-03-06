import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** Renders categories of bookshelfs **/

class SelectCategory extends Component {
	static propTypes = {
		id: PropTypes.string.isRequired, 
		shelf: PropTypes.string.isRequired, 
		onChangeCategory: PropTypes.func.isRequired 
	}
	
	onChangeCategory = (id, category) =>  {
		this.props.onChangeCategory (id, category);
	}
	
	render () {
		const { id, shelf } = this.props;
		
		return( 
		<select onChange={ (event) => this.onChangeCategory(id, event.target.value) }
		value= { shelf } >
		<option value='none' disabled>Move to...</option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
    )
  }
}

export default SelectCategory;