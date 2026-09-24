

const checkAnagram = function (str1, str2) {

    str1.split('').sort().join('');
    str2.split('').sort().join('');

    if(str1 === str2){
        return true;
    }
    return false;
}

const Group_Anagrams = function (arr) {

    

}