import { Outlet } from "react-router-dom";
import HeaderResponsive from '../components/Header'

const linksPage = [{
    link: '/',
    label: 'Inicio'
  },
  {
    link: '/Amosus',
    label: 'Amosus'
  },
  ];
  

export default function Root(){
    return(
        <>
        <HeaderResponsive links={linksPage} />
        <Outlet />
        </>
    )
}