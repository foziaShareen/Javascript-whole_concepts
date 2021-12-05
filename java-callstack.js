function third() {
    console.log(" I m javascript ")
}
function second() {
    third()
}
function first() {
    second()
}
function zero() {
    first()
}
zero()