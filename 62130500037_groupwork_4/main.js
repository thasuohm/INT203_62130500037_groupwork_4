const app = {
    data() {
        return {
            gallery: [
                {images: 'images/doraemon.png',name : 'Doraemon',fav: false,dnshow:false,choosed:false},
                {images: 'images/nobita.png', name : 'Nobita',fav: false,dnshow:false,choosed:false},
                {images: 'images/suneo.png',name : 'Suneo', fav: false,dnshow:false,choosed:false},
                {images: 'images/giant.png', name : 'Giant',fav: false,dnshow:false,choosed:false},
                {images: 'images/shizuka.jpg', name : 'Shizuka',fav: false,dnshow:false,choosed:false},
                {images: 'images/dekisugi.jpg', name : 'Dekisugi',fav: false,dnshow:false,choosed:false},
                ],
           schbutton:{searchicon : 'images/search-black-18dp.svg',dnshow:true},
           favicon: 'images/favorite.svg',
           favborder: 'images/favorite_border.svg'
           ,findpic:''
           ,count:[]
           ,nopic:false
           ,ind:0
        }
    },
    methods: {
       choosed(index){
       this.ind = index  ;
       this.gallery[index].choosed = true; 
       },
       close(){

        this.gallery[this.ind].choosed = false;

       }
       ,
        searchbutton(){
            this.schbutton.dnshow = false;
        },
        cancel(){
            this.schbutton.dnshow=true;
        },
        favorite(index){
            this.gallery[index].fav = !this.gallery[index].fav
        },findPicture(){ 
        var  cnt2 =0;
        for(let i = 0 ; i < this.gallery.length;i++){
           //check character from input with array if it not found it will dnshow(<<-dont show)
            if(this.gallery[i].name.toUpperCase().indexOf(this.findpic.toUpperCase()) ==-1){
                this.gallery[i].dnshow = true;
                
             // if picture dont show cnt2 will stack up (cnt2 for check count of dont show pic)
               if(this.gallery[i].dnshow == true){
                this.count.push(cnt2++)}
               

            }
            //if found dontshow it will be false
            else if(this.gallery[i].name.toUpperCase().indexOf(this.findpic.toUpperCase()) !==-1){
                this.gallery[i].dnshow=false;
            }

          }   

            //Check wa find picture mai? because if it dont show all of picture its mean no picture 
            if(this.count[this.count.length-1] == this.gallery.length-1){
                this.nopic = true;
                
             /// to clear array    
            }if(this.count.length > 6){
                this.count.splice(0,this.count.length-1)
            }
            //if it can find picture nopic(<<- yor ma jak no picture) will not show 
            else if(this.count[this.count.length-1] !== this.gallery.length-1 ||this.findpic.length <1){
            this.nopic = false;
            this.count.push(1);
            }
        findpic = '';
           
         }
        
        
        
        
        
       
       
    }
       
,

    computed: {
        countUnLike(){
            return this.gallery.filter( im => !im.fav ).length
        }, countLike(){
            return this.gallery.length-this.gallery.filter( im => !im.fav ).length
        },
        
        
        
        

    }

}
Vue.createApp(app).mount('#app')

