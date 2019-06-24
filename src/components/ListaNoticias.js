import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';

const ListaNoticias = ({noticias}) => ( 
    <div className="row">
        {noticias.map(noticia =>(
            <Noticia 
                key={noticia.url}
                noticia={noticia}
            
            />
        ))}
    </div>
);

ListaNoticias.protoType = {
    noticias: PropTypes.array.isRequired
}
 
export default ListaNoticias;

