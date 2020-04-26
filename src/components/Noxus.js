import React, { Component } from 'react';
import Menu from './Menu';
import {Carousel,Card,CardGroup} from 'react-bootstrap'
import './Info.css'
import darius from './img/darius.jpg'
import draven from './img/draven.jpg'
import katarina from './img/katarina.jpg'
import noxus from './img/noxus.jpg'
import noxus1 from './img/noxus1.jpg'
import noxus2 from './img/noxus2.jpg'


class Noxus extends Component {
  render() {

    return (
      <div className='demacia'>
        <div><br/><br/><br/><Menu/></div>
        <br></br>
        <h1>Noxus</h1>
        <Carousel>
<Carousel.Item>
  <img
    className="map"
    src={noxus}
    alt="First slide"
  />
</Carousel.Item>
<Carousel.Item>
  <img
    className="map"
    src={noxus1}
    alt="Third slide"
  />
</Carousel.Item>
<Carousel.Item>
  <img
    className="map"
    src={noxus2}
    alt="Third slide"
  />
</Carousel.Item>
</Carousel>
        <br/><br/><p className ='textbox'>น็กอกซัสคือจักรวรรดิที่เรืองอำนาจและมีชื่อเสียงเป็นที่ครั่นคร้าม ผู้ที่อยู่นอกจักรวรรดิแห่งนี้จะมองว่าน็อกซัสนั้นโหดเหี้ยม ชอบรุกรานขยายอาณาเขตและเป็นภัยคุกคาม แต่หากมองข้ามเปลือกนอกแห่งความกระหายสงครามแล้ว จะเห็นว่านี่คือสังคมที่เปิดกว้างอย่างเหลือเกิน และเป็นสังคมที่เห็นคุณค่าและส่งเสริมสิ่งที่เป็นจุดแข็งและความสามารถพิเศษของชาวจักรวรรดิ

ในอดีต ชาวน็อกซี่เป็นเผ่าที่ป่าเถื่อนและดุร้ายจนกระทั่งเมื่อพวกเขาบุกเข้าโจมตีนครโบราณซึ่งในตอนนี้ได้กลายเป็นศูนย์กลางของจักรวรรดิ เนื่องจากแวดล้อมด้วยภัยคุกคามรอบด้าน พวกเขาจึงลุกขึ้นมาเป็นฝ่ายรุกบุกโจมตีศัตรูและขยายเขตแดนออกไปทุกปี การต่อสู้เพื่อเอาตัวรอดเช่นนี้ทำให้ชาวน็อกซัสมีความทะนงตนอยู่ลึกๆ และยกย่องความแข็งแกร่งเหนือสิ่งอื่นใด แม้ว่าความแข็งแกร่งนั้นจะอยู่ในรูปแบบที่หลากหลายแตกต่างกันออกไป

ไม่ว่าใครก็สามารถก้าวขึ้นสู่ตำแหน่งผู้มีอำนาจและมีเกียรติได้ในน็อกซัส หากพวกเขามีความสามารถที่คู่ควร ไม่ว่าพวกเขาเหล่านั้นจะมีสถานะทางสังคม ภูมิหลัง ถิ่นฐานบ้านเกิดหรือยากดีมีจนเช่นไร ผู้ที่มีเวทมนตร์จะได้รับการยกย่องอย่างสูงและถูกตามหาตัวอย่างจริงจังเพื่อที่ฝึกฝนพัฒนาความสามารถพิเศษที่มีอยู่นั้นให้ดีที่สุดเพื่อประโยชน์ของจักรวรรดิ

แต่ว่าแม้จะมีอุดมคติที่ให้ความสำคัญกับความสามารถเป็นหลักเช่นนี้ ตระกูลขุนนางเก่าแก่ก็ยังคงมีอำนาจอยู่มาก… และบางคนก็หวั่นใจว่าภัยคุกคามที่ร้ายแรงที่สุดของน็อกซัสอาจจะไม่ได้มาจากศัตรู แต่มาจากภายในจักรวรรดิแห่งนี้เอง

</p><br/>
<h2 className='champ'><b>Champions of Noxus</b></h2>
<CardGroup>
<Card>
  <Card.Img variant="top" src={darius} className='champbox' />
  <Card.Body>
    <Card.Title><a href="https://lol.garena.in.th/champions/gameinfo/Darius">Darius</a></Card.Title>
  </Card.Body>
</Card>
<Card>
  <Card.Img variant="top" src={draven} className='champbox' />
  <Card.Body>
    <Card.Title><a href="https://lol.garena.in.th/champions/gameinfo/Draven">Draven</a></Card.Title>
  </Card.Body>
</Card>
<Card>
  <Card.Img variant="top" src={katarina} className='champbox' />
  <Card.Body>
    <Card.Title><a href="https://lol.garena.in.th/champions/gameinfo/Katarina">Katarina</a></Card.Title>
  </Card.Body>
</Card>
</CardGroup>
      </div>
    );
  }
 }
 export default Noxus;
 