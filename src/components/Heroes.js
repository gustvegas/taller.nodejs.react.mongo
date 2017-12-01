import React, { Component } from 'react';
import Hero from './Hero';
import EditHero from './EditHero';

class Heroes extends Component {
  constructor() {
    super();
    this.state = { heroes : [] , addingHero : false};

    this.handleSelect = this.handleSelect.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange= this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEneableAddMode = this.handleEneableAddMode.bind(this);
  }

  componentDidMount(){
    fetch('api/heroes').then(result => result.json()).then(json => {
      this.setState({heroes : json});
    });
  }

  handleSelect(hero){
    this.setState({selectedHero : hero, addingHero : false});
  }

  handleChange(event){
      let selectedHero = this.state.selectedHero;
      selectedHero[event.target.name] = event.target.value;
      this.setState({selectedHero : selectedHero});
  }

  handleSave(hero){

  }

  handleCancel(hero){
    this.setState({selectedHero : null});
  }

  handleEneableAddMode(){
    this.setState({
      addingHero : true,
      selectedHero: {id: '', name: '', saying: ''}
    });
  }

  render() {
    return (
      <div>
        <ul className="heroes">
          {
            this.state.heroes.map(hero => {
              return <Hero hero={hero} onSelect={this.handleSelect} selectedHero={this.state.selectedHero} />;
            })
          }
        </ul>
        <div className="editarea">
        <button onClick={this.handleEneableAddMode} >Add New Hero</button>
          <EditHero 
              addingHero={this.state.addingHero}
              selectedHero={this.state.selectedHero}
              onChange={this.handleChange}
              onSave={this.handleSave}
              onCancel={this.handleCancel}
          />
        </div>
      </div>
    );
  }
}

export default Heroes;