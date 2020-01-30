import React from 'react'

const Results = (props) => {
  console.log('before map')
  if(props.results){
    console.log('data returned')
  const options = props.results.map(r => (
    <li key={r.id}>
      {r.title}
    </li>
  ))
  return <ul>{options}</ul>
}
}

export default Results