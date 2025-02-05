function removeMatchChars(list1, list2) {
    let i = 0;
    while (i < list1.length) {
        let index = list2.indexOf(list1[i]);
        if (index !== -1) {
            list1.splice(i, 1);
            list2.splice(index, 1);
            i = 0; 
        } else {
            i++;
        }
    }
    return list1.concat(['*'], list2);
}

function checkRelationship() {
    let name1 = document.getElementById("name1").value.toLowerCase().replace(/\s+/g, "");
    let name2 = document.getElementById("name2").value.toLowerCase().replace(/\s+/g, "");

    if (name1 === "" || name2 === "") {
        document.getElementById("result").innerText = "Please enter both names!";
        return;
    }

    let name1List = name1.split("");
    let name2List = name2.split("");

    let proceed = true;
    while (proceed) {
        let resultList = removeMatchChars(name1List, name2List);
        let starIndex = resultList.indexOf('*');
        name1List = resultList.slice(0, starIndex);
        name2List = resultList.slice(starIndex + 1);
        proceed = resultList.length !== (name1List.length + name2List.length + 1);
    }

    let count = name1List.length + name2List.length;
    let outcomes = ["Friends", "Love", "Affection", "Marriage", "Enemy", "Siblings"];

    while (outcomes.length > 1) {
        let index = (count % outcomes.length) - 1;
        if (index >= 0) {
            outcomes = outcomes.slice(index + 1).concat(outcomes.slice(0, index));
        } else {
            outcomes.pop();
        }
    }

    document.getElementById("result").innerText = "✨ Relationship Status: ✨ " + outcomes[0];
}
