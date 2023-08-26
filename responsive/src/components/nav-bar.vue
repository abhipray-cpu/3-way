<template>
    <div id="navigation">
        <div id="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="56" viewBox="0 0 35 56" fill="none">
                <g filter="url(#filter0_di_1_245)">
                  <path d="M29.8101 31.2136C29.8101 32.9483 28.7201 34.7522 26.4719 36.2054C24.241 37.6473 21.056 38.5953 17.45 38.5953C13.844 38.5953 10.659 37.6473 8.42812 36.2054C6.17987 34.7522 5.08996 32.9483 5.08996 31.2136C5.08996 29.4789 6.17987 27.675 8.42812 26.2218C10.659 24.7799 13.844 23.8319 17.45 23.8319C21.056 23.8319 24.241 24.7799 26.4719 26.2218C28.7201 27.675 29.8101 29.4789 29.8101 31.2136Z" stroke="#F4F4F4" stroke-width="3.43335"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.78598 36.2612C5.16024 36.7548 4.58288 37.2874 4.06007 37.8542C4.69049 38.7899 5.47179 39.6514 6.37806 40.4182C5.70356 41.2885 5.43335 42.1395 5.43335 42.8719C5.43335 44.1184 6.21626 45.709 8.44329 47.1529C10.6368 48.575 13.8723 49.5669 17.6217 49.5669C21.3711 49.5669 24.6066 48.575 26.8002 47.1529C29.0272 45.709 29.8101 44.1184 29.8101 42.8719C29.8101 42.0692 29.4855 41.1239 28.6597 40.1669C29.5156 39.4007 30.2504 38.5467 30.8401 37.624C29.9492 36.7003 28.9108 35.8722 27.7531 35.1621C31.1129 37.0198 33.2434 39.7845 33.2434 42.8719C33.2434 48.4656 26.2494 53.0002 17.6217 53.0002C8.99408 53.0002 2 48.4656 2 42.8719C2 40.3455 3.4266 38.0353 5.78598 36.2612ZM26.1976 38.226C23.9702 36.7733 21.0306 35.8336 17.5587 35.8336C13.5212 35.8336 10.2037 37.1043 7.88872 38.9749C8.06271 38.846 8.24741 38.7179 8.44329 38.5909C10.6368 37.1687 13.8723 36.1768 17.6217 36.1768C21.0414 36.1768 24.0336 37.0019 26.1976 38.226Z" fill="#F4F4F4"/>
                  <path d="M29.8099 30.8701V1" stroke="#F4F4F4" stroke-width="3.43335" stroke-linejoin="round"/>
                </g>
                <defs>
                  <filter id="filter0_di_1_245" x="0.553544" y="-0.136125" width="34.1363" height="55.1614" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="0.578582"/>
                    <feGaussianBlur stdDeviation="0.723228"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_245"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_245" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="-1.13613"/>
                    <feGaussianBlur stdDeviation="1.13613"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_245"/>
                  </filter>
                </defs>
              </svg>
              <h3>Decrackle</h3>
        </div>
        <div id="navbar">
            <h3>FAQs</h3>
            <h3>How to Use</h3>
            <h3>Support</h3>
            <div id="nav-btn" @click="redirect">
                <h3>Join the Waitlist</h3>
            </div>
        </div>
     
    </div>
</template>

<script>
export default {
    methods:{
        redirect(){
            this.$router.push({name:'waitlist'})
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ingrid+Darling&family=Oxygen&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&family=Ingrid+Darling&family=Oxygen&display=swap');
#navigation{
    width:100vw;
    height:10vh;
    display: grid;
    grid-template-columns: 20vw 80vw;
    }
    #logo{
        margin-left:4vw;
        margin-top:2.5vh;
    }
    #logo svg{
        float: left;
    }
    #logo h3{
        float: left;
        color: var(--seconday, #F4F4F4);
    font-family: Oxygen;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top:2vh;
    margin-left:.7vw;
    }
    #navbar{
        padding-left:40vw;
        display: flex;
        flex-direction: row;
        padding-top:3.5vh;
    }
    #navbar h3{
        color: var(--seconday, #F4F4F4);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    
    /* Text single/200/Regular */
    font-family: DM Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 100% */
    margin-left:1.5vw;
    margin-right:1.5vw;
    cursor: pointer;
    }
    #nav-btn{
    border-radius: 30px;
    background: var(--grad-1, linear-gradient(180deg, #BAEF58 0%, #79B509 100%));
    width:160px;
    height:40px;
    margin-top:0.75vh;
    margin-left:2vw;
    cursor: pointer;
    padding:0px;
    }
    #nav-btn h3{
    width:140px;
    margin-left:10px;
    margin-top:12px;
    color: var(--primary, #111);
    font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
    }
</style>