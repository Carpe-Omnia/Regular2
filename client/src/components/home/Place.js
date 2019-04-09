import React from 'react'
const Place = (props) => {
  return(
    <div>
    <p onClick={props.actions.get_places}>
      These are places
    </p>
      <table>
        {props.locations.map(function(location, index, array){
          if(index === array.length){
            return (
              <tr>
                <td key={location.id}>
                  name: {location.name},
                  location: {location.address} - {location.city}
                </td>
              </tr>
            )
          }
          if(index === 0){
            return (
              <tr>
              <td key={location.id}>
                name: {location.name},
                location: {location.address} - {location.city}
              </td>
              </tr>
            )
          }
          return (
            <tr>
            <td key={location.id}>
              name: {location.name},
              location: {location.address} - {location.city}
            </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Place
