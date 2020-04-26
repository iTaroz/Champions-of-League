import React, { Component } from 'react';
import Menu from './Menu';
import {Carousel,Card,CardGroup} from 'react-bootstrap'
import './Info.css'
import jayce from './img/jayce.jpg'
import vi from './img/vi.jpg'
import oriana from './img/oriana.jpg'
import piltover from './img/piltover.jpg'
import piltover1 from './img/piltover1.jpg'
import piltover2 from './img/piltover2.jpg'


class Piltover extends Component {
  render() {

    return (
      <div className='demacia'>
        <div><br/><br/><br/><Menu/></div>
        <br></br>
        <h1>Piltover</h1>
        <Carousel>
<Carousel.Item>
  <img
    className="map"
    src={piltover}
    alt="First slide"
  />
</Carousel.Item>
<Carousel.Item>
  <img
    className="map"
    src={piltover1}
    alt="Third slide"
  />
</Carousel.Item>
<Carousel.Item>
  <img
    className="map"
    src={piltover2}
    alt="Third slide"
  />
</Carousel.Item>
</Carousel>
        <br/><br/><p className ='textbox'>Piltover เป็นเมืองที่เจริญเติบโตก้าวหน้า และมีอำนาจกับอิทธิพลเพิ่มพูนขึ้นเรื่อยๆ เมืองนี้เป็นศูนย์กลางทางวัฒนธรรมของ Valoran ที่สำหรับงานศิลปะ งานฝีมือ การแลกเปลี่ยน 
        และนวัตกรรมผนวกรวมกัน อำนาจของเมืองไม่ได้มาจากกำลังของกองทัพ แต่เป็นพลังของการค้าขายและความคิดหัวก้าวหน้า เมืองตั้งอยู่บนหน้าผาเหนือเขต Zaun และคอยเฝ้ามองมหาสมุทร กองเรือแล่นผ่านประตูกั้นขนาดมหึมา นำเอาสินค้าจากทั่วโลกเข้ามา 
        ความมั่งคั่งที่ได้จากทั้งหมดนี้ก่อให้เกิดความเจริญรุ่งเรืองที่ไม่เคยมีมาก่อนในการเติบใหญ่ของเมือง Piltover เคยและยังคงคอยเปลี่ยนตัวมันให้เป็นเมืองที่สามารถสร้างโชคลาภ ใช้ชีวิตดั่งที่ฝันไว้ได้ กลุ่มพ่อค้าซึ่งเพิ่มจำนวนเรื่อยๆให้ทุนในการพัมนาสิ่งที่เหลือเชื่อที่สุด 
        งานศิลปะที่ฟุ่มเฟือยสิ้นเปลือง การวิจัย Hextech ที่น้อยคนจะเข้าใจ และการสถาปนิกซึ่งแสดงถึงอำนาจของพวกเขา ยิ่งเมื่อมีนักประดิษฐ์เข้ามาขุดหาความรู้ที่เพิ่งถูกพบเกี่ยวกับ Hextech มากขึ้น Piltover ก็ได้กลายเป็นจุดสนใจสำหรับนักประดิษฐ์ฝีมือดีทั่วโลก</p><br/>
<h2 className='champ'><b>Champions of Piltover</b></h2>
<CardGroup>
<Card>
  <Card.Img variant="top" src={jayce} className='champbox' />
  <Card.Body>
    <Card.Title><a href="https://lol.garena.in.th/champions/gameinfo/Jayce">Jayce</a></Card.Title>
  </Card.Body>
</Card>
<Card>
  <Card.Img variant="top" src={vi} className='champbox' />
  <Card.Body>
    <Card.Title><a href="https://lol.garena.in.th/champions/gameinfo/Vi">Vi</a></Card.Title>
  </Card.Body>
</Card>
<Card>
  <Card.Img variant="top" src={oriana} className='champbox' />
  <Card.Body>
    <Card.Title><a href="https://lol.garena.in.th/champions/gameinfo/Orianna">Orianna</a></Card.Title>
  </Card.Body>
</Card>
</CardGroup>
      </div>
    );
  }
 }
 export default Piltover;
 