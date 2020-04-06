
import React from 'react';

import Card from './Card';

const CardList = ( { robots } ) => {

	if( false ){

		throw new Error('NOOOOOO!');

	}

	return (

		<div>
			
			{
			    
			    robots.map( (item, i) => {

					return (

						<Card 

							key={i} 

							id={item.id} 

							name={item.name} 

							email={item.email}

						/>

					);

				} )
			
			}
			
	    </div>

	);

}

export default CardList;