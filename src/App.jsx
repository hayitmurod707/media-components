import { Fragment } from 'react';
import styled from 'styled-components';
import Video from './components/Video';
import Source from './lamborghini.mp4';
const StyledHeader = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
   & h1 {
      font-size: 32px;
      font-weight: 600;
      margin: 32px 0 0 0;
      text-align: center;
   }
   & p {
      color: #768695;
      font-size: 18px;
      font-weight: 500;
      margin: 24px 0 0 0;
      text-align: center;
      & a {
         align-items: center;
         background-color: #5254f1;
         border-radius: 10px;
         color: white;
         display: flex;
         font-size: 16px;
         justify-content: center;
         padding: 12px 24px;
         text-decoration: none;
      }
   }
`;
const StyledVideoContent = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
   & .sub-title {
      font-size: 24px;
      font-weight: 600;
      margin: 24px 0 8px 0;
      width: 700px;
   }
   & .content {
      padding: 8px 0 24px 0;
      width: 700px;
   }
`;
const App = () => {
   return (
      <Fragment>
         <StyledHeader>
            <h1>Media components</h1>
            <p>Media components for react application</p>
            <p>
               <a
                  href='https://github.com/hayitmurod707/media-components'
                  rel='noreferrer'
                  target='_blank'
               >
                  Github repository
               </a>
            </p>
         </StyledHeader>
         <StyledVideoContent>
            <h2 className='sub-title'>Video</h2>
            <div className='content'>
               <Video source={Source} />
            </div>
         </StyledVideoContent>
      </Fragment>
   );
};
export default App;
