import React, { Component } from 'react';
import Menu from './Menu';
import me from './img/me.jpg'
class Aboutme extends Component {
    render() {
      return (
        <div className='demacia'>
        <div><br/><br/><br/><Menu/></div>
        <br></br>
        <h1>My profile</h1>
        <img src={me} alt='jpg' className='champbox'/>
        <br/><br/>
        <div className='textbox'>
          <h3>นายปารินทร์ นาคจุติ</h3>
          <h3>กำลังศึกษาอยู่ในคณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์</h3>
          <h3>รหัสนักศึกษา 6035512011</h3>

          <h3><a href="https://www.facebook.com/parin.nakjuti">Facebook</a></h3>
          </div>
          
        </div>
      );
    }
   }
   export default Aboutme;
   