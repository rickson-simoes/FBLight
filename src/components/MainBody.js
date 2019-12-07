import React from 'react';
import picBoy1 from '../images/boy1.jpg';
import picGirl1 from '../images/girl1.png';
import picBoy2 from '../images/boy2.jpg';
import picGirl2 from '../images/girl2.jpg';

function MainBody() {
  return (
    <>
    <div className="mainBody">

      <div className="mainBodyHeader">
        <div className="mainBodyIMG">     
         <img width="40" height="auto" alt={picBoy1} src={picBoy1} />
        </div>

        <div className="mainBodyHeaderProps">
          <div className="mainBodyPropsName">Rickson Simoes</div>
          <div className="mainBodyPropsHour">04 jun 2019</div>
        </div>
      </div>

      <div className="mainBodyQuestion">
          E ae gente sabe alguem odfjkg sdf-opkg opsdfg kjopdfs gkdfsopg ksdfg dfs?
      </div>  

      <div className="mainBodyHeader">
        <div className="mainBodyIMG">     
         <img width="40" height="auto" alt={picGirl1} src={picGirl1} />
        </div>

        <div className="mainBodyHeaderProps">
          <div className="mainBodyPropsName">Rickson Simoes : </div>
          <div className="mainBodyPropsAnswer">
            cara você pode OPFSAKDF OPASDK FPOASDKF POADSKFOPDASG SDFGSD FGFSDA GAF ASDPIFO JASDKIOPF SADKPOF ASDPOFK POASDKFOPASDKFOPASDKFOPASDFK OASDKFOPASDKPOFDASK OFASDKF OPASDKFOPASDKF OPASDKF AOSPDKFSD OAPDF SADKPOF ASDPOFK POASDKFOPASDKFOPASDKFOPASDFK OASDKFOPASDKPOFDASK OFASDKF OPASDKFOPASDKF OPASDKF AOSPDKFSD OAPDF SADKPOF ASDPOFK POASDKFOPASDKFOPASDKFOPASDFK OASDKFOPASDKPOFDASK OFASDKF OPASDKFOPASDKF OPASDKF AOSPDKFSD OAPD
          </div>          
        </div>
      </div>
    </div>
    </>
  );
}

export default MainBody;
