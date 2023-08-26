const { format, parse, add, addBusinessDays, differenceInCalendarDays } = require('date-fns');

// formata a data
const data = format(new Date(), 'dd/MMM/yyyy');
console.log(data);



// 11 de fevereiro de 2014 do formato middle-endian:
var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
console.log(result);
//=> Tue Feb 11 2014 00:00:00

// Adicione a seguinte duração a 1 de setembro de 2014, 10:19:50
const result2 = add(new Date(2014, 8, 1, 10, 19, 50), {
    years: 2,
    months: 9,
    weeks: 1,
    days: 7,
    hours: 5,
    minutes: 9,
    seconds: 30,
  })
  console.log(result2);
  //=> Qui Jun 15 2017 15:29:20

 // Adicionar 10 dias úteis a 1 de setembro de 2014: // não leva em consideração feriados
const result3 = addBusinessDays(new Date(2014, 8, 1), 10)
//=> Seg Set 15 2014 00:00:00 (dias de fim de semana ignorados)
console.log(result3);

// How many calendar days are between
// 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
const result4 = differenceInCalendarDays(
    new Date(2012, 6, 2, 0, 0),
    new Date(2011, 6, 2, 23, 0)
  )
  console.log(result4);
  //=> 366
  // How many calendar days are between
  // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
  const result5 = differenceInCalendarDays(
    new Date(2011, 6, 3, 0, 1),
    new Date(2011, 6, 2, 23, 59)
  )
  console.log(result5);
  //=> 1


  // Transform 1 September 2014 into 20 October 2015 in a single line:
const result = set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 })
//=> Tue Oct 20 2015 00:00:00

// Set 12 PM to 1 September 2014 01:23:45 to 1 September 2014 12:00:00:
const result = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 12 })
//=> Mon Sep 01 2014 12:23:45