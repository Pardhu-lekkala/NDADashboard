import React, { useState } from 'react';
import Sidebar from 'react-sidebar';
import elasticLogo from '../Assets/Images/elasticLogo.svg'
import { ReactComponent as CategoriesLogo } from '../Assets/Images/categoriesLogo.svg';
import { ReactComponent as SearchLogo } from '../Assets/Images/searchLogo.svg';
import { ReactComponent as FavoriteLogo } from '../Assets/Images/favoriteLogo.svg';
import { ReactComponent as DiscoveryLogo } from '../Assets/Images/discoveryLogo.svg';
import { ReactComponent as NotificationLogo } from '../Assets/Images/notificationLogo.svg';
import { ReactComponent as RefreshLogo } from '../Assets/Images/refreshLogo.svg';
import { ReactComponent as SettingsLogo } from '../Assets/Images/settingsLogo.svg';
import collapseIcon from '../Assets/Images/collapseIcon.svg'
import '../SideBar/index.css'

function SideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [clickedIcon,setClickedIcon] = useState(null)

  const onExpanded = (open) => {
    setExpanded(false)
  };

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const setIconBackground = (index) =>{
    setClickedIcon(index)
  }

  const sidebarContent = (
    <div>
      <img src={elasticLogo} alt="Logo1" className='flex-row-center logo-sty'/>
      <div>
        {expanded ? (
          <div style={{marginTop:"4rem",marginLeft:"1rem"}} className='flex-column-start'>
            <h2 className='bar-menus'>Categories</h2>
            <h2 className='bar-menus'>Search</h2>
            <h2 className='bar-menus'>Favorite</h2>
            <h2 className='bar-menus'>Discovery</h2>
            <h2 className='bar-menus'>Notifications</h2>
            <h2 className='bar-menus'>Refresh</h2>
            <h2 className='bar-menus'>Settings</h2>
          </div>
        ) : (
          <div style={{marginTop:"4rem"}} className='flex-column-center'>
            <CategoriesLogo className='logo-sty2' style={{ fill: 'green' }}/>
            <SearchLogo className='logo-sty2' style={{ fill: 'green' }}/>
            <FavoriteLogo className='logo-sty2' style={{ fill: 'green' }}/>
            <DiscoveryLogo className='logo-sty2' style={{ fill: 'green' }}/>
            <NotificationLogo className='logo-sty2' style={{ fill: 'green' }}/>
            <RefreshLogo className='logo-sty2' style={{ fill: 'green' }}/>
            <SettingsLogo className='logo-sty2' style={{ fill: 'green' }}/>
          </div>
        )}
      </div>
      {!expanded ? <div className='flex-column-end'>
        <img onClick={handleExpand} src={collapseIcon} alt="Logo9" className='logo-sty2' style={{marginTop:"8rem"}}/> 
      </div> : ''
      }
    </div>
  );

  return (
    <div>
      <Sidebar
        sidebar={sidebarContent}
        open={sidebarOpen}
        onSetOpen={onExpanded}
        styles={{
          sidebar: {
            top: 0,
            left: 0,
            bottom: 0,
            zIndex: 2,
            width: expanded ? '150px' : '100px',
            background: 'linear-gradient(to bottom, #262250 65%, #1B1942 85%,#17163B 100%)',
            transition: 'width 0.3s ease-in-out',
          },
          overlay: {
            zIndex: 1,
          },
        }}
      >
      </Sidebar>
    </div>
  );
}

export default SideBar;
