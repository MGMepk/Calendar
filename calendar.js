function calculoHoras() {
  let total = document.getElementById("total").value;
  let semana = [];
  semana[0] = document.getElementById("lunes").value;
  semana[1] = document.getElementById("martes").value;
  semana[2] = document.getElementById("miercoles").value;
  semana[3] = document.getElementById("jueves").value;
  semana[4] = document.getElementById("viernes").value;
  semana[5] = document.getElementById("sabado").value;
  semana[6] = document.getElementById("domingo").value;

  let hoyEs = new Date();
  let dias = 0;
  let array = hoyEs.getDay() - 1 ;
  while (total > 0) {
    total = total - semana[array];
    dias++;
    array++;
    if (array >= 6) {
      array = 0;
    }
  }

  console.log("dias: " + dias);
}
