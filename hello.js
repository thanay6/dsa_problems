function check(n) {
    console.log("Checking", n);
    return n;
}

switch (3) {
    case check(1):
        break;
    case check(2):
        break;
    case check(3):
        console.log("Matched");
        break;
    case check(4):
        break;
    default:
        console.log("Default");
}