var linda = {
    name: "linda",
    id: 1,
    isManager: false,
    getUniqueId: function () {
        var uniqueId = linda.id + " - " + linda.name;
        if (!linda.isManager) {
            return "emp-" + uniqueId;
        }
        return uniqueId;
    }
};
console.log(linda.getUniqueId());
var pam = {
    name: "pam",
    id: 2,
    isManager: false,
    getUniqueId: function () {
        var uniqueId = pam.id + " - " + pam.name;
        if (!pam.isManager) {
            return "emp-" + uniqueId;
        }
        return uniqueId;
    }
};
console.log(pam.getUniqueId());
