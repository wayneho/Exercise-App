import React from 'react'

const FrontView = ({ onClick }) => (
  <svg viewBox="0 0 610.4 993" width={600} height={900}>
    <g id="muscle-group" >
      <g id="delts" onClick={()=>onClick("delts")}>
        <path className="targetable-muscle" d="M427.2,249.4c-0.2-3.6-2.4-6.4-3.7-9.5c-6.3-14.8-14.6-28.2-26.3-39.4c-5.9-5.6-12.5-9.1-20.7-9.3
      c-3.4-0.2-4.3,1.1-3.1,4.5c4.2,12.1,10.1,23.3,17.3,33.8c8.2,12,19.3,19.4,33.5,22.7C427.6,253,427.3,251.8,427.2,249.4z" />
        <path className="targetable-muscle" d="M240.5,191.2c-6,0.7-11.9,1.7-16.9,5.9c-13.9,11.7-23.2,26.6-30.3,43c-1.4,3.2-3,6.2-3.7,10
      c-0.1,1.5-0.3,2.9,2.5,2.3c10.7-2.5,20.5-6.8,27.8-15c10.8-12.2,18.3-26.5,23.7-42C244.7,192.1,243.5,190.8,240.5,191.2z" />
        <path className="targetable-muscle" d="M181.1,254.4c1.7,0.5,2.1-1.3,2.6-2.5c1.7-3.6,3.2-7.2,4.9-10.8c5.5-11.6,10.9-23.3,19.3-33.2
      c4.5-5.4,10-9.9,16.4-15c-12.4-3-22.6-2.4-30.7,6.9c-3.9,4.5-6,10-8.1,15.6c-4.3,11.6-4.4,23.7-5.7,35.7
      C179.5,252.3,179.6,254,181.1,254.4z" />
        <path className="targetable-muscle" d="M417,219.2c5.8,9.8,10.4,20.2,15.1,30.6c0.7,1.6,0.8,4.6,3.6,3.9c2.6-0.7,1.5-3.5,1.3-5.2
      c-1.7-11.7-2.3-23.5-6.3-35c-6.2-18-19.7-26.1-38-20.2C403,200.6,411,209,417,219.2z" />
      </g>
      <g id="pecs" onClick={()=>onClick("pecs")}>
        <path className="targetable-muscle" d="M303.3,209.6c-0.1-5-3.3-8.2-8.5-8.5c-2.8-0.2-5.2,0.8-7.7,1.8c-9.8,3.8-17.8,10.7-26.5,16.3
      c-13.8,8.9-27.3,18-41.8,27.6c2.1,1.7,3.7,3,5.4,4.4c12.2,9.8,25.7,16.8,40.8,20.9c10.7,2.9,21.3,2.8,31.9-0.2
      c6-1.7,8.3-6.2,6.7-12.3c-1.4-5.3-1.8-10.4,0.2-15.6c0.3-0.9,0.5-2,0.4-2.9C302.7,230.6,303.5,220.1,303.3,209.6z" />
        <path className="targetable-muscle" d="M361,222.1c-10.1-7.3-20.5-13.9-31.7-19.3c-8.9-4.2-15.2-0.8-15.6,8.7c-0.5,10.6-0.6,21.3,0.1,31.9
      c0.3,5.5,0.8,10.7-0.1,16.2c-1.3,7.7,2,11.5,9.7,13.3c10.9,2.4,21.6,1.6,32.2-1.9c15.6-5.1,29.8-12.6,42-24.5
      C384.9,238.1,372.6,230.5,361,222.1z" />
        <path className="targetable-muscle" d="M289.8,193.9c-1.2-0.6-2.3-1.4-3.5-1.8c-14.7-4.3-28.2-2-38.7,9.5c-9.9,10.7-14.7,24.9-22,37.1
      c5.6-4.4,11.2-8.8,16.7-13.3c14.3-11.6,28.7-23.1,47-27.9c1-0.3,2-0.5,2.1-1.8C291.2,194.8,290.5,194.3,289.8,193.9z" />
        <path className="targetable-muscle" d="M391.9,239.2c-0.2-1.2-0.2-1.9-0.5-2.3c-4.5-7.6-9.5-15-13.5-22.9c-6.3-12.2-15.1-20.9-28.9-23.4
      c-8.1-1.5-16.1-0.8-24.1,5.1C351.5,204.5,370.8,222.8,391.9,239.2z" />
      </g>
      <g id="abs" onClick={()=>onClick("abs")}>
        <path className="targetable-muscle" d="M303.3,287.6c0,1.2,0,2.3,0,3.5c0,1.5-0.1,3,0,4.5c-0.1-1.5,0-3,0-4.5C303.3,289.9,303.3,288.7,303.3,287.6z" />
        <path className="targetable-muscle" d="M317.3,475.4c1.6,1.9,4,2.6,5.8,1.2c3.9-3.1,8.3-6,10.2-11c9-24.1,15.3-48.8,15.2-74.8c0-6-1.5-7.5-7.5-6.5
      c-6.2,1.1-12.2,2.6-18.4,3.7c-1.6,0.3-3.2,1-3.6,2.3c-2,6.6-5.6,12.6-5.5,19.8c0.1,9.1,0,18.3,0,27.4c0,0,0.1,0,0.1,0
      c0,9.5,0,19,0,28.4C313.5,469.6,315,472.6,317.3,475.4z" />
        <path className="targetable-muscle" d="M301.1,397.8c-2-5.7-4.1-10.7-11.3-11.1c-2.9-0.2-5.7-1.4-8.7-1.7c-11.6-1.4-11.6-1.5-11.5,10.1
      c0.1,10.6,0.1,21.2,2.8,31.7c3.2,12.8,6,25.7,11.1,37.9c1.5,3.5,3.5,6.7,6.6,9.1c6.2,4.9,11.9,2.5,13.1-5.6c0.3-1.6,0.1-3.3,0.1-5
      c0-8.8,0-17.7,0-29.6C302.2,423.8,305.5,410.6,301.1,397.8z" />
        <path className="targetable-muscle" d="M297.3,347.4c-1.4-0.5-2.9-0.7-4.4-0.9c-17.9-2.3-28.4,4.3-27.2,23.8c0.2,3.5,0.9,7.6,5.5,7.5
      c9.3-0.2,18,1.6,26.5,5.3c3.8,1.7,5.4-0.1,5.6-3.6c0.2-4.4,0-8.9,0-13.3c0,0,0.1,0,0.1,0c0-3.7-0.2-7.3,0-11
      C303.7,350.6,301,348.6,297.3,347.4z" />
        <path className="targetable-muscle" d="M313.5,359.3c0,2.2,0,4.5,0,6.7c0,3.5,0,7,0,10.5c0-3.5,0-7,0-10.5C313.5,363.8,313.6,361.6,313.5,359.3z" />
        <path className="targetable-muscle" d="M342.4,349.1c-6.7-4.5-13.7-3.2-20.9-2c-6.5,1.1-8.3,3.5-8.1,10c0,0.7,0,1.5,0,2.2c0,2.2,0,4.5,0,6.7
      c0,3.5,0,7,0,10.5c0,0.3,0,0.7,0,1c0.3,5.9,2,7.1,7.3,5c7.7-3.1,15.5-5.8,24-4.7c3.6,0.5,5.2-2.1,6.1-4.7
      C353.9,365.4,349.5,353.9,342.4,349.1z" />
        <path className="targetable-muscle" d="M348.2,322.8c-5.1-9.1-15.8-15.9-26.5-14.6c-6.1,0.8-8.2,3.4-8.2,9.6c0,5.8,0.1,11.7,0,17.5
      c-0.1,4.2,1.5,5.8,5.9,5.8c9-0.1,18.1-0.9,26.9,2.4c2.5,0.9,4.4-0.8,4.9-3.4c0.3-1.6,0.1-3.3,0.1-5.1
      C352.2,330.5,350.3,326.5,348.2,322.8z" />
        <path className="targetable-muscle" d="M303.3,316.1c-0.1-4.8-2.9-7.6-7.6-7.9c-3.5-0.2-6.8,1.3-10.1,1.8c-12.2,1.7-22.1,16.1-19.8,29.9
      c0.3,1.9,1.2,6.4,4.7,4.3c6.5-3.8,13.4-2.8,21-3.4c1.8,0.1,4.5,0.4,7.1,0.3c2.6,0,4.9-0.6,4.8-4.1
      C303.3,330,303.4,323.1,303.3,316.1z" />
        <path className="targetable-muscle" d="M303.3,291.1c0-1.2,0-2.3,0-3.5c-0.1-7.9-2.5-9.9-10.4-9.3c-3.9,0.3-7.6,1.5-11.2,2.9
      c-10.8,4.3-17.7,15.8-16.2,26.9c0.7,5.1,3.1,6.2,7.1,3.1c1-0.8,1.8-1.7,3-2.4c7-3.7,14.7-5.2,22.4-6.8c3.7-0.8,5.4-2.8,5.2-6.5
      C303.3,294.1,303.3,292.6,303.3,291.1z" />
        <path className="targetable-muscle" d="M342.4,286.7c-3.8-2.2-7.5-4.8-11.4-6.7c-4.8-2.3-10-2.7-14.7,0c-3.6,2-3.2,6.1-2.8,9.7c0.1,1,0,2,0,3
      c0,7.7,1.1,9.2,8.9,10.1c8.1,0.9,15.2,4.3,22.2,8c5.3,2.7,6.2,2.4,6.7-3.7c0.1-1.2,0-2.3,0-3.2
      C351.8,296.2,348.9,290.5,342.4,286.7z" />
      </g>
      <g id="quads" onClick={()=>onClick("quads")}>
        <path className="targetable-muscle" d="M377.7,524.5c-1.1-13.2-3-26.3-5.2-40.5c-1.1,1.4-1.6,1.9-1.8,2.4c-7.9,21-17,41.5-26.5,61.7
      c-5.9,12.5-8,25.4-6.3,39.2c1.6,12.6,2.5,25.4,3.5,38.1c1.3,16.4,1.3,32.9,1.1,49.4c0,2-0.8,4.9,2.7,4.6c2.8-0.3,6.8,1.8,7.3-3.9
      c0.7-7.4,2-14.8,3-22.2c2.9-20.7,6.9-41.3,11.5-61.7C372,569.6,379.6,547.9,377.7,524.5z" />
        <path className="targetable-muscle" d="M241.8,558.3c4.3,21.4,10.1,42.5,14.2,64c3.3,17.4,7,34.7,8.6,52.3c0.6,6.4,4.2,4.4,7.5,4.7
      c4.1,0.3,3.4-2.6,3.3-5c-1-18.2-1.3-36.5,0.1-54.7c0.7-8.9,2.1-17.8,2.7-26.7c0.6-7.6,2.9-15,2-22.6c-1.3-10.3-5.9-19.5-10-28.9
      c-4.9-11.3-9.9-22.7-15-33.9c-3.2-7.2-6.6-14.2-9.9-21.3c-0.4,0.1-0.8,0.1-1.3,0.2c-0.9,7.5-1.6,15-2.9,22.5
      C238.4,525.3,238.5,541.9,241.8,558.3z" />
        <path className="targetable-muscle" d="M243.4,632.8c-2.5-11.6-3.6-23.5-5.1-35.3c-1.6-12.7-2.2-25.4-2.7-38.2c-0.7-14.9,0.2-29.9,1.3-44.8
      c0.9-12.4,1.7-24.8,2.8-37.2c1-11,2.5-22,2.7-33.1c0.1-3.6-0.9-7.7-4.4-7.8c-3-0.1-3.5,4.5-3.5,7.3c-0.2,6.2-1.4,12.2-2.6,18.1
      c-3.7,18.7-5.7,37.5-6.3,56.5c-0.5,14.9,0.2,29.8,1.6,44.7c2,21.9,5.3,43.5,10.5,64.8c2.3,9.7,5.2,19.3,9.4,28.4
      C247.2,648.2,245.1,640.5,243.4,632.8z" />
        <path className="targetable-muscle" d="M390.3,497.4c-1.5-11.9-3.3-23.8-5-35.6c-1-7-1.6-14.1-3.7-20.9c-0.6-1.8-0.6-4.8-2.9-4.6
      c-2.6,0.2-3.8,2.9-4.3,5.5c-0.2,1.1-0.1,2.3-0.1,3.5c0.7,9.9,1.3,19.8,2.1,29.7c1.5,18.5,3.8,36.9,4.7,55.4
      c0.7,16.7,0.8,33.5-0.8,50.3c-1.5,16.5-2.9,33-6,49.3c-1.7,8.7-3.3,17.5-5.1,26.9c0.7-0.9,1.1-1.2,1.2-1.6
      c4.9-12,8.4-24.3,11.2-37c3-13.6,4.6-27.3,6.6-41c3.1-21.9,3.6-43.9,3-66C391.1,506.6,390.9,501.9,390.3,497.4z" />
        <path className="targetable-muscle" d="M319.9,681.5c1.2,3.9,3.9,6.5,8.4,6.6c4.4,0.1,5.9-2.9,7.2-6.4c1.5-4.2,1.9-8.6,2-13.1
      c0.3-18.1-0.6-36.2-2.1-54.2c-0.9-11-2.3-21.9-4.2-32.9c-0.5,0.3-0.9,0.4-1,0.6c-0.4,0.5-0.7,1.1-0.9,1.7
      c-6.9,19.6-12.5,39.6-13.6,60.5C315,656.9,316.1,669.4,319.9,681.5z" />
        <path className="targetable-muscle" d="M286.2,579.3c-2.3,8.2-2,16-2.6,23.6c-1.6,20.6-2.8,41.2-4,61.8c-0.3,5.9,0.3,11.9,2.8,17.5
      c1.5,3.5,3.9,5.8,7.8,5.8c3.8,0,5.3-3.1,6.6-5.9c2.9-6.1,3.7-12.6,4.3-19.2c1.9-22.3-1.8-43.9-8.6-65
      C290.5,591.8,289.5,585.5,286.2,579.3z" />
        <path className="targetable-muscle" d="M245.5,453c-0.4,15.5,3.7,30.1,9.7,44.1c5.8,13.6,12,27.1,17.9,40.7c9.4,21.7,19.5,43,27.1,65.4
      c-7.9-55.3-34.1-104.3-52.5-156.8C245.4,449.1,245.5,451.1,245.5,453z" />
        <path className="targetable-muscle" d="M318.2,603c2.3-7.2,4.8-12.9,6.8-18.6c7.8-22.8,18.3-44.5,27.7-66.6c6.6-15.6,15-30.6,17.3-47.8
      c1-7.5,3-14.9,0.2-22.8c-1.5,0.9-2,1.9-2.4,3c-9.8,25-19.6,50.1-29.4,75.1c-8.9,22.7-15.8,46-20.5,69.9
      C317.4,597.3,317,599.5,318.2,603z" />
        <path className="targetable-muscle" d="M376.1,590.2c0.3-5.8,1.6-11.8,0-18.6c-4.7,13.7-7.6,26.8-10.5,39.9c-3.9,17.9-6.5,36-8.9,54.1
      c-0.7,5.3-2.6,10.7-0.5,16.2c0.5,1.4,0.6,3.4,2.4,3.3c1.2-0.1,1.4-1.9,1.9-3.1c7.5-20.6,10-42.2,12.8-63.7
      C374.6,608.9,375.7,599.5,376.1,590.2z" />
        <path className="targetable-muscle" d="M261.8,675.6c-2.1-12.9-4.2-25.8-6.2-38.7c-2.9-19.1-6.7-37.9-11.6-56.6c-0.5-1.7,0.2-4.3-2.8-5.4
      c1.8,37.2,3.9,74.1,16.5,110.5C261,682,262.5,679.8,261.8,675.6z" />
      </g>
      <g id="forearms" onClick={()=>onClick("forearms")}>
        <path className="targetable-muscle" d="M458.4,394.1c11.6,17.7,22.6,35.8,33.7,53.8c2.6,4.1,4.6,8.9,10.2,11.4c-0.3-3.4-1.9-5.6-3.3-7.7
      c-7.3-11-12-23-15.7-35.7c-5.4-18.4-9.1-37.2-15.9-55.1c-3.9-10.2-8.9-19.9-17.5-27.8c-2.6,6.7-3,13.3-3.2,19.8
      C446.2,367.6,450.3,381.6,458.4,394.1z" />
        <path className="targetable-muscle" d="M121.9,452.8c12.5-19.9,24.9-39.7,37.4-59.5c11.8-18.7,13.7-38.8,8.4-60.7c-6.1,4.9-9.8,10.8-13.1,17.1
      c-7.3,14-10.8,29.3-14.3,44.6c-3.3,14.5-6.3,29.1-13.8,42.2c-4.2,7.2-8.2,14.5-12.7,22.6C118.5,458.2,120.2,455.5,121.9,452.8z" />
        <path className="targetable-muscle" d="M439.9,384.5c-1-0.6-2.2-2.9-3.6-1.4c-1.1,1.1,0.5,2.5,1.4,3.7c11.1,15.8,22.3,31.6,33.4,47.4
      c6.1,8.6,12.3,17.2,18.4,25.8c0.3-0.2,0.5-0.4,0.8-0.6c-0.3-0.7-0.5-1.5-0.9-2.2c-8.3-15.1-16.4-30.2-24.9-45.2
      C458.3,401,450.6,391.3,439.9,384.5z" />
        <path className="targetable-muscle" d="M127.6,457.5c-0.3,0.6-0.8,1.5,0.3,2.2c17.9-25.3,35.8-50.6,54-76.3c-3.1-0.7-4.5,0.7-5.9,1.7
      c-7.1,5.1-13.3,11.2-18,18.5C146.8,420.9,137.6,439.4,127.6,457.5z" />
        <path className="targetable-muscle" d="M198.8,352.6c-9.6,4.9-17.4,12.1-24.2,20.3c-2.6,3.1-5.3,6.2-6.2,11.4c10.2-5.4,19.8-10.3,29.1-15.5
      c4.9-2.7,6.9-7.5,6.9-12.9C204.3,351.1,203.1,350.4,198.8,352.6z" />
        <path className="targetable-muscle" d="M448.3,382.4c-6.7-14.6-19.1-23.2-32.4-30.9c-1.2-0.7-2.1-0.5-2.6,1.1c-1.8,5.8,1,13.5,6.4,16.4
      c9.3,5,18.6,9.9,28.2,14.9C448.2,383,448.4,382.6,448.3,382.4z" />
        <path className="targetable-muscle" d="M196.2,375c-2.1-0.8-2.4,2-3,3.2c-6,10.6-11.8,21.4-17.6,32.1c-7.8,14.3-15.6,28.6-23.4,42.9
      c9.3-10.5,17.3-22,24.7-34c7.8-12.6,15.3-25.4,19.2-39.9C196.4,378,198.3,375.8,196.2,375z" />
        <path className="targetable-muscle" d="M423.6,377.6c-0.6-1.1-0.9-3.1-2.4-2.5c-1.7,0.7-0.6,2.5-0.2,3.9c2.9,10.2,7.3,19.8,12.4,29
      c8.8,15.8,19.6,30.2,31,44.1c-4.3-7.9-8.7-15.9-13-23.8C442.2,411.5,432.9,394.6,423.6,377.6z" />
        <path className="targetable-muscle" d="M478.9,464.4c-9.6-23.2-20.5-45.6-37.6-64.3C451.1,423.1,465.4,443.5,478.9,464.4z" />
        <path className="targetable-muscle" d="M139.4,460.5c6.4-4.6,33.7-50.3,36.5-61.1C160.4,417.4,149.2,438,139.4,460.5z" />
      </g>
      <g id="biceps" onClick={()=>onClick("biceps")}>
        <path className="targetable-muscle" d="M209.9,250.6c-5,1.8-9.9,3.8-14.8,5.8c-2.8,1.1-4.5,3.2-5.3,6.2c-2.2,8.3-4.7,16.5-6.8,24.8
      c-2.3,9.5-5.9,18.7-5.8,29.8c0.4,2.5-0.1,6.2,1.3,9.7c2.4,5.9,7.8,7.8,13.4,4.6c1.6-0.9,3.1-1.8,4.4-3.2
      c18.7-19.3,23.1-43.7,24.9-69C221.5,255.7,213.1,249.5,209.9,250.6z" />
        <path className="targetable-muscle" d="M424.5,331.3c6.6,3.9,13.2,1.2,14.8-6.3c0.5-2.6,0.8-5.2,1.2-7.6c-0.2-2.3-0.2-4.3-0.7-6.2
      c-2.9-11.7-5.9-23.4-8.8-35.2c-2.6-10.4-4.4-21.4-17.9-23.3c-1-0.1-2.1-0.2-2.9-0.8c-3.6-2.5-6.6-1.6-9.7,1c-3,2.5-4.7,5.3-5,9.3
      c-0.3,4.6,1.5,8.8,2.1,13.2c2,13.4,5.4,26.3,12.1,38.2C413.4,320.4,417.4,327.1,424.5,331.3z" />
        <path className="targetable-muscle" d="M432.1,260.1c-2.1,1.1-0.8,3-0.3,4.4c2.1,5.7,4.7,11.3,6.5,17.1c6.2,19.8,8.2,39.8,1.1,60
      c-0.4,1.3-0.2,2.2,0.6,3.2c2.5-2.6,4.4-5.3,5.1-8.8c3.3-17,3-34-1.3-50.8c-2-7.9-3-16.4-8.9-22.8
      C434.2,261.6,434.2,258.9,432.1,260.1z" />
        <path className="targetable-muscle" d="M175.3,342.9c0.6,0.9,1,2.5,2.5,1.8c1.1-0.5,0.5-1.8,0.3-2.7c-0.7-3.2-1.5-6.4-2.3-9.6
      c-2.3-10.3-3.7-20.7-2.2-31.1c1.9-12.6,6.2-24.5,11-36.3c0.6-1.5,1.5-3,0.3-4.5c-1-0.3-1.2,0.3-1.7,0.8c-5,5-5.6,11.8-7.6,18
      c-4.8,15-6.7,30.3-5,46C171.3,331.4,172.1,337.5,175.3,342.9z" />
        <path className="targetable-muscle" d="M441,352.4c-10.9-9.6-21.8-19.2-31.2-27.6C410.1,333.9,429.1,353.4,441,352.4z" />
        <path className="targetable-muscle" d="M176.9,353.2c15-3.2,29.2-19,31.7-34.9C201.2,332.4,186.9,340.1,176.9,353.2z" />
      </g>
      <g id="obliques" onClick={()=>onClick("obliques")}>
        <path className="targetable-muscle" d="M382.4,414.2c0.6-12.3-1.2-24.5-1.6-36.8c-0.1-5-0.3-10-0.7-14.9c-0.5-5.9-3.5-7.6-8.8-5.3
      c-2.9,1.3-5.5,3-7.8,5.3c-5.5,5.6-6.8,12.5-7.5,20c-1.4,16.5-3.1,33-4.7,49.8c0.6,2.2-1,5.8,1.6,7.1c2.8,1.3,6.2,0,8.9-1.8
      c5.3-3.6,10.6-7.4,15.3-12C380.4,422.5,382.1,418.7,382.4,414.2z" />
        <path className="targetable-muscle" d="M243,428.7c4.1,2.8,7.9,6.1,12,8.9c2.6,1.8,6.1,3.2,8.9,1.8c2.6-1.2,1.1-4.8,1.5-7c-1.5-17.7-2.9-35-4.3-52.4
      c-0.9-10.8-5.9-18.8-16.2-23c-4.5-1.8-6.7-0.7-7.3,4c-0.5,3.6-0.7,7.3-0.9,10.9c-0.6,10.4-1.2,20.9-1.8,31.3
      C234.2,412.8,233.6,422.3,243,428.7z" />
        <path className="targetable-muscle" d="M387.7,305.5c-5.9,9.4-12,18.6-18.9,27.3c-3.2,3.9-4.2,9-4,14c0.1,2.1,0.3,5,2.3,5.7c1.7,0.6,3.9-0.8,5.6-2.3
      c13.6-12.3,16.4-28.6,17.6-47.1C388.6,304.6,388,304.9,387.7,305.5z" />
        <path className="targetable-muscle" d="M246.5,351.6c2.5,2.2,4.8,2,5.4-1.4c1-5.4,1.5-11.4-2.2-15.8c-8-9.4-14.6-19.8-21.6-29.9
      C227.1,323.1,232.4,339.1,246.5,351.6z" />
        <path className="targetable-muscle" d="M237,300.1c-2-0.2-2.9,0.4-2.3,2.4c3.1,10.3,8.9,18.5,18.9,23.4C257.6,314,249.1,301.1,237,300.1z" />
        <path className="targetable-muscle" d="M380.6,300.6c-10,1.9-18.2,7.7-18.2,20c0,0.5,0,2,0.3,3.4c0.4,1.6,1.4,2.8,3.2,1.5c7.9-5.9,13.9-13.2,16.3-23
      C382.4,301.5,382.8,300.2,380.6,300.6z" />
        <path className="targetable-muscle" d="M362.5,301.9c1.2,1.9,2.1,2.2,3.7,0.4c6.8-7.6,10.8-16.4,12.2-27.4c-4.8,3.9-9,7.3-13.2,10.7
      C359.9,290,358.9,296.4,362.5,301.9z" />
        <path className="targetable-muscle" d="M250.4,301.3c1.5,1.6,3.3,3,4.7,0.4c2.7-4.9,1.2-12.5-3.2-16.4c-3.8-3.4-7.9-6.5-12.8-10.3
      C240,285.7,243.7,294.1,250.4,301.3z" />
        <path className="targetable-muscle" d="M389.3,284.4c0-0.3,0-1.3-0.1-2.3c-0.2-1.4-0.4-3.3-1.8-3.7c-1.3-0.4-2.1,1.4-3,2.3
      c-3.3,3.2-5.2,7.2-6.5,11.5c-0.6,2.1-0.7,4.3,2.5,3.7C386.3,294.7,389.4,290.9,389.3,284.4z" />
        <path className="targetable-muscle" d="M227.3,285.3c0.2,1.3,0.3,2.4,0.7,3.5c1.1,3.2,9.7,9,10.6,7.4c1.7-3.2-0.5-6.5-1.7-9.6
      c-1.1-2.7-3.1-4.6-5.2-6.5c-1.6-1.4-2.9-1.4-3.5,1C227.9,282.4,227.6,283.9,227.3,285.3z" />
        <path className="targetable-muscle" d="M260.6,281.9c0.7-1.4,0.2-3.6-1.6-4.6c-4-2.4-8.1-4.7-12.1-7c1.3,5.4,4.5,9.1,8.9,11.8
      C257.5,283.2,259.5,283.9,260.6,281.9z" />
        <path className="targetable-muscle" d="M229.6,264c-1.1,2.1-1.9,4.5-0.7,6.6c1.1,1.9,3.4,2.7,5.7,2c2.2-0.7,4.1-2,5.4-4.3c-2.6-1.6-5.3-3.1-8-4.7
      C231.1,263.1,230.2,262.8,229.6,264z" />
        <path className="targetable-muscle" d="M369.4,271.1c-4.4,2.1-9.1,4-12.4,7.9c-0.8,1-1,2.2-0.4,3.3c0.3,0.5,1.4,0.6,1.7,0.8
      c2.1,0,12.4-8.6,12.8-10.4C371.4,271.2,370.3,270.6,369.4,271.1z" />
        <path className="targetable-muscle" d="M383.2,264.6c-0.6,0.2-1.2,0.6-1.7,0.9c-1.8,1-4.8,1.9-4.4,4c0.5,2.4,3.6,2,5.8,2.5c0.3,0.1,0.7,0,1.2,0
      c1.7,0.2,3.9,0.3,4.1-2.1c0.2-2.1,1.8-4.6-0.1-6.4C386.3,261.9,384.8,264,383.2,264.6z" />
      </g>
      <g id="tibialis-anterior" onClick={()=>onClick("tibialis-anterior")}>
        <path className="targetable-muscle" d="M253.4,775.5c4.8,26.4,11.9,52.4,17.8,78.6c4.7,20.4,9.7,40.7,14.5,61c0.7,3.1,1.5,5.5,5.4,4.5
      c4.6-1.2,1.6-4,1-5.9c-5.2-17-10.3-33.9-12.8-51.6c-3.4-23.1-1.9-46.5-3.6-69.8c-1.2-15.8-3.6-31.3-7.7-46.6
      c-1.4-5.1-3.6-10-6.7-14.4c-1.7-2.4-4.1-4.4-7.1-3.8c-3,0.5-4.4,3.2-4.9,6.2c-0.4,2.5-0.8,4.9-1.2,7.6c0.2,2.1,0.2,4.5,0.6,6.7
      C250.1,757.3,251.7,766.4,253.4,775.5z" />
        <path className="targetable-muscle" d="M325.5,919.6c3.4,0.9,4.8-0.5,5.5-3.8c3.4-15.4,6.8-30.8,10.6-46.1c7.5-30.1,14.7-60.3,21.2-90.6
      c2.6-12.2,4.6-24.4,6-37c-0.4-2.9-0.6-6.1-1.4-9.1c-1.6-6.1-6.1-7.2-10.7-2.8c-2,1.9-3,4.3-4.2,6.7c-4.4,9.1-6.2,18.9-8.1,28.7
      c-4.1,21.2-4.5,42.7-4.5,64.1c0,29.3-6.5,57.3-15.5,84.9C323.9,916.2,321.7,918.6,325.5,919.6z" />
        <path className="targetable-muscle" d="M373.4,777c-0.1-2.1-0.2-5.3-2.2-5.5c-2.4-0.2-3.1,2.8-3.6,5c-2.6,12.1-5.2,24.2-7.8,36.4
      c-5.8,27.4-11.5,54.8-17.2,82.2c-1.5,7.3-3.1,14.6-4.7,21.9c-0.5,2.3-0.1,4.1,2.3,4.7c2.8,0.7,2.1-1.9,2.5-3.2
      c2.3-9,4.5-18,6.6-27c5.2-22.6,11.7-44.9,17.2-67.4c3.1-12.5,7.7-24.8,6.9-38.1C373.5,783,373.6,780,373.4,777z" />
        <path className="targetable-muscle" d="M274.1,918.6c0.3,1.4-0.2,3.9,2.6,3.1c2.1-0.6,2.7-2.3,2.2-4.3c-0.2-1.1-0.4-2.3-0.7-3.4
      c-4-18.3-8-36.6-11.9-54.9c-5-24-9.9-47.9-14.9-71.9c-0.8-4.1-1.6-8.2-2.8-12.1c-0.4-1.4-0.9-3.6-2.8-3.6c-2.3,0-2,2.6-2.2,3.8
      c-0.4,3.6-0.1,7.3-0.1,9.2c-0.4,7.9,0.3,14,1.8,20c3.7,14.3,7.4,28.5,11,42.8C262.3,871,268.2,894.8,274.1,918.6z" />
        <path className="targetable-muscle" d="M326.2,889.2c0.8-3.1,2.6-6.3,2.3-9.3c-0.5-6.2,0.9-12.2,1.4-18.3c1.5-16,1.8-31.9,0.6-47.9
      c-0.1-1.5,0.9-4.2-1.8-4.5c-2.6-0.3-2.2,2.4-2.7,4c-2.7,9.3-3.8,18.7-3.1,28.5C324.3,857.5,324.2,873.3,326.2,889.2z" />
        <path className="targetable-muscle" d="M290.5,812.6c-0.4-1.5-0.3-3.7-2.7-3.4c-2.2,0.3-1.4,2.4-1.5,3.7c-1.8,20-0.6,39.9,1.7,59.8
      c0.7,5.6,0.3,11.3,3.1,17.8c1.4-17,1.4-33,2.6-48.8C294.5,831.6,293.2,822.1,290.5,812.6z" />
      </g>
      <g id="exclude-group">
        <polygon className="nontargetable-muscle" points="327.3,104 327.4,104.1 327.3,104     " />
        <path className="nontargetable-muscle" d="M98.8,515.7c0.2,0.4,0.3,0.9,0.3,1.4C99.1,516.6,99,516.1,98.8,515.7z" />
        <path className="nontargetable-muscle" d="M325.1,106c1.2-0.1,2.1-0.5,2.2-2c0,0,0,0,0,0C327.2,105.5,326.3,105.9,325.1,106z" />
        <path className="nontargetable-muscle" d="M327.4,103.9c0.1-0.1,0.2-0.1,0.3-0.2C327.6,103.8,327.5,103.9,327.4,103.9
      C327.4,103.9,327.4,103.9,327.4,103.9z" />
        <path className="nontargetable-muscle" d="M529.6,496c-3.3-2.7-6.9-5-10.8-7.1c-8.7-4.6-17.1-9.6-22.3-18.4c-1.5-2.5-2.3-1.3-2.8,0.3
      c-0.4,1.2-0.5,2.7-0.2,3.9c2.3,9.2,1.4,18.3-1.7,26.9c-3.8,10.8-0.4,11.7,9.7,11.1c0.3,0,1.6,0.1,2.9,0c8.4-0.7,16.7-2.1,24.1-6.7
      C534.4,502.5,534.7,500.1,529.6,496z" />
        <path className="nontargetable-muscle" d="M122.3,480.9c0.3-3,1.5-5.8,1.1-8.8c-0.1-1-0.1-2.1-1.2-2.5c-1.4-0.5-1.6,0.8-2.1,1.5c-2,3.3-4.5,6.1-7.4,8.6
      c-7.1,6.1-15.9,9.4-23.5,14.8c-7,5-6.8,8.3,0.7,12.5c8.1,4.5,16.9,5.5,25.9,5.9c0.8,0,1.7,0,2.5,0c8.7,0,9.4-1,7.2-9.5
      C123.6,496.1,121.7,488.7,122.3,480.9z" />
        <path className="nontargetable-muscle" d="M328.6,540.4c4.6-11,2.7-20.9-3.5-30.6c-3.9-6.1-7.2-12.7-11.2-19.9c-2.4,24.9-1,48.1,8.1,72.1
      C324.4,553.9,325.9,546.9,328.6,540.4z" />
        <path className="nontargetable-muscle" d="M286.3,521.7c-1.2,2.6-1.3,5.3-0.6,7.8c2.8,10.2,5.8,20.2,8.8,30.5c7.4-6.9,12.7-50.3,8.2-69.6
      C296.9,500.9,291.2,511.1,286.3,521.7z" />
        <path className="nontargetable-muscle" d="M332.6,516.5c0.9,1.2,1.7,1.3,2.6,0c5.1-7.4,9.5-15.1,11.3-23.9c-0.1-1.2,0.1-2.3-0.3-3.2
      c-2.2-5.3-4.6-10.5-6.7-15.9c-0.9-2.4-2-1-3-0.4c-5.2,2.7-9.6,6.6-13.4,10.9c-1.4,1.6-4,3.8-3.2,6.3
      C322.8,499.7,326.7,508.6,332.6,516.5z" />
        <path className="nontargetable-muscle" d="M295.6,486.5c-4.2-5.5-9.4-9.9-15.3-13.3c-0.7-0.4-2-2.1-2.8-0.1c-2.5,6.1-4.9,12.2-7.2,18.1
      c2.2,9.8,6.4,18.2,12,25.9c1.4,1.9,2.2,0.1,2.9-1c4.9-7.5,8.7-15.6,11.7-24C297.6,489.7,296.9,488.2,295.6,486.5z" />
        <path className="nontargetable-muscle" d="M319.4,727c5.5,12.1,10.5,24.4,13.7,37.4c4.2-11.3,4.2-22.4-0.5-33.6c-5.5-13.2-11-26.5-14-40.6
      c-0.4-2.1,0.1-4.6-2-6.3C314.4,698.6,313.2,713.3,319.4,727z" />
        <path className="nontargetable-muscle" d="M305,196.8c2.6-27.5-11.3-47-25.8-66.4C278.8,155.7,291.8,175.6,305,196.8z" />
        <path className="nontargetable-muscle" d="M337.9,130.7c-14.6,19-28.2,38.5-25.6,65.8C325.4,175.3,338.5,155.7,337.9,130.7z" />
        <path className="nontargetable-muscle" d="M300.3,682.5c-0.9,2.1-1.5,3.1-1.7,4.1c-1.4,10.9-4.8,21.2-8.9,31.4c-3.3,8.1-7.7,15.7-8.8,24.6
      c-0.9,7.2,0.3,17.9,3.3,21.8c2.8-12.3,7-24.1,12.4-35.5C303.5,714.4,302.4,699,300.3,682.5z" />
        <path className="nontargetable-muscle" d="M332.5,53.5c1,0.2,1.3,0.1,1.8-0.8c5.5-11.2,0.3-21.9-12.1-24.5c-1-0.2-2-0.3-2.9-0.5c-5.5-1-8,0.4-8.5,5.9
      c-0.7,7.3-0.9,14.6-1.4,22.4C320.1,51.7,320.1,51.7,332.5,53.5z" />
        <path className="nontargetable-muscle" d="M286,53.1c5.6-2.4,11.1-2.4,16.7,0.5c4.8,2.5,4.9,2.3,4.7-3.4c0-0.3,0-0.7,0-1.9c-0.3-2.9-0.8-6.7-0.9-10.5
      c-0.3-11.7-1.7-12.7-12.4-8.5c-15,5.9-15,6-11.6,21.8C283,53.7,283.6,54.1,286,53.1z" />
        <path className="nontargetable-muscle" d="M292.7,746c-4,22.8-8.4,45.5,2.6,67.8C302.3,790.8,299.2,768.3,292.7,746z" />
        <path className="nontargetable-muscle" d="M323.5,745.6c-5.8,22.9-9.1,45.3-2.9,69.3C332.1,803.4,328.7,757.6,323.5,745.6z" />
        <path className="nontargetable-muscle" d="M285.3,83c5.3-0.2,10.5-1.4,15.3-3.5c2.5-1.1,4.9-3.9,4.2-6.6c-0.5-2.1-3.8-0.6-5.9-0.7
      c-1.1,0-2.3,0.4-3.4,0.5c-4.2,0.4-8.3,0.7-13,0.1c6.4-6.9,10.1-7.4,22.4-3.9c0.1-7.6-4.7-13.3-12-14.4c-4.5-0.7-10.3,4-11.9,11.1
      c-1,4.6,0.7,9-0.4,13.6C280.1,81.7,282.5,83.1,285.3,83z" />
        <path className="nontargetable-muscle" d="M372.1,672.4c-7.2,12.8-8.9,27.3-15.9,39.9c-1.8,3.2-0.6,7.2-0.9,11.4c2.6-1.1,3.8-3,5.2-4.5
      c2.2-2.3,4.7-3.9,7.8-3.6c3.5,0.3,3.7-1.4,3.7-4.2c-0.1-9.8,0-19.6,0-29.4C372.1,678.8,372.1,675.6,372.1,672.4z" />
        <path className="nontargetable-muscle" d="M245.7,713.6c0,1.8,0.9,2.3,2.5,2.1c4.4-0.7,7,2.2,9.7,4.9c1.1,1.1,1.9,3.5,3.7,2.5c1.6-0.9,0.5-3,0.3-4.6
      c-2.9-16.3-11.8-30.7-14.6-47.1c-0.5,0.1-1.1,0.3-1.6,0.4C245.7,685.8,245.7,699.7,245.7,713.6z" />
        <path className="nontargetable-muscle" d="M357.1,697.5c0.4-4.7-4.3-9.1-10-9.5c-7.6-0.5-12.9,2.9-13.4,8.7c-0.4,4.6,6.2,11.9,11.2,12.4
      C350.3,709.6,356.5,703.7,357.1,697.5z" />
        <path className="nontargetable-muscle" d="M272.2,687.9c-7.2-0.1-11.8,3.5-11.8,9.2c0,5.5,5.7,12,10.6,12c5.4,0,12.1-6.4,12.3-11.8
      C283.5,691.7,279.1,688,272.2,687.9z" />
        <path className="nontargetable-muscle" d="M499.9,470.6c5.4,8.6,13.8,11.3,23.3,12.1c2.2-0.3,4.5-0.5,6.8-1c2.7-0.6,3.5-1.5,1.5-4.3
      c-5.2-7.4-20.6-13.4-29.6-11.5C498.4,466.7,498.3,468,499.9,470.6z" />
        <path className="nontargetable-muscle" d="M94.4,483c8.6-0.2,17.9-5.1,22.3-12c1.6-2.5,2.9-4.5-1.9-5.1c-9.1-1-16.9,1.8-24.1,6.8
      c-2.6,1.8-6.8,4.2-5.6,7.3C86.2,483,90.9,482.9,94.4,483z" />
        <path className="nontargetable-muscle" d="M319.3,142.5c-7.2-3.4-14.3-3.1-21.5,0c-2.5,1.1-2.8,2.1-1.1,4.4c4,5.2,7.6,10.7,11.8,16.6
      c4.2-6,7.9-11.4,11.9-16.7C322.1,144.5,321.7,143.6,319.3,142.5z" />
        <path className="nontargetable-muscle" d="M278.4,162.6c0.5-1,1.6-2,0.4-3.1c-1-0.9-2.1-0.5-3.2,0.1c-11.8,6.5-23.7,13-36.4,19.9
      C258.5,184,270.7,177.5,278.4,162.6z" />
        <path className="nontargetable-muscle" d="M338.7,159.4c-1.6,1.6,0.3,3.6,0.9,5.4c0.1,0.5,0.4,0.9,0.7,1.3c12.1,12.9,18.4,17.7,36.6,13.6
      c-0.4-0.7-0.5-1.1-0.8-1.2c-10.9-5.9-21.7-11.8-32.6-17.7C342,160,340.2,157.9,338.7,159.4z" />
        <path className="nontargetable-muscle" d="M293.4,934.5c0-2.2-0.3-3.5,0.1-4.5c1.3-3.7-1.1-5.8-3.7-6.3c-2.8-0.5-3.3,2.4-3.6,4.8
      c-1.2,9-2.4,18-3.7,26.9c-0.2,1.6,0.2,3.6,1.9,3.3c2.8-0.5,6.2-0.9,6.7-4.7C292.1,947.2,292.8,940.3,293.4,934.5z" />
        <path className="nontargetable-muscle" d="M333.7,953c-0.2-1.1-0.2-2.3-0.3-3.4c-1-7.4-2-14.7-2.9-22.1c-0.3-2.2-1.3-4.3-3.5-3.8
      c-2,0.5-4.3,1.9-3.9,4.9c0.2,1.5,0.4,2.9,0.6,4.4c-0.1,0-0.2,0-0.4,0c0.8,6.9,1.6,13.8,2.4,20.6c0.4,4.2,4.1,5.2,6.8,5
      C335.5,958.4,334.1,955.2,333.7,953z" />
        <path className="nontargetable-muscle" d="M336.3,67.6c-0.3-6.9-5.4-13.1-11-13.3c-5.4-0.3-12.4,6-13.4,12c-0.3,1.7-0.5,3.5,1.9,2.3
      c8.3-4.2,15.2-2.1,22.5,5.4C336.3,70.8,336.4,69.2,336.3,67.6z" />
        <path className="nontargetable-muscle" d="M324.6,115.1c1-0.7,2.7-1.4,2.4-2.9c-0.3-1.7-2.2-2-3.6-2c-4.8-0.2-9.6-0.1-14.4-0.1c0-0.1,0-0.1,0-0.2
      c-4.5,0-9,0-13.5,0c-2.1,0-4.4,0.7-4.6,2.7c-0.2,1.7,1.5,3,3.7,3.4c2.4,0.5,4.6,1.7,7,2.2C309.6,119.8,317.5,119.9,324.6,115.1z" />
        <path className="nontargetable-muscle" d="M525.4,516.6c-0.8-1.7-1.7-2.8-4.8-2.5c-2.5,0.5-3,2.7-1.7,5.6c3.1,7,6.3,14,9.6,21c1.1,2.3,2.7,4.8,5.5,3.4
      c2.8-1.3,2-4.2,1-6.5C531.8,530.7,528.5,523.7,525.4,516.6z" />
        <path className="nontargetable-muscle" d="M94.9,513.2c1.8-0.1,3.3,1,4,2.4C98.2,514.2,96.7,513.2,94.9,513.2c-0.8-0.1-1.5,0.3-1.9,0.9
      C93.4,513.5,94,513.1,94.9,513.2z" />
        <path className="nontargetable-muscle" d="M99.1,517.1c0-0.5-0.1-1-0.3-1.4c-0.6-1.5-2.2-2.5-4-2.4c-0.8-0.1-1.5,0.3-1.9,0.9c-0.1,0.1-0.1,0.2-0.1,0.3
      c-3.6,7.9-7.8,15.7-10.4,24.1c-0.5,1.7-1,4.6,1.1,5.4c2.2,0.8,4.2-1.2,5.1-3.1c3.5-7.3,6.9-14.7,10.1-22.1
      C99,518.1,99.1,517.5,99.1,517.1z" />
        <path className="nontargetable-muscle" d="M327.3,104C327.3,104,327.3,104,327.3,104C327.3,104,327.3,104,327.3,104C327.3,104,327.3,104,327.3,104
      L327.3,104z" />
        <path className="nontargetable-muscle" d="M327.3,104C327.3,104,327.4,104,327.3,104L327.3,104C327.3,104,327.3,104,327.3,104z" />
        <path className="nontargetable-muscle" d="M327.3,104c-10.1-6.7-21-5.6-31.9-3.2c-2.4,0.5-4.6,1.8-4.7,5.2c11.4,0,22.6,0,33.9,0c0.2,0,0.4,0,0.5,0
      C326.3,105.9,327.2,105.5,327.3,104z" />
        <path className="nontargetable-muscle" d="M81.5,491.8c3-1.7,3.1-3.5,1.1-6.4c-1.9-2.7-3.5-4.3-6.7-2.1c-3.2,2.3-6.5,4.6-9.6,6.9
      c-2,1.4-4.5,2.7-3.6,5.8c0.9,2.9,4.2,1.3,5.9,2.7C73.7,497.9,77.3,494.3,81.5,491.8z" />
        <path className="nontargetable-muscle" d="M336.1,76.8c0.2-3.2-3.2-3.5-5.1-3.5c-6.3,0.1-12.4-1.5-18.7-1.3c1.8,7.7,11.3,13,19.1,11.4
      C335.4,82.5,335.9,79.6,336.1,76.8z" />
        <path className="nontargetable-muscle" d="M553.2,492.6c-1-2.5-11.8-9.6-14.4-9.6c-2.9,0-3.8,2.2-4.8,4.3c-1.1,2.3,0.5,3.4,2,4.4
      c3.6,2.5,7.3,5,11.1,7.3c3.5,2.1,6.6,0,6.6-4.2C553.5,494.2,553.4,493.3,553.2,492.6z" />
        <path className="nontargetable-muscle" d="M84,508.4c-2.6-1.7-4.2-0.7-5.5,1.7c-3.2,5.6-6.5,11.1-9.8,16.6c-0.8,1.4-1.7,2.9-1.3,4.8
      c-0.7,3.5,1.2,3.2,3.6,2.3c1.4-0.5,2-1.6,2.7-2.8c3.5-5.8,7.1-11.5,10.6-17.3C85.5,511.9,86.8,510.2,84,508.4z" />
        <path className="nontargetable-muscle" d="M538.3,509.7c-1.4-2.3-3.5-2.3-5.5-1c-2,1.3-1.5,2.9-0.4,4.7c3.4,5.4,6.8,10.9,10,16.4
      c1.5,2.6,3.5,4.3,6.7,4.9c0.2-2.1,1.4-4.2,0.1-6.2C545.7,522.1,542,515.9,538.3,509.7z" />
        <path className="nontargetable-muscle" d="M109.9,516.1c-1.7-0.4-3.5-0.1-4.2,1.8c-2.7,7.5-5.2,15-7.8,22.4c-0.6,1.9,0.5,3.3,1.8,4.2
      c1.9,1.2,3.4-0.4,4.1-1.7c3.6-7.4,5.6-15.5,8.5-23.6C111.6,518.3,111.7,516.5,109.9,516.1z" />
        <path className="nontargetable-muscle" d="M511.4,518.3c-0.6-1.7-1.8-3.6-3.2-3.2c-1.8,0.4-3,2.4-2.7,5.8c2.1,6.8,4.4,14.7,7.9,22.1
      c0.6,1.2,2.1,2.7,3.7,1.5c1.4-1,2.4-2.7,1.7-4.8C516.2,532.7,513.8,525.5,511.4,518.3z" />
        <path className="nontargetable-muscle" d="M232.1,431.2c-0.6-0.1-1.4,0.2-1.7,0.6c-0.7,0.9-1.4,2-1.6,3.1c-3.8,16-5.5,32.2-5.1,48.7
      c4.4-16.6,6.4-33.6,9.4-50.5C233.3,432.2,233.1,431.3,232.1,431.2z" />
        <path className="nontargetable-muscle" d="M344.5,953.9c-0.8-1.9-0.7-4.2-1.2-6.3c-1.3-5.8-2.5-11.6-4.1-17.3c-0.4-1.6-1.7-3.5-3.6-3.4
      c-2.5,0.1-0.9,2.3-1.2,3.8c1.1,7.9,2.1,16.1,3.3,24.2c0.3,2,1,4.4,4.2,3.6C344.6,957.9,345.8,956.9,344.5,953.9z" />
        <path className="nontargetable-muscle" d="M279.1,955c1.3-8,2.2-16,3.3-24c-0.7-1.3,1.6-3.6-1.1-4.1c-1.8-0.3-2.7,1.6-3.5,2.9c-0.7,1.1-1,2.4-1.2,3.7
      c-1.4,6.8-2.5,13.6-4.3,20.3c-0.8,3-0.2,4.1,2.6,4.7C278.1,959.2,278.8,957,279.1,955z" />
        <path className="nontargetable-muscle" d="M387.3,432.9c-0.6-1-1.1-2.2-2.6-1.8c-1.6,0.5-1.1,1.9-0.9,2.9c0.9,4.9,1.8,9.8,2.7,14.6
      c2.3,11.6,3.3,23.4,6.7,35.9c0.6-13.1-1-25-2.6-36.8C389.9,442.8,389.9,437.5,387.3,432.9z" />
        <path className="nontargetable-muscle" d="M130.7,471.7c-1.8,0-2.1,1.6-2.6,3.1c-2.4,8.3-2.3,16.5,0,26c3.4-5.3,5.3-10,6.4-15c0.8-3.7,1.3-7.5-0.2-11.2
      C133.6,472.9,132.5,471.6,130.7,471.7z" />
        <path className="nontargetable-muscle" d="M272.9,97.3c-1.4,0.5-2.3,2.1-2.5,4c-0.6,7.5,6.8,20.1,14.7,23.7c-2.9-8.7-5.7-16.9-8.5-25.1
      C276,98.4,274.6,96.8,272.9,97.3z" />
        <path className="nontargetable-muscle" d="M489.2,475.9c-0.4-1.5-1.1-3.8-2.9-3.6c-1.8,0.2-3.7,1.5-4,3.8c-0.1,1-0.5,2-0.5,2.9
      c0.5,7.3,2.1,14.4,6.8,21.3C491.8,491.8,491.3,483.9,489.2,475.9z" />
        <path className="nontargetable-muscle" d="M346.7,100.2c0.1-1.5-1.1-2.5-2.3-3c-1.8-0.7-3,0.9-3.4,2.1c-3.1,8.3-5.9,16.7-9,25.5
      C341.8,121.7,346.4,107.9,346.7,100.2z" />
        <path className="nontargetable-muscle" d="M277.2,63c1.2-4.7,1.8-9.5,1-14.3c-0.3-1.6-0.4-4.1-2.4-4.4c-1.8-0.3-2.4,2-3.3,3.3c-3.5,5-2.4,21.7,2.6,26.6
      C275.2,70.2,276.3,66.6,277.2,63z" />
        <path className="nontargetable-muscle" d="M330.4,120.5c0.3-0.9,1.2-1.9,0.5-2.8c-0.8-1-2.1-0.4-3.2-0.2c-9.3,1.8-12.2,9.7-16.4,17.1
      C320.3,135.2,326.9,130.1,330.4,120.5z" />
        <path className="nontargetable-muscle" d="M346.1,64.5c1.1-5.9,1.8-11.7-1.7-17.2c-0.8-1.3-1.7-2.9-3.1-2.8c-1.9,0.1-1.7,2.1-2,3.4
      c-2.6,9,2.2,17,4.1,25.5C344.3,70.4,345.5,67.5,346.1,64.5z" />
        <path className="nontargetable-muscle" d="M306.3,134.8c-2.7-4.3-5-8.1-7.6-11.7c-2.3-3.2-5.7-4.8-9.6-5.6c-2.4-0.5-3.1,0.2-2.7,2.4
      C287.9,127.6,297.1,135,306.3,134.8z" />
        <path className="nontargetable-muscle" d="M264.5,464.2c-1.6,4.9-3.2,9.8-0.4,14.8c1.1,1.9,2.1,4.3,4.2,4.3c1.4,0,2.3-2.4,3.2-4
      c1.3-2.2,2.1-4.5,1.8-6.9c0.3-4.4-1.4-7.6-5.3-9.3C266.9,462.6,265.2,462,264.5,464.2z" />
        <path className="nontargetable-muscle" d="M346.2,481.1c1.8,2.9,3.6,2.4,5.2-0.1c2.7-4.1,3.8-8.4,1.9-13.1c-0.7-1.8-0.2-4.8-2.8-5.1
      c-2.8-0.2-4.8,1.8-6.2,4.3c-1,1.7-1,3.5-0.9,5.5C342.9,475.8,344.6,478.5,346.2,481.1z" />
        <path className="nontargetable-muscle" d="M297,937.9c-1,5.5-1.1,11.2-1.6,16.8c-0.1,2,1,3.1,3,3.2c1.6,0.1,2.7-0.1,3.1-2.2c1.6-9.8,0.1-19.3-2-30.1
      C296.6,930.1,297.7,934.1,297,937.9z" />
        <path className="nontargetable-muscle" d="M318.5,957.8c2-0.1,3-1.3,2.9-3.3c-0.2-9.4-1.9-18.7-3.5-28c-2.9,9.7-4.2,19.6-2.5,29.7
      C315.7,958.1,317.2,957.9,318.5,957.8z" />
        <path className="nontargetable-muscle" d="M123.3,516.2c-1.8-0.2-3,0.9-3.4,2.3c-1.9,5.8-3.6,11.6-5.3,17.4c-0.5,1.6,0,3.2,1.5,3.8
      c1.6,0.7,3.1-0.4,3.6-1.9c2.1-6.2,3.9-12.5,5.7-18.3C125.3,517.7,125,516.4,123.3,516.2z" />
        <path className="nontargetable-muscle" d="M493.7,516.3c-1.6,0.6-2,2-1.5,3.6c1.8,5.8,3.5,11.7,5.3,17.5c0.5,1.6,1.6,2.8,3.2,2.4c1.6-0.4,2.1-2,2.1-3.7
      c-1.9-6.1-3.7-12.3-5.7-18.4C496.5,516.4,495,515.7,493.7,516.3z" />
        <path className="nontargetable-muscle" d="M327.3,104L327.3,104C327.3,104,327.3,104,327.3,104C327.3,104,327.4,104,327.3,104
      C327.4,103.9,327.4,103.9,327.3,104C327.4,104,327.3,104,327.3,104z" />
        <path className="nontargetable-muscle" d="M327.7,103.7c1.2-0.6,2.2,1.4,3.3,1.8C329.9,105.1,328.9,103.2,327.7,103.7z" />
        <path className="nontargetable-muscle" d="M332.9,104.5c2.2-3.3,4.5-6.5,6.7-9.8c0.8-1.2,1.1-2.4,0.1-3.7c-1-1.2-2.3-2-3.9-1.7
      c-2.4,0.5-4.2,1.6-5.4,3.9c-1.7,3.4-2.7,7-3,10.8c0.1-0.1,0.2-0.1,0.3-0.2c1.2-0.6,2.2,1.4,3.3,1.8
      C331.5,105.7,332.2,105.5,332.9,104.5z" />
        <path className="nontargetable-muscle" d="M327.3,104C327.3,104,327.4,104.1,327.3,104C327.4,104,327.4,104,327.3,104C327.4,104,327.3,104,327.3,104
      C327.3,104,327.3,104,327.3,104z" />
        <path className="nontargetable-muscle" d="M269.6,717.7c1.4,5.1,3,10.1,4.9,16.6c2.4-8.1,4.2-14.6,6.4-22.1c-3.8,1.2-6.6,2.2-9.4,2.9
      C269.8,715.4,269.1,716.1,269.6,717.7z" />
        <path className="nontargetable-muscle" d="M336.3,711.9c2,7.4,3.8,14.1,5.6,20.8c0.4,0,0.7-0.1,1.1-0.1c0.5-1.7,0.9-3.5,1.5-5.2
      c0.6-1.7,1.2-3.4,1.9-5.1c2.4-6.1,2.4-6.1-4.1-8.3C340.4,713.4,338.6,712.7,336.3,711.9z" />
        <path className="nontargetable-muscle" d="M273.9,931.9c-4.2,6.6-8.3,13.3-12.5,19.9c-1.1,1.7-2.3,3.4,0.3,4.8c2.3,1.2,4.2,1,5.2-1.7
      c2.8-7.4,5.6-14.9,8.4-22.3C274.8,932.4,274.3,932.2,273.9,931.9z" />
        <path className="nontargetable-muscle" d="M343,931.9c-0.5,0.2-1,0.5-1.5,0.7c2.8,7.4,5.6,14.9,8.4,22.3c0.9,2.4,2.7,2.9,4.7,1.9c1.1-0.5,3-1.2,1.7-3.3
      C351.9,946.3,347.5,939.1,343,931.9z" />
        <path className="nontargetable-muscle" d="M299.3,963c-5.1-1-8.8,1.9-8.9,7.1c-0.1,5.2,2,7.6,6,6.7c2.1-0.5,6-11.4,4.6-13
      C300.7,963.4,299.9,963.2,299.3,963z" />
        <path className="nontargetable-muscle" d="M323.1,964c-2.4-0.8-5.2-2-7-0.2c-2.1,2,0.4,4.6,0.9,6.9c0.2,1.3,1.1,2.4,1.2,3.7c0.3,2.5,2,2.7,3.9,2.5
      c4.3-0.3,4.3-3.4,4.3-6C326.4,967.7,326.3,965.1,323.1,964z" />
        <path className="nontargetable-muscle" d="M282.5,165.7c-1.8,5.2-3.1,9.4-4.6,13.5c-0.4,1.1-1,2.3,0.8,2.6c2.9,0.4,5.9,0.8,8.8,1
      c2.6,0.1,3.1-1.2,1.9-3.5C287.2,175.1,285.1,170.9,282.5,165.7z" />
        <path className="nontargetable-muscle" d="M295.3,97.4c2.1-1.6,3.6-3.5,3.1-6c0-6.6-0.8-7.2-7-5.6c-1.1,0.3-2.3,0.4-3.4,0.8c-0.9,0.3-1.8,0.8-1.1,2.1
      c1.3,2.7,2.4,5.4,3.8,8C291.8,98.8,293.6,98.7,295.3,97.4z" />
        <path className="nontargetable-muscle" d="M337.6,181.9c2.1,0.1,2.1-1.4,1.7-2.7c-1.4-4.2-2.9-8.4-4.7-13.5c-3,6.2-5.6,11.4-8.2,16.8
      C330.4,183.6,333.9,181.7,337.6,181.9z" />
        <path className="nontargetable-muscle" d="M287.3,105c1.2-1.4,2.3-2.6,1.1-4.7c-2.2-3.8-2.5-8.7-5.8-11.2c-4.4,0-6.4,3-4.5,6.2c1.9,3.3,4.3,6.2,6.5,9.3
      C285.3,105.6,286.1,106.3,287.3,105z" />
        <path className="nontargetable-muscle" d="M323.6,97.8c1.7,0,7.5-7.3,6.7-9.3c-1.6-3.8-5.8-3.1-8.9-3.5c-3.9-0.5-1.6,3.6-2.8,5
      C318.6,93.1,321.8,97.8,323.6,97.8z" />
        <path className="nontargetable-muscle" d="M252.9,450.4c0.6,4.6,3.3,7.8,5.1,11.4c0.5,0.9,0.7,2.5,2.4,1.8c1.4-0.6,1.1-2,1-3.1
      C260.8,455.3,256.6,453,252.9,450.4z" />
        <path className="nontargetable-muscle" d="M358.3,462.8c1.8-4.1,5.1-7.6,5.6-12.5c-3.8,3-8.6,5.3-8.5,11.2c0,0.8,0.1,1.7,0.9,2.1
      C357.3,464.1,357.9,463.7,358.3,462.8z" />
        <path className="nontargetable-muscle" d="M335.8,965.1c-1.7,0-3.8,0.2-3.1,2.6c0.8,2.8,0.4,7,4.7,7.1c2.2,0.1,2-2.5,2-4.6
      C339,968.1,339.5,965.1,335.8,965.1z" />
        <path className="nontargetable-muscle" d="M281.2,965.1c-4-0.1-3.5,3.1-3.9,5.5c0.2,1.9-0.1,4.5,2.3,4.2c4.1-0.4,3.7-4.6,4.5-7.4
      C284.7,965.4,282.8,965.1,281.2,965.1z" />
        <path className="nontargetable-muscle" d="M272.1,964.1c-4.6,0-3.2,4.2-4.3,6.6c-0.6,1.3,0.9,1.4,1.8,1.3c4.1-0.2,3.5-4,4.7-6
      C274.7,963.5,273.1,964.1,272.1,964.1z" />
        <path className="nontargetable-muscle" d="M345,964c-1.1,0.3-3-0.6-2.5,1.4c0.6,2.6,0.7,5.7,4.1,6.5c0.9,0.2,3,0.6,2.4-1.1
      C348.2,968.3,349.1,964.5,345,964z" />
        <path className="nontargetable-muscle" d="M353.4,962c-1.2,1.3-3.1,1.3-3.5,2.9c-0.3,0.9,4.9,6.1,5.7,5.8c0.8-0.2,1.5-0.7,1-1.8
      C355.7,966.5,355.7,963.8,353.4,962z" />
        <path className="nontargetable-muscle" d="M263.4,962.5c-2.8,0.8-2.1,4-3.1,6c-0.6,1.2-0.1,1.8,1.2,2.2c2.1-1.4,4.3-3.2,5.2-5.6
      C267.3,963.3,264.4,962.2,263.4,962.5z" />
        <path className="nontargetable-muscle" d="M256.1,960.5c-2.1,0.9-2.1,3.4-2.9,5.3c-0.6,1.4-0.1,2,1.1,1.7c2-0.5,3.5-1.7,4.1-3.4
      C258.5,961.9,256.6,960.3,256.1,960.5z" />
        <path className="nontargetable-muscle" d="M361.1,960.2c-0.5,0.4-1,0.6-1.3,0.9c-1.6,1.4-2.1,3-0.3,4.6c1.1,0.9,2.5,2.7,3.7,1.7
      c1.5-1.3-0.1-3.1-0.7-4.6C362.2,961.9,361.6,961.1,361.1,960.2z" />
      </g>
    </g>
  </svg>
)


export default FrontView