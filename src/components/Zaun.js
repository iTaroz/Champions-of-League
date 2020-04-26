import React, { Component } from 'react';
import Menu from './Menu';
import {Carousel,Card,CardGroup} from 'react-bootstrap'
import './Info.css'
import viktor from './img/viktor.jpg'
import blitz from './img/blitz.jpg'
import mundo from './img/mundo.jpg'
import zaun from './img/zaun.jpg'
import zaun1 from './img/zaun1.jpg'
import zaun2 from './img/zaun2.jpg'


class Zaun extends Component {
  render() {

    return (
      <div className='demacia'>
        <div><br/><br/><br/><Menu/></div>
        <br></br>
        <h1>Zaun</h1>
        <Carousel>
<Carousel.Item>
  <img
    className="map"
    src={zaun}
    alt="First slide"
  />
</Carousel.Item>
<Carousel.Item>
  <img
    className="map"
    src={zaun1}
    alt="Third slide"
  />
</Carousel.Item>
<Carousel.Item>
  <img
    className="map"
    src={zaun2}
    alt="Third slide"
  />
</Carousel.Item>
</Carousel>
        <br/><br/><p className ='textbox'>aun เป็นเขตเมืองใต้พิภพขนาดใหญ่ อยู่ลึกลงไปหุบเขาและห้วยติดกับ Piltover แสงที่ส่องลงไปถึงที่นี่ต้องผ่านม่านควันซึ่งลอยออกมาจากท่อผุกร่อนแสนยุ่งเหยิง และสะท้อนจากกระจกเปื้อนคราบตามตึก
        อุตสาหกรรม Zaun และ Piltover เคยรวมเป็นหนึ่งเดียว บัดนี้กลับแยกออกจากกันแต่ยังคงพึ่งพากัน ถึงแม้เมืองจะอยู่ในสนธยาหมอกควันตลอดเวลา Zaun ก็ยังก้าวหน้า
         ผู้คนที่นี่มีชีวิตชีวา และวัฒนธรรมในนี้ก็เจริญรุ่งเรือง ความมั่งคั่งของ Piltover ช่วยให้ Zaun พัฒนาตามไปด้วย ดั่งเป็นกระจกมืดของเมืองข้างบน สินค้ามากมาย
         ที่มายัง Piltover ไปปรากฏอยู่ตามตลาดมืดใน Zaun และนักประดิษฐ์ Hextech ที่เห็นว่าการควบคุมงานของพวกเขาภายในนครข้างบนนั้นเข้มงวดเกินไป 
         ก็มักจะพบว่า Zaun ยินดีต้อนรับงานวิจัยอันตรายของพวกเขา การพัฒนาเทคโนโลยีที่คาดเดาได้ยากอย่างไร้การควบคุม กับอุตสาหกรรมสุ่มเสี่ยง 
         แผ่มลภาวะและอันตรายปกคลุม Zaun สารพิษเป็นลำธารไหลนิ่งอยู่ในส่วนล่างของเมือง แต่ผู้คนที่นี่ก็ยังพบทางดำรงชีวิตและเจริญรุ่งเรืองไ</p><br/>
<h2 className='champ'><b>Champions of Zaun</b></h2>
<CardGroup>
<Card>
  <Card.Img variant="top" src={viktor} className='champbox' />
  <Card.Body>
    <Card.Title><a href="https://lol.garena.in.th/champions/gameinfo/Viktor">Viktor</a></Card.Title>
  </Card.Body>
</Card>
<Card>
  <Card.Img variant="top" src={blitz} className='champbox' />
  <Card.Body>
    <Card.Title><a href="https://lol.garena.in.th/champions/gameinfo/Blitzcrank">Blitzcrank</a></Card.Title>
  </Card.Body>
</Card>
<Card>
  <Card.Img variant="top" src={mundo} className='champbox' />
  <Card.Body>
    <Card.Title><a href="https://lol.garena.in.th/champions/gameinfo/DrMundo">Dr. Mundo</a></Card.Title>
  </Card.Body>
</Card>
</CardGroup>
      </div>
    );
  }
 }
 export default Zaun;
 