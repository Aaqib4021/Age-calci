class app{
    constructor(){
    this.$dayInput = document.querySelector(".day-input");
    this.$monthInput = document.querySelector(".month-input");
    this.$yearInput = document.querySelector(".year-input");
    this.$button = document.querySelector(".button-svg-actual");
    this.$requiredMessage = document.querySelector(".input-headings")
    this.$requiredMessage2 = document.querySelector(".inputs")
    this.$message=document.querySelector(".messages");
    const datsInfo = new Date();
    this.dayOfMonth= datsInfo.getDate();
    this.month = datsInfo.getMonth()+1;
    this.year = datsInfo.getFullYear();
    this.$yearOutput = document.querySelector('.year-output');
    this.$monthOutput = document.querySelector('.month-output');
    this.$dayOutput = document.querySelector('.day-output');
    this.addEventListeners()    
    }
    //?events
    addEventListeners(){
        this.$dayInput.addEventListener(('click'),event=>{
            this.getValue()
            
        })
        this.$monthInput.addEventListener(('click'),event=>{
            this.getValue()
        })
        this.$yearInput.addEventListener(('click'),event=>{
            this.getValue()
        })
        this.$button.addEventListener(('click'),event=>{
            event.preventDefault(); 
            this.getValue()
            if (!this.checkEmpty()) {
                this.checkValue();
            }
           
        })
    }

    //?methods
    getValue(){
        this.dayValue = parseInt(this.$dayInput.value, 10)|| '';
        this.monthValue = parseInt(this.$monthInput.value, 10)||'';
        this.yearValue = parseInt(this.$yearInput.value, 10)|| '';
    }
    checkEmpty(){
        // console.log(this.dayValue)
        // console.log(this.monthValue)
        // console.log(this.yearValue)  
        if(this.dayValue == "" || this.monthValue =="" || this.yearValue ==""){
                this.changeTextColor('red')
                this.displayMessage();
                return true;
        }else{
            // console.log("value is not empty")
            return false;
        }
    }
    checkValue(){
        if (typeof this.dayValue === 'number' && this.dayValue <= 31 && !isNaN(this.dayValue) &&
        typeof this.monthValue === 'number' &&this.monthValue <= 12 && !isNaN(this.monthValue) &&
        typeof this.yearValue === 'number' &&this.yearValue <= this.year && !isNaN(this.yearValue)) {
            this.calculateAge();
    } 
    else {
        this.changeTextColor('red');
        this.displayMessage();
    }
    }
    changeTextColor(color) {
        const childNodes = this.$requiredMessage.childNodes;
        const childNodes2 = this.$requiredMessage2.childNodes;

        childNodes.forEach(node => {
            if (node.nodeType === 1) { 
                node.style.color = color; 
            } else if (node.nodeType === 3) { 
                node.parentNode.style.color = color; 
            }
        });
        childNodes2.forEach(node => {
            if (node.nodeType === 1) { 
                node.style.border = '1px solid'
                node.style.borderColor = color; 
            } else if (node.nodeType === 3) { 
                node.parentNode.style.borderColor = color; 
            }
        });
    }
    displayMessage(){
        this.$message.style.display='flex'
    }
    calculateAge(){
        this.$yearOutput.value = this.year - this.yearValue;
        if(this.monthValue >= this.month){
            this.$monthOutput.value= this.monthValue - this.month ;
        }else{
            this.$monthOutput.value=  this.month - this.monthValue ;
            
        }
        if(this.dayValue >= this.dayOfMonth){
            this.$dayOutput.value = this.dayValue - this.dayOfMonth 
        }else{
            this.$dayOutput.value = this.dayOfMonth -this.dayValue 
        }
       this.showFinal();
    }
    showFinal(){
        this.$yearOutput.style.border='none';
        this.$monthOutput.style.border='none';
        this.$dayOutput.style.border='none';
        this.$dayInput.value = ""
        this.$monthInput.value = ""
        this.$yearInput.value = ""
    }
}
new app()
