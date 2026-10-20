const quantity=document.getElementById('quantity');
const cost=document.getElementById('cost');
const result=document.getElementById('result');
const currency=new Intl.NumberFormat('fr-CH',{style:'currency',currency:'CHF'});
function update(){const q=Number(quantity.value),c=Number(cost.value);if(!Number.isFinite(q)||!Number.isFinite(c)||q<0||c<0||!Number.isInteger(q)){result.textContent='Veuillez saisir un nombre entier de licences et un coût positif ou nul.';return;}const monthly=q*c;result.textContent=currency.format(monthly)+' / mois, soit '+currency.format(monthly*12)+' sur 12 mois (simulation).';}
quantity.addEventListener('input',update);cost.addEventListener('input',update);update();