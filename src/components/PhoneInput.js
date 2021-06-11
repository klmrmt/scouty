import React from "react";
function PhoneInput(){
    return (
        <div className='PhoneInput'>
        {/* //     <form >
        //         <input */}
        {/* //             className="input"
        //             type="text"
        //             name="name"
        //             placeholder="Sign up to get a job"
        //         /> */}
                <input
                    className="submit"
                    type="submit"
                    value="Subscribe to Newsletter"
                />
        {/* //     </form>
        // </div> */}

        </div>
    );
}
// import React, { Component } from 'react';
// // import the component
 
// class PhoneInput extends Component {
//   render() {
//     return (
//         <div>
//             <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css"></link>
//             <div id="mc_embed_signup">
//                 <form 
//                 action="https://gmail.us6.list-manage.com/subscribe/post?u=a3eb2a25901f07a74ad048afb&amp;id=c8554f672c" 
//                 method="post" 
//                 id="mc-embedded-subscribe-form" 
//                 name="mc-embedded-subscribe-form" 
//                 class="validate" 
//                 target="_blank" 
//                 novalidate>
//                     <div id="mc_embed_signup_scroll">
//                         <label for="mce-EMAIL">Subscribe</label>
//                         <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address"></input>
//                         <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></input></div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
//   }
// }
 
export default PhoneInput;


