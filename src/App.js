import logo from './logo.svg';
import './App.css';
import { Avatar, IconButton, Tooltip } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PrintIcon from '@mui/icons-material/Print';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import avatar from "./Assets/avatar.jpg"


function App() {

  const downloadPdfDocument = () => {
    const input = document.getElementById("resume" );
    html2canvas(input)
        .then((canvas) => {
          var imgData = canvas.toDataURL('image/png');
          var imgWidth = 210; 
          var pageHeight = 297;
          var imgHeight = canvas.height * imgWidth / canvas.width;
          // var imgWidth = canvas.width * pageHeight / canvas.height;
          var heightLeft = imgHeight;
          var doc = new jsPDF('p', 'mm');
          var position = 5; // give some top padding to first page
        
          
          doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
       
          
          while (heightLeft >= 0) {
            position += heightLeft - imgHeight; // top padding for other pages
            doc.addPage();
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }
          doc.save( 'resume.pdf');
        })
}


  return (
   <>
   <div id="resume" >
<div className="container">
  <div className="header">
    <div className="full-name">
      <span className="first-name">Pritam</span> 
      <span className="last-name">Chakraborty</span>
    </div>
    <div className="contact-info">
      <span className="email">Email: </span>
      <span className="email-val">pritamiiest9@gmail.com</span>
      <br></br>
      <span className="email">Office Email: </span>
      <span className="email-val">pritam@influxiqtech.com</span>
      
      <span className="separator"></span>
      <span className="phone">Phone: </span>
      <span className="phone-val">+91-9002586079</span>
      <div className='download-button'>
      <Tooltip title="Download Resume As PDF">
      <IconButton  color="secondary" aria-label="add an alarm" onClick={downloadPdfDocument}>
     <FileDownloadIcon />
      </IconButton>
      </Tooltip>
      <Tooltip title="Print Resume">
      <IconButton  color="secondary" aria-label="add an alarm" onClick={window.print}>
      <PrintIcon />
      </IconButton>
      </Tooltip>
      <Tooltip title="Chat With Me">
      <Avatar alt="Remy Sharp" src={avatar} />
      </Tooltip>
      </div>
     
    </div>
    
    
    
    <div className="about">
      <span className="position">Full Stack Developer </span>
      <br></br>
      <span className="desc">
       Hello, I am an adaptable Professional with passion in FrontEnd Web Development. Backed with 5 years of experience in the domain, I am proficient in FrontEnd Web development tools ReacJS, NodeJs, HTML, CSS, Javascript. My Love for problem solving and proactive attitude has driven me to explore new technology and frameworks over the years, ensuring that I can deliver robust and user friendly application. Apart from that, I am actively involved in open source community, contributing to the projects that promotes accessibility and inclusivity in the technology. 
      </span>
    </div>
  </div>
   <div className="details">
    <div className="section">
      <div className="section__title">Experience</div>
      <div className="section__list">
        <div className="section__list-item">
          <div className="left">
            <div className="name">InfluxIq Tech Pvt. Ltd</div>
            <div className="addr">Kalyani, West Bengal, India 741235</div>
            <div className="duration">May 2022- Present</div>
          </div>
          <div className="right">
            <div className="name">FrontEnd developer</div>
            <ul>
              <li>Collaborated with stakeholders during development processes to confirm
creative proposals and design best practices.</li>
              <li>Use regulatory and compliance standards for user interface designs.</li>
              <li>Collaborating with designers and user experience experts to create an intuitive
and efficient user interface that provides a smooth and enjoyable user
experience.</li>
              <li>Created responsive and mobile-friendly user interfaces.</li>
            </ul>
          </div>
        </div>
                <div className="section__list-item">
          <div className="left">
            <div className="name">St Mary Technical Campus Kolkata</div>
            <div className="addr">Barasat, West Bengal, India 700124</div>
            <div className="duration">May 2019- May 2022</div>
            
          </div>
          <div className="right">
            <div className="name">Assistant Professor</div>
            <ul>
              <li>Coordinated with colleagues in continuous reviews and curriculum development, ensuring students received high-quality courses.</li>
              <li>
              Continuously improved subject knowledge by conducting thorough research.
              </li>
              <li>
              Delivered engaging lectures, seminars and tutorials, increasing className productivity.
              </li>
            </ul>
          </div>
        </div>
        <div className="section__list-item">
          <div className="left">
            <div className="name">Indian Institute of Engineering Science and <br></br>Technology</div>
            <div className="addr">Howrah, West Bengal, India 711103</div>
            <div className="duration">August 2012- May 2015</div>
            
          </div>
          <div className="right">
            <div className="name">Junior Research Fellow</div>
            <ul>
              <li>
Conducted research studies which led to the design and development of a DST-DRC project funded by Govt. Of  India under the project head “ Design and Development Substrate Integrated Waveguide based device and components using Meta-Material for Ku-Band applications”</li>
            
            </ul>
          </div>
        </div>

      </div>
    </div>
    <div className="section">
      <div className="section__title">Education</div>
      <div className="section__list">
        <div className="section__list-item">
          <div className="left">
            <div className="name">Maulana Abul Kalam Azad University of Technology</div>
            <div className="addr">West Bengal, India 741249</div>
            <div className="duration">Nov 2019-Present</div>
          </div>
          <div className="right">
            <div className="name">PhD</div>
            <div className="name">Department of Electronics and Communication Engineering</div>
            <div className="desc">Title of Research: Non-Linear Control Approach for Human Limb Movement</div>
            <div className="desc">Supervisor: Dr. Achintya Das ( KGEC) Co- Supervisor: Dr. Biswarup Neogi
</div>
          </div>
        </div>
        <div className="section__list-item">
          <div className="left">
            <div className="name">Netaji Subhash Engineering College</div>
            <div className="addr">West Bengal, India  700152</div>
            <div className="duration">Aug 2010 - July 2012</div>
          </div>
          <div className="right">
            <div className="name">Master of Technology (M.Tech) </div>
            <div className="desc">Department of Communication Engineering</div>
            <div className="desc">Project: On the studies of Fractal UWB antenna combined with Quarter Wavelengh Slots For Band Notched Characteristics</div>
            <div className="desc">Publication: Anirban Karmakar, Pritam Chakraborty, Roudra Ghatak, D.R Poddar ," A Compact Fractal UWB Antenna with Open Ended Quarter Wavelength Slot for Band Notched Characteristics" 10.1109/INDICON.2011.6139498</div>
          </div>
        </div>
        <div className="section__list-item">
          <div className="left">
            <div className="name">Aryabhatta Institute Of Engineering And Management</div>
            <div className="addr">Durgapur, West Bengal, India 713148</div>
            <div className="duration">Aug 2006 - July 2010</div>
          </div>
          <div className="right">
            <div className="name">Bachelor of Technology (B.Tech) </div>
            <div className="desc">Department of Electronics and Communication Engineering</div>
            <div className="desc">Project: On the design and studies of UWB antenna </div>
           
          </div>
        </div>

      </div>
      
  </div>
     <div className="section">
      <div className="section__title">List of Research Publications (Journal & Conferences)</div> 
       <div className="section__list">
       <ol type="A">
       <li>
      <div className="section__list-item">
           <div className="text">2022-03 Upper limb muscle grading for some daily life activity using surface electromyography (S-EMG) and Discrete Wavelet transform,  Journal Of Xidian University, Volume 17 – Issue 7 – July 23 (SCOPUS, UGC CARE). Doi.org/10.37896/jxu17.7/102</div>
      </div>
      </li> 
      <li>
      <div className="section__list-item">
           <div className="text">2022-03 Global stability analysis of mechanical prosthetic finger adaptive control, Romanian Journal of Information Technology and Automatic Control, Vol. 32, No. 1, 33-44, 2022 ( ESCI, SCOPUS). https://doi.org/10.33436/v32i1y202203</div>
      </div>
      </li> 
      <li>
      <div className="section__list-item">
           <div className="text">2021-12 Surface Electromyogram (S-EMG) Spectrogram Analysis of Human Arm Activity Towards Interpretability and Classification, International Conference on Trends in Electronics and Health Informatics (TEHI)-2021, PSIT Kanpur. https://link.springer.com/book/10.1007/978-981-16-8826-3</div>
      </div>
      </li> 
       <li>
      <div className="section__list-item">
           <div className="text">2020-10 Knowledge Based database of Arm-Muscle and Activity Characterization during Load Pull Exercise using Diagnostic Electromyography (D-EMG) Signal,Cogent Engineering ( Taylor and francis), ( Accepted) DOI:10.1080/23311916.2020.1849942 (ESCI-Scopus)</div>
      </div>
      </li> 
      <li>
      <div className="section__list-item">
           <div className="text">2018-06 Mechanical Prosthetic Arm Adaptive I-PD Control Model Using MIT Rule Towards Global Stability, J.Mech.Cont.& Math. Sci., Vol.-13, No.-2, May-June(2018) Pages 43-55. doi10.26782/jmcms.2018.06.0000</div>
      </div>
      </li> 
      <li>
      <div className="section__list-item">
           <div className="text">2017-09 Robotic complex for the development of thick steeply-inclined coal seams and ore deposits, IOP Conference series: Earth and Environmental Science 84(2017) 012002, IOP Publishing, DOI:10.1088/1755- 1315/84/1/012002.</div>
      </div>
      </li> 
      <li>
      <div className="section__list-item">
           <div className="text">2016-09 Introducing MIT rule towards Improvement of Adaptive Mechanical prosthetic arm control model, International conference on Advanced Computing, Networking and Informatics ,ICACNI-2016, NIT Rourkela, DOI:link.springer.com/content/pdf/bfm:978-981-10-3373-5/1.pdf</div>
      </div>
      </li> 
      <li>
      <div className="section__list-item">
           <div className="text">2018-01 Book Chapter: Introducing MIT rule toward, Improvement of Adaptive Mechanical prosthetic arm control model, • Advs in Intelligent Syst., Computing, Vol. 518, Pankaj Kumar Sa et al: PROGRESS IN INTELLIGENT COMPUTING TECHNIQUES: THEORY, PRACTICE, AND APPLICATIONS, 978-981- 10-3372-8, 417761_1_En (38).</div>
      </div>
      </li> 
      <li>
      <div className="section__list-item">
           <div className="text">2011-12 A Compact Fractal UWB Antenna with open-ended Quarter Wavelength Slot for Band Notch Characteristics, INDICON-2011, Hyderabad,IEEE Doi.10.1109/INDCON.2011.6139498.</div>
      </div>
      </li> 

       </ol>
       </div>
    </div>
     <div className="section">
       <div className="section__title">Skills</div>
       <div className="skills">
       <div className="skills__item">
           <div className="left"><div className="name">
             ReactJS</div></div>
           <div className="right">
                          <input  id="ck1" type="checkbox" defaultChecked/>

             <label htmlFor="ck1"></label>
                          <input id="ck2" type="checkbox" defaultChecked/>

              <label htmlFor="ck2"></label>
                         <input id="ck3" type="checkbox" defaultChecked/>

              <label htmlFor="ck3"></label>
                           <input id="ck4" type="checkbox" defaultChecked/>
            <label htmlFor="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label htmlFor="ck5"></label>

           </div>
         </div>
         <div className="skills__item">
           <div className="left"><div className="name">
             NodeJs
             </div></div>
           <div className="right">
                          <input  id="ck1" type="checkbox" defaultChecked/>

             <label htmlFor="ck1"></label>
                          <input id="ck2" type="checkbox" defaultChecked/>

              <label htmlFor="ck2"></label>
                         <input id="ck3" type="checkbox" defaultChecked/>

              <label htmlFor="ck3"></label>
                           <input id="ck4" type="checkbox" defaultChecked/>
            <label htmlFor="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label htmlFor="ck5"></label>

           </div>
         </div>
         <div className="skills__item">
           <div className="left"><div className="name">
             MongoDb
             </div></div>
           <div className="right">
                          <input  id="ck1" type="checkbox" defaultChecked/>

             <label htmlFor="ck1"></label>
                          <input id="ck2" type="checkbox" defaultChecked/>

              <label htmlFor="ck2"></label>
                         <input id="ck3" type="checkbox" defaultChecked/>

              <label htmlFor="ck3"></label>
                           <input id="ck4" type="checkbox" defaultChecked/>
            <label htmlFor="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label htmlFor="ck5"></label>

           </div>
         </div>
         <div className="skills__item">
           <div className="left"><div className="name">
             HTML
             </div></div>
           <div className="right">
                          <input  id="ck1" type="checkbox" defaultChecked/>

             <label htmlFor="ck1"></label>
                          <input id="ck2" type="checkbox" defaultChecked/>

              <label htmlFor="ck2"></label>
                         <input id="ck3" type="checkbox" defaultChecked/>

              <label htmlFor="ck3"></label>
                           <input id="ck4" type="checkbox" defaultChecked/>
            <label htmlFor="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label htmlFor="ck5"></label>

           </div>
         </div>
         <div className="skills__item">
           <div className="left"><div className="name">
             CSS</div></div>
           <div className="right">
                          <input  id="ck1" type="checkbox" defaultChecked/>

             <label htmlFor="ck1"></label>
                          <input id="ck2" type="checkbox" defaultChecked/>

              <label htmlFor="ck2"></label>
                         <input id="ck3" type="checkbox" defaultChecked/>

              <label htmlFor="ck3"></label>
                           <input id="ck4" type="checkbox" defaultChecked/>
            <label htmlFor="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label htmlFor="ck5"></label>

           </div>
         </div>
         <div className="skills__item">
           <div className="left"><div className="name">
             Javascript
             </div></div>
           <div className="right">
                          <input  id="ck1" type="checkbox" defaultChecked/>

             <label htmlFor="ck1"></label>
                          <input id="ck2" type="checkbox" defaultChecked/>

              <label htmlFor="ck2"></label>
                         <input id="ck3" type="checkbox" defaultChecked/>

              <label htmlFor="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label htmlFor="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label htmlFor="ck5"></label>

           </div>
         </div>
        
         
       </div>
      
         
       </div>
     <div className="section">
     <div className="section__title">
       Interests
       </div>
       <div className="section__list">
         <div className="section__list-item">
                  Reading Novels, Listen Music, Watching Movies, Travel
          </div>
       </div>
     </div>
     </div>
  </div>
</div>
   </>
  );
}

export default App;
