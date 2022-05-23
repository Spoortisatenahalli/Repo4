import React from 'react'

const Students = () => {
  return (
    <div>
      <h1>Students</h1>
      <table class="table  table-hover">
  <thead>
    <tr class=" table table-dark table-striped-columns">
      <th scope="col">S.N.</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr className="table-light">
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@instagram</td>
    </tr>
    
    <tr>
      <th scope="row">21</th>
      <td>Otis</td>
      <td>Milbourne</td>
      <td>@instagram</td>
    </tr>
    <tr className="table-light">
      <th scope="row">22</th>
      <td>Maive</td>
      <td>Willey</td>
      <td>@instagram</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Students
