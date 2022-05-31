// import React, { useEffect, useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// const Text = styled.h2`
// 	font-size: 25px;
// 	letter-spacing: 1px;
// 	text-transform: uppercase;
//     float:right;
// `;
// const Timer = () => {
//     const countUpTimer = () => {
//         ++totalSeconds;
//         var hour = Math.floor(totalSeconds / 3600);
//         var minute = Math.floor((totalSeconds - hour * 3600) / 60);
//         var seconds = totalSeconds - (hour * 3600 + minute * 60);
//         if(hour < 10)
//            hour = "0"+hour;
//         if(minute < 10)
//            minute = "0"+minute;
//         if(seconds < 10)
//            seconds = "0"+seconds;
//         if (document.getElementById("count_up_timer")){
//             document.getElementById("count_up_timer").innerHTML = hour + ":" + minute + ":" + seconds;}
//         else
//             totalSeconds = 0;
//     }

//     setInterval(countUpTimer, 1000);
//     var totalSeconds = 0;

//     useEffect(() => {
//         countUpTimer();
//     }, [])

//     return (
//         <div>
//             <Text className='timer' id="count_up_timer"/>
//         </div>
//     );
// };

// export default Timer;