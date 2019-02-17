import React from "react";
// ninjas is destructured
const Ninjas = ({ ninjas }) => {
  // console.log(this.props);
  /*   const ninjaList = ninjas.map(ninja =>{
      if (ninja.age > 25) {
      return (
     <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name} </div>
        <div>Age: {ninja.age} </div>
        <div>Belt: {ninja.belt} </div>
      </div>
      )
      } else {
        return
      }
    }) */
  const ninjaList = ninjas.map(ninja => {
    // condition ? () : ()
    return ninja.age > 25 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name} </div>
        <div>Age: {ninja.age} </div>
        <div>Belt: {ninja.belt} </div>
      </div>
    ) : null;
  });
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
