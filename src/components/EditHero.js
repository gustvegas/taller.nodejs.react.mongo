import React from 'react';

const EditHero = (props) => {
  if(props.selectedHero){
    return (
      <div>
        <div className="editfields">
        <div>
          <label>id:</label>
          {props.addingHero 
          ? <input 
              type="number"
              name="id"
              placeholder="id"
              value={props.selectedHero.id}
              onChange={props.onChange}
            /> :
          <label className="value">
            {props.selectedHero.id}
          </label>
          }
        </div>
        <div>
          <label>name:</label>
           <input 
               type="text"
               name="name"
               placeholder="name"
               value={props.selectedHero.name}
               onChange={props.onChange}
           />
        </div>
        <div>
          <label>saying:</label>
           <input 
               type="text"
               name="saying"
               placeholder="saying"
               value={props.selectedHero.saying}
               onChange={props.onChange}
           />
        </div>
        </div>
        <button onClick={props.onCancel} >Cancel</button>
        <button  onClick={props.onSave}>Save</button>
      </div>
    );
  }else{
    return <div />;
  }

};

export default EditHero;
