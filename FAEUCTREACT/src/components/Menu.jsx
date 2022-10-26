import React from 'react'
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Menu = () => {
    const { user } = UserAuth();
    class TodoApp extends React.Component {
        constructor(props) {
          super(props);
          this.state = { items: [], text: '' };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        render() {
          return (
            <div className='row'>
              <h3 className=''>Tareas pendientes</h3>
              <TodoList items={this.state.items} />
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-todo">
                  ¿Se le olvida algo?
                </label>
                <input
                  id="new-todo"
                  onChange={this.handleChange}
                  value={this.state.text}
                  className="row"
                />
                <button>
                  Añadir #{this.state.items.length + 1}
                </button>
              </form>
            </div>
          );
        }
      
        handleChange(e) {
          this.setState({ text: e.target.value });
        }
      
        handleSubmit(e) {
          e.preventDefault();
          if (this.state.text.length === 0) {
            return;
          }
          const newItem = {
            text: this.state.text,
            id: Date.now()
          };
          this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
          }));
        }
      }
      
      class TodoList extends React.Component {
        render() {
          return (
            <ul className='rounded'>
              {this.props.items.map(item => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>
          );
        }
      }
      


  return (
    <div >
         <menu className=' container rounded py-4 'style={{backgroundColor:" rgba(239, 247, 168, 0.89)"}}>
          <ul className='row'>
            <span className='row '>Menu</span>
               <li className='row'> {user?.displayName ? (
              <Link to='/home' className=" btn btn-primary ">Home</Link>
                ) : (
                <button className='row btn y' >Inicia sesion Para ver</button>
                )}
                </li>
         <li className='row'> {user?.displayName ? (
              <a href="https://webmail.uct.cl"className=" btn btn-primary">Webmail</a>
                ) : (
                <button className='row btn y' >Inicia sesion Para ver</button>
                )}
                </li>
                      <li className='row'>   {user?.displayName ? (
              <a href="https://estudiantes.uct.cl"className=" btn btn-primary">Portal Estudiante</a>
                ) : (
                <button className='row btn y' >Inicia sesion Para ver</button>
                )}
                </li> 
       <li className='row'> {user?.displayName ? (
              <Link to='/account' className=" btn btn-primary"><img src={user.photoURL} alt="usuario" id="usuarito"/></Link>
                ) : (
                <button  className='row btn y'>Inicia sesion para ver</button>
                )}
                </li>  
            </ul>
            <TodoApp />
          </menu>
          
    </div>
  )
}

export default Menu