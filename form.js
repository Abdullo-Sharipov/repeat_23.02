let temperature = 3;
let clothes
switch (temperature) {
    case 32:
    case 33:
    case 34:
    case 35:
        clothes = "Футболка и шорты"
        break;

    case 17:
    case 18:
    case 19:    
    case 20:
       clothes = "Спортивка и штаны"
       break;

    case 16:
    case 15:
    case 14:
    case 13:
        clothes = "Худи и лёгкие брюки"
        break;

    case 12:
    case 11:
    case 10:
    case 9:
        clothes = "Лёгкая куртка и брюки"
        break;

    case 8:
    case 7:
    case 6:
    case 5:
        clothes = "Толстая куртка, брюки, перчатки и кальсоны"
        break;

    case 4:
    case 3:
    case 2:
    case 1:
        clothes = "может не стоить выходить на улицу"
        break;

    default:
        clothes = "ошибочка вышла"
}

console.log(`при температуре ${temperature} нужно надеть = ${clothes}`)