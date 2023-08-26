<template>
    <div id="container">
        <nav-bar></nav-bar>
        <div id="box">
            <h2>Send your Query</h2>
            <div id="row-1">
                <div class="input-1">
                    <h4>First Name</h4>
                    <input type="text" id="first" name="first" placeholder="Don" v-model="firstName">
                </div>
                <div class="input-1">
                    <h4>Last Name</h4>
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
            <div id="btn">
                Send
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/nav-bar.vue'
export default {
    components:{NavBar},
    data(){
        return{
            firstName:'',
            lastName:'',
            email:'',
            content:''
        }
    },
    methods:{
        Process(){
            this.firstName=''
            this.lastName=''
            this.email=''
            this.content=''
            //backend call will be made here
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ingrid+Darling&family=Oxygen&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&family=Gothic+A1&family=Ingrid+Darling&family=Oxygen&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&family=Ingrid+Darling&family=Oxygen&display=swap');
#container{
    width:100vw;
    height: 100vh;
    position: absolute;
    top:0;
    left: 0;
    overflow: hidden;
    background-color: #111111;
}
#box{
    width:40vw;
    margin-left:30vw;
    margin-top:15vh;
    height:60vh;
    padding-top:5vh;
    border-radius: 27.586px;
border: 1.6px dashed var(--seconday, #F4F4F4);
background: var(--primary, #111);
}
#box h2{
    color: var(--seconday, #F4F4F4);
    font-family: Gothic A1;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 28px */
    float:left;
    margin-left:4vw;
    margin-bottom:0px;
}
#row-1{
    width:36vw;
    margin-left:2vw;
    display: grid;
    grid-template-columns: repeat(2,18vw);
}
.input-1{
    width: 18vw;
}
.input-1 h4{
    color: var(--seconday, #F4F4F4);
    font-family: Gothic A1;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
    text-transform: capitalize;
    margin-bottom:4px;
    float:left !important;
    margin-left:2.3vw;
}
.input-2 h4{
    color: var(--seconday, #F4F4F4);
    font-family: Gothic A1;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
    text-transform: capitalize;
    margin-bottom:4px;
    float:left !important;
    margin-left:.6vw;
}
.input-1 input,
.input-1 input::selection{
    border-radius: 8px;
border: 1px solid var(--extra, #E0DDD6);
background-color: transparent;
outline: none;
margin-top:10px;
height:35px;
width:12vw;
padding-left: 15px;
color: var(--extra, #E0DDD6);
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 14px */
}

.input-2{
    width:32vw;
    margin-top:1vh;
    margin-left:4vw;
}
.input-2 input,
.input-2 input::selection{
    border-radius: 8px;
border: 1px solid var(--extra, #E0DDD6);
background-color: transparent;
outline: none;
margin-top:10px;
height:40px;
width:30vw;
padding-left: 15px;
color: var(--extra, #E0DDD6);
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 14px */
}

#btn{
    border-radius: 30px;
    background: var(--brand-color-1, #BAEF58);
    width:20vw;
    height:45px;
    cursor: pointer;
    margin-left:10vw;
    margin-top:5vh;
    color: var(--primary, #111);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    /* Text single/100/Regular */
    font-family: DM Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 45px; /* 112.5% */
}

</style>