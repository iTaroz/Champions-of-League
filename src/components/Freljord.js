import React, { Component } from 'react';
import Menu from './Menu';
import {Carousel,Card,CardGroup} from 'react-bootstrap'
import './Info.css'
import ash from './img/ash.jpg'
import braum from './img/braum.jpg'
import gnar from './img/gnar.jpg'
import freljord from './img/freljord.jpg'
import freljord1 from './img/freljord1.jpg'
import freljord2 from './img/freljord2.jpg'


class Freljord extends Component {
  render() {

    return (
      <div className='demacia'>
        <div><br/><br/><br/><Menu/></div>
        <br></br>
        <h1>Freljord</h1>
        <Carousel>
<Carousel.Item>
  <img
    className="map"
    src={freljord}
    alt="First slide"
  />
</Carousel.Item>
<Carousel.Item>
  <img
    className="map"
    src={freljord1}
    alt="Third slide"
  />
</Carousel.Item>
<Carousel.Item>
  <img
    className="map"
    src={freljord2}
    alt="Third slide"
  />
</Carousel.Item>
</Carousel>
        <br/><br/><p className ='textbox'>เฟรย์ลยอร์ดคือดินแดนอันแสนหฤโหดและทุรกันดาร ผู้คนในดินแดนแห่งนี้เกิดมาเพื่อเป็นนักรบและต้องอดทนฝ่าฟันต่อสู้กับทุกอุปสรรคขวากหนาม

เผ่าต่างๆ ในดินแดนเฟรย์ลยอร์ดล้วนหยิ่งทะนงและไม่ก้มหัวให้ใคร ด้วยเหตุนี้พวกเขาจึงมักถูกมองว่าบ้าระห่ำ ดุดัน และ "ไร้อารยธรรม" ในสายตาของเหล่าเพื่อนบ้านร่วมอาณาจักรวาโลแรนซึ่งไม่รู้จักประเพณีโบราณที่หล่อหลอมให้พวกเขาเป็นเช่นทุกวันนี้ เมื่อหลายพันปีก่อน สัมพันธมิตรระหว่างสามพี่น้องซึ่งประกอบด้วยอวาโรซ่า เซริลด้า และลิสซานดร้าได้พังทลายลงในสงครามซึ่งคืบคลานคุกคามทั่วทั้งดินแดนรูนเทอร์ร่าโดยไม่มีผู้ใดล่วงรู้ และทำให้ดินแดนทางตอนเหนือดิ่งสู่หายนะแห่งความสับสนวุ่นวายและฤดูหนาวที่ดำรงอยู่แทบจะตลอดกาล ตอนนี้ มีเพียงมนุษย์ที่แกร่งเหนือธรรมดาและสามารถต้านทานฤทธิ์ทำลายล้างของเปลวเพลิงหรือน้ำแข็งได้เท่านั้นที่ดูเหมือนว่าจะถูกลิขิตชะตาหรือว่าสามารถก้าวขึ้นเป็นผู้นำได้

แม้ว่าเหล่าฟรอซท์การ์ดจะได้พยายามอย่างเต็มที่ แต่นิทานปรัมปราและตำนานกลับอยู่ยั้งยืนยาวกว่าเทพเจ้าโบราณ เยติลึกลับ และชาแมนผู้นำทางวิญญาณที่ไม่ได้ไปสู่สุคติ เหล่านักรบของเผ่าวินเทอร์คลอว์ขยายอาณาเขตการรุกรานเพิ่มขึ้นทุกปีและเข้าโจมตีชายแดนทางใต้ของเดมาเซียและพรมแดนด้านตะวันออกของน็อกซัส ในที่สุด เพื่ออนาคตที่สงบสุข เผ่าและแคลนต่างๆ ที่มักจะมีเรื่องวิวาทและเป็นอิสระจากกันก็เริ่มหันมาสวามิภักดิ์ต่อแอช ราชินีสาวแห่งอวาโรซ่า

ถึงกระนั้น เค้าลางแห่งอนาคตก็ดูมืดมน สงครามจะต้องหวนคืนมาสู่เฟรย์ลยอร์ดอย่างแน่นอน และไม่ว่าผู้ใดก็ไม่อาจหวังที่จะรอดพ้นไปได้</p><br/>
<h2 className='champ'><b>Champions of Freljord</b></h2>
<CardGroup>
<Card>
  <Card.Img variant="top" src={ash} className='champbox' />
  <Card.Body>
    <Card.Title><a href="https://lol.garena.in.th/champions/gameinfo/Ashe">Ashe</a></Card.Title>
  </Card.Body>
</Card>
<Card>
  <Card.Img variant="top" src={braum} className='champbox' />
  <Card.Body>
    <Card.Title><a href="https://lol.garena.in.th/champions/gameinfo/Braum">Braum</a></Card.Title>
  </Card.Body>
</Card>
<Card>
  <Card.Img variant="top" src={gnar} className='champbox' />
  <Card.Body>
    <Card.Title><a href="https://lol.garena.in.th/champions/gameinfo/Gnar">Gnar</a></Card.Title>
  </Card.Body>
</Card>
</CardGroup>
      </div>
    );
  }
 }
 export default Freljord;
 