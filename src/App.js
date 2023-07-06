
import { useState } from 'react';
import './App.css';
import { CgSandClock } from "react-icons/cg"
import { BsCheckCircle } from 'react-icons/bs'
import { BsClock } from 'react-icons/bs'
import { BsStopwatch } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import { BsRadioactive } from 'react-icons/bs'
import { LuBellRing } from 'react-icons/lu'
import { AreaCharts } from './components/AreaChart';
import { BarCharts } from './components/BarChart';
function App() {
  const [on, seton] = useState(false);
  const show = () => {
    seton(!on);
  }
  let url = "https://images.freeimages.com/images/large-previews/a99/free-image-for-you-seo-or-web-marketing-blog-or-site-1636066.jpg";

  let url2 = "https://media.istockphoto.com/id/1303399362/photo/light-bulb-glowing-font-3dalphabet-letter-m-isolated-white-background-stock-photo.jpg?s=612x612&w=0&k=20&c=An2WwB6iapet_L76oZoLg5dFZ3FBabX1r1HTpsM8qA8=";
  return (

    <div className="App ">

      <div class="input-box">
        <input type="text" placeholder="Search here..." />
        <div className='i1' ><BsCheckCircle /></div>
        <div className='i2' >< LuBellRing /></div>
        <div className='i3' ><img className='image' src={url} /></div>
      </div>
      <div className='flex1'>
        <div className='box12  flex_r'>

          <div className='icons' ><BsCheckCircle /></div>
          <div>
            <p>Complete</p>
            <h3>Complete</h3>

          </div>

        </div>

        <div className='box12  flex_s'>
          <div className='icons1' ><BsClock /></div>
          <div>
            <p>In Progress</p>
            <h3>3 Project</h3>
          </div>
        </div>

        <div className='box12  flex_t'>
          <div className='icon2'><CgSandClock /></div>
          <div>
            <p>Pipeline </p>
            <h3>3 Project</h3>
          </div>
        </div>
        <div className='box12 flex_u'>
          <div className='icon3'><BsStopwatch /></div>
          <div>
            <p>On Hold</p>
            <h3>3 Projects</h3>
          </div>
        </div>
      </div>
      <div className='contain'>
        <div>Report</div>
        <AreaCharts className='areachart' />
      </div>
      <div className='contain0'>


        <p className='visits'>Visits</p>
        <BarCharts />
      </div>


      <div className='contain1'>
        <div className=' flex_v'>

          <p className='heading1'>Recent Activity</p>
        </div>


        <div className="subsection_new">
          <div className='flex-img_new'>
            <img src={url2} />
            SK hussain&nbsp;&nbsp;&nbsp;20-12-23</div>
          <div>20-10-23 &nbsp;&nbsp;&nbsp;&nbsp;
            Development.meeting</div>

          <div className='subcolomw'>meet.google.com/bvj</div>

          <div className='bd1'>Mom.pdf</div>
        </div>
        <div className="subsection_new">
          <div className='flex-img_new'>
            <img src={url2} />
            SK hussain
          </div>
          <div>Project Name</div>
          <div>2hrs</div>

          <div>  ● High</div>

          <div>20-12-23&nbsp;</div>
          <div >---------</div>
        </div>

        <div className="subsection_new">
          <div className='flex-img_new'>
            <img src={url2} />
            SK hussain&nbsp;&nbsp;&nbsp;20-12-23
          </div>
          <div>20-10-23 &nbsp;&nbsp;&nbsp;&nbsp;
            Development.meeting </div>

          <div className='subcolomw'>meet.google.com/bvj</div>

          <div className='bd1'>Mom.pdf</div>
        </div>
      </div>
      <div className='contain2'>
        <div className='navItem extra'>
          < LuBellRing className='navicons' />
          <div className='notif'>Notification </div>

        </div>
        <div className='navItem'>
          < LuBellRing className='navicons' />
          <div className='notif'>Notification </div>

        </div>
        <div className='navItem'>
          < LuBellRing className='navicons' />
          <div className='notif'>Notification </div>

        </div>
        <div className='navItem'>
          < LuBellRing className='navicons' />
          <div className='notif'>Notification </div>

        </div>




      </div>


    </div>
  );
}

export default App;
