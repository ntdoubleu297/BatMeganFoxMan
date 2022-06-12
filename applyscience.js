import React from "react";
import ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import Context from './context';
import './applyscience.css';



function ApplyScience(){


  
    return(
      <>
  
      <div className='content'></div>
      <h5>West Enterprises #applyscience Product Model</h5>
      <br/>
      <br/>
      <h2 style={{zIndex: '7', position: 'absolute', left: '100px', top: '200px' }}>Price Range</h2>
      <h2 style={{zIndex: '7', position: 'absolute', left: '100px', top: '200px' }}>_____________</h2>
      <h2 style={{zIndex: '7', position: 'absolute', left: '400px', top: '200px' }}>2018</h2>
      <h2 style={{zIndex: '7', position: 'absolute', left: '700px', top: '200px' }}>2019</h2>
      <h2 style={{zIndex: '7', position: 'absolute', left: '1000px', top: '200px' }}>Avg. DOM 2019</h2>
      <br/>
      <br/>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '300px' }}>$100k - $349k</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '300px' }}>______$_______</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '300px' }}>______$_______</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1000px', top: '300px' }}>_____$________</div>
      <br/>
      <br/>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '400px' }}>$350k - $499k</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '400px' }}>______$_______</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '400px' }}>______$_______</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1000px', top: '400px' }}>_____$________</div>
      <br/>
      <br/>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '500px' }}>$500k - $749k</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '500px' }}>______$_______</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '500px' }}>______$_______</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1000px', top: '500px' }}>_____$________</div>
      <br/>
      <br/>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '600px' }}>$750k +</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '600px' }}>______$_______</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '600px' }}>______$_______</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1000px', top: '600px' }}>_____$________</div>
      <br/>
      <br/>

      <h5>Total Town Market: 1/1/2019-Current Day[No Price Range]</h5>
      <h2>2019</h2>
      <br/>
      <br/>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '900px' }}># Listings Sold - _______$_______</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '900px' }}>Avg. Sale______$______</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '1000px' }}>Avg. DOM - _______$_______</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '1000px' }}>Avg. List______$______</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '1100px' }}>X gror= $% sale price rate [entire location]</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '1100px' }}>Avg. Differential______$______</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '1200px' }}>Ranges: $X - X low - high</div>
      <h3 style={{zIndex: '7', position: 'absolute', left: '0px', top: '1300px' }}>2018 - 1/1/2018 - Current Day [No Price Point]</h3>
      <br/>
      <br/>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '1400px' }}># Listings Sold - _______$_______</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '1400px' }}>Avg. Sale______$______</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '1500px' }}>Avg. DOM - _______$_______</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '1500px' }}>Avg. List______$______</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '1600px' }}>X gror= $% sale price rate [entire location]</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '1600px' }}>Avg. Differential______$______</div>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '1700px' }}>REPEAT same process for specific price points</div>   
      <br/>
      <br/>
      <h5 style={{zIndex: '7', position: 'absolute', left: '300px', top: '1800px'}}>Specific Price Points - approx. 200k price points per value [300k 1mil+]</h5>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '1900px' }}>1/1/2019 - $Today:</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '1900px' }}>$#sales</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '600px', top: '1900px' }}>$list price % rate</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '850px', top: '1900px' }}>$+/- Differential</div>
     <br/>
     <br/>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '2000px' }}>1/1/2018 - $Today:</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '2000px' }}>$#sales</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '600px', top: '2000px' }}>$list price % rate</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '850px', top: '2000px' }}>$+/- Differential</div>
      <br/>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '2100px' }}>1/1/2017 - $Today:</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '2100px' }}>$#sales</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '600px', top: '2100px' }}>$list price % rate</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '850px', top: '2100px' }}>$+/- Differential</div>
      <br/>
      <br/>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '2200px' }}>1/1/2016 - $Today:</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '2200px' }}>$#sales</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '600px', top: '2200px' }}>$list price % rate</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '850px', top: '2200px' }}>$+/- Differential</div>
      <br/>
      <br/>
      <h5 style={{zIndex: '7', position: 'absolute', left: '300px', top: '2300px'}}>Last 2 yrs combo 'sold' data via days on market IE [1/1/2021-today]</h5>
      <a style={{zIndex: '7', position: 'absolute', left: '100px', top: '2400px' }}>0-14 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '2400px' }}>$#sales</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '600px', top: '2400px' }}>$list price % rate</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '850px', top: '2400px' }}>$+/- Differential</div>
      <br/>
      <br/>
      <a style={{zIndex: '7', position: 'absolute', left: '100px', top: '2500px' }}>15-30 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '2500px' }}>$#sales</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '600px', top: '2500px' }}>$list price % rate</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '850px', top: '2500px' }}>$+/- Differential</div>
      <br/>
      <br/>
      <a style={{zIndex: '7', position: 'absolute', left: '100px', top: '2600px' }}>31-45 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '2600px' }}>$#sales</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '600px', top: '2600px' }}>$list price % rate</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '850px', top: '2600px' }}>$+/- Differential</div>
      <br/>
      <br/>
      <a style={{zIndex: '7', position: 'absolute', left: '100px', top: '2700px' }}>46-90 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '2700px' }}>$#sales</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '600px', top: '2700px' }}>$list price % rate</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '850px', top: '2700px' }}>$+/- Differential</div>
      <br/>
      <br/>
      <a style={{zIndex: '7', position: 'absolute', left: '100px', top: '2800px' }}>91-120 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '2800px' }}>$#sales</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '600px', top: '2800px' }}>$list price % rate</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '850px', top: '2800px' }}>$+/- Differential</div>
      <br/>
      <br/>
      <a style={{zIndex: '7', position: 'absolute', left: '100px', top: '2900px' }}>121+ days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '2900px' }}>$#sales</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '600px', top: '2900px' }}>$list price % rate</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '850px', top: '2900px' }}>$+/- Differential</div>
      <br/>
      <br/>
      <h5 style={{zIndex: '7', position: 'absolute', left: '300px', top: '3000px'}}>REPEAT via days on market IE [1/1/2022-today]</h5>
      <a style={{zIndex: '7', position: 'absolute', left: '100px', top: '3100px' }}>0-14 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '3100px' }}>$#sales</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '600px', top: '3100px' }}>$list price % rate</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '850px', top: '3100px' }}>$+/- Differential</div>
      <br/>
      <br/>
      <a style={{zIndex: '7', position: 'absolute', left: '100px', top: '3200px' }}>15-30 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '3200px' }}>$#sales</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '600px', top: '3200px' }}>$list price % rate</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '850px', top: '3200px' }}>$+/- Differential</div>
      <br/>
      <br/>
      <a style={{zIndex: '7', position: 'absolute', left: '100px', top: '3300px' }}>31-45 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '3300px' }}>$#sales</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '600px', top: '3300px' }}>$list price % rate</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '850px', top: '3300px' }}>$+/- Differential</div>
      <br/>
      <br/>
      <a style={{zIndex: '7', position: 'absolute', left: '100px', top: '3400px' }}>46-90 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '3400px' }}>$#sales</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '600px', top: '3400px' }}>$list price % rate</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '850px', top: '3400px' }}>$+/- Differential</div>
      <br/>
      <br/>
      <a style={{zIndex: '7', position: 'absolute', left: '100px', top: '3500px' }}>91-120 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '3500px' }}>$#sales</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '600px', top: '3500px' }}>$list price % rate</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '850px', top: '3500px' }}>$+/- Differential</div>
      <br/>
      <br/>
      <a style={{zIndex: '7', position: 'absolute', left: '100px', top: '3600px' }}>121+ days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '3600px' }}>$#sales</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '600px', top: '3600px' }}>$list price % rate</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '850px', top: '3600px' }}>$+/- Differential</div>
      <br/>
      <p style={{zIndex: '7', position: 'absolute', left: '100px', top: '3800px' }}> TAKE OUT ALL NEW CONSTRUCTION and AUCTIONS if possible - General Business plan length 
      recommendations based on: 
      1. 85% of total market share sold over time per price point,
      2. 80% gror= list of the total gror= list DOM range,
      3.Avg DOM of the price range </p>

      <h5 style={{zIndex: '7', position: 'absolute', left: '100px', top: '4200px'}}>#APPLYSCIENCE - Seller Agency Residential - 
      Per Specific Price Point - Example from date 9/6/2018 - Add Price Reduction data if possible... </h5>
      <br/>
      <br/>
      <br/>
      <a style={{zIndex: '7', position: 'absolute', left: '100px', top: '4300px' }}>$9/6/18-$9/20/18: 0-14 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '550px', top: '4300px' }}>$2018:</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '4300px' }}>$8</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '4300px' }}>$7/8</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '950px', top: '4300px' }}>$88%</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1075px', top: '4300px' }}>$+15k diff</div>
      <br/>
      <br/>
      <br/>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '550px', top: '4400px' }}>$2017:</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '4400px' }}>$4</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '4400px' }}>$4/4</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '950px', top: '4400px' }}>$100%</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1075px', top: '4400px' }}>$+23k diff</div>
      <br/>
      <br/>
      <br/>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '550px', top: '4500px' }}>$2016:</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '4500px' }}>$2</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '4500px' }}>$2/2</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '950px', top: '4500px' }}>$100%</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1075px', top: '4500px' }}>+$52k diff</div>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '4500px' }}>__________________________________________________________</div>
      <br/>
      <br/>
      <br/>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '550px', top: '4600px' }}>$AVG4.6sales</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '4600px' }}>$4.3/4.6</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '950px', top: '4600px' }}>$93%</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1075px', top: '4600px' }}>+$30k diff</div>
      <br/>
      <br/>
      <br/>
      <a style={{zIndex: '7', position: 'absolute', left: '100px', top: '4700px' }}>$9/21/18-$10/5/18: 15-30 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '550px', top: '4700px' }}>$2018:</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '4700px' }}>$x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '4700px' }}>$x/x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '950px', top: '4700px' }}>$xx%</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1075px', top: '4700px' }}>$+xk diff</div>
      <br/>
      <br/>
      <br/>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '550px', top: '4800px' }}>$2017:</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '4800px' }}>$x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '4800px' }}>$x/x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '950px', top: '4800px' }}>$x%</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1075px', top: '4800px' }}>$+xk diff</div>
      <br/>
      <br/>
      <br/>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '550px', top: '4900px' }}>$2016:</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '4900px' }}>$x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '4900px' }}>$x/x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '950px', top: '4900px' }}>$x%</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1075px', top: '4900px' }}>+$xxk diff</div>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '4900px' }}>__________________________________________________________</div>
      <br/>
      <br/>
      <br/>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '550px', top: '5000px' }}>$AVGXsales</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '5000px' }}>$x.x/x.x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '950px', top: '5000px' }}>$x%</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1075px', top: '5000px' }}>+$xk diff</div>
      <br/>
      <br/>
      <br/>
      <a style={{zIndex: '7', position: 'absolute', left: '100px', top: '5100px' }}>$10/6/18-$10/20/18: 31-45 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '550px', top: '5100px' }}>$2018:</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '5100px' }}>$x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '5100px' }}>$x/x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '950px', top: '5100px' }}>$xx%</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1075px', top: '5100px' }}>$+xk diff</div>
      <br/>
      <br/>
      <br/>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '550px', top: '5200px' }}>$2017:</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '5200px' }}>$x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '5200px' }}>$x/x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '950px', top: '5200px' }}>$x%</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1075px', top: '5200px' }}>$+xk diff</div>
      <br/>
      <br/>
      <br/>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '550px', top: '5300px' }}>$2016:</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '5300px' }}>$x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '5300px' }}>$x/x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '950px', top: '5300px' }}>$x%</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1075px', top: '5300px' }}>+$xxk diff</div>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '5300px' }}>__________________________________________________________</div>
      <br/>
      <br/>
      <br/>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '550px', top: '5400px' }}>$AVGXsales</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '5400px' }}>$x.x/x.x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '950px', top: '5400px' }}>$x%</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1075px', top: '5400px' }}>+$xk diff</div>
      <br/>
      <br/>
      <br/>
      <a style={{zIndex: '7', position: 'absolute', left: '100px', top: '5500px' }}>$10/21/18-$12/4/18: 46-90 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '550px', top: '5500px' }}>$2018:</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '5500px' }}>$x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '5500px' }}>$x/x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '950px', top: '5500px' }}>$xx%</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1075px', top: '5500px' }}>$+xk diff</div>
      <br/>
      <br/>
      <br/>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '550px', top: '5600px' }}>$2017:</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '5600px' }}>$x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '5600px' }}>$x/x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '950px', top: '5600px' }}>$x%</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1075px', top: '5600px' }}>$+xk diff</div>
      <br/>
      <br/>
      <br/>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '550px', top: '5700px' }}>$2016:</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '5700px' }}>$x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '5700px' }}>$x/x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '950px', top: '5700px' }}>$x%</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1075px', top: '5700px' }}>+$xxk diff</div>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '5700px' }}>__________________________________________________________</div>
      <br/>
      <br/>
      <br/>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '550px', top: '5800px' }}>$AVGXsales</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '5800px' }}>$x.x/x.x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '950px', top: '5800px' }}>$x%</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1075px', top: '5800px' }}>+$xk diff</div>
      <br/>
      <br/>
      <br/>
      <a style={{zIndex: '7', position: 'absolute', left: '100px', top: '5900px' }}>$12/5/18-$1/5/19: 91-120 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '550px', top: '5900px' }}>$2018:</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '5900px' }}>$x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '5900px' }}>$x/x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '950px', top: '5900px' }}>$xx%</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1075px', top: '5900px' }}>$+xk diff</div>
      <br/>
      <br/>
      <br/>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '550px', top: '6000px' }}>$2017:</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '6000px' }}>$x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '6000px' }}>$x/x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '950px', top: '6000px' }}>$x%</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1075px', top: '6000px' }}>$+xk diff</div>
      <br/>
      <br/>
      <br/>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '550px', top: '6100px' }}>$2016:</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '6100px' }}>$x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '6100px' }}>$x/x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '950px', top: '6100px' }}>$x%</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1075px', top: '6100px' }}>+$xxk diff</div>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '6100px' }}>__________________________________________________________</div>
      <br/>
      <br/>
      <br/>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '550px', top: '6200px' }}>$AVGXsales</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '800px', top: '6200px' }}>$x.x/x.x</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '950px', top: '6200px' }}>$x%</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1075px', top: '6200px' }}>+$xk diff</div>
      <br/>
      <br/>
      <p style={{zIndex: '7', position: 'absolute', left: '100px', top: '6300px' }}> 120+ optional depending on sample size - add price reduction data if possible</p>
      <br/>
      <br/>
      <br/>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '6350px' }}>-|-Example from June/July 2018 -gridlines1/7 -|-</div>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '6400px', width: '1200px', height: '300px', borderRadius: '0%', background: 'orange' }}></div>
      <h5 style={{zIndex: '7', position: 'absolute', left: '100px', top: '6400px'}}>[Year]</h5>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '6500px' }}>2018 [$46]</div>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '6600px' }}>2017 [$58]</div>
      <h5 style={{zIndex: '7', position: 'absolute', left: '300px', top: '6400px'}}>$July</h5>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '6500px' }}>$5ant</div>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '6600px' }}>$9ant</div>
      <h5 style={{zIndex: '7', position: 'absolute', left: '500px', top: '6400px'}}>$August</h5>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '6500px' }}>$6ant</div>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '6600px' }}>$4ant</div>
      <h5 style={{zIndex: '7', position: 'absolute', left: '700px', top: '6400px'}}>$September</h5>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '6500px' }}>$3ant</div>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '6600px' }}>$total#</div>
      <h5 style={{zIndex: '7', position: 'absolute', left: '900px', top: '6400px'}}>$October</h5>
      <div style={{zIndex: '7', position: 'absolute', left: '900px', top: '6500px' }}>$0ant</div>
      <div style={{zIndex: '7', position: 'absolute', left: '900px', top: '6600px' }}>$total#</div>
      <h5 style={{zIndex: '7', position: 'absolute', left: '1100px', top: '6400px'}}>Total for Year</h5>
      <div style={{zIndex: '7', position: 'absolute', left: '1100px', top: '6500px' }}>$Xant</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1100px', top: '6600px' }}>$103 total '17</div>
      <br/>
      <br/>
      <br/>
      <h5 style={{zIndex: '7', position: 'absolute', left: '300px', top: '6750px'}}>CTG/UAG</h5>
      <h5 style={{zIndex: '7', position: 'absolute', left: '300px', top: '6800px'}}>By Town [per specific price range]</h5>
      <h5 style={{zIndex: '7', position: 'absolute', left: '300px', top: '6850px'}}>CTG/UAG Walpole $325k-525k</h5>
      <h5 style={{zIndex: '7', position: 'absolute', left: '300px', top: '6900px'}}>Total Listings: $17 Avg. DOM: $46</h5>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '6950px' }}>CTG/UAG DOM Ranges</div>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '6950px' }}>_________________________</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1000px', top: '6950px' }}># of Bedrooms</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1000px', top: '6950px' }}>_______________</div>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '7000px' }}>0-14 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '7000px' }}>$5/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '7000px' }}>$29%</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '650px', top: '7000px' }}>$+/- Differential</div>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '1000px', top: '7000px' }}>1 Beds</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1100px', top: '7000px' }}>$0/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1250px', top: '7000px' }}>$0%</div>
      <br/>
      <br/>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '7100px' }}>15-30 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '7100px' }}>$6/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '7100px' }}>$35%</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '650px', top: '7100px' }}>$+/- Differential</div>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '1000px', top: '7100px' }}>2 Beds</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1100px', top: '7100px' }}>$2/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1250px', top: '7100px' }}>$12%</div>
      <br/>
      <br/>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '7200px' }}>31-45 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '7200px' }}>$2/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '7200px' }}>$12%</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '650px', top: '7200px' }}>$+/- Differential</div>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '1000px', top: '7200px' }}>3 Beds</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1100px', top: '7200px' }}>$14/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1250px', top: '7200px' }}>$82%</div>
      <br/>
      <br/>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '7300px' }}>46-90 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '7300px' }}>$2/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '7300px' }}>$12%</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '650px', top: '7300px' }}>$+/- Differential</div>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '1000px', top: '7300px' }}>4 Beds</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1100px', top: '7300px' }}>$2/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1250px', top: '7300px' }}>$12%</div>
      <br/>
      <br/>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '7400px' }}>91-120 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '7400px' }}>$0/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '7400px' }}>$0%</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '650px', top: '7400px' }}>$+/- Differential</div>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '1000px', top: '7400px' }}>5 Beds</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1100px', top: '7400px' }}>$0/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1250px', top: '7400px' }}>$0%</div>
      <br/>
      <br/>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '7500px' }}>121+ days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '7500px' }}>$2/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '7500px' }}>$12%</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '650px', top: '7500px' }}>$+/- Differential</div>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '7550px' }}>*$325k-425k</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '7550px' }}>$6/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '7550px' }}>$35%</div>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '7600px' }}>*$425k-525k</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '7600px' }}>$11/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '7600px' }}>$65%</div>
      <br/>
      <br/>
      <br/>
      <br/>
      <h5 style={{zIndex: '7', position: 'absolute', left: '300px', top: '7650px'}}>ACTIVE/ACT</h5>
      <h5 style={{zIndex: '7', position: 'absolute', left: '300px', top: '7700px'}}>By Town [per specific price range]</h5>
      <h5 style={{zIndex: '7', position: 'absolute', left: '300px', top: '7750px'}}>ACTIVE/ACT Walpole $325k-525k</h5>
      <h5 style={{zIndex: '7', position: 'absolute', left: '300px', top: '7800px'}}>Total Listings: $17 Avg. DOM: $46</h5>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '7850px' }}>ACTIVE/ACT DOM Ranges</div>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '7850px' }}>_________________________</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1000px', top: '7850px' }}># of Bedrooms</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1000px', top: '7850px' }}>_______________</div>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '7900px' }}>0-14 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '7900px' }}>$5/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '7900px' }}>$29%</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '650px', top: '7900px' }}>$+/- Differential</div>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '1000px', top: '7900px' }}>1 Beds</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1100px', top: '7900px' }}>$0/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1250px', top: '7900px' }}>$0%</div>
      <br/>
      <br/>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '8000px' }}>15-30 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '8000px' }}>$6/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '8000px' }}>$35%</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '650px', top: '8000px' }}>$+/- Differential</div>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '1000px', top: '8000px' }}>2 Beds</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1100px', top: '8000px' }}>$2/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1250px', top: '8000px' }}>$12%</div>
      <br/>
      <br/>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '8100px' }}>31-45 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '8100px' }}>$2/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '8100px' }}>$12%</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '650px', top: '8100px' }}>$+/- Differential</div>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '1000px', top: '8100px' }}>3 Beds</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1100px', top: '8100px' }}>$14/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1250px', top: '8100px' }}>$82%</div>
      <br/>
      <br/>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '8200px' }}>46-90 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '8200px' }}>$2/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '8200px' }}>$12%</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '650px', top: '8200px' }}>$+/- Differential</div>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '1000px', top: '8200px' }}>4 Beds</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1100px', top: '8200px' }}>$2/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1250px', top: '8200px' }}>$12%</div>
      <br/>
      <br/>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '8300px' }}>91-120 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '8300px' }}>$0/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '8300px' }}>$0%</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '650px', top: '8300px' }}>$+/- Differential</div>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '1000px', top: '8300px' }}>5 Beds</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1100px', top: '8300px' }}>$0/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1250px', top: '8300px' }}>$0%</div>
      <br/>
      <br/>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '8400px' }}>121+ days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '8400px' }}>$2/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '8400px' }}>$12%</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '650px', top: '8400px' }}>$+/- Differential</div>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '8450px' }}>*$325k-425k</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '8450px' }}>$6/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '8450px' }}>$35%</div>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '8500px' }}>*$425k-525k</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '8500px' }}>$11/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '8500px' }}>$65%</div>
      <br/>
      <br/>
      <br/>
      <h2 style={{zIndex: '7', position: 'absolute', left: '300px', top: '8550px' }}>ACTIVE MARKET MACRO by town/zip [Every Price Value]</h2>
      <h2 style={{zIndex: '7', position: 'absolute', left: '100px', top: '8600px' }}>ACTIVE Price Range</h2>
      <h2 style={{zIndex: '7', position: 'absolute', left: '100px', top: '8600px' }}>_____________________</h2>
      <h2 style={{zIndex: '7', position: 'absolute', left: '1000px', top: '8600px' }}>Total Avg. DOM: $66</h2>
      <br/>
      <br/>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '8700px' }}>$100k - $349k</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '8700px' }}>$0/39</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '8700px' }}>$0%</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1000px', top: '8700px' }}>[Avg. DOM - $0]</div>
      <br/>
      <br/>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '8800px' }}>$350k - $499k</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '8800px' }}>$10/39</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '8800px' }}>$26%</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1000px', top: '8800px' }}>[Avg. DOM - $16]</div>
      <br/>
      <br/>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '8900px' }}>$500k - $749k</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '8900px' }}>$16/39</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '8900px' }}>$30%</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1000px', top: '8900px' }}>[Avg. DOM - $39]</div>
      <br/>
      <br/>
      <div style={{zIndex: '7', position: 'absolute', left: '100px', top: '9000px' }}>$750k +</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '400px', top: '9000px' }}>$13/39</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '700px', top: '9000px' }}>$33%</div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1000px', top: '9000px' }}>[Avg. DOM - $137]</div>
      <br/>
      <br/>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '9100px' }}>ACTIVE/ACT DOM Ranges</div>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '9100px' }}>_________________________</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1000px', top: '9100px' }}># of Bedrooms</div>
      <div style={{zIndex: '7', position: 'absolute', left: '1000px', top: '9100px' }}>_______________</div>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '9200px' }}>0-14 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '9200px' }}>$16/39 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '9200px' }}>$41%</div>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '1000px', top: '9200px' }}>1 Beds</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1100px', top: '9200px' }}>$1/39 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1250px', top: '9200px' }}>$3%</div>
      <br/>
      <br/>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '9300px' }}>15-30 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '9300px' }}>$3/39 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '9300px' }}>$8%</div>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '1000px', top: '9300px' }}>2 Beds</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1100px', top: '9300px' }}>$0/39 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1250px', top: '9300px' }}>$0%</div>
      <br/>
      <br/>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '9400px' }}>31-45 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '9400px' }}>$7/39 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '9400px' }}>$18%</div>
      <a></a>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '1000px', top: '9400px' }}>3 Beds</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1100px', top: '9400px' }}>$13/39 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1250px', top: '9400px' }}>$33%</div>
      <br/>
      <br/>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '9500px' }}>46-90 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '9500px' }}>$7/39 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '9500px' }}>$18%</div>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '1000px', top: '9500px' }}>4 Beds</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1100px', top: '9500px' }}>$20/39 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1250px', top: '9500px' }}>$41%</div>
      <br/>
      <br/>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '9600px' }}>91-120 days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '9600px' }}>$0/17 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '9600px' }}>$0%</div>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '1000px', top: '9600px' }}>5 Beds</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1100px', top: '9600px' }}>$3/39 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '1250px', top: '9600px' }}>$8%</div>
      <br/>
      <br/>
      <a href='#'style={{zIndex: '7', position: 'absolute', left: '100px', top: '9700px' }}>121+ days</a>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '300px', top: '9700px' }}>$6/39 = </div>
      <a></a>
      <div style={{zIndex: '7', position: 'absolute', left: '500px', top: '9700px' }}>$15%</div>
      
      

);



     

      











      

    
      



      </>
    );
  }

  export default ApplyScience;