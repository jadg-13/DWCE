/* calcular la edad de una persona */

function getAge(birthDate) {
    var today = new Date();
    var nowyear = today.getYear();
    var nowmonth = today.getMonth();
    var nowday = today.getDate();
    var birthyear = birthDate.getYear();
    var birthmonth = birthDate.getMonth();
    var birthday = birthDate.getDate();
    var age = nowyear - birthyear;
    if (nowmonth < birthmonth - 1) {
        age--;
    }
    if (birthmonth - 1 == nowmonth && nowday < birthday) {
        age--;
    }
    return age;
}


document.getElementById("bday").addEventListener("change", function () {
    var bday = new Date(document.getElementById("bday").value);
    var age = getAge(bday);
    document.getElementById("age").value = age;
});

document.getElementById("btnAdd").addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastname").value;
    var age = document.getElementById("age").value;

    alert("Nombre: " + name + "\nApellido: " + lastName + "\nEdad: " + age);

});