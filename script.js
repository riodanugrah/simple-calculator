//Javascript Constructor

function Calcu(){
    //Atribut
    this.display = document.querySelector('.display');


    //Method
    this.start = () =>{
        this.funClick();
        this.enter();
        this.backspace();
    }

    this.enter = () => {
        document.addEventListener('keypress', e => {
            if (e.key !== 'Enter') return;
            this.makeConta();
            });
    }

    this.backspace = () => {
        document.addEventListener('keypress', e => {
            if (e.key !== 'Backspace') return;
            this.del();
            });
    }

    this.funClick = () => {
        document.addEventListener('click', e =>{
            const el = e.target;

            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del'))this.del();
            if (el.classList.contains('btn-eq')) this.makeConta();
        });
    }
    
    this.addNumDisplay = el => this.display.value += el.innerText;

    this.clear = () => this.display.value = ' ';

    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.makeConta = () =>{
        
        try{
            let conta = this.display.value;
            conta = eval(conta);

            if (!conta){
                alert('Invalid');
                return;
            }

            this.display.value = String(conta);

        } catch (e) {
            alert('Invalid');
            return;
        }
    }

    this.display.focus();
}

const calcu = new Calcu();
calcu.start();