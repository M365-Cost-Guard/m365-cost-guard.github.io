'use strict';
const quantity=document.getElementById('quantity');
const cost=document.getElementById('cost');
const result=document.getElementById('result');
const currency=new Intl.NumberFormat('fr-CH',{style:'currency',currency:'CHF'});
function updateCalculator(){const q=quantity.valueAsNumber,c=cost.valueAsNumber;if(!quantity.validity.valid||!cost.validity.valid||!Number.isFinite(q)||!Number.isFinite(c)||q<0||c<0||!Number.isInteger(q)){result.textContent='Saisissez un nombre entier de licences et un prix positif ou nul.';return;}const month=q*c;result.textContent=currency.format(month)+' par mois · '+currency.format(month*12)+' sur 12 mois (simulation)';}
quantity.addEventListener('input',updateCalculator);cost.addEventListener('input',updateCalculator);updateCalculator();
