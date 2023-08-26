<template>
    <div id="container">
        <div id="left">
            <div id="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="56" viewBox="0 0 35 56" fill="none">
                    <g filter="url(#filter0_di_1_232)">
                      <path d="M29.8101 31.2136C29.8101 32.9483 28.7201 34.7522 26.4719 36.2054C24.241 37.6473 21.056 38.5953 17.45 38.5953C13.844 38.5953 10.659 37.6473 8.42812 36.2054C6.17987 34.7522 5.08996 32.9483 5.08996 31.2136C5.08996 29.4789 6.17987 27.675 8.42812 26.2218C10.659 24.7799 13.844 23.8319 17.45 23.8319C21.056 23.8319 24.241 24.7799 26.4719 26.2218C28.7201 27.675 29.8101 29.4789 29.8101 31.2136Z" stroke="#111111" stroke-width="3.43335"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.78598 36.2612C5.16024 36.7548 4.58288 37.2874 4.06007 37.8542C4.69049 38.7899 5.47179 39.6514 6.37806 40.4182C5.70356 41.2885 5.43335 42.1395 5.43335 42.8719C5.43335 44.1184 6.21626 45.709 8.44329 47.1529C10.6368 48.575 13.8723 49.5669 17.6217 49.5669C21.3711 49.5669 24.6066 48.575 26.8002 47.1529C29.0272 45.709 29.8101 44.1184 29.8101 42.8719C29.8101 42.0692 29.4855 41.1239 28.6597 40.1669C29.5156 39.4007 30.2504 38.5467 30.8401 37.624C29.9492 36.7003 28.9108 35.8722 27.7531 35.1621C31.1129 37.0198 33.2434 39.7845 33.2434 42.8719C33.2434 48.4656 26.2494 53.0002 17.6217 53.0002C8.99408 53.0002 2 48.4656 2 42.8719C2 40.3455 3.4266 38.0353 5.78598 36.2612ZM26.1976 38.226C23.9702 36.7733 21.0306 35.8336 17.5587 35.8336C13.5212 35.8336 10.2037 37.1043 7.88872 38.9749C8.06271 38.846 8.24741 38.7179 8.44329 38.5909C10.6368 37.1687 13.8723 36.1768 17.6217 36.1768C21.0414 36.1768 24.0336 37.0019 26.1976 38.226Z" fill="#111111"/>
                      <path d="M29.8099 30.8701V1" stroke="#111111" stroke-width="3.43335" stroke-linejoin="round"/>
                    </g>
                    <defs>
                      <filter id="filter0_di_1_232" x="0.553544" y="-0.136125" width="34.1364" height="55.1614" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="0.578582"/>
                        <feGaussianBlur stdDeviation="0.723228"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_232"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_232" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-1.13613"/>
                        <feGaussianBlur stdDeviation="1.13613"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_232"/>
                      </filter>
                    </defs>
                  </svg>
                  <h3>Decrackle</h3>
            </div>
            <div id="form">
                <h1>Join the Waitlist</h1>
        <div id="row-1">
            <div class="input-1">
                <h4>First Name <span id="required">*</span></h4>
                <input type="text" id="first" name="first" placeholder="Don" v-model="firstName">
            </div>
            <div class="input-1">
                <h4>Last Name <span id="required">*</span></h4>
                <input type="text" id="last" name="last" placeholder="Joe" v-model="lastName">
            </div>
           
        </div>
        <div class="input-2">
            <h4>Email</h4>
            <input type="email" id="email" name="email" placeholder="johndoe@gmail.com" v-model="email">
        </div>
        <div class="input-2">
            <h4>Content</h4>
            <input type="text" id="content" name="content" placeholder="You query...." v-model="content">
        </div>
        <div id="btn" @click="Submit">
            Send
        </div>
            </div>
        </div>
        <div id="right">
            <div id="wrapper">
                <h2>Transform Your Speech with Decrackle</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            firstName:'',
            lastName:'',
            email:'',
            content:''
        }
    },
    methods:{
        Submit(){
            // make the call here to backend
            this.firstName='',
            this.lastName='',
            this.email='',
            this.content=''
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ingrid+Darling&family=Oxygen&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&family=Gothic+A1&family=Ingrid+Darling&family=Oxygen&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&family=Ingrid+Darling&family=Oxygen&display=swap');
#container{
    width: 100vw;
    top:0;
    left:0;
    position: fixed;
    display: grid;
    grid-template-columns: repeat(2,50vw);
    height: 100vh;
    overflow: hidden;
}
#left{
width:50vw;
height: 100vh;
background: transparent;
position: relative;
}
#logo{
    margin-left:10vw;
    margin-top:5vh;
}
#logo svg{
    float: left;
}
#logo h3{
    margin-top:.95vh;
    margin-left:.5vw;
    color: var(--primary, #111);
font-family: Oxygen;
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: normal;
float: left;
}
#form{
    border-radius: 40px;
    background: var(--seconday, #F4F4F4);
    
    /* 3 */
    box-shadow: 0px 20px 80px 0px rgba(35, 35, 35, 0.35);
    width:30vw;
    margin-left:10vw;
    height:65vh;
    margin-top:20vh;
    padding-top:5vh;
}
#form h1{
    color: var(--primary, #111);
    font-family: Gothic A1;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 28px */
    float:left;
    margin-left:4vw;
}
#right{
    width:50vw;
    height: 100vh;
    background: var(--primary, #111);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
#row-1{
    width:28vw;
    margin-left:2vw;
    display: grid;
    grid-template-columns: repeat(2,14vw);
}
.input-1{
    width:14vw;
}
.input-1 h4,
.input-2 h4{
    color: var(--primary, #111);
    font-family: Gothic A1;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
    text-transform: capitalize;
    margin-bottom: 4px;
    float:left;
    margin-left:1.5vw;
}
.input-1 input,
.input-1 input::selection{
    border-radius: 8px;
    border: 1px solid #C3C3C2;
background-color: transparent;
outline: none;
margin-top:10px;
height:35px;
width:10vw;
padding-left: 15px;
color: var(--text-secondary, var(--grey, #5A5A5D));
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 14px */
}
.input-1 input::placeholder,
.input-2 input::placeholder{
    color: var(--text-secondary, var(--grey, #5a5a5d97));
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 14px */
}
#required{
    color: #E3321A;
font-family: Gothic A1;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 100%;
text-transform: capitalize;
}
.input-2{
    width:28vw;
    margin-top:1vh;
    margin-left:2vw;
}
.input-2 input,
.input-2 input::selection{
    border-radius: 8px;
    border: 1px solid #C3C3C2;
background-color: transparent;
outline: none;
margin-top:10px;
height:40px;
width:24vw;
padding-left: 15px;
color: var(--text-secondary, var(--grey, #5A5A5D));
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 14px */
}
#btn{
    border-radius: 30px;
    background: var(--brand-color-2, #004852);
width:20vw;
height:45px;
cursor: pointer;
margin-left:5vw;
margin-top:5vh;
color: var(--seconday, #F4F4F4);
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
/* Text single/100/Regular */
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 45px; /* 112.5% */
}
#wrapper{
    width:30vw;
    margin-left:10vw;
}
#wrapper h2{
    color: var(--seconday, #F4F4F4);
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Gothic A1;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: 66px; /* 183.333% */
}
</style>