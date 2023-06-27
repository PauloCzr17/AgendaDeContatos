// Array para armazenar os contatos
var contacts = [];

// Função para adicionar um novo contato
function addContact() {
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;

  contacts.push({ name: name, phone: phone });
  renderContacts();
  document.getElementById('name').value = '';
  document.getElementById('phone').value = '';
}

// Função para renderizar a tabela de contatos
function renderContacts() {
  var table = document.getElementById('contactTable');
  table.innerHTML = `
    <tr>
      <th>Nome</th>
      <th>Telefone</th>
      <th>Ações</th>
    </tr>
  `;

  contacts.sort((a, b) => a.name.localeCompare(b.name));

  contacts.forEach(function(contact, index) {
    var row = table.insertRow();
    var nameCell = row.insertCell();
    var phoneCell = row.insertCell();
    var actionsCell = row.insertCell();

    nameCell.innerHTML = contact.name;
    phoneCell.innerHTML = contact.phone;
    actionsCell.innerHTML = `
      <button onclick="editContact(${index})">Editar</button>
      <button onclick="deleteContact(${index})">Excluir</button>
    `;
  });
}

// Função para editar um contato
function editContact(index) {
  var newName = prompt('Digite o novo nome:');
  var newPhone = prompt('Digite o novo telefone:');

  if (newName && newPhone) {
    contacts[index].name = newName;
    contacts[index].phone = newPhone;
    renderContacts();
  }
}

// Função para excluir um contato
function deleteContact(index) {
  contacts.splice(index, 1);
  renderContacts();
}

// Evento de envio do formulário
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  addContact();
});

// Renderiza os contatos iniciais 
renderContacts();