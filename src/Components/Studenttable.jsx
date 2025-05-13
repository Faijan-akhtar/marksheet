import './Student.css'
import svu from '../assets/svu.jpeg'
const tableStyle = {
  borderCollapse: 'collapse',  // Ensures no space between table cells
  width: '90%',
  margin: 'auto',
  textAlign: 'center',
  border: '2px solid black',  // Outer double border for the entire table (thin)
};

const doubleBorderStyle = {
  border: '1px solid black',  // Thin inner border for the cells
  boxSizing: 'border-box',     // Ensure padding does not affect the size
};

const grandTotalStyle = {
  fontWeight: 'bold',  // Bold text for the Grand Total row
  
};

const StudentTable = () => {


  

  return (
    <div>
      <div className="head">
        <div className="logo">
              <img src={svu}/>
        </div>
           <div className="details">
        <p>SHRI VENKATESHWARA UNIVERSITY, GAJRAULA</p>
     
          <p className='text-1'>www.svu.edu.in</p>
          <p className='text-2'>B.TECH-VIIIth sem</p>
          <div className="persnol">
            <p className='text-3'><span style={{fontSize:'18px', fontFamily:600}}>student Name:-</span>FAIJAN AKHTAR&nbsp;&nbsp;EnrollmentNo:- SET20A20040011</p>
             <p className='text-4'><span style={{fontSize:'18px', fontFamily:600}}>Father Name:-</span>SAMIM AKHTAR&nbsp;&nbsp;&nbsp;ROLLNO:-&nbsp;&nbsp;&nbsp;  A20040011</p>
             <p className='text-5'><span style={{fontSize:'18px', fontFamily:600}}>Mother Name:-</span>KAMRUN NISHA&nbsp;&nbsp;&nbsp;YEAR:- &nbsp;&nbsp;&nbsp; VIIIth sem</p>
          </div>
          
        </div>
      </div>
      
      
        <div className="tdetails">
             <table style={tableStyle}>
    <thead>
      <tr>
        <th rowSpan="3" style={doubleBorderStyle}>SubCode</th>
        <th rowSpan="3" style={doubleBorderStyle}>SubName</th>
        
      </tr>
      <tr>
        <th colSpan="2" style={doubleBorderStyle}>Internal</th>
        <th colSpan="2" style={doubleBorderStyle}>External</th>
        <th colSpan="2" style={doubleBorderStyle}>Total</th>
      </tr>
      <tr>
        <th style={doubleBorderStyle}>Max</th>
        <th style={doubleBorderStyle}>Obt</th>
        <th style={doubleBorderStyle}>Max</th>
        <th style={doubleBorderStyle}>Obt</th>
        <th style={doubleBorderStyle}>Max</th>
        <th style={doubleBorderStyle}>Obt</th>
      </tr>
    </thead>
    <tbody >
      <tr>
        <td style={doubleBorderStyle}>SME-801</td>
        
        <td style={doubleBorderStyle}>AUTOMOBILE ENGINEERING</td>
        <td style={doubleBorderStyle}>30</td>
        <td style={doubleBorderStyle}>22</td>
        <td style={doubleBorderStyle}>70</td>
        <td style={doubleBorderStyle}>34</td>
        <td style={doubleBorderStyle}>100</td>
        <td style={doubleBorderStyle}>56</td>
      </tr>
      <tr>
        <td style={doubleBorderStyle}>SME-802</td>
        <td style={doubleBorderStyle}>TOTAL QUALITY MANAGEMENT</td>
        <td style={doubleBorderStyle}>30</td>
        <td style={doubleBorderStyle}>22</td>
        <td style={doubleBorderStyle}>70</td>
        <td style={doubleBorderStyle}>45</td>
        <td style={doubleBorderStyle}>100</td>
        <td style={doubleBorderStyle}>67</td>
      </tr>
      <tr>
        <td style={doubleBorderStyle}>SME-811</td>
        <td style={doubleBorderStyle}>PROJECT-IV</td>
        <td style={doubleBorderStyle}>100</td>
        <td style={doubleBorderStyle}>77</td>
        <td style={doubleBorderStyle}>100</td>
        <td style={doubleBorderStyle}>78</td>
        <td style={doubleBorderStyle}>200</td>
        <td style={doubleBorderStyle}>155</td>
      </tr>
      <tr>
        <td style={doubleBorderStyle}>SME-888</td>
        <td style={doubleBorderStyle}>SEMINAR</td>
        <td style={doubleBorderStyle}>100</td>
        <td style={doubleBorderStyle}>78</td>
        <td style={doubleBorderStyle}>0</td>
        <td style={doubleBorderStyle}>0</td>
        <td style={doubleBorderStyle}>100</td>
        <td style={doubleBorderStyle}>78</td>
      </tr>
      <tr>
        <td style={doubleBorderStyle}>SME-081</td>
        <td style={doubleBorderStyle}>RENEWABLE ENERGY</td>
        <td style={doubleBorderStyle}>30</td>
        <td style={doubleBorderStyle}>21</td>
        <td style={doubleBorderStyle}>70</td>
        <td style={doubleBorderStyle}>28</td>
        <td style={doubleBorderStyle}>100</td>
        <td style={doubleBorderStyle}>56</td>
      </tr>

      <tr>
        <td style={doubleBorderStyle}>SME-082</td>
        <td style={doubleBorderStyle}>OPERATION RESEARCH</td>
        <td style={doubleBorderStyle}>30</td>
        <td style={doubleBorderStyle}>22</td>
        <td style={doubleBorderStyle}>70</td>
        <td style={doubleBorderStyle}>34</td>
        <td style={doubleBorderStyle}>100</td>
        <td style={doubleBorderStyle}>56</td>
      </tr>


      <tr style={grandTotalStyle}>
        <td colSpan="6" style={doubleBorderStyle}>Grand Total</td>
       
        <td style={doubleBorderStyle}>700</td> {/* Total Max */}
        <td style={doubleBorderStyle}>461</td> {/* Total Obt */}
      </tr>
    </tbody>
  </table>
        </div>
      
    </div>
    
  );
};

export default StudentTable;