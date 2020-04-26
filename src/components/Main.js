import React, { Component } from 'react';
import Menu from './Menu';
import './Info.css'
import Rune from './img/runeterra.jpg'
import zoe from './img/zoe.jpg'
import zed from './img/zed.jpg'
import ash from './img/ash.jpg'
import ez from './img/ez.jpg'
import elise from './img/elise.jpg'
import annie from './img/annie.jpg'
import cait from './img/cait.jpg'
import blitz from './img/blitz.jpg'
import darius from './img/darius.jpg'
import gp from './img/gp.jpg'
import garen from './img/garen.jpg'
import veigar from './img/veigar.jpg'

class Main extends Component {
    render() {
      return (
      
        <div className='set-bg'>
          <div><br/><br/><br/><Menu/></div>
          <br></br>
          <h1>RUNETERRA</h1>
          <img src={Rune} className="map" alt="jpg" />
          <p>Runeterra คือโลกที่มีแผ่นดินทั้งหมดชื่อ Valoran มีเมืองต่าง ๆ มากมากอยู่บน Valoran และมีการแข่งขัน League of Legends ที่เหล่า Champion ทั้งหลายในโลกของเกมส์สถิตอยู่</p>
        <br/>
        <p className="textbox">

<h4 className='blue'>สงครามหินเวทย์ The Rune Wars</h4> ตั้งแต่ในยุคโบราณ ทุกครั้งที่มีเผ่าใหม่ ๆ ที่เกิดจากการรวมตัวของชาว Runeterra เกิดขึ้น ก็จะมีเผ่าที่ความคิดเห็นไม่ตรงกับเผ่านั้นๆเกิดขึ้นมาพร้อมๆกัน เผ่าเหล่านี้ใช้สงครามเพื่อเป็นตัวตัดสินปัญหา
ความบาทหมางกันอยู่เสมอแต่ไม่ว่าจะในยุคใด เวทมนต์ก็เป็นอาวุธที่ชาว Runeterra เลือกใช้ในการทำสงครามอยู่ตลอด ทหารแทบทุกคนจะถูกทำให้แข็งแกร่งขึ้นจากการอาบเวทมนต์
หรือการใช้หินเวทมนต์ที่เรียกว่า rune ในขณะที่อาวุธเวทมนต์ส่วนมากนั้นจะถูกสร้างขึ้นและใช้โดย Champion ที่นำทัพหรือให้การสนับสนุนกองทัพเท่านั้น ในด้านของ Summoner เองก็ชอบที่จะปลดปล่อย
พลังอำนาจใส่ศัตรูที่ขวางหน้าโดยไม่คำนึงถึงผลที่ตามมาอยู่เป็นประจำ(Summoner คือ ผู้อัญเชิญ ซึ่งตามกฎหมายแล้วเป็นผู้นำทางการเมืองของแผ่นดิน Valoran)<br/><br/>

<h4 className='blue'>วิกฤตของโลก Runeterra</h4>
อย่างไรก็ตาม ภายในช่วงสองร้อยปีที่ผ่านมา โลก Runeterra ก็เริ่มแสดงความเปราะบางที่เกิดจากใช้เวทมนต์แบบไม่ระวังให้ประชาชนชาว Valoran ได้เห็นกัน สงคราม Rune Wars สองครั้งล่าสุด
ได้เปลี่ยนสภาพภูมิประเทศของแผ่นดิน Valoran ไปมากมาย แม้ว่าจะมีการใช้เวทมนต์เพื่อซ่อมแซม แต่มันก็ไม่ได้ผลการใช้ชีวิตบนผืนแผ่นดิน Valoran ท้าทายความสามารถของผู้อาศัยเป็นอย่างมาก
เพราะต้องคอยระวังภัยธรรมชาติที่รุนแรง เช่น แผ่นดินไหว และ พายุที่มีเวทมนต์เป็นตัวกระตุ้น ว่ากันว่า ถ้ามีสงคราม Rune War ครั้งต่อไป โลก Runeterra จะแตกสลายเป็นเสี่ยงๆ
<br/><br/>
<h4 className='blue'>กำเนิด League of Legends</h4>
เพื่อตอบโต้กับปัญหาความมั่นคงทางภูมิศาสตร์และการเมืองของโลก Runeterra เหล่าพ่อมดคนสำคัญพร้อมทั้ง summoner ผู้มีอำนาจบางคน ของแผ่นดิน Valoran 
ได้ทำการสรุปว่าความบาดหมางของชาว Runeterra ทั้งหลายควรที่จะถูกแก้ในแบบที่ควบคุมได้และเป็นระบบระเบียบ พวกเค้าจึงตั้งองค์กรชื่อ League of Legends ขึ้น
เพื่อที่จะใช้เป็นตัวกลางในการแก้ปัญหาความขัดแย้งต่างๆ บนแผ่นดิน Valoran องค์กร League of Legends ตั้งอยู่ที่ The Institute of War (สถาบันการทำสงครามของแผ่นดิน Valoran) 
และได้รับมอบอำนาจจากรัฐบาลให้ตัดสินผลลัพธ์ของปัญหาทางการเมืองต่างๆ ทั้งหมดจากการแข่งขัน League of Legends หรือก็คือการเล่นของพวกเราเหล่าผู้เล่นนั่นเอง
</p>
<br/><h4 className='champ'>ภาพตัวอย่างแชมป์เปี้ยนต่าง ๆ ที่อาศัยอยู่ใน Runeterra</h4>
    <ul className='imgbox'>
    <img src={darius} alt="jpg"/><img src={ash} alt="jpg"/><img src={zed} alt="jpg"/><img src={garen} alt="jpg"/>
    <img src={ez} alt="jpg"/><img src={elise} alt="jpg"/><img src={zoe} alt="jpg"/><img src={cait} alt="jpg"/>
    <img src={blitz} alt="jpg"/><img src={annie} alt="jpg"/><img src={gp} alt="jpg"/><img src={veigar} alt="jpg"/>
    </ul>

</div>
      );
    }
   }
   export default Main;
   