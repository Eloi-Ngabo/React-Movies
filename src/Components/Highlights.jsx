import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Highlight from '../En/Highlight';
const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">America's platform</span>
          </h2>
        <div className="highlight__wrapper">
         <Highlight icon={<FontAwesomeIcon icon="bolt" />} 
         title="Easy and Quick" 
         para="Get access to the movies you purchased online instantly."
         />
          <Highlight icon={<FontAwesomeIcon icon="film" />}  
         title="10,000+ Movies" 
         para="America's platform has movies in all your favourite categories."
         />
          <Highlight icon={<FontAwesomeIcon icon="tags" />} 
         title="Affordable" 
         para="Get your top  popular movies as little as $10."
         />
    
        </div>
        </div>
        </div>
      
    </section>
   
  );
};

export default Highlights;