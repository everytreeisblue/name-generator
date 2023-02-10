let names = [  "Emma", "Olivia", "Ava", "Isabella", "Sophia", "Mia", "Charlotte", "Amelia", "Harper", "Evelyn",  "Abigail", "Emily", "Elizabeth", "Avery", "Sofia", "Ella", "Madison", "Scarlett", "Victoria", "Aria",  "Grace", "Chloe", "Camila", "Penelope", "Riley", "Layla", "Lillian", "Natalie", "Hazel", "Aubrey",  "Brooklyn", "Ellie", "Audrey", "Claire", "Savannah", "Aaliyah", "Aurora", "Arianna", "Eleanor", "Genesis",  "Emilia", "Kennedy", "Aurora", "Adalynn", "Rylee", "Elliana", "Isabelle", "Nora", "Scarlet", "Adalyn",  "Violet", "Makayla", "Everly", "Cora", "Kaylee", "Lydia", "Aubree", "Ariah", "Eliana", "Paisley",  "Natalie", "London", "Gianna", "Evelynn", "Brielle", "Raelynn", "Jordyn", "Jocelyn", "Kimberly", "Mckenzie",  "Bailey", "Andrea", "Autumn", "Aurora", "Aurora", "Avery", "Avery", "Avery", "Avery", "Avery",  "Avery", "Avery", "Avery", "Avery", "Avery", "Avery", "Avery", "Avery", "Avery", "Avery"];
const pick_index = () => {
    let index = Math.ceil(Math.random()*100)
    if (index === 100){
        index -= 1;
    }
    return index;
    

}
console.log(names[pick_index()]);
