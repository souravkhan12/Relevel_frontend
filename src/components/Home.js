import React from 'react'
import CardGrid from './CardGrid'
import FoldersGrid from './FoldersGrid'

const Home = () => {
  return (
    <div style={{ display:'flex',width:'100%',marginLeft:'5px',marginRight:'5px' }}  >

     <div>Part-1</div>
     <div>
      <nav style={{ display:'flex',alignItems:'center',justifyContent:'space-between' }} >
    <div style={{ display:'flex' , alignItems:'center' }} >
    <div style={{ margin:'15px' }} >
      <img src="/images/mydrive-logo.png" height="50px" />
    </div>

    <div>
     <input placeholder="Search...." style={{ width:'40vw',height:'35px'  }}  />
    </div>
    </div>

    <div>
    <img src="img" alt="setting"  />
    <img src="setting" alt="help"  />
    </div>

      </nav>
     <h2>Quick Access</h2> 
     <CardGrid />

     <h2>Folders</h2>
      <FoldersGrid />
      </div>

      <div>Part-3</div>
    </div>
  )
}

export default Home