import React , {Component} from 'react';

class Navigation extends Component
{
    render(){
        return(
            <nav className = "navbar navbar-dark bg-dark">
                <a href="#" className="text-white">
                {this.props.titulo} - {this.props.ntareas}
                </a>
            </nav>
        )
    }
}

export default Navigation;

//NOTA: {} no permite introducir código javascript dentro de la ejecución de nuestro componente