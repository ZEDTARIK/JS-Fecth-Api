async function getdata() {
    const data = await fetch('https://dummyjson.com/users');
    const records = await data.json();

    let table = '';
    records.users.forEach(user => {
        table += `<tr>
                    <td> ${user.firstName} </td>
                    <td> ${user.lastName} </td>
                    <td> ${user.email} </td>
                    <td> ${user.gender} </td>
                    <td> ${user.age} </td>
                </tr>`;
    });

    document.getElementById('tbody').innerHTML = table;
}

function onSearch() {
    var value = document.getElementById('searchInput').value;
    var table = document.getElementById('table');
    var tr = table.getElementsByTagName('tr');

    for (let index = 0; index < tr.length; index++) {
        let firstName = tr[index].getElementsByTagName('td')[0];
        let lastName = tr[index].getElementsByTagName('td')[1];
        if (firstName || lastName) {
            if (firstName.innerHTML.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                tr[index].style.display = '';
            } else {
                tr[index].style.display = 'none';
            }
        }
    }
}