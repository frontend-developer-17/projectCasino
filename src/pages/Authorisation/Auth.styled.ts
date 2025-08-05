import styled from 'styled-components'


 const Wrapper = styled.div`
    display: flex;
    justify-content: center;
   height:100vh;
    align-items: center;
    


`;


const Outlet = styled.div`
width: 350px;
 border:2px solid rgba(164, 111, 146, 1);
border-radius:10px;
padding:6px;
        background-color: rgba(246, 243, 245, 1);

`
const Title=styled.h2`
 display: flex;
    justify-content: center;
color: rgb(164, 116, 209);
`
export {Wrapper, Outlet, Title}
