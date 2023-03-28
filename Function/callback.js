function explain_callback(name ,age ,task) {
    console.log('hello',name);
    console.log('your age',age);
    task()
}
function washHand(){
    console.log('wash hand with soap');
}
function takeShower(){
    console.log('Take shower');
}
function scrolling(){
    console.log('scrolling facebook but dont like any post')
}
explain_callback('mamun ar rashid', 25,washHand);
explain_callback('manik', 20,takeShower);
explain_callback('Hero alom',36,scrolling);