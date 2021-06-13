import { FirebaseTablePull } from './firebaseTablePull';
import TableHeader from './TableHeader.js';
import Footer from './Footer.js';

export default function SimpleTable() {
  let job = FirebaseTablePull();

  return ( 

    <section id='table'>
    <TableHeader />
    <table class="table">
          <thead class="thead-dark">
              <tr>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Position</th>
                  <th>Date Posted</th>
              </tr>
          </thead>
          <tbody>
          {job.map(data => {
              
              return (
                  <tr>     
                  <td>{data.company}</td>
                  <td>{data.location}</td>
                  <td>{data.position}</td>
                  <td>{data.datePosted}</td>
                  </tr>
                  
              );
            
              })}
      
            
          </tbody>
          
      </table>
    <Footer />
    </section>
  );
  
  
}

