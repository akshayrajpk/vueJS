<template>
        <div class="card card-main mb-4 pt-0 pb-0" ref="fileform">
            <b-row class="row-class">
                <b-col cols="2" class="left-column">
                     <div class="certificate-image">
                        <img src="./images/certificate.png"/>
                    </div>
                    <div class="letter-image">
                        <img src="./images/letterDelivery.png"/>
                    </div>
                    <div class="chat-image">
                        <img src="./images/chat.png"/>
                    </div>
                </b-col>
                <b-col class="centerFlex" cols="8">
                        <p>{{label}}</p>
                        <input id='fileDialogue' multiple ref="file" type='file' v-on:change="handleFileUpload()" hidden/>
                        <b-button class="buttonClass" v-on:click="fileUploader" variant="dark">{{buttonName}}
                            <i class="iconsminds-upload"></i>
                        </b-button>
                </b-col>
                <b-col cols="2">
                </b-col>
            </b-row>
        </div>
</template>

<script>
export default {
 props: ['buttonName','label'],
 data(){
      return {
        dragAndDropCapable: false,
        files: [],
        uploadPercentage: 0
      }
    },
    methods:{
        fileUploader(){
            document.getElementById('fileDialogue').click()
        },
        handleFileUpload(){
            let fileInput= this.$refs.file
            const selectedFiles = [...fileInput.files];
            console.log(selectedFiles);
            for( let i = 0; i < selectedFiles.length; i++ ){
                this.files.push( selectedFiles[i] );
            }
            this.submitFiles();            
        },
        determineDragAndDropCapable(){
            var div = document.createElement('div');
            return ( ( 'draggable' in div )
                || ( 'ondragstart' in div && 'ondrop' in div ) )
                && 'FormData' in window
                && 'FileReader' in window;
        },
        submitFiles(){
            //For axios send
            let formData = new FormData();

            for( var i = 0; i < this.files.length; i++ ){
                let file = this.files[i];
                formData.append('files[' + i + ']', file);
            }
        }
    },
    mounted(){
      this.dragAndDropCapable = this.determineDragAndDropCapable();
      if( this.dragAndDropCapable ){
        ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach( function( evt ) {
          this.$refs.fileform.addEventListener(evt, function(e){
            e.preventDefault();
            e.stopPropagation();
          }.bind(this), false);
        }.bind(this));

        this.$refs.fileform.addEventListener('drop', function(e){
          for( let i = 0; i < e.dataTransfer.files.length; i++ ){
            this.files.push( e.dataTransfer.files[i] );
          }
          this.submitFiles();
        }.bind(this));
      }
    },
}
</script>

<style scoped>
.row-class{
    height: 100%;
    padding: 0;
}
.centerFlex {
    display: flex;
    align-items:center;
    flex-direction: column;
    justify-content: center;
    background-image: url('./images/chatType2.png');
    background-repeat: no-repeat;
    background-position: 30% 35%;
}
.left-column{
    position: relative;
}
.letter-image{
    position: absolute;
    z-index: 9;
    top: 0;
    margin-top: 65px;
    
}
.chat-image{
    position: absolute;
    z-index: 20;
    bottom: 0;
    right: 0;
}
.card-main {
    background-repeat: no-repeat;
    background-position: right bottom;
    background-image: url('./images/cardImageBG.png');
    height: 200px;
    padding-left: 10px;
}
.card-right-arrow p{
    font-size: 30px;
}

.buttonClass{
    border-radius: 4px;
    text-align: center;
    z-index: 99;
}


@media (max-width: 510px) {
    .card-right-arrow p{
        font-size: 25px;
    }
}
</style>