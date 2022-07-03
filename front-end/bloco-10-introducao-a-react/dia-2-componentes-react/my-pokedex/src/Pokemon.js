import React from 'react';
import './Data';
import  PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const {
            name,
            type,
            image,
        } = this.props
        return(
           <div className="card">
              <section>
                 <p>{name} </p>
                 <p>{type} </p>
                 <img src={image} alt={name} />
              </section>
           </div>
        )
    }
}
Pokemon.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};
export default Pokemon;