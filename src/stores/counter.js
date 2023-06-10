import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    const baseUrl = 'https://superphotoshop.uz/api';
    const navbar = ref([]);
    const headerSection = ref([]);
    const photoShopThemes = ref([]);
    const usingInfo = ref([]);
    const usingImg = ref([]);
    const bonus = ref([]);
    const bonusImg = ref([]);
    const authorAbout = ref([]);
    const authorImg = ref([]);
    const socialNetwork = ref([]);
    const pupilComenents = ref([]);
    const coursePrice = ref([]);
    const siteFooter = ref([]);

    
    //NAVBAR API

    async function getNav() {
        const res = await fetch(baseUrl + '/navbar-category');
        const data = await res.json();
        navbar.value = data.data
    }
    getNav()

    //HEADER API

    async function getHeader(){
        const res = await fetch(baseUrl + '/header-section');
        const data =  await res.json();
        headerSection.value = data
    }

    getHeader()


    //PHOTOSHOP THEMES

    async function getThemes(){
        const res = await fetch(baseUrl + '/photoshop-themes');
        const data = await res.json();
        photoShopThemes.value = data

    }
    getThemes()


    //USING

    async function getUsing(){
        const res = await fetch(baseUrl + '/use-textbook');
        const data = await res.json();
        usingInfo.value = data
    }

    getUsing()

    //USING IMAGES

    async function getUsingImg(){
        const res = await fetch(baseUrl + '/use-textbook-images');
        const data = await res.json();
        usingImg.value = data
    }
    getUsingImg()

    //BONUS
    async function getBonus(){
        const res = await fetch(baseUrl + '/bonus-course');
        const data = await res.json();
        bonus.value = data
    }
    getBonus()

    //BONUS IMAGES

    async function getBonusImg(){
            const res = await fetch(baseUrl + '/bonus-course-images');
            const data = await res.json();
            bonusImg.value = data
        }
        getBonusImg()

    
    //AUTHOR ABOUT

    async function getAuthorAbout(){
        const res = await fetch(baseUrl + '/author-about');
        const data = await res.json();
        authorAbout.value = data
    }
    getAuthorAbout()

    //AUTHOR IMAGES

    async function getAuthorImg(){
        const res = await fetch(baseUrl + '/author-images');
        const data = await res.json();
        authorImg.value = data
    }

    getAuthorImg()

    //SOCIALNETWORK

    async function getSocialNetwork(){
        const res = await fetch(baseUrl + '/social-network');
        const data = await res.json();
        socialNetwork.value = data
    }

    getSocialNetwork()


    //GETPUPILS COMMENTS
    async function getpupilsComments(){
        const res = await fetch(baseUrl + '/pupil-comments');
        const data = await res.json();
        pupilComenents.value = data
    }

    getpupilsComments()

    //COURSE PRICE
    async function getCoursePrice(){
        const res = await fetch( baseUrl + '/course-price');
        const data = await res.json();
        coursePrice.value = data
    }

    getCoursePrice()

    //FOOTER

    async function getSiteFooter(){
        const res = await fetch(baseUrl + '/footer-info');
        const data = await res.json();
        siteFooter.value = data
    }

    getSiteFooter()



    return {baseUrl,
            navbar, 
            getNav,
            headerSection,
            getHeader, 
            photoShopThemes, 
            getThemes, 
            usingInfo, 
            getUsing, 
            usingImg, 
            getUsingImg, 
            bonus, 
            getBonus,
            bonusImg,
            getBonusImg,
            authorAbout,
            getAuthorAbout,
            authorImg,
            getAuthorImg,
            socialNetwork,
            getSocialNetwork,
            pupilComenents,
            getpupilsComments,
            coursePrice,
            getCoursePrice,
            siteFooter,
            getSiteFooter,

        }
})
