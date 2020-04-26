import React, { Component} from 'react';
import {Carousel,Card,CardGroup} from 'react-bootstrap'
import Menu from './Menu';
import './Info.css'
import demacia from './img/demacia1.jpg'
import demacia1 from './img/demacia2.jpg'
import demacia2 from './img/demacia3.jpg'
import lux from './img/lux.jpg'
import vayne from './img/vayne.jpg'
import quin from './img/quin.jpg'

class Demacia extends Component {
    render() {

      return (
        <div className='demacia'>
          <div><br/><br/><br/><Menu/></div>
          <br></br>
          <h1>Demacia</h1>
          <Carousel>
  <Carousel.Item>
    <img
      className="map"
      src={demacia}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="map"
      src={demacia1}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="map"
      src={demacia2}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
          <br/><br/><p className ='textbox'>เดมาเซียคืออาณาจักรอันแข็งแกร่งที่ยึดมั่นในกฎหมายและมีประวัติทางการทหารอันเกรียงไกร ชาวเดมาเซียยึดมั่นในอุดมคติแห่งความยุติธรรมเกียรติยศและหน้าที่เหนือสิ่งอื่นใดและทระนงภาคภูมิใจในมรดกทางวัฒนธรรมของตน แม้จะตั้งมั่นในอุดมการณ์อันสูงส่งแต่ในช่วงหลายร้อยปีที่ผ่านมา ดินแดนที่พึ่งพิงตนเองได้อย่างแทบจะโดยสมบูรณ์แห่งนี้กลับปิดกั้นตนเองและแยกตัวจากโลกภายนอกมากขึ้นเรื่อยๆ
<br/>ตอนนี้ อาณาจักรเดมาเซียกำลังระส่ำระสาย
มหานครแห่งเดมาเซียซึ่งเป็นเมืองหลวงของอาณาจักรแห่งนี้ก่อตั้งขึ้นเพื่อเป็นแหล่งลี้ภัยจากเวทมนตร์ในยุคสงครามรูนอันเลวร้าย และสร้างขึ้นโดยอาศัยพลังลึกลับของเพทริไซต์ ศิลาสีขาวที่มีฤทธิ์อัศจรรย์ในการดูดซับเวทมนตร์ ราชวงศ์ผู้ปกครองดินแดนนี้ได้ทำหน้าที่ปกป้องเมืองและหมู่บ้าน
รวมถึงพื้นที่เกษตรกรรมและป่าเขาที่อยู่ในเขตห่างไกลและเป็นแหล่งทรัพยากรแร่ธาตุอันอุดมสมบูรณ์มาช้านาน
อย่างไรก็ดี หลังจากที่ราชาจาร์วานที่สามได้สิ้นพระชนม์ลง เจ้าชายจาร์วานหนุ่มซึ่งเป็นองค์รัชทายาทแต่เพียงผู้เดียวก็ได้ขึ้นครองราชย์โดยที่ยังไม่ผ่านการเห็นชอบจากเหล่าขุนนางในตระกูลชั้นสูงอื่นๆ
ท่ามกลางความอันไม่แน่นอนเช่นนี้ ผู้ที่อาศัยอยู่นอกเขตที่มีการอารักขาอย่างแน่นหนาต่างถูกจับตามองด้วยความระแวง และอดีตพันธมิตรจำนวนมากได้เริ่มมองหาความคุ้มครองจากแหล่งอื่น บ้างก็กล้าดีถึงขั้นซุบซิบกันว่ายุคทองของเดมาเซียจบสิ้นลงแล้ว และหากชาวเดมาเซียยังไม่ยอมปรับตัวให้ทันโลกที่กำลังเปลี่ยนแปลงไป ซึ่งหลายๆ คนเชื่อว่าเป็นสิ่งที่เกินความสามารถของเดมาเซีย สุดท้ายแล้ว อาณาจักรแห่งนี้อาจพบพานความเสื่อมถอยอย่างหลีกเลี่ยงไม่ได้
และเพทริไซต์ทั้งหมดที่มีอยู่ในดินแดนแห่งนี้ก็ไม่อาจปกป้องเดมาเซียจากภัยที่มันสร้างขึ้นมาเองได้

</p><br/>
<h2 className='champ'><b>Champions of Demacia</b></h2>
<CardGroup>
  <Card>
    <Card.Img variant="top" src={lux} className='champbox' />
    <Card.Body>
      <Card.Title><a href="https://lol.garena.in.th/champions/gameinfo/Lux">Lux</a></Card.Title>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={vayne} className='champbox' />
    <Card.Body>
      <Card.Title><a href="https://lol.garena.in.th/champions/gameinfo/Vayne">Vayne</a></Card.Title>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={quin} className='champbox' />
    <Card.Body>
      <Card.Title><a href="https://lol.garena.in.th/champions/gameinfo/Quinn">Quinn</a></Card.Title>
    </Card.Body>
  </Card>
</CardGroup>
        </div>
      );
    }
   }
   export default Demacia;
   