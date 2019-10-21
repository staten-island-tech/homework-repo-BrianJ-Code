class Physics {
    constructor(distance, time, v0, vf, acceleration){ 
        this.distance = Number(distance.value);
        this.time = Number(time.value);
        this.v0 = Number(v0.value);
        this.vf = Number(vf.value);
        this.acceleration = Number(acceleration.value);
     
    }
}
class UI {
    display(solution){
        const display = document.querySelector('.display');

        let html = '<div class="solved"> <div class="distance">%Distance%</div> <div class = "time">%Time%</div> <div class="v0">%Velocity0%</div> <div class="vf">%VelocityF%</div> <div class = "acceleration">%Acceleration%</div> <div class="remove-solution">Remove Solution</div>'
        let newHtml = html.replace('%Distance%', solution.distance + "m/s");
        newHtml = newHtml.replace('%Time%', solution.time + "seconds");
        newHtml = newHtml.replace('%Velocity0%', solution.v0 + "m/s");
        newHtml = newHtml.replace('%VelocityF%', solution.vf + "m/s");
        newHtml = newHtml.replace('%Acceleration%', solution.acceleration + "m/s^2");
        document.querySelector('.display').insertAdjacentHTML('beforeend', newHtml);
    }
    clearFields(){
        document.getElementById('Distance').value = '';
        document.getElementById('Time').value = '';
        document.getElementById('Velocity0').value = '';
        document.getElementById('VelocityF').value = '';
        document.getElementById('Acceleration').value = '';
    }
    deleteAnswers(target){
        if(target.className === 'remove-solution'){
            target.parentElement.remove();
        }
    }
}

function eventListeners(){
    const form = document.querySelector('#kinematics');
    form.addEventListener('submit', formvalidation);
}
eventListeners();


function formvalidation(e){ 

    let distance = document.querySelector('#Distance');
    let time = document.querySelector('#Time');
    let v0 = document.querySelector('#Velocity0');
    let vf = document.querySelector('#VelocityF');
    let acceleration = document.querySelector('#Acceleration');

    if (distance.value !== "" && v0.value !== "" && vf.value !== ""){
        acceleration.value = ((Math.pow(vf.value, 2) - Math.pow(v0.value, 2)) / (2 * distance.value)).toFixed(2)
        time.value = (Math.abs(distance.value / ((vf.value + v0.value) / 2))).toFixed(2)
        let solution = new Physics (distance, time, v0, vf, acceleration);

        const ui = new UI();
        ui.display(solution);
        ui.clearFields();
        e.preventDefault();

    }else if(distance.value !== "" && v0.value !== "" && acceleration.value !== ""){

        vf.value = (Math.sqrt(Math.pow(v0.value, 2) + 2 * acceleration.value * distance.value)).toFixed(2)
        time.value = (Math.abs((vf.value - v0.value) / acceleration.value)).toFixed(2)
        let solution = new Physics (distance, time, v0, vf, acceleration);

        const ui = new UI();
        ui.display(solution);
        ui.clearFields();
        e.preventDefault();
        
    }else if(distance.value !== "" && v0.value !== "" && time.value !== ""){

        vf.value = (2 * (distance.value / time.value) - v0.value).toFixed(2)
        acceleration.value = ((vf.value - v0.value) / time.value).toFixed(2)
        let solution = new Physics (distance, time, v0, vf, acceleration);

        const ui = new UI();
        ui.display(solution);
        ui.clearFields();
        e.preventDefault();

    }else if(distance.value !== "" && vf.value !== "" && acceleration.value !== ""){

        v0.value = (Math.sqrt(Math.pow(vf.value, 2) - 2 * acceleration.value * distance.value)).toFixed(2)
        time.value = (Math.abs((vf.value - v0.value) / acceleration.value)).toFixed(2)
        let solution = new Physics (distance, time, v0, vf, acceleration);

        const ui = new UI();
        ui.display(solution);
        ui.clearFields();
        e.preventDefault();

    }else if(distance.value !== "" && vf.value !== "" && time.value !== ""){
        
        v0.value = (2*(distance.value / time.value) - vf.value).toFixed(2)
        acceleration.value = ((vf.value - v0.value) / time.value).toFixed(2)
        let solution = new Physics (distance, time, v0, vf, acceleration);

        const ui = new UI();
        ui.display(solution);
        ui.clearFields();
        e.preventDefault();

    }else if(distance.value !== "" && acceleration.value !== "" && time.value !== ""){

        v0.value = ((distance.value - (acceleration.value / 2) * (Math.pow(time.value, 2))) / time.value).toFixed(2)
        vf.value = (v0.value + acceleration.value * time.value).toFixed(2)
        let solution = new Physics (distance, time, v0, vf, acceleration);

        const ui = new UI();
        ui.display(solution);
        ui.clearFields();
        e.preventDefault();

    }else if(v0.value !== "" && vf.value !== "" && acceleration.value !== ""){
        
        time.value = (Math.abs((vf.value - v0.value) / acceleration.value)).toFixed(2)
        distance.value = (v0.value * time.value + 0.5 * acceleration.value * Math.pow(time.value, 2)).toFixed(2)
        let solution = new Physics (distance, time, v0, vf, acceleration);

        const ui = new UI();
        ui.display(solution);
        ui.clearFields();
        e.preventDefault();

    }else if(v0.value !== "" && vf.value !== "" && time.value !== ""){

        acceleration.value = ((vf.value - v0.value) / time.value).toFixed(2)
        distance.value = (v0.value * time.value + 0.5 * acceleration.value * Math.pow(time.value, 2)).toFixed(2)
        let solution = new Physics (distance, time, v0, vf, acceleration);

        const ui = new UI();
        ui.display(solution);
        ui.clearFields();
        e.preventDefault();

    }else if(v0.value !== "" && acceleration.value !== "" && time.value !== ""){
        
        vf.value = (v0.value + acceleration.value * time.value).toFixed(2)
        distance.value = (v0.value * time.value + 0.5 * acceleration.value * Math.pow(time.value, 2)).toFixed(2)
        let solution = new Physics (distance, time, v0, vf, acceleration);

        const ui = new UI();
        ui.display(solution);
        ui.clearFields();
        e.preventDefault();
        
    }else if(vf.value !== "" && acceleration.value !== "" && time.value !== ""){

        v0.value = (vf.value - acceleration.value * time.value).toFixed(2)
        distance.value = (v0.value * time.value + 0.5 * acceleration.value * Math.pow(time.value, 2)).toFixed(2)
        let solution = new Physics (distance, time, v0, vf, acceleration);

        const ui = new UI();
        ui.display(solution);
        ui.clearFields();
        e.preventDefault();

    }else{
        alert("The necessary fields are not complete. Please fill in at least 3 fields to calculate.");
        return false;
    }
}

document.querySelector('.display').addEventListener('click', function(e){
    const ui = new UI();
    
    ui.deleteAnswers(e.target);

    ui.clearFields();

    e.preventDefault();
});
