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