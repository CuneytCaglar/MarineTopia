import React from 'react'

export default function Body() {
  return (
    <>  
    <div className="container-fluid home-container " >
    <div className="navDiv1">
      <h1 className='navH1'>All about the Marine</h1>
      <h4 className='navH4'>Get to know everything on the ocean</h4>
      <div className="input-group">
      <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Place, species, or anything else..." aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button className="btn btnSearch" type="button" id="button-addon2"><img className="fas fa-search" src='.\src\images\ic_outline-search.png'></img></button>
</div>

</div>
    </div>
    <div className="bodyDiv1">
        <h1>Latest News</h1>
    </div>
    
      <div className="row">
        <div className="cardStyle col-lg-6 d-flex flex-column  mb-5 ps-5">
          <img className="imgSag" src=".\src\images\Rectangle 14.png" />
          <h4 className="h4"><img className="ellipse5" src=".\src\images\Ellipse 5.png" /> CSIC * July 13,2023</h4>
          <h1>A new method allows quantifying the spatial intermittency...</h1>
          <div className="btnDiv">
          <button type="button" className="btn btn-secondary btn4">Ocean Current</button> 
          <button type="button" className="btn btn-secondary btn5">Climate</button> 
          <button type="button" className="btn btn-secondary btn6">Gulf Stream</button> 
          <button type="button" className="btn btn-secondary btn7">Environmental Issues</button> 
          <button type="button" className="btn btn-secondary btn8">...</button> 
          </div>
          <div className="divYazi">
            <p>Understanding Atlantic Ocean circulation is key for assessing the global ocean interconnections, in what is known as the 'global conveyor belt'. 
This is because the latitudinal ends of the Atlantic, bordering the polar regions, are cold-water formation regions that trigger the onset of the global conveyor belt...</p>
          </div>
          

        </div>
        
        <div className="col-sm-6 ">
          <div className="seeAll">
            <p>See All</p>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div>
            <img className="foto15" src=".\src\images\Rectangle 15.png" />
            </div>
            </div>
            <div className="col-sm-6">
            <h4 className="h4"><img className="ellipse1" src=".\src\images\Ellipse 1.png" /> Cell Press * July 14,2023</h4>
            <div className="bodyH2">
            <h2 className='h2'>Ocean animals vacate areas both around and outside deep-sea...</h2>
            </div>
            <div className="bodybtn">
            <button type="button" className="btn btn-secondary btn9">Sea Life</button> 
            <button type="button" className="btn btn-secondary btn10">Marine Biology</button> 
            <button type="button" className="btn btn-secondary btn8">...</button> 
            </div>
            
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div>
            <img className="foto15" src=".\src\images\Rectangle 15.2.png" />
            </div>
            </div>
            <div className="col-sm-6">
            <h4 className="h4"><img className="ellipse1" src=".\src\images\Ellipse 2.png" /> University of California * July 13,2023</h4>
            <div className="bodyH2">
            <h2 className='h2'>Multiple ecosystems in hot water after marine heatwave surges...</h2>
            </div>
            <div className="bodybtn">
            <button type="button" className="btn btn-secondary btn9">Ecology</button> 
            <button type="button" className="btn btn-secondary btn10">Marine Biology</button> 
            <button type="button" className="btn btn-secondary btn8">...</button> 
            </div>
            
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div>
            <img className="foto15" src=".\src\images\Rectangle 15.3.png" />
            </div>
            </div>
            <div className="col-sm-6">
            <h4 className="h4"><img className="ellipse1" src=".\src\images\Ellipse 3.png" /> Smithsonian * July 12,2023</h4>
            <div className="bodyH2">
            <h2 className='h2'>Marine fossils unearth story about Panama's deep past</h2>
            </div>
            <div className="bodybtn">
            <button type="button" className="btn btn-secondary btn9">Sea Life</button> 
            <button type="button" className="btn btn-secondary btn10">Marine Biology</button> 
            <button type="button" className="btn btn-secondary btn8">...</button> 
            </div>
            
            </div>
          </div>
        </div>
        </div>
        <hr className="hr"/>

        <div className="bodyPopular" >
          <h1 className='popular'>Popular</h1>
          <h4 className="seePopular">See all</h4>
        </div>
        <div className="row">
            <div className="col-sm-6">
              <div>
            <img className="foto22" src=".\src\images\Rectangle 22.png" />
            </div>
            </div>
            <div className="col-sm-6">
            <h4 className="h4"><img className="ellipse1" src=".\src\images\Ellipse 6.png" /> UCSD * October 24, 2008</h4>
            <div className="bodyH2">
            <h1 className='h1Cause'>Cause Of Weakness In Marine Animal Hybrids Discovered</h1>
            </div>
            <div className="bodybtn">
            <button type="button" className="btn btn-secondary btn11">Genetic Recombination</button> 
            <button type="button" className="btn btn-secondary btn12">Hybrid</button> 
            <button type="button" className="btn btn-secondary btn13">Evolution</button> 
            <button type="button" className="btn btn-secondary btn14">Species</button>
            <button type="button" className="btn btn-secondary btn9">Sea Life</button> 
            <button type="button" className="btn btn-secondary btn8">...</button> 
            </div>
            <div className="popularYazi">
              <p>Hybrid animals result when populations of a given species separate from one another, undergoing genetic mutations while apart and eventually reestablish ties and interbreed. Hybrids often suffer from lower fertility levels, slower development and higher rates of mortality due to environmental causes.</p>
              <p>The new research described by Christopher Ellison and Ronald Burton of Scripps Oceanography is published in this week's online edition of the Proceedings of the National Academy of Sciences...</p>
            </div>
            
            </div>
          </div>
          <div className="bodyLastest" >
          <h1 className='popular'>Your Lastest Read</h1>
          <h4 className="seePopular">See all</h4>
        </div>
        <div className="row lastestRow">
            <div className="col-sm-3">
              <div>
            <img className="foto32" src=".\src\images\Rectangle 32.png" />
            </div>
            <h4 className="h4"><img className="ellipse1" src=".\src\images\Ellipse 3.png" /> Smithsonian * June 9, 2022</h4>
            <div className="bodyH2">
            <h1 className='h1Last'>As the ocean heats up hungrier predators take control</h1>
            </div>
            <div className="bodybtnLast">
            <button type="button" className="btn btn-secondary btn12">Ocean</button> 
            <button type="button" className="btn btn-secondary btn10">Atlantic Salmon</button> 
            <button type="button" className="btn btn-secondary btn8">...</button> 
            </div>
            </div>
            <div className="col-sm-3">
              <div>
            <img className="foto32" src=".\src\images\Rectangle 33.png" />
            </div>
            <h4 className="h4"><img className="ellipse1" src=".\src\images\Ellipse 7.png" /> Monash Uni * Feb 6, 2023</h4>
            <div className="bodyH2">
            <h1 className='h1Last'>Why microbes in the deep ocean live without sunlight</h1>
            </div>
            <div className="bodybtnLast2">
            <button type="button" className="btn btn-secondary btn20">Phytoplankton</button> 
            <button type="button" className="btn btn-secondary btn20">Microorganism</button> 
            <button type="button" className="btn btn-secondary btn8">...</button> 
            </div>
            </div>
            <div className="col-sm-3">
              <div>
            <img className="foto32" src=".\src\images\Rectangle 34.png" />
            </div>
            <h4 className="h4"><img className="ellipse1" src=".\src\images\Ellipse 8.png" /> eLife * May 9, 2023</h4>
            <div className="bodyH2">
            <h1 className='h1Last'>Water warming study shows unexpected impact on fish size</h1>
            </div>
            <div className="bodybtnLast3">
            <button type="button" className="btn btn-secondary btn12">Climate</button> 
            <button type="button" className="btn btn-secondary btn10">Global Warming</button> 
            <button type="button" className="btn btn-secondary btn8">...</button> 
            </div>
            </div>
            <div className="col-sm-3">
              <div>
            <img className="foto32" src=".\src\images\Rectangle 35.png" />
            </div>
            <h4 className="h4"><img className="ellipse1" src=".\src\images\Ellipse 9.png" /> FBV * August 8, 2013</h4>
            <div className="bodyH2">
            <h1 className='h1Last'>Do fish feel pain? Not as humans do, study suggests</h1>
            </div>
            <div className="bodybtnLast4">
            <button type="button" className="btn btn-secondary btn20">Fishery</button> 
            <button type="button" className="btn btn-secondary btn20">Aggression</button> 
            <button type="button" className="btn btn-secondary btn8">...</button> 
            </div>
            </div>
            </div>
            <div>


            </div>

    </div>
    
    </>
  )
}
