import React, { Component } from 'react';
import Menu from './Menu';
import {Carousel,Card,CardGroup} from 'react-bootstrap'
import './Info.css'
import irelia from './img/irelia.jpg'
import karma from './img/karma.jpg'
import leesin from './img/leesin.jpg'
import ionia from './img/ionia.jpg'
import ionia1 from './img/ionia1.jpg'
import ionia2 from './img/ionia2.jpg'


class Ionia extends Component {
  render() {

    return (
      <div className='demacia'>
        <div><br/><br/><br/><Menu/></div>
        <br></br>
        <h1>Ionia</h1>
        <Carousel>
<Carousel.Item>
  <img
    className="map"
    src={ionia}
    alt="First slide"
  />
</Carousel.Item>
<Carousel.Item>
  <img
    className="map"
    src={ionia1}
    alt="Third slide"
  />
</Carousel.Item>
<Carousel.Item>
  <img
    className="map"
    src={ionia2}
    alt="Third slide"
  />
</Carousel.Item>
</Carousel>
        <br/><br/><p className ='textbox'>ไอโอเนียคือดินแดนที่ตั้งอยู่กลางทะเลคลั่งและประกอบด้วยแคว้นมากมายที่เป็นพันธมิตรกันและกระจายตัวอยู่บนหมู่เกาะขนาดมหึมาซึ่งผู้คนจำนวนมากรู้จักในชื่อปฐมแดน เนื่องจากวัฒนธรรมของไอโอเนียพัฒนาหล่อหลอมขึ้นโดยมีเป้าหมายเพื่อแสวงหาความสมดุลแห่งสรรพสิ่งมาตั้งแต่ช้านาน เส้นแบ่งระหว่างโลกแห่งวิญญาณและโลกแห่งวัตถุในดินแดนแห่งนี้จึงเลือนลางบางเบาโดยเฉพาะอย่างยิ่งในเขตป่าลึกและภูเขา

แม้ว่ามนตร์วิเศษของดินแดนเหล่านี้อาจจะเอาแน่เอานอนไม่แน่นอนและเป็นถิ่นอาศัยของสิ่งมีชีวิตแสนอันตรายและแฟรี่ แต่ชาวไอโอเนียต่างก็ดำรงชีวิตอย่างผาสุก ทั้งวิหารแห่งนักรบและกองกำลังประจำแคว้น หรือแม้แต่ดินแดนไอโอเนียเอง ก็แข็งแกร่งพอที่จะปกป้องพวกเขาได้

แต่ความสงบสุขนี้นี้ก็จบสิ้นลงเมื่อ 12 ปีก่อนตอนที่น็อกเซียบุกโจมตีปฐมแดน กองทัพของจักรวรรดิกระหน่ำรุกรานไอโอเนียระลอกแล้วระลอกเล่าไม่รู้จบ และก็ลงเอยด้วยการเป็นฝ่ายพ่ายแพ้ไป และได้รับความเสียหายใหญ่หลวง

ตอนนี้ ไอโอเนียอยู่ในภาวะบ้านเมืองสงบแต่ไร้สุข แนวทางตอบโต้ต่อสงครามที่ต่างกันนำไปสู่ความร้าวฉานในดินแดนแห่งนี้ บางกลุ่มอย่างเช่นเหล่านักบวชโชจินหรือภาคีคินโคต้องการหวนคืนสู่แนวทางสันตินิยมอันสันโดษและวิถีชีวิตแห่งท้องทุ่ง ในขณะที่กลุ่มอื่นที่แข็งกร้าวกว่า อย่างเช่นสมาคมจากนาโวริและภาคีแห่งเงา ต่างเรียกร้องให้รวบรวมกำลังพลสร้างกองทัพเวทมนตร์แห่งไอโอเนียเพื่อโจมตีแก้แค้นน็อกซัส

ชะตาของไอโอเนียแขวนอยู่บนเส้นด้ายแห่งความสมดุลอันเปราะบาง แม้จะมีน้อยรายที่พร้อมใจยินยอมสูญเสียความสมดุลนั้น แต่ทุกคนล้วนกังวลใจกับคลื่นใต้น้ำนี้ไม่ต่างกัน</p><br/>
<h2 className='champ'><b>Champions of Ionia</b></h2>
<CardGroup>
<Card>
  <Card.Img variant="top" src={irelia} className='champbox' />
  <Card.Body>
    <Card.Title><a href="https://lol.garena.in.th/champions/gameinfo/Irelia">Irelia</a></Card.Title>
  </Card.Body>
</Card>
<Card>
  <Card.Img variant="top" src={karma} className='champbox' />
  <Card.Body>
    <Card.Title><a href="https://lol.garena.in.th/champions/gameinfo/karma">Karma</a></Card.Title>
  </Card.Body>
</Card>
<Card>
  <Card.Img variant="top" src={leesin} className='champbox' />
  <Card.Body>
    <Card.Title><a href="https://lol.garena.in.th/champions/gameinfo/Leesin">Leesin</a></Card.Title>
  </Card.Body>
</Card>
</CardGroup>
      </div>
    );
  }
 }
 export default Ionia;
 